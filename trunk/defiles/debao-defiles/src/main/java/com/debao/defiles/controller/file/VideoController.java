package com.debao.defiles.controller.file;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.VideoSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.BaseSearchRequest;
import com.debao.defiles.request.VideoRequest;
import com.debao.defiles.services.file.VideoService;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.VideoVO;
import com.debao.defiles.vo.query.VideoQueryVO;
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
import java.text.ParseException;
import java.util.Calendar;
import java.util.List;

/**
 * Created by qinpeng on 15/10/5.
 */
@Controller
public class VideoController {

  public static final String UPLOAD_FOLDER = "uploadvideo";

  public static final String UPLOAD_IMG_FOLDER = "uploadvideoimg";

  private VideoService videoService;

  private ServletContext servletContext;

  private DateTool dateTool = new DateTool();

  @RequestMapping(value = "video.html", method = RequestMethod.GET)
  public String changeVideo(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    return "video";
  }

  @RequestMapping(value = "editVideo.html", method = RequestMethod.GET)
  public String editVideo(HttpServletRequest req, ModelMap map, Integer videoid,
                           BaseSearchRequest searchReq) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    VideoVO videoVO = videoService.findByID(videoid);

    map.put("file", videoVO);
    map.put("search", searchReq);
    map.put("date", dateTool);

    return "video";
  }

  @RequestMapping(value = "processVideoEdit.html", method = RequestMethod.POST)
  public String processVideoEdit(HttpServletRequest req, ModelMap map, VideoRequest videoReq,
                                  BaseSearchRequest searchReq) throws ParseException {
    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = videoReq.getViedoname();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    }

    if (!errorMsg.isEmpty()) {
      return processVideoEdit(req, map, videoReq, searchReq);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    VideoVO videoVO = videoService.findByID(videoReq.getVideoid());
    videoVO.setViedoname(fileName);
    videoVO.setVideotype(videoReq.getVideotype());
    videoVO.setDepartment(videoReq.getDepartment());
    videoVO.setVideolabel(videoReq.getVideolabel());
    videoVO.setVideodesc(videoReq.getVideodesc());
    videoVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    videoVO.setDatestamp(Calendar.getInstance().getTime());
    videoVO.setDeleted(false);

    videoService.update(videoVO, userVO);

    return videoList(req, map, searchReq);
  }

  @RequestMapping(value = "processVideo.html", method = RequestMethod.POST)
  public String processChangeVideo(@RequestParam MultipartFile file, @RequestParam MultipartFile img, HttpServletRequest req,
                                    ModelMap map, VideoRequest videoReq) throws ParseException {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    // validation

    String errorMsg = "";

    String fileName = videoReq.getViedoname();
    if (fileName == null || fileName.isEmpty()) {
      errorMsg = "请填写文件名称";
    } else if (file == null || file.isEmpty()) {
      errorMsg = "请选择上传文件！";
    }

    if (!errorMsg.isEmpty()) {
      return changeVideo(req, map);
    }

    // Find user first
    UserVO userVO = LogonController.getCurrentUser(req);

    if (userVO == null) {
      return null;
    }

    VideoVO videoVO = new VideoVO();
    videoVO.setViedoname(fileName);
    videoVO.setVideotype(videoReq.getVideotype());
    videoVO.setDepartment(videoReq.getDepartment());
    videoVO.setVideolabel(videoReq.getVideolabel());
    videoVO.setVideodesc(videoReq.getVideodesc());
    videoVO.setUserid(LogonController.getCurrentUser(req).getUserid());
    videoVO.setDatestamp(Calendar.getInstance().getTime());
    videoVO.setDeleted(false);

    // upload file first
    String originalVideoName = file.getOriginalFilename();
    String suffix =
      originalVideoName.substring(originalVideoName.indexOf("."), originalVideoName.length());

    if (file != null && !file.isEmpty()) {
      String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
      String realPath = servletContext.getRealPath("/" + filePath);

      if (!realPath.isEmpty()) {
        try {
          file.transferTo(new File(realPath));
          videoVO.setLocation(filePath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    // upload img then
    String originalImgName = img.getOriginalFilename();
    String imgSuffix =
      originalImgName.substring(originalImgName.indexOf("."), originalImgName.length());

    if (img != null && !img.isEmpty()) {
      String imgPath = UPLOAD_IMG_FOLDER + "/" + UUIDHelper.getUUIDFileName() + imgSuffix;
      String imgRealPath = servletContext.getRealPath("/" + imgPath);

      if (!imgRealPath.isEmpty()) {
        try {
          img.transferTo(new File(imgRealPath));
          videoVO.setImglocation(imgPath);
        } catch (Exception e) {
          e.printStackTrace();
        }
      }
    }

    videoService.insert(videoVO, userVO);

    map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
    return changeVideo(req, map);
  }

  @RequestMapping(value = "removeVideo.html", method = RequestMethod.GET)
  public String removeVideo(HttpServletRequest request, ModelMap map, Integer videoid,
                             BaseSearchRequest searchReq) {

    String permission = LogonController.permission(request, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    videoService.delete(videoid, LogonController.getCurrentUser(request));

    return videoList(request, map, searchReq);
  }

  @RequestMapping(value = "videolist.html", method = {RequestMethod.POST, RequestMethod.GET})
  public String videoList(HttpServletRequest request, ModelMap map, BaseSearchRequest searchReq) {

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
    Paginator paginator = new Paginator(itemsPerPage == null ? 12 : itemsPerPage);
    paginator.setPage(currentPage == null ? 0 : currentPage);

    //排序
    String extraSort = "";
    if (searchReq.getSorttype() != null && !searchReq.getSorttype().isEmpty()) {
      extraSort += sortLine("videotype", searchReq.getSorttype());
    }

    VideoQueryVO filter = new VideoQueryVO();
    filter.setPaginator(paginator);
    filter.setExtrasort(extraSort);

    List<VideoVO> files = null;
    String keyword = searchReq.getKeyword();
    if (searchReq.getSearchcondtion() == null || VideoSearchConditions.FUZZY.ordinal() == searchReq
                                                                                            .getSearchcondtion()) {
      filter.setKeyword(keyword);
      files = videoService.fuzzyFind(filter);
      paginator.setItems(videoService.totalFuzzyFind(filter));
    } else {
      if (VideoSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
        filter.setViedoname(keyword);
      } else if (VideoSearchConditions.DEPARTMENT.ordinal() == searchReq.getSearchcondtion()) {
        filter.setDepartment(keyword);
      } else if (VideoSearchConditions.TYPE.ordinal() == searchReq.getSearchcondtion()) {
        filter.setVideotype(keyword);
      } else if (VideoSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
        filter.setVideolabel(keyword);
      }
      files = videoService.find(filter);
      paginator.setItems(videoService.totalFind(filter));
    }

    map.put("files", new PageListVO<VideoVO>(files, paginator));
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

    return "videolist";
  }

  @RequestMapping(value = "playvideo.html", method = RequestMethod.GET)
  public String playVideo(HttpServletRequest req, ModelMap map, Integer videoid) {

    String permission = LogonController.permission(req);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    VideoVO videoVO = videoService.findByID(videoid);

    map.put("file", videoVO);
    map.put("date", dateTool);

    return "videoplay";
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

  public void setvideoService(VideoService videoService) {
    this.videoService = videoService;
  }

  public void setServletContext(ServletContext servletContext) {
    this.servletContext = servletContext;
  }

}
