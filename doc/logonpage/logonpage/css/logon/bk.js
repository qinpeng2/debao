/**
 * ��ѡ���ȫѡ��ȫ��ѡ
 * flagΪfalse��ʾȫ��ѡ
 * flagΪtrue��ʾȫѡ
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
 * ���ݵ�ǰ��ѡ���״̬ȷ��ѡ��ʽ
 */
function selectCheck(obj){
  if(obj.checked == false){
    selectAll(false);
  } else {
    selectAll(true);
  }
}

/**
 * ȥ����β�ո�
 */
function trim(str){
  var len = str.length;
  var st = 0;
  while ((st < len) && (str.charCodeAt(st) <= 32))  st++;
  while ((st < len) && (str.charCodeAt(len-1) <= 32)) len--;
  return ((st > 0) || (len < str.length)) ? str.substring(st, len) : str;
}

//�ж��Ƿ�Ϊ>0����
function isInteger(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("������Ǹ�����!");
    object.select();
    return false;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������Ǹ�����!");
      object.select();
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ>0����
function isInteger2(object){
  object.value=trim(object.value);
  if(object.value==""){
    return true;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������Ǹ�����!");
      object.select();
      return false;
    }
  }
  return true;
}

//ֻ��ʾ��ǿ�ƻ�ý���
function isIntegerNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
    //object.select();
    return true;
  }
  if(object.value.substring(0,1)=="0" && object.value.length > 1){
    alert("������Ǹ�����!");
    //object.select();
    return false;
  }
  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������Ǹ�����!");
      //object.focus();
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ������
function isPositiveInteger(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("������������!");
    object.select();
    return false;
  }
  if(object.value.substring(0,1)=="0"){
    alert("������������!");
    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������������!");
      object.select();
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ������
function isPositiveIntegerNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
//    object.select();
    return true;
  }
  if(object.value.substring(0,1)=="0"){
    alert("������������!");
//    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������������!");
//      object.select();
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ������
function isPositiveIntNoBlankNoFocus(object){
  object.value=trim(object.value);
  if(object.value==""){
    alert("������������!");
//    object.select();
    return false;
  }
  if(object.value.substring(0,1)=="0"){
    alert("������������!");
//    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������������!");
//      object.select();
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ������
function isPositiveIntMayBlank(object){
  object.value=trim(object.value);
  if(object.value==""){
    return true;
  }
  if(object.value.substring(0,1)=="0"){
    alert("������������!");
    object.select();
    return false;
  }

  for(var i = 0; i < object.value.length; i ++){
    var oneChar = object.value.substring(i,i+1)
    if(oneChar<"0"||oneChar>"9"){
      alert("������������!");
      object.select();
      return false;
    }
  }
  return true;
}
//������ɫ
//��ŵ�ǰTR��Ӧ�ļ�¼��ID
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

//ѡ������
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
//��֤�Ƿ�ѡ��
function isSel(){
  try{
    var checkBox = myForm.del;

    if(checkBox.length==null){
      if(checkBox.checked==true){
        return true;
      }else if(checkBox.checked==false){
        alert("��ѡ��ɾ����!");
        return false;
      }
    }else{
      for(i=0;i<checkBox.length;i++){
        if (checkBox[i].checked==true){
          return true;
        }
      }
      alert("��ѡ��ɾ����!");
      return false;
    }
  }catch(e){
    return false;
  }
}

//ȷ��ɾ��
function confirmDel(){
  if(isSel()){
    if(confirm("ȷʵҪɾ����?")){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

//��ʵ��
//�Ƿ���true,���򷵻�false
function isPosFloat(str) {
    str = str.trim();
    var re = /^(0\.\d*[1-9]{1}\d*|([1-9]{1}(\d*)(\.\d+)?))$/;
    return re.test(str);
}

//�Ǹ�ʵ��(��ʵ����0)
//�Ƿ���true,���򷵻�false
function isPosFloat_0(str) {
    str = str.trim();
    var re = /^(0|0\.\d*|([1-9]{1}(\d*)(\.\d+)?))$/;
    return re.test(str);
}

//�ж��Ƿ�Ϊ��ʵ��(ֻ���������ַ���'.')
function isNumber(obj){
  obj.value = trim(obj.value);
  if(obj.value == "") return;
  if(obj.value <= 0){
	    obj.select();
		alert("���������������֣�");
        return false;
  }
  var flag = 0;
  for(var i = 0; i < obj.value.length; i++){
    if(obj.value.charAt(i)=="."){
      if(flag++ == 0){    //ֻ����һ��С����
        continue;
      } else {
        obj.select();
        alert("���������������֣�");
        return false;     //����һ��С����,������ʵ��
      }
    } else if(obj.value.charAt(i)<"0"){
      obj.select();
      alert("���������������֣�");
      return false;
    } else if(obj.value.charAt(i)>"9") {
      obj.select();
      alert("���������������֣�");
      return false;
    }
  }
  return true;
}

//�ж��Ƿ�Ϊ��ʵ��(ֻ���������ַ���'.')
//�����»�ý���
function isNumberNoFocus(obj){
  obj.value = trim(obj.value);
  if(obj.value == "") return true;
  if(obj.value <= 0){
    alert("���������������֣�");
    return false;
  }
  var flag = 0;
  for(var i = 0; i < obj.value.length; i++){
    if(obj.value.charAt(i)=="."){
      if(flag++ == 0){    //ֻ����һ��С����
        continue;
      } else {
        alert("���������������֣�");
        return false;     //����һ��С����,������ʵ��
      }
    } else if(obj.value.charAt(i)<"0"){
      alert("���������������֣�");
      return false;
    } else if(obj.value.charAt(i)>"9") {
      alert("���������������֣�");
      return false;
    }
  }
  return true;
}

//IsFloat�����ж�һ���ַ����Ƿ�������(int or long or float)���
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

//�����ֵ�Ƿ�Ϊ��,Ϊ���򷵻�true,���򷵻�false;
function is_NullVal(obj){
  if(trim(obj.value)==""){
    return true;
  } else {
    return false;
  }
}

//��������ֲ��ܴ���50
function is_Bigger(obj){
  if(parseInt(trim(obj.value)) <= 50){
    return true;
  } else {
    alert("�����벻����50��������!");
    obj.select();
    return false;
  }
}

//����Ƿ�Ϊ�Ϸ���E-Mail��ʽ
function isEmail(str){
  var r, re;
  var s = str.value;
  re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/; // ����������ʽģʽ��
  r = s.match(re);   // ����ȥƥ�������ַ�����
  if(r == null){
    alert("������Ϸ���e-mail��ַ��ʽ!");
    str.select();
    return false;
  } else {
    return true;
  }
}


//������ڸ�ʽ�Ƿ���ȷ
function checkDateFormat(str){
  var tomatch=/^\d{4}��(0[1-9]|1[0-2])��(0[1-9]|[1-2]\d|3[0-1])��$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}


//������ڸ�ʽ�Ƿ���ȷ
function checkDateYearMonthFormat(str){
  var tomatch=/^\d{4}��(0[1-9]|1[0-2])��$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//����ָ���Ÿ�ʽ
//��ʽΪ�����µڼ���ָ��-��λ�·�-��λ��ݡ�\n���磺01-01-05
function checkDictateNoFormat(str){
  var tomatch=/^(0[1-9]|[1-9]\d)-(0[1-9]|1[0-2])-\d{2}$/;
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//����ָ��Ÿ�ʽ
//��ʽΪ������ڼ���ָ��-��λ��ݡ�\n���磺0001-05
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

//��֤װ�䷽ʽ�ĸ�ʽ
function checkBoxMode(str){
  var tomatch = /^(\(?)[1-9]{1}(\d*)(֧\/�š�)[1-9]{1}(\d*)��(\)?)$/;
  if(str.indexOf('+') != -1){
	tomatch = /^(\(?)[1-9]{1}(\d*)(֧\/�š�)[1-9]{1}(\d*)(��\+)[1-9]{1}(\d*)(֧\/�š�)[1-9]{1}(\d*)��(\)?)$/;
  }
  var vformat=tomatch.test(trim(str));
  if(!vformat){
    return false;
  } else {
    return true;
  }
}

//�����ı���������ַ����Ƿ񳬹�����ĸ���
//objΪ�ı������
//lenΪ�ı�������ĳ���
function checkTextLen(obj,len){
  var templen =obj.value.length;
  if(templen > len){
    alert("��������"+templen+"���ַ�,���������"+len+"��!");
    obj.focus();
  }
}

//ʹ��javascript������word
//������ʾ
function OpenWord(){
  var flag = 1;
  try{
    var oWord = new ActiveXObject("Word.Application");
  }catch(e){
    flag = 2;
    alert("��ı�IE������İ�ȫ����!��'��û�б��Ϊ��ȫ��ActiveX�ؼ����г�ʼ���ͽű�����'��Ϊ'����'��");
  }
  if(flag == 1){
    exportLayer.style.border=0;
    oWord.Application.Visible = true;
    var mydoc=oWord.Documents.Add('',0,1);
    myRange =mydoc.Range(0,1);//ָ���ļ��༭λ��
    var sel=document.body.createTextRange();
    sel.select();
    document.execCommand('Copy');
    sel.moveEnd('character');
    myRange.Paste();
    oWord.Selection.Font.Size=10;
    document.execCommand('unselect');
    //�����ĵ�Ϊҳ����ͼ
    oWord.ActiveWindow.ActivePane.View.Type= 3;
  }
}

//ʹ��javascript������word
//������ʾ
function OpenWord2(){
  var flag = 1;
  try{
    var oWord = new ActiveXObject("Word.Application");
  }catch(e){
    flag = 2;
    alert("��ı�IE������İ�ȫ����!��'��û�б��Ϊ��ȫ��ActiveX�ؼ����г�ʼ���ͽű�����'��Ϊ'����'��");
  }
  if(flag == 1){
    exportLayer.style.border=0;
    oWord.Application.Visible = true;
    var mydoc=oWord.Documents.Add('',0,1);
    myRange =mydoc.Range(0,1);//ָ���ļ��༭λ��
    var sel=document.body.createTextRange();
    sel.select();
    document.execCommand('Copy');
    sel.moveEnd('character');
    myRange.Paste();

    //����ҳ��
//    oWord.ActiveDocument.PageSetup.PageWidth = 1024.2756;
    //����ҳ��
//    oWord.ActiveDocument.PageSetup.PageHeight =768.6299;

    //����ҳ�߾�
    oWord.ActiveDocument.PageSetup.TopMargin =25;
    oWord.ActiveDocument.PageSetup.BottomMargin = 25;
    oWord.ActiveDocument.PageSetup.LeftMargin = 5 ;
    oWord.ActiveDocument.PageSetup.RightMargin = 5 ;

    //����ҳ�淽��
    oWord.ActiveDocument.PageSetup.Orientation = 1;

    oWord.Selection.Font.Size=8;
    document.execCommand('unselect');
    //�����ĵ�Ϊҳ����ͼ
    oWord.ActiveWindow.ActivePane.View.Type= 3;
  }
}


/**
 * �������룺���ؽ��ֵ
 * ����˵�� str��Ҫ�жϵ��ַ���  precision��������С��λ��  isFill��С��λ�����־λ(Ĭ�ϲ����룻����Ϊtrueʱ����)
 * ע��str��������Ч��ֵ��   precision�����ǷǸ�����
 */
function roundByPrecision(str,precision,isFill) {
	var returnNum = parseFloat(str) * Math.pow(10, precision);
	returnNum = Math.round(returnNum) / Math.pow(10, precision);
	returnNum = new String(returnNum);//����ת��
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

//ȥ����β�ո��׼����:
String.prototype.trim = function(){
    // ��������ʽ��ǰ��ո��ÿ��ַ��������
    return this.replace(/(^\s*)|(\s*$)/g, "");
}

//������:�Ƿ���true,���򷵻�false
function isPosInt(str) {
	str = str.trim();
	var re = /^[1-9]{1}(\d*)$/;
    return re.test(str);
}
