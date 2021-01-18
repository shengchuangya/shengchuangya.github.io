/*下拉框模拟封装*/
;(function($){
	$.fn.selectMode=function(options){
		var defaults={
			className:'selectMode',
			width:300,
			height:40,
			maxH:200
		};
		options=$.extend(defaults,options);
		this.each(function(){
			var _self = $(this);
			var a = _self.children('a');
			var listUl = _self.children('ul');
			var li = listUl.children('li');
			a.bind('click',function(event){
			    var e=event || window.event;
			    e.stopPropagation();
			    $(".selCurr").next("ul").slideUp();
			    $(".selCurr").removeClass('selCurr');
			    $(this).addClass('selCurr');
			    if(listUl.is(":hidden")){
			      listUl.slideDown();
			    }else{
			      listUl.slideUp();
			    }
			});
			listUl.delegate('li', 'click', function(event) {
			    var e=event || window.event;
			    e.stopPropagation();
			    var data_val=$(this).find("a").attr("data-value");
			    a.text($(this).text());
			    a.attr("data-value",data_val);
			    listUl.slideUp();
			});
			document.onclick = function(){
		      $(".selCurr").next("ul").slideUp();
		    };
		});
	}
})(jQuery);

$("[data-mode='select']").selectMode();

/*placeholderFix*/
var JPlaceHolder = {
    //检测
    _check : function(){
        return 'placeholder' in document.createElement('input');
    },
    //初始化
    init : function(){
        if(!this._check()){
            this.fix();
        }
    },
    //修复
    fix : function(){
        jQuery(':input[placeholder]').each(function(index, element) {
            var self = $(this), txt = self.attr('placeholder');
            self.val(txt);
            self.focus(function(e) {
                if(self.val()==txt) self.val("");
            }).blur(function(e) {
                if(!self.val()) self.val(txt);
            });
        });
    }
};
//执行
jQuery(function(){
    JPlaceHolder.init();    
});

/*滚动固定*/
/*$(function(){
	var _top=$(".city-hot-lp").offset().top,_h=$(".city-hot-lp").height()-26,_btTop=$(".lp-link").offset().top;
	$(window).scroll(function(event) {
		if($(this).scrollTop() >= _top-26 && $(this).scrollTop() < _btTop-_h){
			$(".city-hot-lp").removeClass('abs-bot').addClass('fixed');
		}else if($(this).scrollTop() >= _btTop-_h){
			$(".city-hot-lp").removeClass('fixed').addClass('abs-bot');
		}else{
			$(".city-hot-lp").removeClass('fixed').removeClass('abs-bot');
		}
	});
});*/

function scrollFixed(obj,$scrTop,minH,maxH,fixClass,absClass){
	if($scrTop >= minH && $scrTop < maxH){
	    obj.removeClass(absClass).addClass(fixClass);
	}else if($scrTop >= maxH){
	    obj.removeClass(fixClass).addClass(absClass);
	}else{
	    obj.removeClass(fixClass).removeClass(absClass);
	}
}

function focusBlur(obj) {
  if (obj) {
    obj.focus(function() {
      $(this).css({
        'outline': 'none',
        'border': '1px solid #5ab431'
      });
    });
    obj.blur(function() {
      $(this).css('border', '1px solid #ddd');
    });
  }
}

/*每隔3位添加一个逗号*/
function splitsNum(num) {
	var b = parseInt(num).toString();
	var len = b.length;
	if (len <= 3) {
		return b;
	}
	var r = len % 3;
	return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(/\d{3}/g).join(",");
}

//保留两位数字  
function formatFloat(src, pos) {
	return Math.round(src * Math.pow(10, pos)) / Math.pow(10, pos);
}

/*数字输入规则*/
function testVal(e){
  if(!/(^0|^[1-9]\d*)(\.[0-9]+)?$/.test(e.value)){
    $(e).addClass('wrong_mess');
    $(e).focus();
  }else{
    $(e).removeClass('wrong_mess');
  }
}

/*判断是否为空*/
function isEmpty(val) {
    var v = false;
    if (val === '' || val == 'null' || val == null || val == 'undefined'
        || val == undefined || isNaN(val)) {
        v = true;
    }
    return v;
}


