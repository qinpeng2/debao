package com.debao.defiles.vo;

public class FileOperationVO {
    private Integer fileoptid;

    private String optname;

    public Integer getFileoptid() {
        return fileoptid;
    }

    public void setFileoptid(Integer fileoptid) {
        this.fileoptid = fileoptid;
    }

    public String getOptname() {
        return optname;
    }

    public void setOptname(String optname) {
        this.optname = optname == null ? null : optname.trim();
    }
}