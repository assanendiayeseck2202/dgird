/*! VersionVI: 30F190056s x */
var _bOpr=window.bOpr!==undefined&&window.bOpr;(_bOpr||document.documentMode!==undefined&&document.compatMode!="BackCompat")&&$().ready(function(){function e(){var t=document.body,n=document.documentElement;return Math.max(t.scrollHeight,t.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)}function o(){$("body").css("overflow-y",_bOpr||$(document).height()>document.documentElement.offsetHeight?"scroll":"hidden")}function i(){function t(n){var t=n.parent().parent().innerHeight();(t=Math.max(t,n.children().first().outerHeight()),n.outerHeight()>=t)||n.css("height",t)}_bOpr&&$("html,body").css("height","100%");var n=u>document.documentElement.offsetHeight;$(".h100,.hauto").each(function(){n?$(this).css("position",$(this).attr("data-position")):($(this).parent().css("position","relative"),$(this).css("position","absolute")),$(this).css("height","auto")}),$(".h100,.hauto").each(function(){if(n||$(this).parent().css("position",""),$(this).css("position",$(this).attr("data-position")),!$(this).hasClass("hauto")&&!n){var t=$(this).parent().innerHeight();$(this).outerHeight()>=t||$(this).css("height",t)}}),$(".hauto,.h100").each(function(){t($(this))}),_bOpr&&($("html,body").css("height",e()+"px"),$(".hauto,.h100").each(function(){t($(this))})),$("body").css("overflow-y","auto"),window.clWDUtil&&clWDUtil.__OnScrollResize(event,!1)}function r(n){return n.length==1&&(n[0].currentStyle.height=="100%"||(n.attr("style")+"").indexOf("height: 100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("height:100%")>=0||_bOpr&&(n.attr("style")+"").indexOf("height:100.00%")>=0||n[0].tagName.toLowerCase()=="tr"&&r(n.closest("table")))}function f(r,u){t||(n==null?o(r):clearTimeout(n),u?n=setTimeout(function(){try{t=!0,i(r),$(window).trigger("resize")}catch(u){}finally{t=!1,n=null}},50):setTimeout(function(){i(r)},10))}var u,n,t;$("html,body").css("height","auto"),u=$("body").height(),$("html,body").css("height","100%"),n=null,t=!1,$("tr>td>*").each(function(){var n=$(this);(n.attr("id")=="page"||r(n)&&r(n.parent().parent()))&&n.css("position")!="absolute"&&n.css("position")!="fixed"&&(n.attr("id")||"").indexOf("ctz")!=0?(n.addClass("h100"),n.css("position")=="relative"?n.attr("data-position","relative"):n.attr("data-position","")):n.addClass("h100non")}),$("table[id^=ctz]").addClass("h100non"),$(".h100non .h100").each(function(){$(this).removeClass("h100"),$(this).addClass("hauto")}),$("table[id^=ctz] .hauto").removeClass("hauto"),$(window).resize(function(n){f(n,!0)}),$(".WDVC,.WDVG,.WDVD").click(function(n){f(n,!1)}),setTimeout(function(){i(event)},10)}),$().ready(function(){function n(){$(".WDOT").each(function(){var i=$(this),e=i.closest("table"),u=e.width(),r=i.parent().children().slice(0,-1),f=0,n,t;r.each(function(){var r=$(this),n=r.find(".WDVC").children().first(),t=n.width(),u=r.width(),i=n.css("width","auto").css("white-space","nowrap").width();i=r.hasClass("wbLargeurAdapteeVoletLibelle")?Math.max(t,i):t,n.data("width-adaptee",i),f+=u-t+i,n.css("width",t).css("white-space","normal")}),n=u-f,t=-1,n<0&&(t=parseInt((u-1)/r.length)-32,n=0),r.each(function(){var i=$(this),n=i.find(".WDVC").children().first(),r=t>0?t:n.data("width-adaptee");n.css("width",r)}),i.css("width",n).children().css("width",n)})}window.clWDUtil!==undefined&&clWDUtil.m_oNotificationsAjoutHTML.AddNotification(n),n()})