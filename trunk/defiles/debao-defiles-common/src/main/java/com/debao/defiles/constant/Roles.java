package com.debao.defiles.constant;

public enum Roles {
	// 0
	UNKNOW(""),
	// 1
	STAFF("管理员"),
	// 2
	VISTOR("访客");
	
	private String description;
	
	private Roles(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
