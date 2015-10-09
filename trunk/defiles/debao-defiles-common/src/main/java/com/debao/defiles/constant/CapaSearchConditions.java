package com.debao.defiles.constant;

public enum CapaSearchConditions {

	// 0
	FUZZY("模糊搜索"),
	// 1
	DEPARTMENT("部门名称"),
	// 2
	SOURCE("CAPA来源"),
  // 3
  TYPE("问题类型"),
  // 4
  CLOSED("是否闭环"),
  // 5
	LABEL("文件标签");

	private String description;

	private CapaSearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
