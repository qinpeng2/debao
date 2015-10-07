package com.debao.defiles.vo;

import java.util.Date;

public class CategoryVO {
    private Integer categoryid;

    private String categoryname;

    private Boolean root;

    private Integer parentcategoryid;

    private Integer userid;

    private Date datestamp;

    private Boolean deleted;

    public Integer getCategoryid() {
        return categoryid;
    }

    public void setCategoryid(Integer categoryid) {
        this.categoryid = categoryid;
    }

    public String getCategoryname() {
        return categoryname;
    }

    public void setCategoryname(String categoryname) {
        this.categoryname = categoryname == null ? null : categoryname.trim();
    }

    public Boolean getRoot() {
        return root;
    }

    public void setRoot(Boolean root) {
        this.root = root;
    }

    public Integer getParentcategoryid() {
        return parentcategoryid;
    }

    public void setParentcategoryid(Integer parentcategoryid) {
        this.parentcategoryid = parentcategoryid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public Date getDatestamp() {
        return datestamp;
    }

    public void setDatestamp(Date datestamp) {
        this.datestamp = datestamp;
    }

    public Boolean getDeleted() {
        return deleted;
    }

    public void setDeleted(Boolean deleted) {
        this.deleted = deleted;
    }
}