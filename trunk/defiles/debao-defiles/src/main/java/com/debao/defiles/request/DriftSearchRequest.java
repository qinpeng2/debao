package com.debao.defiles.request;

public class DriftSearchRequest {
	
	private Integer currentPage;
	
	private Integer itemsPerPage;

	private String keyword;
	
	private Integer searchcondtion;
	
	private String sortnumber;
	
	private String sortdate;
	
	private String sorttype;
	

	public Integer getCurrentPage() {
		return currentPage;
	}

	public void setCurrentPage(Integer currentPage) {
		this.currentPage = currentPage;
	}

	public Integer getItemsPerPage() {
		return itemsPerPage;
	}

	public void setItemsPerPage(Integer itemsPerPage) {
		this.itemsPerPage = itemsPerPage;
	}

	public String getKeyword() {
		return keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	public Integer getSearchcondtion() {
		return searchcondtion;
	}

	public void setSearchcondtion(Integer searchcondtion) {
		this.searchcondtion = searchcondtion;
	}

	public String getSortnumber() {
		return sortnumber;
	}

	public void setSortnumber(String sortnumber) {
		this.sortnumber = sortnumber;
	}

	public String getSortdate() {
		return sortdate;
	}

	public void setSortdate(String sortdate) {
		this.sortdate = sortdate;
	}

	public String getSorttype() {
		return sorttype;
	}

	public void setSorttype(String sorttype) {
		this.sorttype = sorttype;
	}
	
}
