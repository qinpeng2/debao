/**
 * 
 */
package com.debao.defiles.common;

/**
 * @author holly
 * 
 */
public abstract class Result<T,E> {
	private T t;
	private E e;
	
	public Result(){}

	protected Result(T t,E e) {
		this.t = t;
		this.e = e;
	}

	public T getCode() {
		return t;
	}

	public void setCode(T t) {
		this.t = t;
	}
	
	public void setResult(E result){
		e = result;
	}
	
	public E getResult(){
		return e;
	}

	public abstract boolean isSuccess();

}
