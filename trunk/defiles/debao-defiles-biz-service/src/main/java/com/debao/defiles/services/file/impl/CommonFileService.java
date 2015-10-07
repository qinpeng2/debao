package com.debao.defiles.services.file.impl;

/**
 * Created by qinpeng on 15/10/7.
 */
public class CommonFileService {

  /**
   * 新增文件Log中的一行描述
   *
   * @param target
   * @param name
   * @param value
   */
  protected void descSingleAdd(StringBuilder target, String name, Object value) {
    target.append(name).append("： ").append(value).append("; \n");
  }

  /**
   * 修改文件Log中的一行描述
   *
   * @param target
   * @param name
   * @param oldValue
   * @param newValue
   */
  protected void descSingleEdit(StringBuilder target, String name, Object oldValue, Object newValue) {
    target.append(name).append("： 由 ").append(oldValue).append(" 变为 ").append(newValue).append("; \n");
  }


}
