package com.debao.defiles.common;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Currency;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
/**
 * Money对象
 * @author holly
 *
 */
@XmlRootElement
public class Money implements Serializable, Comparable<Money> {

	private static final long serialVersionUID = 6009335074727417445L;

	public static final String DEFAULT_CURRENCY_CODE = "CNY";

	public static final int DEFAULT_ROUNDING_MODE = BigDecimal.ROUND_HALF_EVEN;

	private static final int[] centFactors = new int[] { 1, 10, 100, 1000 };

	private long cent;

	private Currency currency;

	public Money() {
		this(0);
	}

	/**
	 * 
	 * @param yuan 元
	 * @param cent 分
	 */
	public Money(long yuan, int cent) {
		this(yuan, cent, Currency.getInstance(DEFAULT_CURRENCY_CODE));
	}

	/**
	 * 
	 * @param yuan  元
	 * @param cent  分
	 * @param currency  货币
	 */
	public Money(long yuan, int cent, Currency currency) {
		this.currency = currency;

		this.cent = (yuan * getCentFactor()) + (cent % getCentFactor());
	}
	
	
	/**
	 * <code>
	 * Money  m = new Money("1.2") 此时为1.2元
	 * </code>
	 * @param amount 元
	 */
	public Money(String amount) {
		this(amount, Currency.getInstance(DEFAULT_CURRENCY_CODE));
	}

	/**
	 * <code>
	 * Money m = new Money("1.2") 此时为1.2元
	 * </code>
	 * @param amount
	 * @param currency
	 */
	public Money(String amount, Currency currency) {
		this(new BigDecimal(amount), currency);
	}

	public Money(String amount, Currency currency, int roundingMode) {
		this(new BigDecimal(amount), currency, roundingMode);
	}

	/**
	 * <code>
	 * Money m = new Money(1.2)  此时为1.2元
	 * </code>
	 * @param amount
	 */
	public Money(double amount) {
		this(amount, Currency.getInstance(DEFAULT_CURRENCY_CODE));
	}

	public Money(double amount, Currency currency) {
		this.currency = currency;
		this.cent = Math.round(amount * getCentFactor());
	}

	/**
	 * <code>
	 * Money m = new Money(new BigDecimal(1.2))  此时为1.2元
	 * </code>
	 * @param amount
	 */
	public Money(BigDecimal amount) {
		this(amount, Currency.getInstance(DEFAULT_CURRENCY_CODE));
	}

	public Money(BigDecimal amount, int roundingMode) {
		this(amount, Currency.getInstance(DEFAULT_CURRENCY_CODE), roundingMode);
	}

	public Money(BigDecimal amount, Currency currency) {
		this(amount, currency, DEFAULT_ROUNDING_MODE);
	}

	public Money(BigDecimal amount, Currency currency, int roundingMode) {
		this.currency = currency;
		this.cent = rounding(
				amount.movePointRight(currency.getDefaultFractionDigits()),
				roundingMode);
	}

	@XmlElement(name="amount")
	public BigDecimal getAmount() {
		return BigDecimal.valueOf(cent, currency.getDefaultFractionDigits());
	}

	public void setAmount(BigDecimal amount) {
		if (amount != null) {
			cent = rounding(amount.movePointRight(2),
					BigDecimal.ROUND_HALF_EVEN);
		}
	}

	public long getCent() {
		return cent;
	}

	public Currency getCurrency() {
		return currency;
	}

	public int getCentFactor() {
		return centFactors[currency.getDefaultFractionDigits()];
	}

	public boolean equals(Object other) {
		return (other instanceof Money) && equals((Money) other);
	}

	public boolean equals(Money other) {
		return currency.equals(other.currency) && (cent == other.cent);
	}

	public int hashCode() {
		return (int) (cent ^ (cent >>> 32));
	}

	public int compareTo(Money other) {
		assertSameCurrencyAs(other);

		if (cent < other.cent) {
			return -1;
		} else if (cent == other.cent) {
			return 0;
		} else {
			return 1;
		}
	}

	public boolean greaterThan(Money other) {
		return compareTo(other) > 0;
	}

	public Money add(Money other) {
		assertSameCurrencyAs(other);

		return newMoneyWithSameCurrency(cent + other.cent);
	}

	public Money addTo(Money other) {
		assertSameCurrencyAs(other);

		this.cent += other.cent;

		return this;
	}

	public Money subtract(Money other) {
		assertSameCurrencyAs(other);

		return newMoneyWithSameCurrency(cent - other.cent);
	}

	public Money subtractFrom(Money other) {
		assertSameCurrencyAs(other);

		this.cent -= other.cent;

		return this;
	}

	public Money multiply(long val) {
		return newMoneyWithSameCurrency(cent * val);
	}

	public Money multiplyBy(long val) {
		this.cent *= val;

		return this;
	}

	public Money multiply(double val) {
		return newMoneyWithSameCurrency(Math.round(cent * val));
	}

	public Money multiplyBy(double val) {
		this.cent = Math.round(this.cent * val);

		return this;
	}

	public Money multiply(BigDecimal val) {
		return multiply(val, DEFAULT_ROUNDING_MODE);
	}

	public Money multiplyBy(BigDecimal val) {
		return multiplyBy(val, DEFAULT_ROUNDING_MODE);
	}

	public Money multiply(BigDecimal val, int roundingMode) {
		BigDecimal newCent = BigDecimal.valueOf(cent).multiply(val);

		return newMoneyWithSameCurrency(rounding(newCent, roundingMode));
	}

	public Money multiplyBy(BigDecimal val, int roundingMode) {
		BigDecimal newCent = BigDecimal.valueOf(cent).multiply(val);

		this.cent = rounding(newCent, roundingMode);

		return this;
	}

	public Money divide(double val) {
		return newMoneyWithSameCurrency(Math.round(cent / val));
	}

	public Money divideBy(double val) {
		this.cent = Math.round(this.cent / val);

		return this;
	}

	public Money divide(BigDecimal val) {
		return divide(val, DEFAULT_ROUNDING_MODE);
	}

	public Money divide(BigDecimal val, int roundingMode) {
		BigDecimal newCent = BigDecimal.valueOf(cent).divide(val, roundingMode);

		return newMoneyWithSameCurrency(newCent.longValue());
	}

	public Money divideBy(BigDecimal val) {
		return divideBy(val, DEFAULT_ROUNDING_MODE);
	}

	public Money divideBy(BigDecimal val, int roundingMode) {
		BigDecimal newCent = BigDecimal.valueOf(cent).divide(val, roundingMode);

		this.cent = newCent.longValue();

		return this;
	}

	public Money[] allocate(int targets) {
		Money[] results = new Money[targets];

		Money lowResult = newMoneyWithSameCurrency(cent / targets);
		Money highResult = newMoneyWithSameCurrency(lowResult.cent + 1);

		int remainder = (int) cent % targets;

		for (int i = 0; i < remainder; i++) {
			results[i] = highResult;
		}

		for (int i = remainder; i < targets; i++) {
			results[i] = lowResult;
		}

		return results;
	}

	public Money[] allocate(long[] ratios) {
		Money[] results = new Money[ratios.length];

		long total = 0;

		for (int i = 0; i < ratios.length; i++) {
			total += ratios[i];
		}

		long remainder = cent;

		for (int i = 0; i < results.length; i++) {
			results[i] = newMoneyWithSameCurrency((cent * ratios[i]) / total);
			remainder -= results[i].cent;
		}

		for (int i = 0; i < remainder; i++) {
			results[i].cent++;
		}

		return results;
	}

	public String toString() {
		return getAmount().toString();
	}

	protected void assertSameCurrencyAs(Money other) {
		if (!currency.equals(other.currency)) {
			throw new IllegalArgumentException("Money math currency mismatch.");
		}
	}

	protected long rounding(BigDecimal val, int roundingMode) {
		return val.setScale(0, roundingMode).longValue();
	}

	protected Money newMoneyWithSameCurrency(long cent) {
		Money money = new Money(0, currency);

		money.cent = cent;

		return money;
	}

	public String dump() {
		String lineSeparator = System.getProperty("line.separator");

		StringBuffer sb = new StringBuffer();

		sb.append("cent = ").append(cent).append(lineSeparator);
		sb.append("currency = ").append(currency);

		return sb.toString();
	}

	public void setCent(long l) {
		cent = l;
	}
}
