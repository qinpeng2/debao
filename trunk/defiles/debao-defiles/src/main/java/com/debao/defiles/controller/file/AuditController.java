package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.AuditSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.AuditRequest;
import com.debao.defiles.request.BaseSearchRequest;
import com.debao.defiles.services.file.AuditService;
import com.debao.defiles.vo.AuditVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.AuditQueryVO;
import org.apache.velocity.tools.generic.DateTool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

/**
 * Created by qinpeng on 15/9/29.
 */
@Controller
public class AuditController {

  public static final String UPLOAD_FOLDER = "uploadaudit";

  private AuditService auditService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "audit.html", method = RequestMethod.GET)
  public String changeAudit(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "audit";
  }

  @RequestMapping(value = "editAudit.html", method = RequestMethod.GET)
  public String editAudit(HttpServletRequest req, ModelMap map, Integer fileid,
                          BaseSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    AuditVO auditVO = auditService.findByID(fileid);

    map.put("file", auditVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "audit";
  }

  @RequestMapping(value = "processAuditEdit.html", method = RequestMethod.POST)
  public String processAuditEdit(HttpServletRequest req, ModelMap map, AuditRequest auditReq,
                                 BaseSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = auditReq.getFilename();
    String fileNumber = auditReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processAuditEdit(req, map, auditReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    AuditVO auditVO = auditService.findByID(auditReq.getFileid());
    auditVO.setFilename(fileName);
    auditVO.setFilenumber(fileNumber);
    auditVO.setFiletype(auditReq.getFiletype());
    auditVO.setClientname(auditReq.getClientname());
    auditVO.setClosed(auditReq.getClosed().equals("1"));
    auditVO.setFilelabel(auditReq.getFilelable());
    auditVO.setFiledesc(auditReq.getFiledesc());
    auditVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // auditVO.setDatestamp(Calendar.getInstance().getTime());
    if (auditReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      auditVO.setDatestamp(df.parse(auditReq.getDatestamp()));
    }
    auditVO.setDeleted(false);

    auditService.update(auditVO, userVO);

    return auditList(req, map, searchReq);
  }

  @RequestMapping(value = "processAudit.html", method = RequestMethod.POST)
  public String processChangeAudit(@RequestParam MultipartFile file, HttpServletRequest req,
                                   ModelMap map, AuditRequest auditReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = auditReq.getFilename();
    String fileNumber = auditReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeAudit(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    AuditVO auditVO = new AuditVO();
    auditVO.setFilename(fileName);
    auditVO.setFilenumber(fileNumber);
    auditVO.setFiletype(auditReq.getFiletype());
    auditVO.setClientname(auditReq.getClientname());
    auditVO.setClosed(auditReq.getClosed().equals("1"));
    auditVO.setFilelabel(auditReq.getFilelable());
    auditVO.setFiledesc(auditReq.getFiledesc());
    auditVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // auditVO.setDatestamp(Calendar.getInstance().getTime());
    if (auditReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      auditVO.setDatestamp(df.parse(auditReq.getDatestamp()));
    }
    auditVO.setDeleted(false);

    // upload file first
    String originalAuditName = file.getOriginalFilename();
    String suffix =
      originalAuditName.substring(originalAuditName.indexOf("."), originalAuditName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          auditVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    auditService.insert(auditVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeAudit(req, map);
  }

  @RequestMapping(value = "auditlist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String auditList(HttpServletRequest request, ModelMap map, BaseSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    map.put("sortnumber", searchReq.getSortnumber());
    map.put("sortdate", searchReq.getSortdate());
    map.put("sorttype", searchReq.getSorttype());

    // 分页
    Integer itemsPerPage = searchReq.getItemsPerPage();
    Integer currentPage = searchReq.getCurrentPage();
    Paginator paginator = new Paginator(itemsPerPage == null ? 0 : itemsPerPage);
    paginator.setPage(currentPage == null ? 0 : currentPage);

    //排序
    String extraSort = "";
    if (searchReq.getSortnumber() != null && !searchReq.getSortnumber().isEmpty()) {
      extraSort += sortLine("filenumber", searchReq.getSortnumber());
    }
    if (searchReq.getSorttype() != null && !searchReq.getSorttype().isEmpty()) {
      extraSort += sortLine("filetype", searchReq.getSorttype());
    }

    AuditQueryVO filter = new AuditQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<AuditVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || AuditSearchConditions.FUZZY.ordinal() == searchReq
                                                                                           .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = auditService.fuzzyFind(filter);
      paginator.setItems(auditService.totalFuzzyFind(filter));
    } else {
      if (AuditSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (AuditSearchConditions.CLIENTNAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClientname(keyword);
      } else if (AuditSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (AuditSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (AuditSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (AuditSearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = auditService.find(filter);
      paginator.setItems(auditService.totalFind(filter));
    }

    map.put("files", new PageListVO<AuditVO>(files, paginator));
    map.put("date", dateTool);
    map.put("precondition", searchReq);
    // put keyword back
    if (keyword != null && !keyword.isEmpty()) {
      map.put("keyword", keyword);
    }
    // put search condition back
    if (searchReq.getSearchcondtion() != null && searchReq.getSearchcondtion() >= 0) {
      map.put("searchcondtion" + searchReq.getSearchcondtion(), "selected");
      map.put("searchcondtion", searchReq.getSearchcondtion());
    }

    return "auditlist";
  }

  @RequestMapping(value = "removeAudit.html", method = RequestMethod.GET)
  public String removeAudit(HttpServletRequest request, ModelMap map, Integer fileid,
                            BaseSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    auditService.delete(fileid, LogonController.getCurrentUser(request));

    return auditList(request, map, searchReq);
  }

  private static String sortLine(String field, String flag) {

    StringBuilder extraSort = new StringBuilder();
    extraSort.append(" ").append(field).append(" ");
    if (flag.equals("d")) {
      extraSort.append("desc, ");
    } else {
      extraSort.append("asc, ");
    }

    return extraSort.toString();
  }

  /////////////////////////////////////////////////////////////////////////
  // Getter and Setter
  /////////////////////////////////////////////////////////////////////////

  public void setAuditService(AuditService auditService) {
    this.auditService = auditService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }
}
