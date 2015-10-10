package com.debao.defiles.constant;

public enum VideoSearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("视频名称"),
	// 2
  LABEL("视频标签"),
  // 3
  TYPE("视频类型"),
  // 5
  DEPARTMENT("部门名称");


  private String description;

	private VideoSearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
