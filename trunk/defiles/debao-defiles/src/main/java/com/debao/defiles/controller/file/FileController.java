package com.debao.defiles.controller.file;

import java.io.File;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.velocity.tools.generic.DateTool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.debao.defiles.common.PageListVO;
import com.debao.defiles.common.Paginator;
import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.common.util.UUIDHelper;
import com.debao.defiles.constant.FileSearchConditions;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.FileRequest;
import com.debao.defiles.request.FileSearchRequest;
import com.debao.defiles.services.category.CategoryService;
import com.debao.defiles.services.file.FileService;
import com.debao.defiles.vo.FileVO;
import com.debao.defiles.vo.UserVO;
import com.debao.defiles.vo.query.FileQueryVO;

@Controller
public class FileController {
	
	public static final String UPLOAD_FOLDER = "uploadfiles";
	
	private FileService fileService;
	
	private CategoryService categoryService;
	
	private ServletContext servletContext;
	
	private DateTool dateTool = new DateTool();
	
	@RequestMapping(value = "fileview.html", method = RequestMethod.GET)
	public String viewFile(HttpServletRequest req, ModelMap map, Integer fileid) {
		
		String permission = LogonController.permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		FileVO file = fileService.findByID(fileid);
		// normal page
		map.put("file", file);
		
		return "fileview";
		
	}
	
	@RequestMapping(value = "web/viewer.html", method = RequestMethod.GET)
	public String viewer(HttpServletRequest req, ModelMap map, Integer fileid) {
		
		String permission = LogonController.permission(req);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		return "web/viewer";
	}
	
	@RequestMapping(value = "file.html", method = RequestMethod.GET)
	public String changeFile(HttpServletRequest req, ModelMap map) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		map.put("categories", categoryService.findAll());
		
		return "file";
	}
	
	@RequestMapping(value = "editFile.html", method = RequestMethod.GET)
	public String editFile(HttpServletRequest req, ModelMap map, Integer fileid, FileSearchRequest searchReq) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		FileVO fileVO = fileService.findByID(fileid);
		
		map.put("file", fileVO);
		map.put("search", searchReq);
		map.put("categories", categoryService.findAll());
		map.put("date", dateTool);
		
		return "file";
	}
	
	@RequestMapping(value = "processFileEdit.html", method = RequestMethod.POST)
	public String processFileEdit(HttpServletRequest req, ModelMap map, FileRequest fileReq, FileSearchRequest searchReq) throws ParseException {
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		// validation
		
		String errorMsg = "";
		
		Integer categoryID = fileReq.getCategoryid();
		String fileName = fileReq.getFilename();
		String fileNumber = fileReq.getFilenumber();
		String approvedate = fileReq.getApprovedate();
		if (categoryID == null || categoryID <= 0) {
			errorMsg = "请选择分类！";
		} else if (fileName == null || fileName.isEmpty()) {
			errorMsg = "请填写文件名称";
		} else if (fileNumber == null || fileNumber.isEmpty()) {
			errorMsg = "请填写文件编号！";
		}
		
		if (!errorMsg.isEmpty()) {
			return processFileEdit(req, map, fileReq, searchReq);
		}
		
		// Find user first
		UserVO userVO = LogonController.getCurrentUser(req);
		
		if (userVO == null) {
			return null;
		}
		
		FileVO fileVO = fileService.findByID(fileReq.getFileid());
		fileVO.setCategoryid(categoryID);
		fileVO.setFilename(fileName);
		fileVO.setFilenumber(fileNumber);
		fileVO.setVersion(fileReq.getVersion());
		fileVO.setFiletype(fileReq.getFiletype());
		fileVO.setDepartment(fileReq.getDepartment());
		
		if (approvedate != null) {
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			fileVO.setApprovedate(df.parse(approvedate));
		}
		fileVO.setFilelabel(fileReq.getFilelable());
		fileVO.setFiledesc(fileReq.getFiledesc());
		fileVO.setUserid(LogonController.getCurrentUser(req).getUserid());
		fileVO.setDatestamp(Calendar.getInstance().getTime());
		fileVO.setDeleted(false);
		
		fileService.update(fileVO, userVO);
		
		return fileList(req, map, searchReq);
	}
	
	@RequestMapping(value = "processFile.html", method = RequestMethod.POST)
	public String processChangeFile(@RequestParam MultipartFile file, HttpServletRequest req, ModelMap map, FileRequest fileReq) throws ParseException {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		// validation
		
		String errorMsg = "";
		
		Integer categoryID = fileReq.getCategoryid();
		String fileName = fileReq.getFilename();
		String fileNumber = fileReq.getFilenumber();
		String approvedate = fileReq.getApprovedate();
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
			return changeFile(req, map);
		}
		
		// Find user first
		UserVO userVO = LogonController.getCurrentUser(req);
		
		if (userVO == null) {
			return null;
		}
		
		FileVO fileVO = new FileVO();
		fileVO.setCategoryid(categoryID);
		fileVO.setFilename(fileName);
		fileVO.setFilenumber(fileNumber);
		fileVO.setVersion(fileReq.getVersion());
		fileVO.setFiletype(fileReq.getFiletype());
		fileVO.setDepartment(fileReq.getDepartment());
		
		if (approvedate != null && !approvedate.isEmpty()) {
			DateFormat df = new SimpleDateFormat("yyyy-MM-dd");
			fileVO.setApprovedate(df.parse(approvedate));
		}
		fileVO.setFilelabel(fileReq.getFilelable());
		fileVO.setFiledesc(fileReq.getFiledesc());
		fileVO.setUserid(LogonController.getCurrentUser(req).getUserid());
		fileVO.setDatestamp(Calendar.getInstance().getTime());
		fileVO.setDeleted(false);
		
		// upload file first
		String originalFileName = file.getOriginalFilename();
		String suffix = originalFileName.substring(originalFileName.indexOf("."), originalFileName.length());

		if (file != null && !file.isEmpty()) {
			String filePath = UPLOAD_FOLDER + "/" + UUIDHelper.getUUIDFileName() + suffix;
			String realPath = servletContext.getRealPath("/" + filePath);
			
			if (!realPath.isEmpty()) {
				try {
					file.transferTo(new File(realPath));
					fileVO.setLocation(filePath);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		
		fileService.insert(fileVO, userVO);
		
		map.put(HtmlParams.INFO, "文件上传成功，您还可以继续上传！");
		return changeFile(req, map);
	}
	
	@RequestMapping(value = "filelist.html", method = {RequestMethod.POST, RequestMethod.GET})
	public String fileList(HttpServletRequest request, ModelMap map, FileSearchRequest searchReq) {
		
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
		
		FileQueryVO filter = new FileQueryVO();
		filter.setCategoryid(searchReq.getCategoryid());
		filter.setPaginator(paginator);
		filter.setExtrasort(extraSort);
		
		List<FileVO> files = null;
		if (searchReq.getSearchcondtion() == null || FileSearchConditions.FUZZY.ordinal() == searchReq.getSearchcondtion()) {
			filter.setKeyword(searchReq.getKeyword());
			files = fileService.fuzzyFind(filter);
			paginator.setItems(fileService.totalFuzzyFind(filter));
		} else {
			if (FileSearchConditions.NUMBER.ordinal() == searchReq.getSearchcondtion()) {
				filter.setFilenumber(searchReq.getKeyword());
			} else if (FileSearchConditions.NAME.ordinal() == searchReq.getSearchcondtion()) {
				filter.setFilename(searchReq.getKeyword());
			} else if (FileSearchConditions.LABEL.ordinal() == searchReq.getSearchcondtion()) {
				filter.setFilelabel(searchReq.getKeyword());
			}
			files = fileService.find(filter);
			paginator.setItems(fileService.totalFind(filter));
		}
		
		map.put("files", new PageListVO<FileVO>(files, paginator));
		map.put("date", dateTool);
		map.put("precondition", searchReq);
		// put keyword back
		if (searchReq.getKeyword() != null && !searchReq.getKeyword().isEmpty()) {
			map.put("keyword", searchReq.getKeyword());
		}
		// put search condition back
		if (searchReq.getSearchcondtion() != null && searchReq.getSearchcondtion() >= 0) {
			map.put("searchcondtion" + searchReq.getSearchcondtion(), "selected");
			map.put("searchcondtion", searchReq.getSearchcondtion());
		}
		
		return "filelist";
	}
	
	@RequestMapping(value = "removeFile.html", method = RequestMethod.GET)
	public String removeFile(HttpServletRequest request, ModelMap map, Integer fileid, FileSearchRequest searchReq) {
		
		String permission = LogonController.permission(request);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		fileService.delete(fileid, LogonController.getCurrentUser(request));
		
		return fileList(request, map, searchReq);
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
	public ServletContext getServletContext() {
		return servletContext;
	}

	public void setServletContext(ServletContext servletContext) {
		this.servletContext = servletContext;
	}

	public DateTool getDateTool() {
		return dateTool;
	}

	public void setDateTool(DateTool dateTool) {
		this.dateTool = dateTool;
	}

	public CategoryService getCategoryService() {
		return categoryService;
	}

	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	public FileService getFileService() {
		return fileService;
	}

	public void setFileService(FileService fileService) {
		this.fileService = fileService;
	}
	
}
