package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.FeedbackSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.BaseSearchRequest;
import com.debao.defiles.request.FeedbackRequest;
import com.debao.defiles.services.file.FeedbackService;
import com.debao.defiles.vo.FeedbackVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FeedbackQueryVO;
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
public class FeedbackController {

  public static final String UPLOAD_FOLDER = "uploadfeedback";

  private FeedbackService feedbackService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "feedback.html", method = RequestMethod.GET)
  public String changeFeedback(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "feedback";
  }

  @RequestMapping(value = "editFeedback.html", method = RequestMethod.GET)
  public String editFeedback(HttpServletRequest req, ModelMap map, Integer fileid,
                           BaseSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    FeedbackVO FeedbackVO = feedbackService.findByID(fileid);

    map.put("file", FeedbackVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "feedback";
  }

  @RequestMapping(value = "processFeedbackEdit.html", method = RequestMethod.POST)
  public String processFeedbackEdit(HttpServletRequest req, ModelMap map, FeedbackRequest feedbackReq,
                                  BaseSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = feedbackReq.getFilename();
    String fileNumber = feedbackReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    }

    if (!errorMsg.isEmpty()) {
      return processFeedbackEdit(req, map, feedbackReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    FeedbackVO feedbackVO = feedbackService.findByID(feedbackReq.getFileid());
    feedbackVO.setFilename(fileName);
    feedbackVO.setFilenumber(fileNumber);
    feedbackVO.setFiletype(feedbackReq.getFiletype());
    feedbackVO.setDepartment(feedbackReq.getDepartment());
    feedbackVO.setClosed(feedbackReq.getClosed().equals("1"));
    feedbackVO.setFilelabel(feedbackReq.getFilelable());
    feedbackVO.setFiledesc(feedbackReq.getFiledesc());
    feedbackVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // feedbackVO.setDatestamp(Calendar.getInstance().getTime());
    if (feedbackReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      feedbackVO.setDatestamp(df.parse(feedbackReq.getDatestamp()));
    }
    feedbackVO.setDeleted(false);

    feedbackService.update(feedbackVO, userVO);

    return feedbackList(req, map, searchReq);
  }

  @RequestMapping(value = "processFeedback.html", method = RequestMethod.POST)
  public String processChangeFeedback(@RequestParam MultipartFile file, HttpServletRequest req,
                                    ModelMap map, FeedbackRequest feedbackReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = feedbackReq.getFilename();
    String fileNumber = feedbackReq.getFilenumber();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (fileNumber == null || fileNumber.isEmpty()) {
      errorMsg = "请填写文件编号！";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeFeedback(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    FeedbackVO feedbackVO = new FeedbackVO();
    feedbackVO.setFilename(fileName);
    feedbackVO.setFilenumber(fileNumber);
    feedbackVO.setFiletype(feedbackReq.getFiletype());
    feedbackVO.setDepartment(feedbackReq.getDepartment());
    feedbackVO.setClosed(feedbackReq.getClosed().equals("1"));
    feedbackVO.setFilelabel(feedbackReq.getFilelable());
    feedbackVO.setFiledesc(feedbackReq.getFiledesc());
    feedbackVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    // feedbackVO.setDatestamp(Calendar.getInstance().getTime());
    if (feedbackReq.getDatestamp() != null) {
      DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
      feedbackVO.setDatestamp(df.parse(feedbackReq.getDatestamp()));
    }
    feedbackVO.setDeleted(false);

    // upload file first
    String originalFeedbackName = file.getOriginalFilename();
    String suffix =
      originalFeedbackName.substring(originalFeedbackName.indexOf("."), originalFeedbackName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          feedbackVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    feedbackService.insert(feedbackVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeFeedback(req, map);
  }

  @RequestMapping(value = "feedbacklist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String feedbackList(HttpServletRequest request, ModelMap map, BaseSearchRequest searchReq) {

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

    FeedbackQueryVO filter = new FeedbackQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<FeedbackVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || FeedbackSearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = feedbackService.fuzzyFind(filter);
      paginator.setItems(feedbackService.totalFuzzyFind(filter));
    } else {
      if (FeedbackSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilename(keyword);
      } else if (FeedbackSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (FeedbackSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFiletype(keyword);
      } else if (FeedbackSearchConditions.CLOSED.ordinal() == searchReq.getSearchcondtion()) {
        filter.setClosed(keyword.equalsIgnoreCase("是"));
      } else if (FeedbackSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilelabel(keyword);
      } else if (FeedbackSearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
        filter.setFilenumber(keyword);
      }
      files = feedbackService.find(filter);
      paginator.setItems(feedbackService.totalFind(filter));
    }

    map.put("files", new PageListVO<FeedbackVO>(files, paginator));
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

    return "feedbacklist";
  }

  @RequestMapping(value = "removeFeedback.html", method = RequestMethod.GET)
  public String removeFeedback(HttpServletRequest request, ModelMap map, Integer fileid,
                             BaseSearchRequest searchReq) {

    String permission = LogonController.permission(request);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    feedbackService.delete(fileid, LogonController.getCurrentUser(request));

    return feedbackList(request, map, searchReq);
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

  public void setfeedbackService(FeedbackService feedbackService) {
    this.feedbackService = feedbackService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }


}
