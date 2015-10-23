package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.CapaSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.CapaRequest;
import com.debao.defiles.request.CapaSearchRequest;
import com.debao.defiles.services.file.CapaService;
import com.debao.defiles.vo.CapaVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.CapaQueryVO;
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
public class CapaController {

  public static final String UPLOAD_FOLDER = "uploadcapa";

  private CapaService capaService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "capa.html", method = RequestMethod.GET)
  public String changeCapa(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "capa";
  }

  @RequestMapping(value = "editCapa.html", method = RequestMethod.GET)
  public String editCapa(HttpServletRequest req, ModelMap map, Integer fileid,
                          CapaSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    CapaVO capaVO = capaService.findByID(fileid);

    map.put("file", capaVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "capa";
  }

  @RequestMapping(value = "processCapaEdit.html", method = RequestMethod.POST)
  public String processCapaEdit(HttpServletRequest req, ModelMap map, CapaRequest capaReq,
                                 CapaSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = capaReq.getFilename();
    String fileNumber = capaReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processCapaEdit(req, map, capaReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    CapaVO capaVO = capaService.findByID(capaReq.getFileid());
    capaVO.setFilename(fileName);
    capaVO.setFilenumber(fileNumber);
    capaVO.setFiletype(capaReq.getFiletype());
    capaVO.setDepartment(capaReq.getDepartment());
    capaVO.setClosed(capaReq.getClosed().equals("1"));
    capaVO.setCapasource(capaReq.getCapasource());
    capaVO.setFilelabel(capaReq.getFilelable());
    capaVO.setFiledesc(capaReq.getFiledesc());
    capaVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // capaVO.setDatestamp(Calendar.getInstance().getTime());
    if (capaReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      capaVO.setDatestamp(df.parse(capaReq.getDatestamp()));
    }
    capaVO.setDeleted(false);

    capaService.update(capaVO, userVO);

    return capaList(req, map, searchReq);
  }

  @RequestMapping(value = "processCapa.html", method = RequestMethod.POST)
  public String processChangeCapa(@RequestParam MultipartFile file, HttpServletRequest req,
                                   ModelMap map, CapaRequest capaReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = capaReq.getFilename();
    String fileNumber = capaReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeCapa(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    CapaVO capaVO = new CapaVO();
    capaVO.setFilename(fileName);
    capaVO.setFilenumber(fileNumber);
    capaVO.setFiletype(capaReq.getFiletype());
    capaVO.setDepartment(capaReq.getDepartment());
    capaVO.setCapasource(capaReq.getCapasource());
    capaVO.setClosed(capaReq.getClosed().equals("1"));
    capaVO.setFilelabel(capaReq.getFilelable());
    capaVO.setFiledesc(capaReq.getFiledesc());
    capaVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // capaVO.setDatestamp(Calendar.getInstance().getTime());
    if (capaReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      capaVO.setDatestamp(df.parse(capaReq.getDatestamp()));
    }
    capaVO.setDeleted(false);

    // upload file first
    String originalCapaName = file.getOriginalFilename();
    String suffix =
      originalCapaName.substring(originalCapaName.indexOf("."), originalCapaName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          capaVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    capaService.insert(capaVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeCapa(req, map);
  }

  @RequestMapping(value = "capalist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String capaList(HttpServletRequest request, ModelMap map, CapaSearchRequest searchReq) {

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

    CapaQueryVO filter = new CapaQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<CapaVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || CapaSearchConditions.FUZZY.ordinal() == searchReq
                                                                                           .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = capaService.fuzzyFind(filter);
      paginator.setItems(capaService.totalFuzzyFind(filter));
    } else {
      if (CapaSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (CapaSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (CapaSearchConditions.SOURCE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setCapasource(keyword);
      } else if (CapaSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (CapaSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (CapaSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      }
      files = capaService.find(filter);
      paginator.setItems(capaService.totalFind(filter));
    }

    map.put("files", new PageListVO<CapaVO>(files, paginator));
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

    return "capalist";
  }

  @RequestMapping(value = "removeCapa.html", method = RequestMethod.GET)
  public String removeCapa(HttpServletRequest request, ModelMap map, Integer fileid,
                            CapaSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    capaService.delete(fileid, LogonController.getCurrentUser(request));

    return capaList(request, map, searchReq);
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

  public void setCapaService(CapaService capaService) {
    this.capaService = capaService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }
}
