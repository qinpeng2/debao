/**
 * 
 */
package com.debao.defiles.mvc.velocity;

import org.apache.commons.lang3.StringUtils;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.resource.loader.ClasspathResourceLoader;
import org.springframework.web.servlet.view.velocity.VelocityConfigurer;

/**
 * @author holly
 * 
 */
public class IwebVelocityConfigurer extends VelocityConfigurer {

	private static final String IWEB_MACROS_RESOURCE_LOADER_NAME = "shopkeepersMacro";

	private static final String IWEB_MACROS_RESOURCE_LOADER_CLASS = "shopkeepersMacro.resource.loader.class";

	private static final String IWEB_MACROS = "defiles.vm";

	private String macroPath;

	@Override
	protected void postProcessVelocityEngine(VelocityEngine velocityEngine) {
		super.postProcessVelocityEngine(velocityEngine);
		
		velocityEngine.setProperty(
				IWEB_MACROS_RESOURCE_LOADER_CLASS, ClasspathResourceLoader.class.getName());
		velocityEngine.addProperty(
				VelocityEngine.RESOURCE_LOADER, IWEB_MACROS_RESOURCE_LOADER_NAME);
		velocityEngine.addProperty(
				VelocityEngine.VM_LIBRARY, IWEB_MACROS);
		
		if (!StringUtils.isEmpty(macroPath)) {
			velocityEngine.addProperty(VelocityEngine.VM_LIBRARY, macroPath);
		}
	}

	public String getMacroPath() {
		return macroPath;
	}

	public void setMacroPath(String macroPath) {
		this.macroPath = macroPath;
	}

}
