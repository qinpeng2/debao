package com.debao.defiles.request;

public class AuditRequest {
	
	private Integer fileid;

	private String filename;
	
	private String filenumber;

	private String filetype;

	private String filelable;
	
	private String filedesc;
	
	private String location;

  private String clientname;

  private String datestamp;

  private String closed;

	public Integer getFileid() {
		return fileid;
	}

	public void setFileid(Integer fileid) {
		this.fileid = fileid;
	}

	public String getFilename() {
		return filename;
	}

	public void setFilename(String filename) {
		this.filename = filename;
	}

	public String getFilenumber() {
		return filenumber;
	}

	public void setFilenumber(String filenumber) {
		this.filenumber = filenumber;
	}

	public String getFilelable() {
		return filelable;
	}

	public void setFilelable(String filelable) {
		this.filelable = filelable;
	}

	public String getFiledesc() {
		return filedesc;
	}

	public void setFiledesc(String filedesc) {
		this.filedesc = filedesc;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getFiletype() {
		return filetype;
	}

	public void setFiletype(String filetype) {
		this.filetype = filetype;
	}

  public String getClientname() {
    return clientname;
  }

  public void setClientname(String clientname) {
    this.clientname = clientname;
  }

  public String getDatestamp() {
    return datestamp;
  }

  public void setDatestamp(String datestamp) {
    this.datestamp = datestamp;
  }

  public String getClosed() {
    return closed;
  }

  public void setClosed(String closed) {
    this.closed = closed;
  }
}
