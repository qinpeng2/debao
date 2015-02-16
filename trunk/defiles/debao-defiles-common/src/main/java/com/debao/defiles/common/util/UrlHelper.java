/**
 * 
 */
package com.debao.defiles.common.util;

/**
 * @author holly
 * 
 */
public class UrlHelper {
  private String hostName = "localhost";
  private String schema = "http";
  private String port = "8080";

  public String buildFullPath(String path) {
    return schema + "://" + hostName + ":" + port + (path.startsWith("/") ? "" : "/") + path;
  }

  public String getHostName() {
    return hostName;
  }

  public void setHostName(String hostName) {
    this.hostName = hostName;
  }

  public String getSchema() {
    return schema;
  }

  public void setSchema(String schema) {
    this.schema = schema;
  }

  public String getPort() {
    return port;
  }

  public void setPort(String port) {
    this.port = port;
  }

}
