package com.debao.defiles.constant;

public enum CapaSearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("文件名称"),
	// 2
  LABEL("文件标签"),
  // 3
  SOURCE("CAPA来源"),
  // 4
  TYPE("问题类型"),
  // 5
  CLOSED("是否闭环"),
  // 6
  DEPARTMENT("部门名称");


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
