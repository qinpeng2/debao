package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.InternalSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.InternalRequest;
import com.debao.defiles.request.InternalSearchRequest;
import com.debao.defiles.services.file.InternalService;
import com.debao.defiles.vo.InternalVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.InternalQueryVO;
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
public class InternalController {

  public static final String UPLOAD_FOLDER = "uploadinternal";

  private InternalService internalService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "internal.html", method = RequestMethod.GET)
  public String changeInternal(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "internal";
  }

  @RequestMapping(value = "editInternal.html", method = RequestMethod.GET)
  public String editInternal(HttpServletRequest req, ModelMap map, Integer fileid,
                           InternalSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    InternalVO InternalVO = internalService.findByID(fileid);

    map.put("file", InternalVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "internal";
  }

  @RequestMapping(value = "processInternalEdit.html", method = RequestMethod.POST)
  public String processInternalEdit(HttpServletRequest req, ModelMap map, InternalRequest internalReq,
                                  InternalSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = internalReq.getFilename();
    String fileNumber = internalReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processInternalEdit(req, map, internalReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    InternalVO internalVO = internalService.findByID(internalReq.getFileid());
    internalVO.setFilename(fileName);
    internalVO.setFilenumber(fileNumber);
    internalVO.setFiletype(internalReq.getFiletype());
    internalVO.setDepartment(internalReq.getDepartment());
    internalVO.setClosed(internalReq.getClosed().equals("1"));
    internalVO.setFilelabel(internalReq.getFilelable());
    internalVO.setFiledesc(internalReq.getFiledesc());
    internalVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // internalVO.setDatestamp(Calendar.getInstance().getTime());
    if (internalReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      internalVO.setDatestamp(df.parse(internalReq.getDatestamp()));
    }
    internalVO.setDeleted(false);

    internalService.update(internalVO, userVO);

    return internalList(req, map, searchReq);
  }

  @RequestMapping(value = "processInternal.html", method = RequestMethod.POST)
  public String processChangeInternal(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, InternalRequest internalReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = internalReq.getFilename();
    String fileNumber = internalReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeInternal(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    InternalVO internalVO = new InternalVO();
    internalVO.setFilename(fileName);
    internalVO.setFilenumber(fileNumber);
    internalVO.setFiletype(internalReq.getFiletype());
    internalVO.setDepartment(internalReq.getDepartment());
    internalVO.setClosed(internalReq.getClosed().equals("1"));
    internalVO.setFilelabel(internalReq.getFilelable());
    internalVO.setFiledesc(internalReq.getFiledesc());
    internalVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // internalVO.setDatestamp(Calendar.getInstance().getTime());
    if (internalReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      internalVO.setDatestamp(df.parse(internalReq.getDatestamp()));
    }
    internalVO.setDeleted(false);

    // upload file first
    String originalInternalName = file.getOriginalFilename();
    String suffix =
      originalInternalName.substring(originalInternalName.indexOf("."), originalInternalName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          internalVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    internalService.insert(internalVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeInternal(req, map);
  }

  @RequestMapping(value = "internallist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String internalList(HttpServletRequest request, ModelMap map, InternalSearchRequest searchReq) {

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

    InternalQueryVO filter = new InternalQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<InternalVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || InternalSearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = internalService.fuzzyFind(filter);
      paginator.setItems(internalService.totalFuzzyFind(filter));
    } else {
      if (InternalSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (InternalSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (InternalSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (InternalSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (InternalSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (InternalSearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = internalService.find(filter);
      paginator.setItems(internalService.totalFind(filter));
    }

    map.put("files", new PageListVO<InternalVO>(files, paginator));
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

    return "internallist";
  }

  @RequestMapping(value = "removeInternal.html", method = RequestMethod.GET)
  public String removeInternal(HttpServletRequest request, ModelMap map, Integer fileid,
                             InternalSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    internalService.delete(fileid, LogonController.getCurrentUser(request));

    return internalList(request, map, searchReq);
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

  public void setinternalService(InternalService internalService) {
    this.internalService = internalService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
