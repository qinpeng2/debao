package com.debao.defiles.common.util;

import java.util.UUID;

public class UUIDHelper {

	public static String generateUUID() {
		return UUID.randomUUID().toString();
	}
	
	public static String getUUIDFileName() {
		return generateUUID().replace("-", "");
	}
}
