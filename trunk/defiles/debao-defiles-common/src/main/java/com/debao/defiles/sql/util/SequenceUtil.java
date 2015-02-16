/**
 * 
 */
package com.debao.defiles.sql.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.InitializingBean;

/**
 * 序列工具类
 * 
 */
public class SequenceUtil implements InitializingBean {
	private static final int DEFAULT_LENGTH = 18;

	private static final String DEFAULT_DATE_FORMAT = "yyyyMMdd";

	private static final Log LOGGER = LogFactory.getLog(SequenceUtil.class);

	private ConcurrentHashMap<Class<?>, String> sequenceMapping = new ConcurrentHashMap<Class<?>, String>();

	private ConcurrentHashMap</* seq name */String, SequenceGenerator> cache = new ConcurrentHashMap<String, SequenceGenerator>();

	private Map</* VO class name */String, /* sequence name */String> table2sequence;

	private SequenceDAO sequenceDAO;

	public void setSequenceDAO(SequenceDAO sequenceDAO) {
		this.sequenceDAO = sequenceDAO;
	}

	private volatile boolean isReady = false;

	public Long generateKey(Class<?> vo) {
		while (!isReady) {
			try {
				Thread.sleep(10);
			} catch (InterruptedException e) {
			}
		}

		String seqName = sequenceMapping.get(vo);
		if (StringUtils.isEmpty(seqName)) {
			return 0l;
		}

		SequenceGenerator generator = cache.get(seqName);
		if (generator == null) {
			return 0l;
		}

		return formatKey(generator.getKey());
	}

	/**
	 * @param key
	 * @return
	 */
	private Long formatKey(long key) {
		StringBuilder sb = new StringBuilder(DEFAULT_LENGTH);
		SimpleDateFormat sdf = new SimpleDateFormat(DEFAULT_DATE_FORMAT);
		sb.append(sdf.format(new Date()));
		sb.append(StringUtils.leftPad(String.valueOf(key), DEFAULT_LENGTH
				- DEFAULT_DATE_FORMAT.length(), "0"));
		return Long.valueOf(sb.toString());
	}

	/**
	 * 
	 * first init from db when start up
	 */
	public Integer getCurrentValue(String seqName) {
		return sequenceDAO.getCurrentValue(seqName);
	}

	/**
	 * persist the current value to database
	 * 
	 * @param seqName
	 * @param currentValue
	 */
	public void updateDB(String seqName, Integer currentValue) {
		sequenceDAO.updateSeq(seqName, currentValue);
	}

	/**
	 * initialize the sequence in table if new sequence is not exist
	 * @param seqName TODO
	 */
	public void initDB(String seqName) {
		if(!sequenceDAO.isSeqExist(seqName)){
			sequenceDAO.addSequence(seqName, 1);
		}
	}

	public void afterPropertiesSet() throws Exception {
		if (table2sequence == null || table2sequence.isEmpty()) {
			LOGGER.warn("table2sequence is empty");
			return;
		}

		for (Iterator<Map.Entry<String, String>> iterator = table2sequence
				.entrySet().iterator(); iterator.hasNext();) {
			Map.Entry<String, String> entry = iterator.next();
			sequenceMapping
					.put(Class.forName(entry.getKey()), entry.getValue());
			initDB(entry.getValue());
			cache.putIfAbsent(entry.getValue(), new SequenceGenerator(entry.getValue(),
					null));
		}


		isReady = true;

	}

	public Map<String, String> getTable2sequence() {
		return table2sequence;
	}

	public void setTable2sequence(Map<String, String> table2sequence) {
		this.table2sequence = table2sequence;
	}

	class SequenceGenerator {

		private int DEFAULT_CACHE_SIZE = 1000;

		private AtomicInteger count = new AtomicInteger(0);

		private AtomicInteger currentValue = new AtomicInteger(0);

		private Integer maxValue = 99990000;

		private ReentrantLock updateLock;

		private Condition notEmpty;

		private String seqName;

		public SequenceGenerator(String seqName, Integer maxValue) {
			updateLock = new ReentrantLock();
			notEmpty = updateLock.newCondition();
			this.seqName = seqName;
			if (maxValue != null) {
				this.maxValue = maxValue;
			}
			currentValue.set(getCurrentValue(seqName));
			init();
		}

		public long getKey() {
			KeyPair pair = tryGet();
			while (pair.getIndex() > DEFAULT_CACHE_SIZE) {
				try {
					try {
						updateLock.lock();
						notEmpty.await();
					} finally {
						updateLock.unlock();
					}
				} catch (InterruptedException e) {
				}
				pair = tryGet();
			}

			if (pair.getIndex() == DEFAULT_CACHE_SIZE) {
				init();
			}
			notifyNotEmpty();

			return pair.getValue();
		}

		private KeyPair tryGet() {
			KeyPair pair;
			try {
				updateLock.lock();
				pair = new KeyPair(currentValue.get(), count.incrementAndGet());
			} finally {
				updateLock.unlock();
			}
			return pair;
		}

		private void notifyNotEmpty() {
			try {
				updateLock.lock();
				notEmpty.signalAll();
			} finally {
				updateLock.unlock();
			}
		}

		private void init() {
			try {
				updateLock.lock();
				count.set(0);
				// from db, and set current
				int updatedCurrent = currentValue.addAndGet(DEFAULT_CACHE_SIZE);
				if (currentValue.get() > maxValue) {
					currentValue.set(0);
					updatedCurrent = 0;
				}
				updateDB(seqName, updatedCurrent);
				notEmpty.signalAll();
			} finally {
				updateLock.unlock();
			}

		}

		class KeyPair {
			private int base;
			private int index;

			public KeyPair(int base, int index) {
				this.base = base;
				this.index = index;
			}

			public int getValue() {
				return this.base + this.index;
			}

			public int getBase() {
				return base;
			}

			public void setBase(int base) {
				this.base = base;
			}

			public int getIndex() {
				return index;
			}

			public void setIndex(int index) {
				this.index = index;
			}

		}
	}

}
