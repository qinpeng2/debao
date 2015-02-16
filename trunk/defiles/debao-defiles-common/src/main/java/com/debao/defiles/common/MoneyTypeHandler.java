/**
 * 
 */
package com.debao.defiles.common;

import java.math.BigDecimal;
import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;
import org.apache.ibatis.type.MappedTypes;

/**
 * @author holly
 * 
 */
@MappedJdbcTypes(JdbcType.DECIMAL)
@MappedTypes(value = { Money.class })
public class MoneyTypeHandler extends BaseTypeHandler<Money> {

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.apache.ibatis.type.BaseTypeHandler#setNonNullParameter(java.sql.
	 * PreparedStatement, int, java.lang.Object,
	 * org.apache.ibatis.type.JdbcType)
	 */
	@Override
	public void setNonNullParameter(PreparedStatement ps, int i,
			Money parameter, JdbcType jdbcType) throws SQLException {
		ps.setBigDecimal(i, new BigDecimal(parameter.getCent()));
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.apache.ibatis.type.BaseTypeHandler#getNullableResult(java.sql.ResultSet
	 * , java.lang.String)
	 */
	@Override
	public Money getNullableResult(ResultSet rs, String columnName)
			throws SQLException {
		Money money = new Money();
		money.setCent(rs.getBigDecimal(columnName).longValue());
		return money;
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * org.apache.ibatis.type.BaseTypeHandler#getNullableResult(java.sql.ResultSet
	 * , int)
	 */
	@Override
	public Money getNullableResult(ResultSet rs, int columnIndex)
			throws SQLException {
		return new Money(rs.getBigDecimal(columnIndex));
	}

	/*
	 * (non-Javadoc)
	 * 
	 * @see org.apache.ibatis.type.BaseTypeHandler#getNullableResult(java.sql.
	 * CallableStatement, int)
	 */
	@Override
	public Money getNullableResult(CallableStatement cs, int columnIndex)
			throws SQLException {
		Money money = new Money();
		money.setCent(cs.getBigDecimal(columnIndex).longValue());
		return money;
	}

}
