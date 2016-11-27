package com.debao.defiles.constant;

public enum SupplySearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("文件名称"),
	// 2
  LABEL("文件标签"),
  // 3
  CLOSED("是否闭环"),
  // 4
  DEPARTMENT("部门名称"),
  // 5
  NUMBER("文件编号");


  private String description;

	private SupplySearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
