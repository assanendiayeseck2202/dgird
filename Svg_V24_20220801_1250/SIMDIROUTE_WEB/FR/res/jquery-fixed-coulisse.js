/*! VersionVI: 30F190056s x */
var bAvecEffet=$("html").hasClass("csstransitions");(function(n){function t(){n('div[id^="dww"]').filter(".fixedcoulisse").each(function(){var t=n(this),h=n(window).scrollLeft();if(h>0){t.removeClass("fixed"),t.removeClass("abs"),t.removeClass("effet");return}var i=parseFloat(t.attr("data-marge-avant"),10),c=t.attr("data-fin")=="",l=parseFloat(t.attr("data-fin"),10),o=parseFloat(t.attr("data-fin-absolue"),10),r=parseFloat(t.attr("data-debut"),10),f=t.outerHeight(),e=t.attr("data-sens")=="bas",u=n(window).scrollTop(),s=n(window).height();bAvecEffet?e?f+=i:(t.hasClass("fixed")&&(r-=i),o-=i):e?f+=i:(r-=i,o-=i),(e?u+s<=r+f-(bAvecEffet?i:0):u>=r)?!c&&(e?u+s<=o+f:u>=o)?(t.removeClass("fixed"),t.addClass("abs"),t.removeClass("effet")):(t.addClass("fixed"),t.removeClass("abs")):(!bAvecEffet||(e?u+s>r+f:u<r))&&(t.removeClass("fixed"),t.removeClass("abs"),t.addClass("effet"))})}n('div[id^="dww"]').filter(".fixedcoulisse").each(function(){var t=n(this),u=t.attr("id"),i,r;t.attr("data-debut",t.offset().top);var c=t.css("position","absolute").attr("style"),o=parseFloat(t.attr("data-marge-avant"),10),l=t.attr("data-fin")=="",s=parseFloat(t.attr("data-fin"),10),h=t.attr("data-sens")=="bas",f=h?"bottom":"top",e=h?"top":"bottom";n("html > head").append(n("<style>#"+u+".fixed { position:fixed; margin-"+f+":"+o+"px;"+f+":0; }<\/style>")).append(n("<style>#"+u+".abs { position:absolute; margin-"+e+":"+s+"px;"+e+":0; }<\/style>")).append(n("<style>#"+u+" { "+c+" }<\/style>")),bAvecEffet&&(i=u+"_fixedcoulissemarge",r="0% \t{ margin-"+f+":0; }100% { margin-"+f+":"+o+"px;}",n("html > head").append(n("<style>@-ms-keyframes "+i+" { "+r+" }<\/style>")).append(n("<style>@-moz-keyframes "+i+" { "+r+" }<\/style>")).append(n("<style>@-o-keyframes "+i+" { "+r+" }<\/style>")).append(n("<style>@-webkit-keyframes "+i+" { "+r+" }<\/style>")).append(n("<style>@keyframes "+i+" { "+r+" }<\/style>")).append(n("<style>#"+u+".effet.fixed { -ms-animation:"+i+" 1s;-moz-animation:"+i+" 1s;-o-animation:"+i+" 1s;-webkit-animation:"+i+" 1s;animation:"+i+" 1s;}<\/style>"))),l||(t.attr("style","margin:0;position:absolute;"+e+":"+s+"px;"),t.attr("data-fin-absolue",t.offset().top)),t.attr("style","")}),n(window).scroll(function(n){t(n)}),n(window).resize(function(n){t(n)}),n(window).trigger("scroll")})(jQuery)