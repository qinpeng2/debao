/**
 * 复选框的全选或全不选
 * flag为false表示全不选
 * flag为true表示全选
 */
function selectAll(flag){
  var checkboxNO = myForm.checkboxNO;
  if(checkboxNO != null){
    if(checkboxNO.length != null){
      for(var i = 0; i < checkboxNO.length; i++){
        checkboxNO[i].checked = flag;
      }
    } else {
      checkboxNO.checked = flag;
    }
  }
}

/**
 * 根据当前复选框的状态确定选择方式
 */
function selectCheck(obj){
  if(obj.checked == false){
    selectAll(false);
  } else {
    selectAll(true);
  }
}

/**
 * 去除首尾空格
 */
function trim(str){
  var len = str.length;
  var st = 0;
  while ((st < len) && (str.charCodeAt(st) <= 32))  st++;
  while ((st < len) && (str.charCodeAt(len-1) <= 32)) len--;
  return ((st > 0) || (len < str.length)) ? str.substring(st, len) : str;
}

//判断是否为>0整数
function isInteger(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("请输入非负整数!");
    object.select();
    return false;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入非负整数!");
      object.select();
      return false;
    }
  }
  return true;
}

//判断是否为>0整数
function isInteger2(object){
  object.value=trim(object.value);
  if(object.value==""){
    return true;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入非负整数!");
      object.select();
      return false;
    }
  }
  return true;
}

//只显示不强制获得焦点
function isIntegerNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
    //object.select();
    return true;
  }
  if(object.value.substring(0,1)=="0" && object.value.length > 1){
    alert("请输入非负整数!");
    //object.select();
    return false;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入非负整数!");
      //object.focus();
      return false;
    }
  }
  return true;
}

//判断是否为正整数
function isPositiveInteger(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("请输入正整数!");
    object.select();
    return false;
  }
  if(object.value.substring(0,1)=="0"){
    alert("请输入正整数!");
    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入正整数!");
      object.select();
      return false;
    }
  }
  return true;
}

//判断是否为正整数
function isPositiveIntegerNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
//    object.select();
    return true;
  }
  if(object.value.substring(0,1)=="0"){
    alert("请输入正整数!");
//    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入正整数!");
//      object.select();
      return false;
    }
  }
  return true;
}

//判断是否为正整数
function isPositiveIntNoBlankNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("请输入正整数!");
//    object.select();
    return false;
  }
  if(object.value.substring(0,1)=="0"){
    alert("请输入正整数!");
//    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入正整数!");
//      object.select();
      return false;
    }
  }
  return true;
}

//判断是否为正整数
function isPositiveIntMayBlank(object){
  object.value=trim(object.value);
  if(object.value==""){
    return true;
  }
  if(object.value.substring(0,1)=="0"){
    alert("请输入正整数!");
    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("请输入正整数!");
      object.select();
      return false;
    }
  }
  return true;
}
//换背景色
//存放当前TR对应的记录的ID
var vId = null;
var oldclassName = null;
var cunObj = null;
function changeBgColor(tempi){
  if(cunObj != null){
    cunObj.className=oldclassName;
  }
  oldclassName=tempi.className;
  tempi.className="TD4";
  cunObj=tempi;
}

function changeBgColor(tempi, id){
  vId = id;
  if(cunObj != null){
    cunObj.className=oldclassName;
  }
  oldclassName=tempi.className;
  tempi.className="TD4";
  cunObj=tempi;
}

//选中所有
function selAll(){
  try{
  var checkBox = myForm.del;
  var checkAll = myForm.delAll;
  if(checkAll.checked==true){
    for(i=0;i<checkBox.length;i++)checkBox[i].checked=true;
  }else{
    for(i=0;i<checkBox.length;i++)checkBox[i].checked=false;
  }
  if(checkBox.length==null){
  	if(checkAll.checked==true)checkBox.checked=true;
  	if(checkAll.checked==false)checkBox.checked=false;
  }
  }catch(e){}
}

function selAll2(){
  try{
  var checkBox = myForm.id;
  var checkAll = myForm.idAll;
  if(checkAll.checked==true){
    for(i=0;i<checkBox.length;i++)checkBox[i].checked=true;
  }else{
    for(i=0;i<checkBox.length;i++)checkBox[i].checked=false;
  }
  if(checkBox.length==null){
  	if(checkAll.checked==true)checkBox.checked=true;
  	if(checkAll.checked==false)checkBox.checked=false;
  }
  }catch(e){}
}
//验证是否选中
function isSel(){
  try{
    var checkBox = myForm.del;

    if(checkBox.length==null){
      if(checkBox.checked==true){
        return true;
      }else if(checkBox.checked==false){
        alert("请选择删除项!");
        return false;
      }
    }else{
      for(i=0;i<checkBox.length;i++){
        if (checkBox[i].checked==true){
          return true;
        }
      }
      alert("请选择删除项!");
      return false;
    }
  }catch(e){
    return false;
  }
}

//确认删除
function confirmDel(){
  if(isSel()){
    if(confirm("确实要删除吗?")){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//正实数
//是返回true,否则返回false
function isPosFloat(str) {
    str = str.trim();
    var re = /^(0\.\d*[1-9]{1}\d*|([1-9]{1}(\d*)(\.\d+)?))$/;
    return re.test(str);
}

//非负实数(正实数和0)
//是返回true,否则返回false
function isPosFloat_0(str) {
    str = str.trim();
    var re = /^(0|0\.\d*|([1-9]{1}(\d*)(\.\d+)?))$/;
    return re.test(str);
}

//判断是否为正实数(只能有数字字符和'.')
function isNumber(obj){
  obj.value = trim(obj.value);
  if(obj.value == "") return;
  if(obj.value <= 0){
	    obj.select();
		alert("请输入大于零的数字！");
        return false;
  }
  var flag = 0;
  for(var i = 0; i < obj.value.length; i++){
    if(obj.value.charAt(i)=="."){
      if(flag++ == 0){    //只能有一个小数点
        continue;
      } else {
        obj.select();
        alert("请输入大于零的数字！");
        return false;     //多于一个小数点,则不是正实数
      }
    } else if(obj.value.charAt(i)<"0"){
      obj.select();
      alert("请输入大于零的数字！");
      return false;
    } else if(obj.value.charAt(i)>"9") {
      obj.select();
      alert("请输入大于零的数字！");
      return false;
    }
  }
  return true;
}

//判断是否为正实数(只能有数字字符和'.')
//不重新获得焦点
function isNumberNoFocus(obj){
  obj.value = trim(obj.value);
  if(obj.value == "") return true;
  if(obj.value <= 0){
    alert("请输入大于零的数字！");
    return false;
  }
  var flag = 0;
  for(var i = 0; i < obj.value.length; i++){
    if(obj.value.charAt(i)=="."){
      if(flag++ == 0){    //只能有一个小数点
        continue;
      } else {
        alert("请输入大于零的数字！");
        return false;     //多于一个小数点,则不是正实数
      }
    } else if(obj.value.charAt(i)<"0"){
      alert("请输入大于零的数字！");
      return false;
    } else if(obj.value.charAt(i)>"9") {
      alert("请输入大于零的数字！");
      return false;
    }
  }
  return true;
}

//IsFloat函数判断一个字符串是否由数字(int or long or float)组成
function IsFloat(str)
{
  flag_Dec = 0
  if((str.charAt(0) < '0' || str.charAt(0) > '9' ) &&  str.charAt(0) != "-"){
	  return false;
  }
  for(ilen=1;ilen<str.length;ilen++)
  {
    if(str.charAt(ilen) == '.')
    {
       flag_Dec++;
	   if(flag_Dec > 1)
          return false;
       else
          continue;
    }
    if(str.charAt(ilen) < '0' || str.charAt(ilen) > '9' )
    {
       return false;
    }
  }
  return true;
}

//输入的值是否为空,为空则返回true,否则返回false;
function is_NullVal(obj){
  if(trim(obj.value)==""){
    return true;
  } else {
    return false;
  }
}

//输入的数字不能大于50
function is_Bigger(obj){
  if(parseInt(trim(obj.value)) <= 50){
    return true;
  } else {
    alert("请输入不大于50的正整数!");
    obj.select();
    return false;
  }
}

//检查是否为合法的E-Mail格式
function isEmail(str){
  var r, re;
  var s = str.value;
  re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // 创建正则表达式模式。
  r = s.match(re);   // 尝试去匹配搜索字符串。
  if(r == null){
    alert("请输入合法的e-mail地址格式!");
    str.select();
    return false;
  } else {
    return true;
  }
}


//检查日期格式是否正确
function checkDateFormat(str){
  var tomatch=/^\d{4}年(0[1-9]|1[0-2])月(0[1-9]|[1-2]\d|3[0-1])日$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}


//检查日期格式是否正确
function checkDateYearMonthFormat(str){
  var tomatch=/^\d{4}年(0[1-9]|1[0-2])月$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//生产指令编号格式
//格式为：当月第几条指令-两位月份-两位年份。\n例如：01-01-05
function checkDictateNoFormat(str){
  var tomatch=/^(0[1-9]|[1-9]\d)-(0[1-9]|1[0-2])-\d{2}$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//生产指令号格式
//格式为：当年第几条指令-两位年份。\n例如：0001-05
function checkDirectNoFormat(str){
  var tomatch=/^\d{4}-\d{2}$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    if(trim(str).substring(0,4) == "0000"){
      return false;
    } else {
      return true;
    }
  }
}

//验证装箱方式的格式
function checkBoxMode(str){
  var tomatch = /^(\(?)[1-9]{1}(\d*)(支\/排×)[1-9]{1}(\d*)排(\)?)$/;
  if(str.indexOf('+') != -1){
	tomatch = /^(\(?)[1-9]{1}(\d*)(支\/排×)[1-9]{1}(\d*)(排\+)[1-9]{1}(\d*)(支\/排×)[1-9]{1}(\d*)排(\)?)$/;
  }
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//检验文本域输入的字符数是否超过允许的个数
//obj为文本域对象
//len为文本域允许的长度
function checkTextLen(obj,len){
  var templen =obj.value.length;
  if(templen > len){
    alert("您输入了"+templen+"个字符,超过最大数"+len+"个!");
    obj.focus();
  }
}

//使用javascript导出成word
//纵向显示
function OpenWord(){
  var flag = 1;
  try{
    var oWord = new ActiveXObject("Word.Application");
  }catch(e){
    flag = 2;
    alert("请改变IE浏览器的安全设置!将'对没有标记为安全的ActiveX控件进行初始化和脚本运行'设为'启用'。");
  }
  if(flag == 1){
    exportLayer.style.border=0;
    oWord.Application.Visible = true;
    var mydoc=oWord.Documents.Add('',0,1);
    myRange =mydoc.Range(0,1);//指定文件编辑位置
    var sel=document.body.createTextRange();
    sel.select();
    document.execCommand('Copy');
    sel.moveEnd('character');
    myRange.Paste();
    oWord.Selection.Font.Size=10;
    document.execCommand('unselect');
    //设置文档为页面视图
    oWord.ActiveWindow.ActivePane.View.Type= 3;
  }
}

//使用javascript导出成word
//横向显示
function OpenWord2(){
  var flag = 1;
  try{
    var oWord = new ActiveXObject("Word.Application");
  }catch(e){
    flag = 2;
    alert("请改变IE浏览器的安全设置!将'对没有标记为安全的ActiveX控件进行初始化和脚本运行'设为'启用'。");
  }
  if(flag == 1){
    exportLayer.style.border=0;
    oWord.Application.Visible = true;
    var mydoc=oWord.Documents.Add('',0,1);
    myRange =mydoc.Range(0,1);//指定文件编辑位置
    var sel=document.body.createTextRange();
    sel.select();
    document.execCommand('Copy');
    sel.moveEnd('character');
    myRange.Paste();

    //设置页宽
//    oWord.ActiveDocument.PageSetup.PageWidth = 1024.2756;
    //设置页高
//    oWord.ActiveDocument.PageSetup.PageHeight =768.6299;

    //设置页边距
    oWord.ActiveDocument.PageSetup.TopMargin =25;
    oWord.ActiveDocument.PageSetup.BottomMargin = 25;
    oWord.ActiveDocument.PageSetup.LeftMargin = 5 ;
    oWord.ActiveDocument.PageSetup.RightMargin = 5 ;

    //设置页面方向
    oWord.ActiveDocument.PageSetup.Orientation = 1;

    oWord.Selection.Font.Size=8;
    document.execCommand('unselect');
    //设置文档为页面视图
    oWord.ActiveWindow.ActivePane.View.Type= 3;
  }
}


/**
 * 四舍五入：返回结果值
 * 参数说明 str：要判断的字符串  precision：保留的小数位数  isFill：小数位补齐标志位(默认不补齐；设置为true时补齐)
 * 注：str必须是有效数值型   precision必须是非负整数
 */
function roundByPrecision(str,precision,isFill) {
	var returnNum = parseFloat(str) * Math.pow(10, precision);
	returnNum = Math.round(returnNum) / Math.pow(10, precision);
	returnNum = new String(returnNum);//类型转换
	if(isFill == true) {
		if((returnNum).indexOf(".") == -1) {
			returnNum = returnNum + ".";
		}
		var num_zero = precision - (returnNum.length - 1 - returnNum.indexOf("."));
		if(num_zero > 0) {
			for(i=0; i<num_zero; i++) {
				returnNum = returnNum + "0";
			}
		}
	}
	return returnNum;
}

//去除首尾空格标准方法:
String.prototype.trim = function(){
    // 用正则表达式将前后空格用空字符串替代。
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

//正整数:是返回true,否则返回false
function isPosInt(str) {
	str = str.trim();
	var re = /^[1-9]{1}(\d*)$/;
    return re.test(str);
}
