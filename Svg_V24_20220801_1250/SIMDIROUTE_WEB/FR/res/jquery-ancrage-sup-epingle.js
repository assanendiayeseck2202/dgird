/*! VersionVI: 30F190056s x */
$(window).resize(function(){$(".ancragesuph, .ancragesupl").each(function(){var n=$(this),t=n.parent().children("table").find(".ancragesupref").first(),r=t.length===1,i;r||(t=n.parents(".ancragesup,#page").first()),n.hasClass("ancragesupl")&&(i=0,i=r?t.parents("table").outerWidth()-parseInt(t.attr("data-width")):t.width()-parseInt(t.attr("data-width")),n.css("width",Math.max(parseInt(n.attr("data-min-width")||0),parseInt(n.attr("data-width"))+i)+"px")),n.hasClass("ancragesuph")&&(i=0,i=r?t.parents("table").outerHeight()-parseInt(t.attr("data-height")):t.height()-parseInt(t.attr("data-height")),n.css("height",Math.max(parseInt(n.attr("data-min-height")||0),parseInt(n.attr("data-height"))+i)+"px"))}),$(".ancragefixedh, .ancragefixedl").each(function(){var n=$(this),i=$("#page"),t;n.hasClass("ancragefixedl")&&(t=0,t=("x"+n.css("left")).substr(-1)=="x"||("x"+n.css("right")).substr(-1)=="x"?$(window).width()-parseInt(i.attr("data-window-width")):i.width()-parseInt(i.attr("data-width")),n.css("width",Math.max(parseInt(n.attr("data-min-width")||0),parseInt(n.attr("data-width"))+t)+"px")),n.hasClass("ancragefixedh")&&(t=0,t=("x"+n.css("top")).substr(-1)=="x"||("x"+n.css("bottom")).substr(-1)=="x"?$(window).height()-parseInt(i.attr("data-window-height")):i.height()-parseInt(i.attr("data-height")),n.css("height",Math.max(parseInt(n.attr("data-min-height")||0),parseInt(n.attr("data-height"))+t)+"px"))})}),setTimeout(function(){$(window).resize()},10)