/**
Grab Bag - Assorted Detritus
  (c) 2008 Jason Frame (jason@onehackoranother.com)
  Released under The MIT License.
 */
(function(a){a.fn.autogrow=function(b){this.filter("textarea").each(function(){var e=a(this),d=e.height(),c=e.css("lineHeight");var g=a("<div></div>").css({position:"absolute","word-wrap":"break-word",top:-10000,left:-10000,width:a(this).width()-parseInt(e.css("paddingLeft"))-parseInt(e.css("paddingRight")),fontSize:e.css("fontSize"),fontFamily:e.css("fontFamily"),lineHeight:e.css("lineHeight"),resize:"none"}).appendTo(document.body);var f=function(){var i=function(j,m){for(var k=0,l="";k<m;k++){l+=j}return l};var h=this.value.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/&/g,"&amp;").replace(/\n$/,"<br/>&nbsp;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(j){return i("&nbsp;",j.length-1)+" "});g.html(h);a(this).css("height",Math.max(g.height()+40,d)).css("overflow","hidden")};a(this).change(f).keyup(f).keydown(f);f.apply(this)});return this}})(jQuery);