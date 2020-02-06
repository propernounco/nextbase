jQuery(function ($) {		

	$(".modal").iziModal();

	if($('.big-video-block').length > 0){

		//var vidurl = '../proper/partials/home-video.html'; //DEV
		var vidurl = '../partials/home-video.html'; //COMMENT OUT FOR DEV
		
		$(window).bind('load', function(){

			// setTimeout(function(){
			// 	var video = '<video id="main-video" width="100%" height="100%" muted loop playsinline autoplay>' +
			// 			'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.mp4" type="video/mp4">'+
			// 			'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.webm" type="video/webm">' +
			// 			'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.ogv" type="video/ogv">'+
			// 			'</video>';

			// 	$('.big-video-block').append(video)
			
			// }, 250)

			
				$('.big-video-block').load(vidurl)
				
		})

		
	}

	

	var body = document.getElementsByTagName('body')[0]
	var userAgent = navigator.userAgent;

	function detectIE(ua){

		var msie = ua.indexOf('MSIE');
		if (msie > 0) {
		    // IE 10 or older => return version number
		    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
		    // IE 11 => return version number
		    var rv = ua.indexOf('rv:');
		    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
		    // Edge (IE 12+) => return version number
		  	return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}			

		// other browser
		return false;
	}

	// Get IE or Edge browser version
	var ie_version = detectIE(userAgent);	

	if(!ie_version){
		is_ie = false;
	}
	else{
		
		body.classList.add('ie')

		if(ie_version <= 11){
			is_ie = true;
			$('#ie-modal').iziModal('open')
		}
		else{
			is_ie = false;
		}
	}

	


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

	if($('.venndiagram').length > 0){
		// var venn = new Vivus($('.venndiagram').find('svg'), {
		// 	type: 'oneByOne', duration: 1000
		// });			
		var fired = false;

		new Waypoint.Inview({
			  element: $('.venndiagram')[0],
			  enter: function(direction) {
			    if(direction == 'down'){
			    	// var venn = document.getElementById('venndiagram')
			    	var venfile = $('#venn-div').attr('data-venn-diagram')
			    	if(!fired){
			    		setTimeout(function(){
				    		 new Vivus('venn-div', { duration: 150, type:'oneByOne', file: venfile }, function(){			    		 	
				    		 	$('.venndiagram .fade-in-img').fadeIn()
				    		 });
				    		 fired = true;
				    	}, 50)
			    	}			    	
			    }
			  },
			  entered: function(direction) {
			    
			    if(direction == 'up'){
			  //   	var venn = new Vivus($('#venndiagram'), {
					// 	type: 'oneByOne', duration: 1000
					// });	
			    }
			    if(direction == 'down'){
			    	// var venn = document.getElementById('venndiagram')
			    	// var venfile = $('#venn-div').attr('data-venn-diagram')
			    	// setTimeout(function(){
			    	// 	 new Vivus('venn-div', { duration: 250, type:'oneByOne', file: venfile }, function(){
			    	// 	 	// $('#venndiagram').fadeOut()
			    	// 	 	// var new_img = "<img src='"+ venfile +"'>";
			    	// 	 	// $(new_img).insertBefore('#venndiagram')
			    	// 	 	$('.venniagram').find('.fade-in-img').fadeIn()
			    	// 	 });
			    	// }, 500)
			    }

			  },
			  exit: function(direction) {
			    
			    if(direction == 'down'){
			    	console.log('exit down')	
			    }
			    
			  },
			  exited: function(direction) {
			    if(direction == 'down'){
			    	
			    }
			  }
		})	  		
	}

	if($('.sectioned-info').length > 0){
		
		$('.sectioned-info .section').each(function(){
		
			new Waypoint.Inview({
				  element: $(this),
				  enter: function(direction) {

				  	
				  },
				  entered: function(direction) {				    				   			


				  },
				  exit: function(direction) {
				   	var new_id = this.element.context.id

				    if(direction == 'down'){
				    	console.log(new_id)    	
				    }
				    else if(direction == 'up'){
				    	console.log(new_id)
				    }				    
				    
				    $('.linklist a').removeClass('active')
				    $('.linklist a[href="#'+ new_id +'"]').addClass('active')

				  },
				  exited: function(direction) {
				    if(direction == 'down'){
				    	
				    }
				  }
			})	

		})		  	
	}

	console.log($('.subpage-header.inactive').length)
	
	if($('.subpage-header.inactive').length > 0){

		// if($(window).width() > 768){
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
		//}		
	}

	if($('#header-trigger').length > 0){

		//if($(window).width() > 768){
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
		//}		
	}

	if($('#move-map').length > 0){

		var mapmoved = false;

		var movemap = new Waypoint({
		  element: $('#move-map-start'),
		  handler: function(direction) {		  
		    
		    if(direction == 'down'){		    			    	
		    	if(!mapmoved){
		    		var map = $('#move-map').detach()
		    		map.appendTo('.footer-map')
		    		mapmoved = true;	    						
		    	}		    	
		    }		
		    
		  },
		  offset: '200%'
		})
	
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

						setTimeout(function(){
							$(the_content).addClass('small-float')
							if($(the_content).hasClass('delayed')){
								$(the_content).addClass('float-delay').removeClass('delayed')
							}
						}, 500)
						
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

		//Play Video
	if($('.tilted-video').length > 0){				

		var vidplaced = false; 

		var tilted_video = new Waypoint({
		  element: $('.tilted-video'),
		  handler: function(direction) {		  

		  	var the_vid = $(this)[0].element;
		    if(direction == 'down'){		

		    	if(!vidplaced){
		    		var small_vid = '<video id="small-video" width="100%" height="100%" muted loop playsinline>' +
							'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.mp4" type="video/mp4">' +
							'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.webm" type="video/webm">' +
							'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.ogv" type="video/ogv">' +
							'</video>';									
					$('.tilted-video').append(small_vid)	
					vidplaced = true;				
		    	}

		    	$(the_vid).addClass('in-view').promise().done(function(){
		    		document.getElementById('small-video').play()
		    		setTimeout(function(){
		    			$(the_vid).addClass('small-float')
		    		},300)
		    	})						    		    	
		    }		
		    if(direction == 'up'){	
		    	document.getElementById('small-video').pause()	    	
		    	$(the_vid).removeClass('in-view').promise().done(function(){
		    		$(the_vid).removeClass('small-float')
		    	})
		    }		   		    
		  },
		  offset: '50%'
		})
	}	


	if(document.getElementsByClassName('small-float-add').length > 0){	
		$.each(['small-float-add'], function(i, classname) {			  
		  var elements = $('.' + classname)	
		  elements.each(function() {			  	
		  	console.log('asoid')
		  	new Waypoint.Inview({
				  element: this,
				  enter: function(direction) {
				    
				  },
				  entered: function(direction) {
				    
				    if(direction == 'up'){
				    	$('.small-float-add').addClass('small-float')
				    }
				  },
				  exit: function(direction) {
				    
				    if(direction == 'down'){
				    	console.log('exit down')	
				    }
				    
				  },
				  exited: function(direction) {
				    if(direction == 'down'){
				    	$('.small-float-add').removeClass('small-float')
				    }
				  }
			})	  			   
		  })
		})
	}	

	if($('#main-video').length > 0){

		console.log(document.getElementById('main-video').paused)
		new Waypoint.Inview({
			  element: $('#main-video')[0],
			  enter: function(direction) {
			    
			  },
			  entered: function(direction) {
			    
			    if(direction == 'up'){
			    	document.getElementById('main-video').play();
			    }
			  },
			  exit: function(direction) {
			    
			    if(direction == 'down'){
			    		
			    }
			    
			  },
			  exited: function(direction) {
			    if(direction == 'down'){
			    	document.getElementById('main-video').pause();
			    	document.getElementById('main-video').classList.add('testing');

			    	console.log(document.getElementById('main-video').paused)
			    }
			  }
		})	 
	}
	

	if($('#small-video').length > 0){

		console.log(document.getElementById('small-video').paused)
		new Waypoint.Inview({
			  element: $('#small-video')[0],
			  enter: function(direction) {
			    
			  },
			  entered: function(direction) {			    
			    if(direction == 'up'){
			    	document.getElementById('small-video').play();
			    }
			  },
			  exit: function(direction) {			    
			    if(direction == 'down'){
			    		
			    }			    
			  },
			  exited: function(direction) {
			    if(direction == 'down'){
			    	document.getElementById('small-video').pause();			    	
			    }
			  }
		})	 
	}
	


	// var inview = new Waypoint.Inview({
	//   element: $('#inview-example')[0],
	//   enter: function(direction) {
	//     notify('Enter triggered with direction ' + direction)
	//   },
	//   entered: function(direction) {
	//     notify('Entered triggered with direction ' + direction)
	//   },
	//   exit: function(direction) {
	//     notify('Exit triggered with direction ' + direction)
	//   },
	//   exited: function(direction) {
	//     notify('Exited triggered with direction ' + direction)
	//   }
	// })

	// setTimeout(function(){
	// 	$('.testimonials-slider').slick({
	// 			dots: true,
	// 			infinite: true,
	// 			speed: 300,
	// 			slidesToShow: 1,
	// 			arrows:false,
	// 			autoplay: true,
 //  				autoplaySpeed: 3000,
	// 			responsive: [{
	// 				breakpoint: 768,
	// 				settings:{
	// 					arrows: false
	// 				}
	// 			}]				
	// 	})
	// }, 500)	

	// if($('.home.mobile').length > 0){
	// 	$('.brand-logos').slick({
	// 		dots: false,
	// 		arrows:true,
	// 		infinite: true,
	// 		speed: 300,
	// 		slidesToShow: 1				
	// 	})
	// }
	// else{
	// 	$('.brand-logos').slick({
	// 		dots: false,
	// 		arrows:true,
	// 		infinite: true,
	// 		speed: 300,
	// 		variableWidth: true,
	// 		slidesToShow: 4,
	// 		slidesToScroll: 4
	// 	})	
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



})