


jQuery.noConflict();

jQuery(function($) {



// DROP DOWN MENU

	// http://users.tpg.com.au/j_birch/plugins/superfish/#getting-started

	// http://users.tpg.com.au/j_birch/plugins/superfish/#options



    $(document).ready(function(){

    $(".sf-menu").superfish({

			dropShadows:    false,

			delay:			400,

            pathClass:      'selected-menu',

            pathLevels:     2,



	});

});





	// Scroll to top animation

	$('.scroll-top').click(function(){

		$('html, body').animate({scrollTop:0}, 600); return false;

	});





	// Hide parent on click (error messages, etc...)

	$('a.hideparent').click(function(){

		$(this).parent().fadeOut();

		return false;

	});



	// Lightbox setup

	// Ex: open any link <a href="large.jpg" />...

	$('a[href$="jpg"], a[href$="jpeg"], a[href$="png"], a[href$="gif"]').fancybox();



	// Vimeo Popup - Large

	$(".vimeo-popup-large").click(function() {

		$.fancybox({

			'padding'		: 0,

			'autoScale'		: false,

			'transitionIn'	: 'none',

			'transitionOut'	: 'none',

			'title'			: this.title,

			'width'			: 600,

			'height'		: 340,

			'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),

			'type'			: 'swf'

		});

		return false;

	});



	// Vimeo Popup - Regula Size

	$(".vimeo-popup").click(function() {

		$.fancybox({

			'padding'		: 0,

			'autoScale'		: false,

			'transitionIn'	: 'none',

			'transitionOut'	: 'none',

			'title'			: this.title,

			'width'			: 400,

			'height'		: 225,

			'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),

			'type'			: 'swf'

		});

		return false;

	});



	// Default Modal box

	$(".modal-box").fancybox({

		'modal' : true

	});







	// contact form validation

		var hasChecked = false;

		$(".standard #submit").click(function () {

			hasChecked = true;

			return checkForm();

		});

		$(".standard #name,.standard #email,.standard #message").live('change click', function(){

			if(hasChecked == true)

			{

				return checkForm();

			}

		});

		function checkForm()

		{

			var hasError = false;

			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;



			if($(".standard #name").val() == '') {

				$(".standard #error-name").fadeIn();

				hasError = true;

			}else{

				$(".standard #error-name").fadeOut();

			}

			if($(".standard #email").val() == '') {

				$(".standard #error-email").fadeIn();

				hasError = true;

			}else if(!emailReg.test( $(".standard #email").val() )) {

				$(".standard #error-email").fadeIn();

				hasError = true;

			}else{

				$(".standard #error-email").fadeOut();

			}

			if($(".standard #message").val() == '') {

				$(".standard #error-message").fadeIn();

				hasError = true;

			}else{

				$(".standard #error-message").fadeOut();

			}

                        if($(".standard #captcha").val() == '') {

                                $(".standard #error-captcha").fadeIn();

                                hasError = true;

                        }else{ 

                                $(".standard #error-captcha").fadeOut();

                        }

			if(hasError == true)

			{

				return false;

			}else{

				return true;

			}

		}

		// end contact form validation





		// Latest Tweets

		$("#latest-footer-tweets").tweet({

			//join_text: "auto",

			//username: "@Bro_IDS",

            query: "#BroIDS",

            // avatar_size: 16,

			count: 2,

			//auto_join_text_default: "we said,",

			//auto_join_text_ed: "we",

			//auto_join_text_ing: "we were",

			//auto_join_text_reply: "we replied",

			//auto_join_text_url: "we were checking out",

			loading_text: "Loading tweets..."

		  });



		$("#latest-sidebar-tweets").tweet({

			//join_text: "auto",

			username: "Bro_IDS",

            //query: "#BroIDS",

            //avatar_size: 16,

			count: 2,

			//auto_join_text_default: "we said,",

			//auto_join_text_ed: "we",

			//auto_join_text_ing: "we were",

			//auto_join_text_reply: "we replied",

			//auto_join_text_url: "we were checking out",

			loading_text: "Loading tweets...",

            hide_avatar: true

		  });





		// Toggle Content!

		$(".hidden").hide();

		$("a.toggle").click(function(event){

			if( $(this).text() == 'Show More' ) {

				$(this).text("Show Less");

			}else{

				$(this).text("Show More");

			}

			$(this).parents(".toggle-container").find(".hidden").slideToggle("normal");

			return false;

		});





        // RSS headlines. -Robin

	    $('#blog-rss').rssfeed('http://blog.bro.org/feeds/posts/default', {

  		    limit: 3,

            header: false,

            titletag: "span",

            date: true,

            dateformat: 'date',

            content: false,

            snippet: true,

            showerror: true,

            errormsg: 'Feed error :-(',

	    });



        // Automatically generated TOC. -Robin

		$(document).ready(function(){

			$("#sidebar-toc").tableOfContents(

				$("#sidebar-toc-content"),      // Scope

	            {

					startLevel: 1,   // H1 through H2

					depth:      2,

                    topLinks:   true

				}

			);

		});



}); // end jQuery