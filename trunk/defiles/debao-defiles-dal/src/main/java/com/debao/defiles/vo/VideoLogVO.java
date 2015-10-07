package com.debao.defiles.vo;

import java.util.Date;

public class VideoLogVO {
    private Integer videologid;

    private Integer videoid;

    private Integer videooptid;

    private String changedesc;

    private Integer userid;

    private Date datestamp;

    public Integer getVideologid() {
        return videologid;
    }

    public void setVideologid(Integer videologid) {
        this.videologid = videologid;
    }

    public Integer getVideoid() {
        return videoid;
    }

    public void setVideoid(Integer videoid) {
        this.videoid = videoid;
    }

    public Integer getVideooptid() {
        return videooptid;
    }

    public void setVideooptid(Integer videooptid) {
        this.videooptid = videooptid;
    }

    public String getChangedesc() {
        return changedesc;
    }

    public void setChangedesc(String changedesc) {
        this.changedesc = changedesc == null ? null : changedesc.trim();
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
}