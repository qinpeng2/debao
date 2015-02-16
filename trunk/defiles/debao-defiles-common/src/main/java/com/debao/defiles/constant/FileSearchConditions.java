package com.debao.defiles.constant;

public enum FileSearchConditions {
	
	// 0
	FUZZY("模糊搜索"),
	// 1
	NUMBER("文件编号"),
	// 2
	NAME("文件名称"),
	
	LABEL("文件标签");
	
	private String description;
	
	private FileSearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
