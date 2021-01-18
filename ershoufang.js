$(document).ready(function(){
	var hide = get_cookie("hide");
	$('.hide').css('display',hide);
	var hasmore1 = get_cookie("hasmore1");
	if (hasmore1=="1") {
		$('#hasmore1').addClass("auto");
	}else{
		$('#hasmore1').removeClass("auto");
	}
	var hasmore2 = get_cookie("hasmore2");
	if (hasmore2=="1") {
		$('#hasmore2').addClass("auto");
	}else{
		$('#hasmore2').removeClass("auto");
	}
	var hasmore4 = get_cookie("hasmore4");
	if (hasmore4=="1") {
		$('#hasmore4').addClass("auto");
	}else{
		$('#hasmore4').removeClass("auto");
	}
	var hasmore5 = get_cookie("hasmore5");
	if (hasmore5=="1") {
		$('#hasmore5').addClass("auto");
	}else{
		$('#hasmore5').removeClass("auto");
	}
	var hasmore6 = get_cookie("hasmore6");
	if (hasmore6=="1") {
		$('#hasmore6').addClass("auto");
	}else{
		$('#hasmore6').removeClass("auto");
	}
	var hasmore7 = get_cookie("hasmore7");
	if (hasmore7=="1") {
		$('#hasmore7').addClass("auto");
	}else{
		$('#hasmore7').removeClass("auto");
	}
	var hasmore8 = get_cookie("hasmore8");
	if (hasmore8=="1") {
		$('#hasmore8').addClass("auto");
	}else{
		$('#hasmore8').removeClass("auto");
	}
	var hasmore9 = get_cookie("hasmore9");
	if (hasmore9=="1") {
		$('#hasmore9').addClass("auto");
	}else{
		$('#hasmore9').removeClass("auto");
	}
	var hasmore10 = get_cookie("hasmore10");
	if (hasmore10=="1") {
		$('#hasmore10').addClass("auto");
	}else{
		$('#hasmore10').removeClass("auto");
	}
	var selected = get_cookie("selected");
	if (selected=="1") {
		$('#datu').addClass('selected');
		$('#liebiao').removeClass("selected");
		$('.sellListContent').css('display','none');
		$('.bigImgList').css('display','block');
	}else{
		$('#liebiao').addClass('selected');
		$('#datu').removeClass("selected");
		$('.bigImgList').css('display','none');
		$('.sellListContent').css('display','block');
	}
	var hide = get_cookie("hide");
	$('.hide').css('display',hide);
	$('#gduo1').click(function(){
		if ($('#hasmore1').is('.auto')) {
			$('#hasmore1').removeClass("auto");
			document.cookie="hasmore1=0";
		}else{
			$('#hasmore1').addClass("auto");
			document.cookie="hasmore1=1";
		}
	});
	$('#gduo2').click(function(){
		if ($('#hasmore2').is('.auto')) {
			$('#hasmore2').removeClass("auto");
			document.cookie="hasmore2=0";
		}else{
			$('#hasmore2').addClass("auto");
			document.cookie="hasmore2=1";
		}
	});
	$('#gduo3').click(function(){
		var gduo3=$('.hide').css('display');
		if (gduo3=="block") {
			$('.hide').css('display','none');
			document.cookie="hide=none";
		}else{
			$('.hide').css('display','block');
			document.cookie="hide=block"; 
		}
	});
	$('#gduo4').click(function(){
		if ($('#hasmore4').is('.auto')) {
			$('#hasmore4').removeClass("auto");
			document.cookie="hasmore4=0";
		}else{
			$('#hasmore4').addClass("auto");
			document.cookie="hasmore4=1";
		}
	});
	$('#gduo5').click(function(){
		if ($('#hasmore5').is('.auto')) {
			$('#hasmore5').removeClass("auto");
			document.cookie="hasmore5=0";
		}else{
			$('#hasmore5').addClass("auto");
			document.cookie="hasmore5=1";
		}
	});
	$('#gduo6').click(function(){
			if ($('#hasmore6').is('.auto')) {
			$('#hasmore6').removeClass("auto");
			document.cookie="hasmore6=0";
		}else{
			$('#hasmore6').addClass("auto");
			document.cookie="hasmore6=1";
		}
	});
	$('#gduo7').click(function(){
			if ($('#hasmore7').is('.auto')) {
			$('#hasmore7').removeClass("auto");
			document.cookie="hasmore7=0";
		}else{
			$('#hasmore7').addClass("auto");
			document.cookie="hasmore7=1";
		}
	});
	$('#gduo8').click(function(){
			if ($('#hasmore8').is('.auto')) {
			$('#hasmore8').removeClass("auto");
			document.cookie="hasmore8=0";
		}else{
			$('#hasmore8').addClass("auto");
			document.cookie="hasmore8=1";
		}
	});
	$('#gduo9').click(function(){
			if ($('#hasmore9').is('.auto')) {
			$('#hasmore9').removeClass("auto");
			document.cookie="hasmore9=0";
		}else{
			$('#hasmore9').addClass("auto");
			document.cookie="hasmore9=1";
		}
	});
	$('#gduo10').click(function(){
			if ($('#hasmore10').is('.auto')) {
			$('#hasmore10').removeClass("auto");
			document.cookie="hasmore10=0";
		}else{
			$('#hasmore10').addClass("auto");
			document.cookie="hasmore10=1";
		}
	});
	//纯js获取cookie
	function get_cookie(Name) {
		var search = Name + "="//查询检索的值
		var returnvalue = "";//返回值
		if (document.cookie.length > 0) {
			sd = document.cookie.indexOf(search);
			if (sd!= -1) {
				sd += search.length;
				end = document.cookie.indexOf(";", sd);
				if (end == -1)
				end = document.cookie.length;
				//unescape() 函数可对通过 escape() 编码的字符串进行解码。
				returnvalue=unescape(document.cookie.substring(sd, end))
			}
		} 
		return returnvalue;
	}
	$('#liebiao').click(function(){
		$('#liebiao').addClass('selected');
		$('#datu').removeClass("selected");
		$('.bigImgList').css('display','none');
		$('.sellListContent').css('display','block');
		document.cookie="selected=0";
	}); 
	$('#datu').click(function(){
		$('#datu').addClass('selected');
		$('#liebiao').removeClass("selected");
		$('.sellListContent').css('display','none');
		$('.bigImgList').css('display','block');
		document.cookie="selected=1";
	});
});