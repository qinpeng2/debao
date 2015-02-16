package com.debao.defiles.constant;

public enum FileOperations {
	// 0
	NONE(""),
	// 1
	ADD("用户[{0}]新增文件[{1}]. 详细信息：[{2}]."),
	// 2
	EDIT("用户[{0}]变更文件[{1}]. 详细信息：[{2}]."),
	// 3
	DELETE("用户[{0}]删除文件[{1}]."),
	// 4
	VIEW("用户[{0}]浏览文件[{1}].")
	;
	
	private String description;
	
	private FileOperations(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
