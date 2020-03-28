//import MicroModal from 'micromodal';  // es6 module

window.onload = function(){

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

	//Modal Stuff

		

	// if(document.getElementById('header-trigger')){

	// 	//if(window.innerWidth > 768){
	// 		var headerscrolled = new Waypoint({
	// 		  element: document.getElementById('header-trigger'),
	// 		  handler: function(direction) {		  
	// 		    if(direction == 'down'){		    			    	
	// 		    	document.getElementsByClassName('header')[0].classList.add('scrolled'); 		    						

	// 		    	if(document.getElementsByClassName('single-case-study').length > 0){
	// 					document.querySelectorAll('.sidebar')[0].classList.add('scrolled')
	// 					document.querySelectorAll('.sidebar .linkList')[0].classList.add('scrolled')
	// 		    	}
	// 		    }		
	// 		    if(direction == 'up'){		    	
	// 		    	document.getElementsByClassName('header')[0].classList.remove('scrolled'); 		    	

	// 		    	if(document.getElementsByClassName('single-case-study').length > 0){
	// 					document.querySelectorAll('.sidebar')[0].classList.remove('scrolled')
	// 					document.querySelectorAll('.sidebar .linkList')[0].classList.remove('scrolled')
	// 		    	}
	// 		    }		   		    
	// 		  },
	// 		  offset: '-5%'
	// 		})
	// 	//}		
	// }

	//Navigation suff
	// Array.from(document.getElementById('nav_toggle').childNodes).map(function(link){
	// 	link.addEventListener('click', function(e){		
	// 		e.preventDefault();
	// 		document.getElementById('nav_toggle').classList.toggle('active')
	// 		document.getElementById('nav-overlay').classList.toggle('open');		   	    
	// 	    document.getElementsByClassName('logo')[0].classList.toggle('hide')	   
	// 	}) 
	// })

		// document.querySelectorAll('#nav_toggle a')[0].addEventListener('click', function(e){
		// 	e.preventDefault();
		// }) 
		
	if(document.getElementsByClassName('nav-trigger-link').length > 0){
		document.getElementsByClassName('nav-trigger-link')[0].addEventListener('click', function(e){
			e.preventDefault();		
			if(this.getElementsByClassName('menu')[0].classList.contains('active')){
				this.getElementsByClassName('menu')[0].classList.remove('active')
				document.getElementsByClassName('nav-menu')[0].classList.remove('active')
				document.getElementById('__next').classList.remove('menu-show')
			}
			else{
				this.getElementsByClassName('menu')[0].classList.add('active')
				document.getElementsByClassName('nav-menu')[0].classList.add('active')
				document.getElementById('__next').classList.add('menu-show')
			}

		});
	}

	for(var nl = 0; nl < document.getElementsByClassName('parent-link').length; nl++){		
		document.getElementsByClassName('parent-link')[nl].addEventListener('click', function(e){
			e.preventDefault()

			for(var ni = 0; ni < document.querySelectorAll('.first-nav-section ul li').length; ni++){
				document.querySelectorAll('.first-nav-section ul li')[ni].classList.remove('on')
			}			

			this.parentNode.classList.toggle('on')			

		})
	}

	for(var li = 0; li < document.getElementsByClassName('inspection-list-item').length; li++){		
		document.getElementsByClassName('inspection-list-item')[li].addEventListener('click', function(e){
			e.preventDefault()

			console.log('oaids')

		})
	}


	function anchorLinkHandler(e) {
	    e.preventDefault();	    
	    var targetID = this.href.slice(this.href.indexOf("#"));
	    if(targetID == '#none' || targetID === '#'){
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

		var formData = new FormData(form);

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

	// function openPageDrop(){
	// 	document.querySelectorAll('.inspection-dropdown-container .bg')[0].classList.add('active')
	// 	document.querySelectorAll('.inspection-dropdown-container .sidebar-nav')[0].classList.add('active')
	// }


	// if(document.getElementsByClassName('page-dropdown-container').length > 0){
	// 	document.querySelectorAll('.page-dropdown-container .bg')[0].addEventListener('click', function(e){
	// 		if(e.target.className.includes('bg')){
	// 			console.log('fhu')
	// 			document.querySelectorAll('.inspection-dropdown-container .bg')[0].classList.remove('active')
	// 			document.querySelectorAll('.inspection-dropdown-container .sidebar-nav')[0].classList.remove('active')
	// 		}
	// 		// e.preventDefault();		
	// 	})
	// }







}
	
