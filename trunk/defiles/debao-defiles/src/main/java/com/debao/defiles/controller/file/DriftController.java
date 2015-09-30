package com.debao.defiles.controller.file;

import com.debao.defiles.controller.user.LogonController;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by qinpeng on 15/9/29.
 */
@Controller
public class DriftController {
  @RequestMapping(value = "drift.html", method = RequestMethod.GET)
  public String changeFile(HttpServletRequest req, ModelMap map) {

    String permission = LogonController.permission(req, true);
    if (permission != null && !permission.isEmpty()) {
      return permission;
    }

    //    map.put("categories", categoryService.findAll());

    return "drift";
  }
}
