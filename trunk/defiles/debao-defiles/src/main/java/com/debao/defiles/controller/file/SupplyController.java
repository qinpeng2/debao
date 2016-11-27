package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.SupplySearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.BaseSearchRequest;
import com.debao.defiles.request.SupplyRequest;
import com.debao.defiles.services.file.SupplyService;
import com.debao.defiles.vo.SupplyVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.SupplyQueryVO;
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
public class SupplyController {

  public static final String UPLOAD_FOLDER = "uploadsupply";

  private SupplyService supplyService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "supply.html", method = RequestMethod.GET)
  public String changeSupply(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "supply";
  }

  @RequestMapping(value = "editSupply.html", method = RequestMethod.GET)
  public String editSupply(HttpServletRequest req, ModelMap map, Integer fileid,
                           BaseSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    SupplyVO SupplyVO = supplyService.findByID(fileid);

    map.put("file", SupplyVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "supply";
  }

  @RequestMapping(value = "processSupplyEdit.html", method = RequestMethod.POST)
  public String processSupplyEdit(HttpServletRequest req, ModelMap map, SupplyRequest supplyReq,
                                  BaseSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = supplyReq.getFilename();
    String fileNumber = supplyReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processSupplyEdit(req, map, supplyReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    SupplyVO supplyVO = supplyService.findByID(supplyReq.getFileid());
    supplyVO.setFilename(fileName);
    supplyVO.setFilenumber(fileNumber);
    supplyVO.setDepartment(supplyReq.getDepartment());
    supplyVO.setClosed(supplyReq.getClosed().equals("1"));
    supplyVO.setFilelabel(supplyReq.getFilelable());
    supplyVO.setFiledesc(supplyReq.getFiledesc());
    supplyVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // supplyVO.setDatestamp(Calendar.getInstance().getTime());
    if (supplyReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      supplyVO.setDatestamp(df.parse(supplyReq.getDatestamp()));
    }
    supplyVO.setDeleted(false);

    supplyService.update(supplyVO, userVO);

    return supplyList(req, map, searchReq);
  }

  @RequestMapping(value = "processSupply.html", method = RequestMethod.POST)
  public String processChangeSupply(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, SupplyRequest supplyReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = supplyReq.getFilename();
    String fileNumber = supplyReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeSupply(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    SupplyVO supplyVO = new SupplyVO();
    supplyVO.setFilename(fileName);
    supplyVO.setFilenumber(fileNumber);
    supplyVO.setDepartment(supplyReq.getDepartment());
    supplyVO.setClosed(supplyReq.getClosed().equals("1"));
    supplyVO.setFilelabel(supplyReq.getFilelable());
    supplyVO.setFiledesc(supplyReq.getFiledesc());
    supplyVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // supplyVO.setDatestamp(Calendar.getInstance().getTime());
    if (supplyReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      supplyVO.setDatestamp(df.parse(supplyReq.getDatestamp()));
    }
    supplyVO.setDeleted(false);

    // upload file first
    String originalSupplyName = file.getOriginalFilename();
    String suffix =
      originalSupplyName.substring(originalSupplyName.indexOf("."), originalSupplyName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          supplyVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    supplyService.insert(supplyVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeSupply(req, map);
  }

  @RequestMapping(value = "supplylist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String supplyList(HttpServletRequest request, ModelMap map, BaseSearchRequest searchReq) {

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

    SupplyQueryVO filter = new SupplyQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<SupplyVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || SupplySearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = supplyService.fuzzyFind(filter);
      paginator.setItems(supplyService.totalFuzzyFind(filter));
    } else {
      if (SupplySearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (SupplySearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (SupplySearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (SupplySearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (SupplySearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = supplyService.find(filter);
      paginator.setItems(supplyService.totalFind(filter));
    }

    map.put("files", new PageListVO<SupplyVO>(files, paginator));
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

    return "supplylist";
  }

  @RequestMapping(value = "removeSupply.html", method = RequestMethod.GET)
  public String removeSupply(HttpServletRequest request, ModelMap map, Integer fileid,
                             BaseSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    supplyService.delete(fileid, LogonController.getCurrentUser(request));

    return supplyList(request, map, searchReq);
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

  public void setsupplyService(SupplyService supplyService) {
    this.supplyService = supplyService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
