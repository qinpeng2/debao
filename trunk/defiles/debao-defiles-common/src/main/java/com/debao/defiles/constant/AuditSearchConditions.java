package com.debao.defiles.constant;

public enum AuditSearchConditions {

	// 0
	FUZZY("模糊搜索"),
  // 1
  NAME("文件名称"),
	// 2
  LABEL("文件标签"),
  // 3
  CLIENTNAME("客户名称"),
  // 4
  TYPE("问题类型"),
  // 5
  CLOSED("是否闭环"),
  //6
  NUMBER("文件编号");


  private String description;

	private AuditSearchConditions(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
}
