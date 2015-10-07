package com.debao.defiles.vo;

import java.util.Date;

public class VideoVO {
    private Integer videoid;

    private String videotype;

    private String viedoname;

    private String videolabel;

    private String department;

    private String videodesc;

    private String imglocation;

    private String location;

    private Integer userid;

    private Date datestamp;

    private Boolean deleted;

    public Integer getVideoid() {
        return videoid;
    }

    public void setVideoid(Integer videoid) {
        this.videoid = videoid;
    }

    public String getVideotype() {
        return videotype;
    }

    public void setVideotype(String videotype) {
        this.videotype = videotype == null ? null : videotype.trim();
    }

    public String getViedoname() {
        return viedoname;
    }

    public void setViedoname(String viedoname) {
        this.viedoname = viedoname == null ? null : viedoname.trim();
    }

    public String getVideolabel() {
        return videolabel;
    }

    public void setVideolabel(String videolabel) {
        this.videolabel = videolabel == null ? null : videolabel.trim();
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department == null ? null : department.trim();
    }

    public String getVideodesc() {
        return videodesc;
    }

    public void setVideodesc(String videodesc) {
        this.videodesc = videodesc == null ? null : videodesc.trim();
    }

    public String getImglocation() {
        return imglocation;
    }

    public void setImglocation(String imglocation) {
        this.imglocation = imglocation == null ? null : imglocation.trim();
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location == null ? null : location.trim();
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