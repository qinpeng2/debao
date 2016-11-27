package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.QualitySearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.QualityRequest;
import com.debao.defiles.request.QualitySearchRequest;
import com.debao.defiles.services.file.QualityService;
import com.debao.defiles.vo.QualityVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.QualityQueryVO;
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
public class QualityController {

  public static final String UPLOAD_FOLDER = "uploadquality";

  private QualityService qualityService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "quality.html", method = RequestMethod.GET)
  public String changeQuality(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "quality";
  }

  @RequestMapping(value = "editQuality.html", method = RequestMethod.GET)
  public String editQuality(HttpServletRequest req, ModelMap map, Integer fileid,
                           QualitySearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    QualityVO QualityVO = qualityService.findByID(fileid);

    map.put("file", QualityVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "quality";
  }

  @RequestMapping(value = "processQualityEdit.html", method = RequestMethod.POST)
  public String processQualityEdit(HttpServletRequest req, ModelMap map, QualityRequest qualityReq,
                                  QualitySearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    Integer categoryID = qualityReq.getCategoryid();
    String fileName = qualityReq.getFilename();
    String fileNumber = qualityReq.getFilenumber();
    if (categoryID == null || categoryID <= 0) {
      errorMsg = "请选择分类！";
    } else if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processQualityEdit(req, map, qualityReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    QualityVO qualityVO = qualityService.findByID(qualityReq.getFileid());
    qualityVO.setCategoryid(categoryID);
    qualityVO.setFilename(fileName);
    qualityVO.setFilenumber(fileNumber);
    qualityVO.setDepartment(qualityReq.getDepartment());
    qualityVO.setFilelabel(qualityReq.getFilelable());
    qualityVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // qualityVO.setDatestamp(Calendar.getInstance().getTime());
    if (qualityReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      qualityVO.setDatestamp(df.parse(qualityReq.getDatestamp()));
    }
    qualityVO.setDeleted(false);

    qualityService.update(qualityVO, userVO);

    return qualityList(req, map, searchReq);
  }

  @RequestMapping(value = "processQuality.html", method = RequestMethod.POST)
  public String processChangeQuality(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, QualityRequest qualityReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    Integer categoryID = qualityReq.getCategoryid();
    String fileName = qualityReq.getFilename();
    String fileNumber = qualityReq.getFilenumber();
    if (categoryID == null || categoryID <= 0) {
      errorMsg = "请选择分类！";
    } else if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeQuality(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    QualityVO qualityVO = new QualityVO();
    qualityVO.setFilename(fileName);
    qualityVO.setCategoryid(categoryID);
    qualityVO.setFilenumber(fileNumber);
    qualityVO.setDepartment(qualityReq.getDepartment());
    qualityVO.setFilelabel(qualityReq.getFilelable());
    qualityVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // qualityVO.setDatestamp(Calendar.getInstance().getTime());
    if (qualityReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      qualityVO.setDatestamp(df.parse(qualityReq.getDatestamp()));
    }
    qualityVO.setDeleted(false);

    // upload file first
    String originalQualityName = file.getOriginalFilename();
    String suffix =
      originalQualityName.substring(originalQualityName.indexOf("."), originalQualityName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          qualityVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    qualityService.insert(qualityVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeQuality(req, map);
  }

  @RequestMapping(value = "qualitylist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String qualityList(HttpServletRequest request, ModelMap map, QualitySearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    map.put("categoryid", searchReq.getCategoryid());
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

    QualityQueryVO filter = new QualityQueryVO();
    filter.setCategoryid(searchReq.getCategoryid());
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<QualityVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || QualitySearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = qualityService.fuzzyFind(filter);
      paginator.setItems(qualityService.totalFuzzyFind(filter));
    } else {
      if (QualitySearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (QualitySearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (QualitySearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (QualitySearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = qualityService.find(filter);
      paginator.setItems(qualityService.totalFind(filter));
    }

    map.put("files", new PageListVO<QualityVO>(files, paginator));
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

    return "qualitylist";
  }

  @RequestMapping(value = "removeQuality.html", method = RequestMethod.GET)
  public String removeQuality(HttpServletRequest request, ModelMap map, Integer fileid,
                             QualitySearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    qualityService.delete(fileid, LogonController.getCurrentUser(request));

    return qualityList(request, map, searchReq);
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

  public void setqualityService(QualityService qualityService) {
    this.qualityService = qualityService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
