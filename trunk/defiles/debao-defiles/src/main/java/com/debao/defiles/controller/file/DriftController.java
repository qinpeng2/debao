package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.DriftSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.DriftRequest;
import com.debao.defiles.request.DriftSearchRequest;
import com.debao.defiles.services.file.DriftService;
import com.debao.defiles.vo.DriftVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.DriftQueryVO;
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
public class DriftController {

  public static final String UPLOAD_FOLDER = "uploaddrift";

  private DriftService driftService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "drift.html", method = RequestMethod.GET)
  public String changeDrift(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "drift";
  }

  @RequestMapping(value = "editDrift.html", method = RequestMethod.GET)
  public String editDrift(HttpServletRequest req, ModelMap map, Integer fileid,
                           DriftSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    DriftVO DriftVO = driftService.findByID(fileid);

    map.put("file", DriftVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "drift";
  }

  @RequestMapping(value = "processDriftEdit.html", method = RequestMethod.POST)
  public String processDriftEdit(HttpServletRequest req, ModelMap map, DriftRequest driftReq,
                                  DriftSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = driftReq.getFilename();
    String fileNumber = driftReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processDriftEdit(req, map, driftReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    DriftVO driftVO = driftService.findByID(driftReq.getFileid());
    driftVO.setFilename(fileName);
    driftVO.setFilenumber(fileNumber);
    driftVO.setFiletype(driftReq.getFiletype());
    driftVO.setDepartment(driftReq.getDepartment());
    driftVO.setClosed(driftReq.getClosed().equals("1"));
    driftVO.setFilelabel(driftReq.getFilelable());
    driftVO.setFiledesc(driftReq.getFiledesc());
    driftVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // driftVO.setDatestamp(Calendar.getInstance().getTime());
    if (driftReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      driftVO.setDatestamp(df.parse(driftReq.getDatestamp()));
    }
    driftVO.setDeleted(false);

    driftService.update(driftVO, userVO);

    return driftList(req, map, searchReq);
  }

  @RequestMapping(value = "processDrift.html", method = RequestMethod.POST)
  public String processChangeDrift(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, DriftRequest driftReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = driftReq.getFilename();
    String fileNumber = driftReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeDrift(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    DriftVO driftVO = new DriftVO();
    driftVO.setFilename(fileName);
    driftVO.setFilenumber(fileNumber);
    driftVO.setFiletype(driftReq.getFiletype());
    driftVO.setDepartment(driftReq.getDepartment());
    driftVO.setClosed(driftReq.getClosed().equals("1"));
    driftVO.setFilelabel(driftReq.getFilelable());
    driftVO.setFiledesc(driftReq.getFiledesc());
    driftVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // driftVO.setDatestamp(Calendar.getInstance().getTime());
    if (driftReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      driftVO.setDatestamp(df.parse(driftReq.getDatestamp()));
    }
    driftVO.setDeleted(false);

    // upload file first
    String originalDriftName = file.getOriginalFilename();
    String suffix =
      originalDriftName.substring(originalDriftName.indexOf("."), originalDriftName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          driftVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    driftService.insert(driftVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeDrift(req, map);
  }

  @RequestMapping(value = "driftlist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String driftList(HttpServletRequest request, ModelMap map, DriftSearchRequest searchReq) {

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

    DriftQueryVO filter = new DriftQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<DriftVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || DriftSearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = driftService.fuzzyFind(filter);
      paginator.setItems(driftService.totalFuzzyFind(filter));
    } else {
      if (DriftSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (DriftSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (DriftSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (DriftSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (DriftSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      }
      files = driftService.find(filter);
      paginator.setItems(driftService.totalFind(filter));
    }

    map.put("files", new PageListVO<DriftVO>(files, paginator));
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

    return "driftlist";
  }

  @RequestMapping(value = "removeDrift.html", method = RequestMethod.GET)
  public String removeDrift(HttpServletRequest request, ModelMap map, Integer fileid,
                             DriftSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    driftService.delete(fileid, LogonController.getCurrentUser(request));

    return driftList(request, map, searchReq);
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

  public void setdriftService(DriftService driftService) {
    this.driftService = driftService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
