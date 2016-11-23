package com.debao.defiles.constant;

public enum ExternalSearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("文件名称"),
	// 2
  LABEL("文件标签"),
  // 3
  TYPE("问题类型"),
  // 4
  CLOSED("是否闭环"),
  // 5
  DEPARTMENT("部门名称"),
  //6
  NUMBER("文件编号");


  private String description;

	private ExternalSearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
