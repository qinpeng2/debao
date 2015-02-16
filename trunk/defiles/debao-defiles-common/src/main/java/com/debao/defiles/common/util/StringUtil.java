package com.debao.defiles.common.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtil {

	public static String format(String str, Object... args) {

		if (str == null || "".equals(str)) {
			return "";
		}

		if (args.length == 0) {
			return str;
		}

		String result = str;
		Pattern p = Pattern.compile("\\{(\\d+)\\}");
		Matcher m = p.matcher(str);

		while (m.find()) {
			int index = Integer.parseInt(m.group(1));
			if (index < args.length) {
				result = result.replace(m.group(), args[index].toString());
			}
		}

		return result;
	}

}
