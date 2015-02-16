package com.debao.defiles.common;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class PageListVO<T> implements Serializable {

	private static final long serialVersionUID = 6442603507903439271L;
	private Paginator paginator = new Paginator();
	private List<T> listVO = new ArrayList<T>();

	public PageListVO() {

	}

	public PageListVO(List<T> listVO, Paginator paginator) {
		this.setListVO(listVO);
		this.setPaginator(paginator);
	}

	public List<T> getListVO() {
		return listVO;
	}

	public void setListVO(List<T> listVO) {
		this.listVO = listVO;
	}

	public Paginator getPaginator() {
		return paginator;
	}

	public void setPaginator(Paginator paginator) {
		this.paginator = (Paginator) paginator.clone();
	}

	public void add(T vo) {
		listVO.add(vo);
	}
}
