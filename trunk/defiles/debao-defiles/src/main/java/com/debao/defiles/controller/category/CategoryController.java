
package com.debao.defiles.controller.category;

import java.util.Calendar;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.apache.velocity.tools.generic.DateTool;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.debao.defiles.common.util.HtmlParams;
import com.debao.defiles.controller.user.LogonController;
import com.debao.defiles.request.CategoryRequest;
import com.debao.defiles.services.category.CategoryService;
import com.debao.defiles.vo.CategoryVO;

@Controller
public class CategoryController {
	
	private CategoryService categoryService;
	
	private DateTool dateTool = new DateTool();
	
	@RequestMapping(value = "category.html", method = RequestMethod.GET)
	public String categoryEdit(HttpServletRequest req, ModelMap map, Integer categoryid) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		CategoryVO category = new CategoryVO();
		
		if (categoryid != null && categoryid != 0) {
			
			category = categoryService.findByID(categoryid);
			
		}
		
		map.put("category", category);
		
		return "category";
	}
	
	@RequestMapping(value = "categorylist.html", method = RequestMethod.GET)
	public String categoryList(HttpServletRequest req, ModelMap map) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		List<CategoryVO> categories = categoryService.findAll();
		map.put("categories", categories);
		map.put("date", dateTool);
		
		return "categorylist";
	}
	
	@RequestMapping(value = "addCategory.html", method = RequestMethod.POST)
	public String processAddCategory(HttpServletRequest request, ModelMap map, CategoryRequest req) {
		
		String permission = LogonController.permission(request, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		if (req.getCategoryName() == null || req.getCategoryName().isEmpty()) {
			map.put(HtmlParams.ERROR, "分类名称不能为空");
			return categoryEdit(request, map, req.getCategoryId());
		}

		if (req.getCategoryId() != null) {
			
			// 修改类型
			
			CategoryVO vo = categoryService.findByID(req.getCategoryId());
			vo.setCategoryname(req.getCategoryName());
			vo.setUserid(1);
			vo.setDatestamp(Calendar.getInstance().getTime());
			
			categoryService.update(vo);
			
		} else {
			
			// 添加类型
			
			CategoryVO vo = new CategoryVO();
			vo.setCategoryname(req.getCategoryName());
			vo.setRoot(true);
			vo.setUserid(1);
			vo.setDeleted(false);
			vo.setDatestamp(Calendar.getInstance().getTime());
			
			categoryService.insert(vo);
		}
		
		return categoryList(request, map);
	}
	
	@RequestMapping(value = "removeCategory.html", method = RequestMethod.GET)
	public String processRemoveCategory(HttpServletRequest req, ModelMap map, String categoryid) {
		
		String permission = LogonController.permission(req, true);
		if (permission != null && !permission.isEmpty()) {
			return permission;
		}
		
		if (categoryid != null && !categoryid.isEmpty()) {
			categoryService.delete(Integer.parseInt(categoryid));
		}
		
		return categoryList(req, map);
	}

	public CategoryService getCategoryService() {
		return categoryService;
	}

	public void setCategoryService(CategoryService categoryService) {
		this.categoryService = categoryService;
	}

	public DateTool getDateTool() {
		return dateTool;
	}

	public void setDateTool(DateTool dateTool) {
		this.dateTool = dateTool;
	}
	
}
