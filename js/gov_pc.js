$(function(){
	// 헤더 
	$("#gnb_pc .gnb_wrap .sub").mouseover(function(){
		$('#gnb_pc .gnb_wrap>li>a').addClass('active'); });

	$("#gnb_pc .gnb_wrap .sub").mouseleave(function(){
		$('#gnb_pc .gnb_wrap>li>a').removeClass('active');
	});




	// pc 상단 메뉴
	$("#gnb_pc>.gnb_wrap>li>a").bind("mouseover focus", function(){
	    $("#gnb_pc .sub").slideDown(250);
		$("#sub_bg").slideDown(250);
		$('.sub_sub').stop().slideUp(250);
    });
	 
    $("#gnb_pc").mouseleave(function(){
		$("#gnb_pc .sub").stop().slideUp(250);
		$("#sub_bg").stop().slideUp(250);
    });
	
	
	
	
	
	// mobile 햄버거 메뉴
    $("#gnb_mobile #hammenu").click(function(){
		$("#gnb_mobile").stop().toggleClass("open");
		$('#gnb_mobile .sub, #gnb_mobile .sub_sub').stop().slideUp(250);
	});
	
	// mobile 메뉴
	$("#gnb_mobile>.gnb_wrap>li>a").click(function(){
		$('#gnb_mobile .sub, #gnb_mobile .sub_sub').stop().slideUp(250);
		$(this).next().stop().slideToggle(250);
		    return false;
	});





	// PC 배너 이미지 슬라이드
	$("#slide_banner").slick({
		dots: true,
		dotsClass : 'slick-dots', 
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow : "<button type='button' class='slick-prev'></button>", 
		nextArrow : "<button type='button' class='slick-next'></button>", 
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			   arrows: true,
			   dots: true
			}
		  },
		  { 
			breakpoint: 820,
			settings: {	
			   slidesToShow:1 
			} 
		  }
		]
	  });


	// mobile 배너 이미지 슬라이드
	$("#slide_banner_mobile").slick({
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: true,
		prevArrow : "<button type='button' class='slick-prev'></button>", 
		nextArrow : "<button type='button' class='slick-next'></button>", 
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			   arrows: true,
			   dots: true
			}
		  },
		  { 
			breakpoint: 820,
			settings: {	
			   slidesToShow:1 
			} 
		  }
		]
	  });
  
	  

	// 퀵메뉴
	  var defaultTop = parseInt($("#quick_menu").css("top"));
	
	$(window).on("scroll", function(){
		var scv = $(window).scrollTop();
		$("#quick_menu").stop().animate({top:scv+defaultTop+"px"}, 300);
	});  



});
	
