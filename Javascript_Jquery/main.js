/* ===================================
--------------------------------------
	Ahana | Yoga HTML Template
	Version: 1.0
--------------------------------------
======================================*/


'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
		allowParentLinks: true,
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>'
	});
	
	/*----------------
		Search model
	------------------*/
	$('#search-switch').on('click', function() {
		$('.search-model').fadeIn(400);
	});

	$('.search-close-switch').on('click', function() {
		$('.search-model').fadeOut(400,function(){
			$('#search-input').val('');
		});
	});

	/*---------------
		Infor model
	----------------*/
	$('#infor-switch').on('click', function() {
		$('.infor-model-warp').fadeIn(400);
		$('.infor-model-warp').addClass('active');	
	});

	$('.infor-close').on('click', function() {
		$('.infor-model-warp').removeClass('active');
		$('.infor-model-warp').fadeOut(400);
	});


	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});


	/*------------------
		Back to top
	--------------------*/
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 500) {
			$('.back-to-top').fadeIn();
			$('.back-to-top').css('display','flex');
		} else {
			$('.back-to-top').fadeOut();
		}
	});

	$(".back-to-top").click(function() {
		$("html, body").animate({scrollTop: 0}, 1000);
	 });



	/*------------------
		Hero Slider
	--------------------*/
	$('.hero-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		mouseDrag: false,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		items: 1,
		autoplay: true,
		smartSpeed: 1000,
	});

	/*------------------
		Review Slider
	--------------------*/
	$('.review-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
		autoplay: true
	});

	/*------------------
		Classes Slider
	--------------------*/
	$('.classes-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		margin: 30,
		autoplay: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
			1170 : {
				items: 3,
			}
		},
	});

	/*------------------------
		Slasses Other Slider
	------------------------*/
	$('.classes-other-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 0,
		navText:['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>'],
		autoplay: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
		},
	});

	/*------------------------
		Events Other Slider
	-------------------------*/
	$('.event-other-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		margin: 0,
		navText:['<i class="material-icons">keyboard_arrow_left</i>','<i class="material-icons">keyboard_arrow_right</i>'],
		autoplay: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 2
			},
		},
	});

	/*------------------
		Trainer Slider
	--------------------*/
	$('.trainer-slider').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		navText:[' ',' '],
		autoplay: true,
		responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 1
			},
			992 : {
				items: 2,
			}
		},
	});

	/*------------------
		Gallery Slider
	--------------------*/
	$('.gallery-slider').owlCarousel({
		loop: true,
		nav: false,
		dots: false,
		items: 6,
		responsive : {
			0 : {
				items: 2
			},
			475 : {
				items: 3
			},
			768 : {
				items: 4,
			},
			992 : {
				items: 6,
			}
		},
	});

	/*------------------
		Popular Slider
	--------------------*/
	$('.popular-classes-widget').owlCarousel({
		loop: true,
		nav: false,
		dots: true,
		items: 1,
	});

	/*------------------
		Progress Bar
	--------------------*/
	$('.progress-bar-style').each(function() {
		var progress = $(this).data("progress");
		var bgcolor = $(this).data("bgcolor");
		var prog_width = progress + '%';
		if (progress <= 100) {
			$(this).append('<div class="bar-inner" style="width:' + prog_width + '; background: '+ bgcolor +';"><span>' + prog_width + '</span></div>');
		}
		else {
			$(this).append('<div class="bar-inner" style="width:100%; background: '+ bgcolor +';"><span>100%</span></div>');
		}
	});

	/*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

	/*--------------
       Nice Select
    ----------------*/
	$('#language').niceSelect();
	$('.circle-select').niceSelect();

	/*------------------
		Datepicker
	--------------------*/
	$( ".event-date" ).datepicker();

	/*------------------
		Download Form
	--------------------*/

    $("#downloadForm").on("submit", function(event){
		$("#downloadingError").hide();
		$("#downloadingLinks").hide();
    	$("#downloadingCircle").show();
        event.preventDefault();
 
        // var formValues= $(this).serialize();
 		var url = $("#downloadUrl").val();
 		var token = $("#token").val();
        // $.post("/action/download.php", formValues, function(data){
        //     // Display the returned data in browser
        //     $("#result").html(data);
        // });

        $.ajax({
        	type: "POST",
            dataType: "json",
            url: '/include/classes/system/action.php',
            data: {url:url, token:token},
            success:function(data){
            	console.log("success", data);
            	$("#downloadingCircle").hide();
	            if(typeof data.links[0]['url'] != 'undefined') {
	            	$("#downloadingCircle").hide();
	            	$("#downloadingError").hide();
	            	// data.links[0]['url']
	                $("#downloadingLinks").html(`
	                	<div class="row">
	                		<div class="col-md-5">
	                			<div class="col-md-12">
									<video controls class="videoWrap" id="videoSrc" src="" width="100%" height="200px"></video>
									<img id="photoSrc" src="" width="100%" height="200px" style="display: none;" />
	                			</div>
	                			<div class="col-md-12">
	                				<h3 id="videoTitle"></h3>
	                			</div>
	                		</div>
	                		<div class="col-md-7">
								<table class="table">
								  <thead class="thead-light">
								    <tr>
								      <th scope="col">Quality</th>
								      <th scope="col">Type</th>
								      <th scope="col">Size</th>
								      <th scope="col">Links</th>
								    </tr>
								  </thead>
								  <tbody id="forceLinks">
								    <tr>
								      <th class="text-uppercase" scope="row">HD</th>
								      <td class="text-uppercase">MP4</td>
								      <td class="text-uppercase">5 MB</td>
								      <td class="text-uppercase"><a href="#" class="btn btn-success">Download</a></td>
								    </tr>
								  </tbody>
								</table>
	                		</div>
	                	</div>
	                	`);
	                var link_html = "";
	                var i = 0;
	                if(typeof data.source != 'undefined' && data.source == 'dailymotion' ){
						$.each(data.links, function(i, item) {
			                link_html = link_html + `
										    <tr>
												<th class="text-uppercase" scope="row">`+item.quality+`</th>
												<td class="text-uppercase">`+item.type+`</td>
												<td class="text-uppercase">`+item.size+`</td>
												<td ><a id="directDownload" taget="__blank" href="/include/classes/dl?source=dailymotion&dl=`+btoa(i)+`" class="btn btn-success"> <i class="fa fa-arrow-down"></i> Download</a></td>
										    </tr>
										`;
							i++;
		             	});
	                }else{
						$.each(data.links, function(i, item) {
			                link_html = link_html + `
										    <tr>
												<th class="text-uppercase" scope="row">`+item.quality+`</th>
												<td class="text-uppercase">`+item.type+`</td>
												<td class="text-uppercase">`+item.size+`</td>
												<td ><a id="directDownload" taget="__blank" href="/include/classes/dl?source=`+item.url+`&dl=`+btoa(i)+`" class="btn btn-success"> <i class="fa fa-arrow-down"></i> Download</a></td>
										    </tr>
										`;
							i++;
		             	});
		            }

	             	$("#videoTitle").empty().html(data.title);
	             	$("#videoSrc").attr('src', data.links[0]['url'] );
	             	$("#photoSrc").css('display', 'none' );
	             	if(typeof data.type != 'undefined' && data.type == 'photo' ){
	             		$("#videoSrc").css('display', 'none' );
	             		$("#photoSrc").css('display', 'block' );
	             		$("#photoSrc").attr('src', data.links[0]['url'] );
	             	}
	             	$("#forceLinks").empty().html(link_html);
	                $("#downloadingLinks").show();

	             	if( typeof data.links[0]['direct_download'] == 'undefined'  ) {
					}else{
	             		$("#directDownload").attr('href', data.links[0]['url'] );
	             	}

	            } else {
	            	$("#downloadingCircle").hide();
	            	$("#downloadingLinks").hide();
	            	$("#downloadingLinks").empty();
	                // $("#downloadingError").html("ERROR: " + data.responseJSON.message);
	                $("#downloadingError").show();
	            }
            },
            error:function(data){
            	console.log("error", data);
            	$("#downloadingCircle").hide();
            	$("#downloadingLinks").hide();
            	$("#downloadingLinks").empty();
                // $("#downloadingError").html("ERROR: " + data.responseJSON.message);
                $("#downloadingError").show();
            }
        });

    });
	

})(jQuery);

