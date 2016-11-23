package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.ExternalSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.ExternalRequest;
import com.debao.defiles.request.ExternalSearchRequest;
import com.debao.defiles.services.file.ExternalService;
import com.debao.defiles.vo.ExternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.ExternalQueryVO;
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
public class ExternalController {

  public static final String UPLOAD_FOLDER = "uploadexternal";

  private ExternalService externalService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "external.html", method = RequestMethod.GET)
  public String changeExternal(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "external";
  }

  @RequestMapping(value = "editExternal.html", method = RequestMethod.GET)
  public String editExternal(HttpServletRequest req, ModelMap map, Integer fileid,
                           ExternalSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    ExternalVO ExternalVO = externalService.findByID(fileid);

    map.put("file", ExternalVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "external";
  }

  @RequestMapping(value = "processExternalEdit.html", method = RequestMethod.POST)
  public String processExternalEdit(HttpServletRequest req, ModelMap map, ExternalRequest externalReq,
                                  ExternalSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = externalReq.getFilename();
    String fileNumber = externalReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processExternalEdit(req, map, externalReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    ExternalVO externalVO = externalService.findByID(externalReq.getFileid());
    externalVO.setFilename(fileName);
    externalVO.setFilenumber(fileNumber);
    externalVO.setFiletype(externalReq.getFiletype());
    externalVO.setDepartment(externalReq.getDepartment());
    externalVO.setClosed(externalReq.getClosed().equals("1"));
    externalVO.setFilelabel(externalReq.getFilelable());
    externalVO.setFiledesc(externalReq.getFiledesc());
    externalVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // externalVO.setDatestamp(Calendar.getInstance().getTime());
    if (externalReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      externalVO.setDatestamp(df.parse(externalReq.getDatestamp()));
    }
    externalVO.setDeleted(false);

    externalService.update(externalVO, userVO);

    return externalList(req, map, searchReq);
  }

  @RequestMapping(value = "processExternal.html", method = RequestMethod.POST)
  public String processChangeExternal(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, ExternalRequest externalReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = externalReq.getFilename();
    String fileNumber = externalReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeExternal(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    ExternalVO externalVO = new ExternalVO();
    externalVO.setFilename(fileName);
    externalVO.setFilenumber(fileNumber);
    externalVO.setFiletype(externalReq.getFiletype());
    externalVO.setDepartment(externalReq.getDepartment());
    externalVO.setClosed(externalReq.getClosed().equals("1"));
    externalVO.setFilelabel(externalReq.getFilelable());
    externalVO.setFiledesc(externalReq.getFiledesc());
    externalVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // externalVO.setDatestamp(Calendar.getInstance().getTime());
    if (externalReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      externalVO.setDatestamp(df.parse(externalReq.getDatestamp()));
    }
    externalVO.setDeleted(false);

    // upload file first
    String originalExternalName = file.getOriginalFilename();
    String suffix =
      originalExternalName.substring(originalExternalName.indexOf("."), originalExternalName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          externalVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    externalService.insert(externalVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeExternal(req, map);
  }

  @RequestMapping(value = "externallist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String externalList(HttpServletRequest request, ModelMap map, ExternalSearchRequest searchReq) {

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
    if (searchReq.getSortdate() != null && !searchReq.getSortdate().isEmpty()) {
      extraSort += sortLine("approvedate", searchReq.getSortdate());
    }
    if (searchReq.getSorttype() != null && !searchReq.getSorttype().isEmpty()) {
      extraSort += sortLine("filetype", searchReq.getSorttype());
    }

    ExternalQueryVO filter = new ExternalQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<ExternalVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || ExternalSearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = externalService.fuzzyFind(filter);
      paginator.setItems(externalService.totalFuzzyFind(filter));
    } else {
      if (ExternalSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (ExternalSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (ExternalSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (ExternalSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (ExternalSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (ExternalSearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = externalService.find(filter);
      paginator.setItems(externalService.totalFind(filter));
    }

    map.put("files", new PageListVO<ExternalVO>(files, paginator));
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

    return "externallist";
  }

  @RequestMapping(value = "removeExternal.html", method = RequestMethod.GET)
  public String removeExternal(HttpServletRequest request, ModelMap map, Integer fileid,
                             ExternalSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    externalService.delete(fileid, LogonController.getCurrentUser(request));

    return externalList(request, map, searchReq);
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

  public void setexternalService(ExternalService externalService) {
    this.externalService = externalService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
