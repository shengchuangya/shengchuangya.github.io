// 按照总价来计算
	function countPrice(price, nianxian, lilv ,type) {
		var newRate = 0;
		var mp = 0,
			mp2 = 0,
			ll = 0,
			yll = 0,
			reduce = 0,
			lixiz, lixiz2, zj, zj2;
		if (!price || isNaN(price) || price > 2e4) {
			$("#all_price").addClass('wrong_mess');
			$("#all_price").focus();
			return false;
		} else {
			$("#all_price").removeClass('wrong_mess');
			$("#all_price").blur();
		}
		if( type == 1){
			if (nianxian <= 5) {
				newRate = parseFloat(5 / 100);
			} else {
				newRate = parseFloat(4.90 / 100);
			}
		}else if(type == 2){
			if (nianxian <= 5) {
				newRate = parseFloat(2.75 / 100);
			} else {
				newRate = parseFloat(3.25 / 100);
			}
		}
		lilv = newRate * parseFloat($("#price_rate").val());
		var counts = Math.pow((1 + lilv / 12), nianxian * 12);
		price = price * 10000;
		yueshu = parseInt(nianxian * 12);
		yll = parseFloat(lilv / 12);
		mp = parseFloat((price * yll * counts) / (counts - 1));
		mp2 = parseFloat((price / (nianxian * 12)) + price * (yll));
		reduce = parseFloat(price / (nianxian * 12) * yll);
		lixiz = parseFloat(mp * yueshu - price);
		lixiz2 = parseFloat((nianxian * 12 + 1) * price * (yll / 2));
		zj = price + lixiz;
		zj2 = price + lixiz2;

		$('.results_s1').html(splitsNum(price));
		$(".results_s2").html(yueshu);
		$(".results_s3").html(formatFloat(mp, 2));
		$(".results_s4").html(formatFloat(mp2, 2));
		$('.desc_results').html('每月递减:&nbsp;' + formatFloat(reduce, 2) + '&nbsp;&nbsp;元');
		$(".results_s5").html(formatFloat(lixiz, 2));
		$(".results_s6").html(formatFloat(lixiz2, 2));
		$(".results_s7").html(formatFloat(zj, 2));
		$(".results_s8").html(formatFloat(zj2, 2));
		$("#show_lilv").html("贷款"+nianxian+"年"+$('#price_rate').text()+"为"+formatFloat(lilv*100,2)+"%");
		//$(window).scrollTop($(".count_table").offset().top);
	}
	

	//按面积来计算
	function countArea(chengshu, nianxian, lilv,type) { // lilv  data-number
		var areaPrice = parseFloat($("#danjia").val());
		var areaSquare = parseFloat($("#mianji").val());
		var newRete = 0 , oPrice =0,dk=0;
		if (!areaPrice || isNaN(areaPrice) || areaPrice > 2e5) {
			$("#danjia").addClass('wrong_mess');
			$("#danjia").focus();
			return false;
		} else {
			$("#danjia").removeClass('wrong_mess');
			$("#danjia").blur();
		}
		if (!areaSquare || isNaN(areaSquare) || areaSquare > 500) {
			$("#mianji").addClass('wrong_mess');
			$("#mianji").focus();
			return false;
		} else {
			$("#mianji").removeClass('wrong_mess');
			$("#mianji").blur();
		}
		if(type == 1){
			if (nianxian <= 5) {
			   	newRate = parseFloat(4.75 / 100);
			} else {
				newRate = parseFloat(4.9 / 100);
			}
		}else if(type == 2){
		    if (nianxian <= 5) {
				newRate = parseFloat(2.75 / 100);
			} else {
				newRate = parseFloat(3.25 / 100);
			}	
		}
		lilv = newRate * parseFloat($("#area_05").val());
		var allp = parseFloat(areaPrice * areaSquare);
		
		var precent = parseInt($("#area_01").val());
		dk = parseFloat((precent/10) * areaPrice * areaSquare);
		
		oPrice = parseFloat( allp - dk);
		
		//var oPrice = areaPrice * areaSquare;
		var aYear = parseInt($("#area_03").val());
		var counts = Math.pow((1 + lilv / 12), aYear * 12);
		var lilv_month = lilv / 12;
		var everymouth_pay = (oPrice * lilv_month * counts) / (counts - 1);
		var lixiAll = formatFloat(everymouth_pay * aYear * 12 - oPrice, 2);
		var everymonth_pay2 = parseFloat((oPrice / (aYear * 12)) + oPrice * (lilv_month));
		var everymonth_reduce = parseFloat(oPrice / (aYear * 12) * lilv_month);
		var lx_benjin = parseFloat((aYear * 12 + 1) * oPrice * (lilv_month / 2));

		$('.results_s1').html(splitsNum(oPrice));
		$(".results_s2").html(aYear * 12);
		$('.results_s3').html(formatFloat(everymouth_pay, 2));
		$('.results_s5').html(lixiAll);
		$('.results_s7').html(oPrice + lixiAll);
		$('.results_s4').html(formatFloat(everymonth_pay2, 2));
		$('.desc_results').html('每月递减:' + formatFloat(everymonth_reduce, 2) + '&nbsp;&nbsp;元');
		$('.results_s6').html(formatFloat(lx_benjin, 2));
		$('.results_s8').html(oPrice + lx_benjin);
		$("#show_lilv").html("贷款"+nianxian+"年"+$('#area_05').text()+"为"+formatFloat(lilv*100,2)+"%");
		//$(window).scrollTop($(".count_table").offset().top);
		//console.log("首付成数：" + chengshu + ",  贷款年限:" + aYear + ",  贷款利率:" + lilv);
		
	}

	function countPriceReset(){
		$(".wrong_mess").removeClass('wrong_mess');
		for (var i = 1; i < 9; i++) {
			$('.results_s' + i).html('');
		}
		$(".desc_results").text('');
		$("#all_price").val('');
		$("#price_calcus10 li:last").trigger('click');
		$("#price_calcus14 li:eq(6)").trigger('click');
		$("#show_lilv").text("2015年8月26日最新商贷利率4.90%，公积金利率3.25%");
	}

	function countAreaReset(){
		$(".wrong_mess").removeClass('wrong_mess');
		for (var i = 1; i < 9; i++) {
			$('.results_s' + i).html('');
		}
		$(".desc_results").text('');
		$("#danjia").val('');
		$("#mianji").val('');
		$("#area_01_list li:eq(1)").trigger('click');
		$("#area_03_list li:last").trigger('click');
		$("#area_05_list li:eq(6)").trigger('click');
		$("#show_lilv").text("2015年8月26日最新商贷利率4.90%，公积金利率3.25%");
	}
	
	// 等额本息月供    每月还款 =〔贷款本金×月利率×（1＋月利率）＾还款月数〕÷〔（1＋月利率）＾还款月数－1〕 
	function everyMonthPay(a, b, c) {
		b = parseFloat(b / 12);
		var e = Math.pow(1 + b, c * 12);
		return a * b * e / (e - 1);
	}
	//每月还款=(贷款本金÷还款月数)+(贷款本金-已归还本金累计额)×月利率      等额本金月供 
	function everyMonthPay2(a, b, m) { // a贷款本金  b贷款利率 m贷款年限
		var c = a * m * 12;
		var d = a * parseFloat(b / 12);
		return c + d;
	}