/**
 * 
 */
package com.debao.defiles.sql.util;

public interface SequenceDAO {

	public int addSequence(String seqName, int steps);

	public int getCurrentValue(String seqName);

	public boolean isSeqExist(String seqName);
	
	public Integer updateSeq(String seqName,Integer newValue);
}
