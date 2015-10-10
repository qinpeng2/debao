package com.debao.defiles.request;

public class VideoRequest {
	
	private Integer videoid;

	private String viedoname;

	private String videotype;
	
	private String department;

	private String videolabel;
	
	private String videodesc;
	
	private String location;

  private String imglocation;

  public Integer getVideoid() {
    return videoid;
  }

  public void setVideoid(Integer videoid) {
    this.videoid = videoid;
  }

  public String getViedoname() {
    return viedoname;
  }

  public void setViedoname(String viedoname) {
    this.viedoname = viedoname;
  }

  public String getVideotype() {
    return videotype;
  }

  public void setVideotype(String videotype) {
    this.videotype = videotype;
  }

  public String getDepartment() {
    return department;
  }

  public void setDepartment(String department) {
    this.department = department;
  }

  public String getVideolabel() {
    return videolabel;
  }

  public void setVideolabel(String videolabel) {
    this.videolabel = videolabel;
  }

  public String getVideodesc() {
    return videodesc;
  }

  public void setVideodesc(String videodesc) {
    this.videodesc = videodesc;
  }

  public String getLocation() {
    return location;
  }

  public void setLocation(String location) {
    this.location = location;
  }

  public String getImglocation() {
    return imglocation;
  }

  public void setImglocation(String imglocation) {
    this.imglocation = imglocation;
  }
}
