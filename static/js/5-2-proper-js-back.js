jQuery(function ($) {		

	$('.parallax-bg').each(function(){
		var bg = $(this).attr('data-bg-img')
		$(this).css('background-image', 'url("'+ bg +'")')
		var divheight = $(this).attr('data-section-height')
		$(this).css('height', divheight)
	})

	function GetURLParameter(sParam){
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
		for (var i = 0; i < sURLVariables.length; i++){
		    var sParameterName = sURLVariables[i].split('=');
		    if (sParameterName[0] == sParam){
		        return sParameterName[1];
		    }
		}
	}


	if($('.home-page').length > 0){
		$('.first-section').addClass('on')
	}

	console.log($('.subpage-header.inactive').length)
	
	if($('.subpage-header.inactive').length > 0){

		if($(window).width() > 768){
			var subpageheaderchange = new Waypoint({
			  element: $('.page-body'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    	
			    	$('.subpage-header').removeClass('inactive'); 		    						
			    }		
			    if(direction == 'up'){		    	
			    	$('.subpage-header').addClass('inactive'); 		    	
			    }		   		    
			  },
			  offset: '-50%'
			})
		}		
	}

	if($('#header-trigger').length > 0){

		if($(window).width() > 768){
			var headerscrolled = new Waypoint({
			  element: $('#header-trigger'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    	
			    	$('.header').addClass('scrolled'); 		    						
			    }		
			    if(direction == 'up'){		    	
			    	$('.header').removeClass('scrolled'); 		    	
			    }		   		    
			  },
			  offset: '-5%'
			})
		}		
	}

	if(document.getElementsByClassName('strategic-circles').length > 0){	

		var circles = new Waypoint({
		  element: $('.strategic-circles'),
		  handler: function(direction) {		  
		    if(direction == 'down'){		    			    	
		    
		    	var eachtime = 1000;
				$('.strategic-circle').each(function(){

					var the_circ_id = $(this).attr('data-attr-id')

					setTimeout(function(){
						console.log(the_circ_id)
						// var circle = new Vivus(the_circ_id, {
						// 	type: 'delayed', duration: 1000
						// });		
					}, eachtime)

					eachtime += 1000
				})

		    }		
		    
		  },
		  offset: '50%'
		})

	}	


	// //Setup letter fadeins
	// $('.appear-text').each(function(){
	// 	var text = $(this).text().split('')
	// 	$this = $(this);
 //    	$this.empty();

	// 	 $.each(text, function (i, el) {
	// 	    $this.append("<span class='letter'>" + el + "</span");
	// 	});		 

	//   	//$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	// });

	//'.ml12 .letter'
	// function textFadeIn(section){
	// 	if($(section).parent().hasClass('opaque')){
	// 		$(section).parent().removeClass('opaque')
	// 	}


	// 	anime.timeline({loop: false})
	// 	  .add({
	// 	    targets: section,
	// 	    translateX: [40,0],
	// 	    translateZ: 0,
	// 	    opacity: [0,1],
	// 	    easing: "easeOutExpo",
	// 	    duration: 300,
	// 	    delay: function(el, i) {
	// 	      return 500 + 30 * i;
	// 	    }
	// 	  })
	// 	  // .add({
	// 	  //   targets: section,
	// 	  //   translateX: [0,-30],
	// 	  //   opacity: [1,0],
	// 	  //   easing: "easeInExpo",
	// 	  //   duration: 1100,
	// 	  //   delay: function(el, i) {
	// 	  //     return 100 + 30 * i;
	// 	  //   }
	// 	  // });
	// }

	// function scroll_to_sec(sec){
	// 	var target = '#' + sec;	    
	// 	console.log(target)
	    
	//     if(target == '#first'){
	//     	if( target.length ) {
	// 	        event.preventDefault();
	// 	        $('html, body').stop().animate({
	// 	            scrollTop: $(target).offset().top + ($(window).height() * 1)
	// 	        }, 1000);
	// 	    }		    
	//     }
	//     else if(target == '#second'){	    	
	//     	if( target.length ) {
	// 	        event.preventDefault();
	// 	        $('html, body').stop().animate({
	// 	            scrollTop: $(target).offset().top + ($(window).height() * 1.25)
	// 	        }, 1000);
	// 	    }
	// 	    console.log('doiasda')
	//     }
	//     else if(target == '#third'){	    	
	//     	if( target.length ) {
	// 	        event.preventDefault();
	// 	        $('html, body').stop().animate({
	// 	            scrollTop: $(target).offset().top + ($(window).height() * .75)
	// 	        }, 1000);
	// 	    }
	// 	    console.log('doiasda')
	//     }
	//      else if(target == '#branding'){	    	
	//     	if( target.length ) {
	// 	        event.preventDefault();
	// 	        $('html, body').stop().animate({
	// 	            scrollTop: $(target).offset().top + ($(window).height() * .85)
	// 	        }, 1000);
	// 	    }
	// 	    console.log('doiasda')
	//     }
	//     else{
	//     	if( target.length ) {
	// 	        event.preventDefault();
	// 	        $('html, body').stop().animate({
	// 	            scrollTop: $(target).offset().top + ($(window).height() * .9)
	// 	        }, 1000);
	// 	    }	
	//     }
	// }
	
	// var home_sec = GetURLParameter('home_sec');
	// if(home_sec){
	// 	scroll_to_sec(home_sec);
	// }



	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = $(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          };
	        });
	      }
	    }
	});



	$('#nav_toggle').on('click', function(e) {
	   $(this).toggleClass('active');
	   $('#nav-overlay').toggleClass('open');
	   // $('body').toggleClass('no-scroll')
	   $('.subpage-header').toggleClass('active')
	   $('.page-logo').toggleClass('hide')
	   // if($(window).width() < 768){
	   // 		$('header').toggleClass('hidden')
	   // }
	});

	$('#nav_toggle a').on('click', function(e){
		e.preventDefault()
	})

	
	$('.mobile-trigger').on('click', function(e){
		e.preventDefault();
	})

	$('.nav-overlay a').on('click', function(e){
		if($(this).hasClass('go-link')){
			$('#nav_toggle').removeClass('active');
		   	$('#nav-overlay').removeClass('open');
		   	$('body').removeClass('no-scroll')
		}
		else{
			e.preventDefault();
			$('#nav_toggle').removeClass('active');
		   	$('#nav-overlay').removeClass('open');
		   	$('body').removeClass('no-scroll')
		}		
	})

	if(document.getElementsByClassName('fade-in-content-left').length > 0){	
			$.each(['fade-in-content-left'], function(i, classname) {
				
			  var elements = $('.' + classname)		  	
			  elements.each(function() {
			    new Waypoint({
			      element: this,
			      handler: function(direction) {
			        var previousWaypoint = this.previous()
			        var nextWaypoint = this.next()
			        var the_content = $(this)[0].element;
			        if(direction == 'down'){		        	
			       		if($(the_content).hasClass('delayed')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-left');
			        		}, 250)
						}		
						else if($(the_content).hasClass('delayed-x')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-left');
			        		}, 500)
						}	
						else if($(the_content).hasClass('delayed-2x')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-left');
			        		}, 750)
						}		
						else if($(the_content).hasClass('delayed-3x')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-left');
			        		}, 1000)
						}		
						else{
							$(the_content).addClass('animation fade-in-left');	
						}	 	
			        }


			      },
			      offset: '80%',
			      group: classname
			    })
			  })
			})
		}	

		if(document.getElementsByClassName('fade-in-content-right').length > 0){	
			$.each(['fade-in-content-right'], function(i, classname) {
				
			  var elements = $('.' + classname)		  	
			  elements.each(function() {
			    new Waypoint({
			      element: this,
			      handler: function(direction) {
			        var previousWaypoint = this.previous()
			        var nextWaypoint = this.next()
			        var the_content = $(this)[0].element;
			        if(direction == 'down'){		        	
			        	
			        	if($(the_content).hasClass('delayed')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-right');
			        		}, 250)
						}		
						else if($(the_content).hasClass('delayed-x')){
			        		setTimeout(function(){
			        			$(the_content).addClass('animation fade-in-right');
			        		}, 500)
						}		
						else{
							$(the_content).addClass('animation fade-in-right');
						}	 	
			        }
			        
			      },
			      offset: '80%',
			      group: classname
			    })
			  })
			})
		}


	// function skrollrInit() {

	//     //initialize skrollr
	//     skrollr.init({
	//         smoothScrolling: true,
	//         //forceHeight: false
	//     });

	//     // disable skrollr if using handheld device
	//     if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	//         skrollr.init().destroy();
	//     }

	// };

	//execute function
	// if($('.home').length > 0  || $('.single-portfolio').length > 0){
	// 	skrollrInit();		
	// }

	// if($('.home').length > 0 ){
	// 	$('#proper').fadeIn();
	// 	var proper = new Vivus('proper', {
	// 		type: 'oneByOne', duration: 1000
	// 	});
	// }


	
	$(".modal").iziModal();
	

	// $(window).bind('load', function(){

	// 	setTimeout(function(){				
	// 	// $('.logo').addClass('filled').delay(1500).addClass('scrolled')

	// 		$('.loading-page .show-body-text').addClass('fade-in-up')
	// 		$('.logo').addClass('filled')

	// 		setTimeout(function(){
	// 			$('.loading-page').addClass('remove')
	// 		}, 2000)

	// 		setTimeout(function(){
				
	// 			$('.home').removeClass('loading')
	// 			$('body').removeClass('no-scroll')			

	// 			setTimeout(function(){
	// 				// textFadeIn('.first-section h1 .letter')
	// 			}, 100)
	// 			setTimeout(function(){
	// 				$('.first-section .fade-in-text').removeClass('faded')				
	// 			}, 400)

	// 			setTimeout(function(){
	// 				$('.first-section .page-title.with-underline').addClass('active')

	// 				var video = '<video id="main-video" width="100%" height="100%" muted loop playsinline>' + 
	// 				'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.mp4" type="video/mp4">' + 
	// 				'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.webm" type="video/webm">' + 
	// 				'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.ogv" type="video/ogv">' + 
	// 				'</video>';				

	// 				$(".home .main-video-bg").append(video)

	// 				if(document.getElementById('main-video')){
	// 					document.getElementById('main-video').play()				
	// 				}										

	// 			}, 600)

	// 		}, 2400)

	// 	}, 2400)	

	// })
	


	$('.show-contact').on('click', function(e){
		e.preventDefault();
		$('#nav-overlay').removeClass('open')
		$('#nav-toggle').removeClass('active')
		$('body').removeClass('no-scroll')
		$('.home').addClass('screen-out')
		setTimeout(function(){
			$('.contact-screen').addClass('active')
		}, 300)	
	})

	$('.contact-screen .close a').on('click', function(e){
		e.preventDefault();
		$('.contact-screen').removeClass('active')
		setTimeout(function(){
			$('.home').removeClass('screen-out')			
		}, 300)	
	})
	// setTimeout(function(){
	// 	$('.home').addClass('screen-out')
	// }, 8000)


	// function get_casestudy(casestudy){
			
	// 	var myJson = [];
	// 	$.getJSON( "json/case-studies.json", function( data ) {		 	
	// 	 	myJson = data;		 	


	// 	 	console.log(myJson)
	// 	 	var study = myJson[casestudy]
	// 	 	$('#case-study-screen .top-breadcrumbs p').empty().append(study.top_tag)
	// 	 	$('#case-study-screen .page-title').empty().append(study.title)
	// 	 	$('#case-study-screen #the-goal-block p').empty().append(study.goal)
	// 	 	$('#case-study-screen #approach-block p').empty().append(study.approach)
	// 	 	$('#case-study-screen #work-block p').empty().append(study.work)
	// 	 	//$('#case-study-screen .breadcrumbs p').empty().append(study.title)
	// 	});

	// }

	// $('.show-case-study').on('click', function(e){
	// 	e.preventDefault();
	// 	$('.home').addClass('screen-out')
		
	// 	get_casestudy('wewood')

	// 	setTimeout(function(){
	// 		$('.case-study-screen').addClass('active')
	// 	}, 300)	
	// })

	// $('.case-study-screen .close a').on('click', function(e){
	// 	e.preventDefault();
	// 	$('.case-study-screen').removeClass('active')
	// 	setTimeout(function(){
	// 		$('.home').removeClass('screen-out')			
	// 	}, 300)	
	// })

	// if($('#first').length > 0){
	// 	if($(window).width() > 768){
	// 		var logo_trigger_one = new Waypoint({
	// 		  element: $('#first'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    	
	// 		    	$('.page-logo').addClass('moved')
	// 				$('.page-nav').addClass('moved')
	// 		    }		
	// 		    if(direction == 'up'){		    	
	// 		    	$('.page-logo').removeClass('moved')
	// 		    	$('.page-nav').removeClass('moved')
	// 		    }		   		    
	// 		  },
	// 		  offset: '50%'
	// 		})

	// 		var logo_trigger_two = new Waypoint({
	// 		  element: $('#first'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    	
	// 		    	$('.page-logo').addClass('in-view')
			    	    		    	
	// 		    }		
	// 		    if(direction == 'up'){		    	
	// 		    	$('.page-logo').removeClass('in-view')	    	
	// 		    }		   		    
	// 		  },
	// 		  offset: '10%'
	// 		})

	// 		var vids_added = false;

	// 		var logo_trigger_three = new Waypoint({
	// 		  element: $('#first'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    		    	
	// 		    	// $('.first-section').css('visibility','hidden')	
	// 		    	$('.first-section .title-area').addClass('fade-out-up')		
	// 		    	$('.first-section .fade-in-text').addClass('fade-out-up')				
	// 		    	$('.first-section .down-indi').addClass('fade-out-up')			

	// 		    	if(!vids_added){
	// 		    		var video_two = '<video width="320" height="240" id="bg-video-digital-marketing" muted loop><source src="https://res.cloudinary.com/propernoun/video/upload/q_auto/proper-dm-short.mp4" type="video/mp4"></video>';
	// 					$(".fourth-section .video-bg").append(video_two)

	// 					var video_three = '<video width="100%" height="100%" muted loop id="ig-video-ad-demo"><source src="https://res.cloudinary.com/propernoun/video/upload/q_auto/ig-sample-video-ad.mp4" type="video/mp4"></video>';
	// 					$('.iphone-one .image-ad').append(video_three)

	// 					vids_added = true;
	// 		    	}
	// 		    }		
	// 		    if(direction == 'up'){		    		    	
	// 		    	// $('.first-section').css('visibility','visible')
	// 		    	$('.first-section .title-area').removeClass('fade-out-up')		
	// 		    	$('.first-section .fade-in-text').removeClass('fade-out-up')				
	// 		    	$('.first-section .down-indi').removeClass('fade-out-up')		

	// 		    }		   		    
	// 		  },
	// 		  offset: '50%'
	// 		})


	// 		var nav_float_trigger = new Waypoint({
	// 		  element: $('#first'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    	
	// 		    	$('.nav-float').addClass('active')
	// 		    	$('.line-contain').hide();
	// 				// $('.call-cta-btn').addClass('fade-in-up')		    		    	
	// 		    }		
	// 		    if(direction == 'up'){		    	
	// 		    	$('.nav-float').removeClass('active')
	// 		    	$('.line-contain').show();
	// 		    }		   		    
	// 		  },
	// 		  offset: '10%'
	// 		})
	// 	}
	// 	else{

	// 	}
		
	// }

	if(document.getElementsByClassName('fade-in-image').length > 0){	
		$.each(['fade-in-image'], function(i, classname) {			
		  var elements = $('.' + classname)		  	
		  elements.each(function() {
		    new Waypoint({
		      element: this,
		      handler: function(direction) {
		        var previousWaypoint = this.previous()
		        var nextWaypoint = this.next()
		        var the_content = $(this)[0].element;
		        if(direction == 'down'){		        	
		        	$(the_content).addClass('animation fade-in-up');
		        }		        
		      },
		      offset: '10%',
		      group: classname
		    })
		  })
		})
	}	

	if(document.getElementsByClassName('float-trigger').length > 0){	
		$.each(['float-trigger'], function(i, classname) {			
		  var elements = $('.' + classname)		  	
		  elements.each(function() {
		    new Waypoint({
		      element: this,
		      handler: function(direction) {
		        var previousWaypoint = this.previous()
		        var nextWaypoint = this.next()
		        var the_content = $(this)[0].element;
		        if(direction == 'down'){		        	
		        	$(the_content).addClass('item-float');
		        }		        
		        else if(direction == 'up'){		        	
		        	$(the_content).removeClass('item-float');
		        }
		      },
		      offset: '80%',
		      group: classname
		    })
		  })
		})
	}	
	

	if(document.getElementsByClassName('fade-in-content').length > 0){	
		$.each(['fade-in-content'], function(i, classname) {			  
		  var elements = $('.' + classname)		  	
		  elements.each(function() {		  	
		    new Waypoint({
		      element: this,
		      handler: function(direction) {
		        var previousWaypoint = this.previous()
		        var nextWaypoint = this.next()
		        var the_content = $(this)[0].element;
		        if(direction == 'down'){		        	
		        	if($(the_content).hasClass('delayed')){
		        		setTimeout(function(){
		        			$(the_content).addClass('animation fade-in-up');
		        		}, 250)
					}		
					else if($(the_content).hasClass('delayed-x')){
		        		setTimeout(function(){
		        			$(the_content).addClass('animation fade-in-up');
		        		}, 500)
					}		
					else{
						$(the_content).addClass('animation fade-in-up');  	
					}		        	

					if($(the_content).hasClass('small-float-add')){
						$(the_content).addClass('small-float')
						if($(the_content).hasClass('delayed')){
							$(the_content).addClass('float-delay').removeClass('delayed')
						}
					}

		        }		        
		      },
		      offset: '80%',
		      group: classname

		    })
		  })
		})
	}	

	if(document.getElementsByClassName('line-bg-sec').length > 0){	
		$.each(['line-bg-sec'], function(i, classname) {			  
		  var elements = $('.' + classname)		  	
		  elements.each(function() {		  	
		    new Waypoint({
		      element: this,
		      handler: function(direction) {
		        var previousWaypoint = this.previous()
		        var nextWaypoint = this.next()
		        var the_content = $(this)[0].element;
		        if(direction == 'down'){		        			        	
					$(the_content).addClass('on');  						
		        }		        
		        else{
		        	if(!$(the_content).hasClass('unslide')){
		        		$(the_content).removeClass('on');  					
		        	}		        	
		        }
		      },
		      offset: '80%',
		      group: classname
		    })
		  })
		})
	}	
	

	//Play Video
	// if($('.iphone-one').length > 0){				

	// 	var video_trigger = new Waypoint({
	// 	  element: $('.iphone-one'),
	// 	  handler: function(direction) {		  
	// 	    if(direction == 'down'){		    			    	
	// 	    	$('#ig-video-ad-demo')[0].play(); 
	// 	    	$('#bg-video-digital-marketing')[0].play();
	// 	    	console.log('fish')
	// 			// $('.call-cta-btn').addClass('fade-in-up')		    		    	
	// 	    }		
	// 	    if(direction == 'up'){		    	
	// 	    	$('#ig-video-ad-demo')[0].pause(); 		    		    		   		    	    		   
	// 	    	$('#bg-video-digital-marketing')[0].pause();
	// 	    }		   		    
	// 	  },
	// 	  offset: '0%'
	// 	})
	// }	

	if($('.development-section').length > 0){				

		var dev_sec_trigger = new Waypoint({
		  element: $('.development-section'),
		  handler: function(direction) {		  
		    if(direction == 'down'){		    			    	
		    	$('.clip-window').addClass('scroll-img').promise().done(function(){
		    		setTimeout(function(){
		    			//$('.browser-window').addClass('small-float')
		    		},300)
		    	})		 		    	
		    }		
		    if(direction == 'up'){		    	
		    	$('.clip-window').removeClass('scroll-img').removeClass('small-float'); 		    	
		    }		   		    
		  },
		  offset: '80%'
		})
	}	

	// 

	//Play Video
	// if($('#branding').length > 0){				


	// 	var branding_logo_on_trigger = new Waypoint({
	// 	  element: $('#branding'),
	// 	  handler: function(direction) {		  
	// 	    if(direction == 'down'){		    			    	
	// 	    	$('.page-logo').addClass('color'); 		    	
	// 			$('.nav-float').addClass('color'); 	
						    		    	
	// 	    }		
	// 	    if(direction == 'up'){		    	
	// 	    	$('.page-logo').removeClass('color'); 		    	
	// 			$('.nav-float').removeClass('color'); 		    			    		    	
	// 			console.log('up')	    			    		    	
	// 	    }		   		    
	// 	  },
	// 	  offset: '-65%'
	// 	})
	// }	


		//Play Video
	if($('.tilted-video').length > 0){				


		var tilted_video = new Waypoint({
		  element: $('.tilted-video'),
		  handler: function(direction) {		  

		  	var the_vid = $(this)[0].element;
		    if(direction == 'down'){		    			    	
		    	$(the_vid).addClass('in-view').promise().done(function(){
		    		setTimeout(function(){
		    			$(the_vid).addClass('small-float')
		    		},300)
		    	})						    		    	
		    }		
		    if(direction == 'up'){		    	
		    	$(the_vid).removeClass('in-view').promise().done(function(){
		    		$(the_vid).removeClass('small-float')
		    	})
		    }		   		    
		  },
		  offset: '50%'
		})
	}	

	if($('.our-focus').length > 0){
		var our_focus = new Waypoint({
		  element: $('.our-focus.second-section'),
		  handler: function(direction) {		  
		    if(direction == 'down'){		    

		    	$('.remove-title').fadeOut();

		    	$('.circle-left').addClass('in-view')
				$('.circle-left .info').addClass('active')				    	

				$('.circle-right').addClass('in-view')
				$('.circle-right .info').addClass('active')				    	

				$('.circle-center').addClass('in-view')
				$('.circle-center .info').addClass('active')				    	
		    }		
		    if(direction == 'up'){		    	
		  //    	$('.circle-left').removeClass('in-view')
				// $('.circle-left .info').removeClass('active')				    	

				// $('.circle-right').removeClass('in-view')
				// $('.circle-right .info').removeClass('active')				    	

				// $('.circle-center').removeClass('in-view')
				// $('.circle-center .info').removeClass('active')				    	
		    }		   		    
		  },
		  offset: '0%'
		})
	}


	// if($('#fourth').length > 0){				

	// 	var fifth_sec_on_trigger = new Waypoint({
	// 	  element: $('#fourth'),
	// 	  handler: function(direction) {		  
	// 	    if(direction == 'down'){		    			    	
	// 	    	$('.page-logo').removeClass('color'); 		    	
	// 			$('.nav-float').removeClass('color'); 	
	// 			console.log('down')	    		    			    		    						    	
	// 	    }		
	// 	    if(direction == 'up'){		    	
	// 	    	$('.page-logo').addClass('color'); 		    	
	// 			$('.nav-float').addClass('color'); 		    
	// 			console.log('up')	    				    		    	
	// 	    }		   		    
	// 	  },
	// 	  offset: '-85%'
	// 	})
	// }	


	setTimeout(function(){
		$('.testimonials-slider').slick({
				dots: true,
				infinite: true,
				speed: 300,
				slidesToShow: 1,
				arrows:false,
				autoplay: true,
  				autoplaySpeed: 3000,
				responsive: [{
					breakpoint: 768,
					settings:{
						arrows: false
					}
				}]				
		})
	}, 500)	

	if($('.home.mobile').length > 0){
		$('.brand-logos').slick({
			dots: false,
			arrows:true,
			infinite: true,
			speed: 300,
			slidesToShow: 1				
		})
	}
	else{
		$('.brand-logos').slick({
			dots: false,
			arrows:true,
			infinite: true,
			speed: 300,
			variableWidth: true,
			slidesToShow: 4,
			slidesToScroll: 4
		})	
	}

	// if($('.portfolio-page').length > 0){	
	// 	// textFadeIn('h1.page-title .letter')
	// 	// textFadeIn('h2.subheader .letter')
	// 	setTimeout(function(){
	// 		$('.with-underline-two').addClass('active')
	// 		$('.intro-area .fade-in-text').removeClass('faded')		

	// 	}, 250)
	// }

	// if($('.services').length > 0){
	// 	setTimeout(function(){
	// 		textFadeIn('h1.appear-text .letter')
	// 	}, 0)		
	// }

	// if($('.about').length > 0){
	// 	$('.page-logo').addClass('dark')
	// 	$('.nav_button_container').addClass('dark')

	// 	// textFadeIn('h1.appear-text .letter')

	// 	setTimeout(function(){
	// 		$('.title-area h1').addClass('active')	
	// 	}, 600)

	// 	setTimeout(function(){			
	// 		$('.first-section .fade-in-text').removeClass('faded')		

	// 	}, 1200)
		

	// 	if($('#second').length > 0){				
			
	// 	}	
	// }

	$('.show-seo-audit').on('click', function(){
		$('#seo-audit-modal').iziModal('open')
	})

	$('.download-deck').on('click', function(e){
		e.preventDefault();
		$('#deck-modal').iziModal('open');
	})

	$('.bigcom-vs-magento').on('click', function(e){
		e.preventDefault();
		$('#bigcom-vs-magento-modal').iziModal('open');
	})

	
	if($('.services').length > 0){
		if($(window).width() > 768){
			var single_port_logo_change = new Waypoint({
			  element: $('.services-section'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    	
			    	$('.page-logo').addClass('dark'); 		    	
					$('.nav_button_container').addClass('dark'); 	
			    }		
			    if(direction == 'up'){		    	
			    	$('.page-logo').removeClass('dark'); 		    	
					$('.nav_button_container').removeClass('dark'); 								    		    
			    }		   		    
			  },
			  offset: '5%'
			})
		}		
	}

	


	if($('.single-portfolio').length > 0){		

		if($(window).width() > 768){

			$('.page-logo').addClass('dark')
			$('.nav_button_container').addClass('dark')


			var single_port_logo_change = new Waypoint({
			  element: $('#first-section'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    	
			    	$('.page-logo').removeClass('dark'); 		    	
					$('.nav_button_container').removeClass('dark'); 	
			    }		
			    if(direction == 'up'){		    	
			    	$('.page-logo').addClass('dark'); 		    	
					$('.nav_button_container').addClass('dark'); 								    		    
			    }		   		    
			  },
			  offset: '5%'
			})

			var single_port_logo_revert = new Waypoint({
			  element: $('#second-section'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    				    	
					$('.page-logo').addClass('dark'); 		    	
					$('.nav_button_container').addClass('dark'); 
			    }		
			    if(direction == 'up'){		    	
			    	$('.page-logo').removeClass('dark'); 		    	
					$('.nav_button_container').removeClass('dark'); 							    		    
			    }		   		    
			  },
			  offset: '5%'
			})
		}		
	}

	$('.category-links a').on('click', function(e){
		e.preventDefault();
		$('.category-links a').removeClass('active')
		$(this).addClass('active')
	})

})