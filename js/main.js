/* item 목록 형태 바꾸기 */
$(function(){
	$("#shop_list").hide();
	$("#list_btn").click(function(){
	  $("#shop_square").hide();	
	  $("#shop_list").show();
	  return false;
	});
	$("#square_btn").click(function(){
		 $("#shop_list").hide();	
		 $("#shop_square").show();
		 return false;
	});
});


/* item4 hover*/
$(function(){
	$("#shop_square li:eq(3) .albumArt , #shop_list li:eq(3) .albumArt").mouseover(function(){
		$(this).children("img").attr("src", "img/ravenna.jpg");
	}).mouseleave(function(){
		$(this).children("img").attr("src", "img/playlist.png");
	});
});


/* item8 hover*/
$(function(){
	$("#shop_square li:eq(7) .albumArt, #shop_list li:eq(7) .albumArt").mouseover(function(){
		$(this).children("img").attr("src", "img/eighthover.png");
	}).mouseleave(function(){
		$(this).children("img").attr("src", "img/backfromthe.jpg");
	});
});


/* pagination addClass */
$(function(){
	$("#pagination a:eq(0)").addClass("SelectPage");
	$("#pagination a").click(function(){
		$(this).siblings().removeClass("SelectPage");
		$(this).addClass("SelectPage");
		return false;
	});
});

/* gotop 최상단으로 가기 */

$(function(){
	$("#gotop").click(function(){
		$("body, html").animate({"scrollTop":"0"}, 600);
		
	});
});

