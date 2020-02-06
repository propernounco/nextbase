//import MicroModal from 'micromodal';  // es6 module
	

	
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
			// $('#ie-modal').iziModal('open')
		}
		else{
			is_ie = false;
		}
	}


	//Modal Stuff
	MicroModal.init();
	

	for(var si = 0; si < document.getElementsByClassName('show-seo-audit').length; si++){
		document.getElementsByClassName('show-seo-audit')[si].addEventListener('click', function(e){
		  // Todo...
		  e.preventDefault();
		  MicroModal.show('seo-audit-modal');
		});
	}

	for(var si = 0; si < document.getElementsByClassName('download-deck').length; si++){
		document.getElementsByClassName('download-deck')[si].addEventListener('click', function(e){
		  // Todo...
			e.preventDefault();
			document.getElementById('nav_toggle').classList.remove('active')
			document.getElementById('nav-overlay').classList.remove('open');		   	    
	    	document.getElementsByClassName('logo')[0].classList.remove('hide')	
		  	MicroModal.show('deck-modal');

		});
	}
	// $('.show-seo-audit').on('click', function(){
	// 	$('#seo-audit-modal').iziModal('open')
	// })

	// $('.download-deck').on('click', function(e){
	// 	e.preventDefault();
	// 	$('#deck-modal').iziModal('open');
	// })

	// $('.bigcom-vs-magento').on('click', function(e){
	// 	e.preventDefault();
	// 	$('#bigcom-vs-magento-modal').iziModal('open');
	// })

	//Modal Stuff

	var parallaxBgs = document.getElementsByClassName('parallax-bg')
	

	for(var ai = 0; ai < parallaxBgs.length ; ai++){
		parallaxBgs[ai].style.background = 'url("'+ parallaxBgs[ai].getAttribute('data-bg-img') +'")'	
		parallaxBgs[ai].style.height = 'url("'+ parallaxBgs[ai].getAttribute('data-section-height') +'")'	
	}

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


	if(document.getElementById('header-trigger')){

		//if(window.innerWidth > 768){
			var headerscrolled = new Waypoint({
			  element: document.getElementById('header-trigger'),
			  handler: function(direction) {		  
			    if(direction == 'down'){		    			    	
			    	document.getElementsByClassName('header')[0].classList.add('scrolled'); 		    						

			    	if(document.getElementsByClassName('single-case-study').length > 0){
						document.querySelectorAll('.sidebar')[0].classList.add('scrolled')
						document.querySelectorAll('.sidebar .linkList')[0].classList.add('scrolled')
			    	}
			    }		
			    if(direction == 'up'){		    	
			    	document.getElementsByClassName('header')[0].classList.remove('scrolled'); 		    	

			    	if(document.getElementsByClassName('single-case-study').length > 0){
						document.querySelectorAll('.sidebar')[0].classList.remove('scrolled')
						document.querySelectorAll('.sidebar .linkList')[0].classList.remove('scrolled')
			    	}
			    }		   		    
			  },
			  offset: '-5%'
			})
		//}		
	}

	//Navigation suff
	Array.from(document.getElementById('nav_toggle').childNodes).map(function(link){
		link.addEventListener('click', function(e){		
			e.preventDefault();
			document.getElementById('nav_toggle').classList.toggle('active')
			document.getElementById('nav-overlay').classList.toggle('open');		   	    
		    document.getElementsByClassName('logo')[0].classList.toggle('hide')	   
		}) 
	})

	// document.querySelectorAll('#nav_toggle a')[0].addEventListener('click', function(e){
	// 	e.preventDefault();
	// }) 
	
	if(document.getElementsByClassName('mobile-trigger').length > 0){
		document.getElementsByClassName('mobile-trigger')[0].addEventListener('click', function(e){
			e.preventDefault();		
		});
	}
	
	document.getElementById('close-nav').addEventListener('click', function(e){
		e.preventDefault()
		document.getElementById('nav_toggle').classList.remove('active')
		document.getElementById('nav-overlay').classList.remove('open');		   	    
	    document.getElementsByClassName('logo')[0].classList.remove('hide')
	})
	
	console.log(document.getElementsByClassName('parent-link').length)
	
	for(var nl = 0; nl < document.getElementsByClassName('parent-link').length; nl++){		
		document.getElementsByClassName('parent-link')[nl].addEventListener('click', function(e){
			e.preventDefault()

			for(var ni = 0; ni < document.querySelectorAll('.first-nav-section ul li').length; ni++){
				document.querySelectorAll('.first-nav-section ul li')[ni].classList.remove('on')
			}			

			this.parentNode.classList.toggle('on')			

		})
	}

	// document.querySelectorAll('.nav-overlay a')[0].addEventListener('click', function(e){
	// 	if(this.classList.contains('go-link')){
	// 		document.getElementById('nav_toggle').classList.remove('active')
	// 		document.getElementById('nav_overlay').classList.remove('open')
	// 		document.body.classList.remove('no-scroll')		 
	// 	}
	// 	else{
	// 		e.preventDefault();
	// 		// document.getElementById('nav_toggle').classList.remove('active')
	// 		// document.getElementById('nav_overlay').classList.remove('open')
	// 		// document.body.classList.remove('no-scroll')
	// 	}		
	// });



	//Navigation stuff
	
	//Fade In Stuff

	if(document.getElementsByClassName('fade-in-content').length > 0){	
		var fi_content = document.getElementsByClassName('fade-in-content');
		for(var fic = 0; fic < fi_content.length; fic++){
			
			var elem = fi_content[fic]
			var prev_elem = fi_content[fic - 1]
			var next_elem = fi_content[fic + 1]	
	
		    new Waypoint({
		      element: elem,
		      handler: function(direction) {		        
		        var the_content = this.element;
		        if(direction == 'down'){		        	
					
		         	if(the_content.classList.contains('delayed')){		         		
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-up');
		        		}, 250)
		         	}		        	
		         	else if(the_content.classList.contains('delayed-x')){
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-up');
		        		}, 500)
		         	}
		         	else{
						the_content.classList.add('animation', 'fade-in-up');  	
		         	}		         	
		         	if(the_content.classList.contains('small-float-add')){
						setTimeout(function(){
							the_content.classList.add('small-float')
							if(the_content.classList.contains('delayed')){
								the_content.classList.add('float-delay').remove('delayed')
							}
						}, 500)
		         	}		  
				}							        	    
		      },		     
		      offset: '80%',
		      group: 'fade-in-content'		    
		  })
		}
	}	

	if(document.getElementsByClassName('fade-in-content-left').length > 0){	
		var fi_content = document.getElementsByClassName('fade-in-content-left');
		for(var fic = 0; fic < fi_content.length; fic++){
			
			var elem = fi_content[fic]
			var prev_elem = fi_content[fic - 1]
			var next_elem = fi_content[fic + 1]	

		    new Waypoint({
		      element: elem,
		      handler: function(direction) {		        
		        var the_content = this.element;
		        if(direction == 'down'){		        	
					
		         	if(the_content.classList.contains('delayed')){		         		
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-left');
		        		}, 250)
		         	}		        	
		         	else if(the_content.classList.contains('delayed-x')){
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-left');
		        		}, 500)
		         	}
		         	else{
						the_content.classList.add('animation', 'fade-in-left');  	
		         	}		         	
		         	if(the_content.classList.contains('small-float-add')){
						setTimeout(function(){
							the_content.classList.add('small-float')
							if(the_content.classList.contains('delayed')){
								the_content.classList.add('float-delay').remove('delayed')
							}
						}, 500)
		         	}		  
				}							        	    
		      },		     
		      offset: '80%',
		      group: 'fade-in-content-left'		    
		  })
		}
	}	

	if(document.getElementsByClassName('fade-in-content-right').length > 0){	
		var fi_content = document.getElementsByClassName('fade-in-content-right');
		for(var fic = 0; fic < fi_content.length; fic++){
			
			var elem = fi_content[fic]
			var prev_elem = fi_content[fic - 1]
			var next_elem = fi_content[fic + 1]	

	
		    new Waypoint({
		      element: elem,
		      handler: function(direction) {		        
		        var the_content = this.element;
		        if(direction == 'down'){		        	
					
		         	if(the_content.classList.contains('delayed')){		         		
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-right');
		        		}, 250)
		         	}		        	
		         	else if(the_content.classList.contains('delayed-x')){
						setTimeout(function(){
		        			the_content.classList.add('animation', 'fade-in-right');
		        		}, 500)
		         	}
		         	else{
						the_content.classList.add('animation', 'fade-in-right');  	
		         	}		         	
		         	if(the_content.classList.contains('small-float-add')){
						setTimeout(function(){
							the_content.classList.add('small-float')
							if(the_content.classList.contains('delayed')){
								the_content.classList.add('float-delay').remove('delayed')
							}
						}, 500)
		         	}		  
				}							        	    
		      },		     
		      offset: '80%',
		      group: 'fade-in-content-right'		    
		  })
		}
	}	

	if(document.getElementsByClassName('fade-in-image').length > 0){	

		var fi_image = document.getElementsByClassName('fade-in-image');
		for(var fii = 0; fii < fi_image.length; fii++){
			
			var elem = fi_image[fii]
			var prev_elem = fi_image[fii - 1]
			var next_elem = fi_image[fii + 1]				
	
		    new Waypoint({
		      element: elem,
		      handler: function(direction) {
		      	var the_content = this.element;
		        var previousWaypoint = prev_elem
		        var nextWaypoint = next_elem
		        var the_content = elem;
		        if(direction == 'down'){		        	
		        	the_content.classList.add('animation', 'fade-in-up');
		        }		        
		      },
		      offset: '10%',
		      group: 'fade-in-image'	    
		  })
		}
		
	}	

	//Fade In Stuff
	

	//Float trigger

	if(document.getElementsByClassName('float-trigger').length > 0){

		var ftrigger = document.getElementsByClassName('float-trigger');
		for(var ft = 0; ft < ftrigger.length; ft++){
			
			var elem = ftrigger[ft]
			var prev_elem = ftrigger[ft - 1]
			var next_elem = ftrigger[ft + 1]	
	
		    new Waypoint({
		      element: elem,
		      handler: function(direction) {		      	
		        var previousWaypoint = prev_elem
		        var nextWaypoint = next_elem
		        var the_content = this.element;
		        if(direction == 'down'){		        	
		        	the_content.classList.add('item-float');
		        }		        
		        else if(direction == 'up'){		        	
		        	the_content.classList.remove('item-float');
		        }
		      },
		      offset: '10%',
		      group: 'float-trigger'	    
		  })
		}

	}	

	//Float trigger


	// if(document.getElementsByClassName('sectioned-info').length > 0){
	// 	var sectioned_info = document.getElementsByClassName('sectioned-info')
	// 	for(var si = 0; si < sectioned_info.length; si++){
	// 		var elem = sectioned_info[si];
	// 		new Waypoint.Inview({
	// 			element: elem,
	// 			exit: function(direction){
	// 				var new_id = this.element.context.id				    			    				    
	// 			    document.querySelectorAll('.linklist a').classList.remove('active')
	// 			    document.querySelectorAll('.linklist a[href="#'+ new_id +'"]').classList.add('active')
	// 			}
	// 		})
	// 	}
	// }
	
	if(document.getElementsByClassName('line-bg-sec').length > 0){	
				
		line_bg = document.getElementsByClassName('line-bg-sec');

		for(var bg = 0; bg < line_bg.length; bg++){
			var elem = line_bg[bg];
			new Waypoint({
				element: elem,
				handler: function(direction){
					var the_content = this.element
					if(direction == 'down'){		        
						if(window.innerWidth > 768){
							the_content.classList.add('on');  						
						}			        							
			        }		        
			        else{
			        	// if(!the_content.classList.contains('unslide')){
			        	// 	the_content.classList.remove('on');  					
			        	// }		        	
			        }
				},
				offset: '80%',
		      	group: 'line-bg-sec'
			})
		}
	}	
	


	if(document.getElementsByClassName('small-float-add').length > 0){	
		var sf_content = document.getElementsByClassName('small-float-add');
		for(var sf = 0; sf < sf_content.length; sf++){
			
			var elem = sf_content[sf]

		    new Waypoint.Inview({
				element: elem,				  
				entered: function(direction) {				    
				    if(direction == 'up'){
				    	elem.classList.add('small-float')
				    }
				},				  
				exited: function(direction) {
				    if(direction == 'down'){
				    	elem.classList.remove('small-float')
				    }
				}
			})	  	
		}
	}	


	function anchorLinkHandler(e) {
	    e.preventDefault();	    
	    var targetID = this.href.slice(this.href.indexOf("#"));
	    if(targetID == '#none'){
	    	console.log('doodoo')
			return;
	    }
	    var element = document.querySelector(targetID);
	    var originalTop = element.getBoundingClientRect().top;
	    var originalLeft = element.getBoundingClientRect().left;

	    window.scrollBy({
	        top: originalTop,
	        left: originalLeft,
	        behavior: "smooth"
	    });

	    var checkIfDone = setInterval(function() {
	        currentTop = element.getBoundingClientRect().top;
	        currentLeft = element.getBoundingClientRect().left;
	        if (Math.floor(currentTop) === 0 && Math.floor(currentLeft) === 0) {
	            element.tabIndex = "-1";
	            element.focus();
	            clearInterval(checkIfDone);
	        }
	    }, 100);
	}

	var linksToAnchors = document.querySelectorAll('a[href^="#"]');

	linksToAnchors.forEach(function(each){each.onclick = anchorLinkHandler});


	// if($('.subpage-header.inactive').length > 0){

	// 	// if($(window).width() > 768){
	// 		var subpageheaderchange = new Waypoint({
	// 		  element: $('.page-body'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    	
	// 		    	$('.subpage-header').removeClass('inactive'); 		    						
	// 		    }		
	// 		    if(direction == 'up'){		    	
	// 		    	$('.subpage-header').addClass('inactive'); 		    	
	// 		    }		   		    
	// 		  },
	// 		  offset: '-50%'
	// 		})
	// 	//}		
	// }

	function serialize(form) {

		// Setup our serialized data
		var serialized = [];

		// Loop through each field in the form
		for (var i = 0; i < form.elements.length; i++) {

			var field = form.elements[i];

			// Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
			if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

			// If a multi-select, get all selections
			if (field.type === 'select-multiple') {
				for (var n = 0; n < field.options.length; n++) {
					if (!field.options[n].selected) continue;
					serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
				}
			}

			// Convert field data to a query string
			else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
				serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
			}
		}

		return serialized.join('&');

	};
	
	

	function validateEmail(email){
		return email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	}

	function validatePhone(phone){
		return phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
		);
	}

	function validateInput(input){
		return input !== '';
	}

	function submitContactForm(form, formId){
		// var newName = 'John Smith',
	    var xhr = new XMLHttpRequest();

	    console.log('whaaaat')

		xhr.open('POST', '/api/submit-contact-form');
		// xhr.setRequestHeader("Content-Type","multipart/form-data");
		
		xhr.onreadystatechange = function() {
			console.log('changed')

            if(xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                console.log(response);
                console.log('worked');
                window.location = '/form-success'
                // done(response);
                return;
            }
        };

		// xhr.onload = function() {

		// 	console.log(xhr.status)

		//     if (xhr.status === 200) {
		//         console.log('worked');
		//     }
		//     else if (xhr.status !== 200) {
		//         console.log('Request failed.  Returned status of ' + xhr.status);
		//     }
		//     else{
		//     	console.log("whuh")
		//     }
		// };
	

		var formData = new FormData(form);
		// formData.append('formId', formId)
	
		xhr.send(formData);
	}

	function contactFormValidate(form){
		var inputs = form.querySelectorAll('input');
		var textareas = form.querySelectorAll('textarea')		
		var formValid = true;

		Array.from(inputs).map(function(input){
			
			var classArr = Array.from(input.classList)

			if(classArr.includes('required') && classArr.includes('required-email')){				
				if(!validateEmail(input.value)){
					input.parentNode.classList.add('validate-field')
					formValid = false;
				}								
			}
			else if(classArr.includes('required') && classArr.includes('required-phone')){
				if(!validatePhone(input.value)){
					input.parentNode.classList.add('validate-field')
					formValid = false;
				}				
			}
			else if(classArr.includes('required')){
				if(!validateInput(input.value)){
					input.parentNode.classList.add('validate-field')
					formValid = false;
				}				
			}
			else{
				console.log('valid')
			}
		})

		return formValid

	}

	if(document.getElementById('main-contact-form')){
		document.getElementById('main-contact-form').addEventListener('submit', function(e){
			e.preventDefault();
			
			if(contactFormValidate(this)){
				console.log("it's valid")
				submitContactForm(this, 1)
			}

			else{
				console.log("it's not valid")	
				setTimeout(function(){				
					Array.from(document.getElementsByClassName('validate-field')).map(function(input){
						input.classList.remove('validate-field')
					})
				}, 2000)
			}

		});	
	}

	if(document.getElementsByClassName('form-submit')){
		for(var m = 0; m < document.getElementsByClassName('form-submit').length; m++){
			document.getElementsByClassName('form-submit')[m].addEventListener('submit', function(e){
				e.preventDefault();
								
				var form_id = this.getAttribute('data-form-id')
				console.log(form_id)

				if(contactFormValidate(this)){
					console.log("it's valid")
					submitContactForm(this, form_id)
				}

				else{
					console.log("it's not valid")	
					setTimeout(function(){				
						Array.from(document.getElementsByClassName('validate-field')).map(function(input){
							input.classList.remove('validate-field')
						})
					}, 2000)
				}
			})
		}
	}
	
	window.onload = function(){	
		setTimeout(function(){
			Array.from(document.getElementsByClassName('lazy-image')).map(function(image){
				var newSrc = image.getAttribute('data-lazy-image')
				image.src = newSrc
			}) 
		}, 250)		

		
	}
	

	if(document.getElementsByClassName('info-icon')){
				
		var infoItemLength = document.getElementsByClassName('info-icon').length
		var infoItems = document.getElementsByClassName('info-icon')

		function showInfo(item){				
			item.target.parentNode.classList.add('active')				
		}

		function hideInfo(item){				
			item.target.parentNode.classList.remove('active')				
		}
		
		for(var x = 0; x < infoItemLength; x++){
			var infoItem = infoItems[x];
			// console.log(infoItems[x])
			infoItem.addEventListener("mouseover", function(e){
				console.log(e)
				showInfo(e)
			}, false);

			infoItem.addEventListener("mouseleave", function(e){
				console.log(e)
				hideInfo(e)
			}, false);
		}

	}

	if(document.getElementsByClassName('switches')){
				
		var switchLength = document.getElementsByClassName('switch').length
		var switchItems = document.getElementsByClassName('switch')

		var contentBlocks = document.getElementsByClassName('package-titles')
		


		function showSwitchContent(item){				
			var showClass = item.target.id
		
			for(var z = 0; z < switchLength; z++){
				switchItems[z].classList.remove('active')
			}		

			for(var y = 0; y < contentBlocks.length; y++){
				contentBlocks[y].classList.remove('active')
			}

			// console.log(document.getElementsByClassName(showClass))
			
			document.getElementsByClassName(showClass)[0].classList.add('active')
			item.target.classList.add('active')
		}
		
		for(var x = 0; x < switchLength; x++){
			var switchItem = switchItems[x];
			// console.log(infoItems[x])
			switchItem.addEventListener("click", function(e){				
				e.preventDefault()
				showSwitchContent(e)
			}, false);
			
		}

	}



	
	// $('.form-submit').on('submit', function(e){

	// 		var form = $(this);
			
	// 		e.preventDefault();

	// 		var formId = $(this).attr('data-form-id');

	// 		var data = $(this).serializeArray()

	// 		$.ajax({
	// 			  type: 'POST',	
	// 			  url: '<?php echo get_home_url(); ?>lib/form_submit',
	// 			  data: { send_entry: "go", formdata: data, formid: formId },
	// 			  beforeSend:function(){
	// 			    // this is where we append a loading image			   
	// 			    $(form).addClass('inactive')
	// 			    $(form).append('<p class="submitting">Submitting...</p>')
	// 			    //$(form).find('.message').addClass('active')
	// 			  },
	// 			  success:function(data){
	// 			  	console.log(data)
	// 			    // successful request; do something with the data
	// 			    if(data == 1){
	// 			    	//$(form).find('.message h3').text('Message Sent!')
	// 			    	$('.submitting').empty().append('Sent!')

	// 			    	setTimeout(function(){
	// 			    		$('.submitting').remove()
 //                $('<div class="text center text-center"><h3>Thanks For Contacting Us</h3></div><div class="text center text-center"><p>A member of our team will be in touch with you shortly to discuss your project.</p></div>').insertBefore(form)
 //                $(form).remove()
	// 			    	}, 1000)				    	
	// 			    }
	// 			  },
	// 			  error:function(){
	// 			    // failed request; give feedback to user
				    
	// 			  }
	// 		});

	// 	})