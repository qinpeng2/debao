package com.debao.defiles.constant;

public enum QualitySearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("文件名称"),
	// 2
  LABEL("文件标签"),
  // 3
  DEPARTMENT("部门名称"),
  // 4
  NUMBER("文件编号");


  private String description;

	private QualitySearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
