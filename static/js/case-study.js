window.addEventListener('load', function(){
	console.log('go')

	if(window.innerWidth > 1024){
		document.getElementsByClassName('main-content')[0].addEventListener('scroll', function(){		
			
				Array.from(document.querySelectorAll('.main-content .section')).map(function(section){										

					if(section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().top >= 0){
						// console.log(section.getBoundingClientRect().top)
						var sectionId = section.getAttribute('id')
						Array.from(document.querySelectorAll('.linkList-link')).map(function(link){
							link.classList.remove('active')
						})
						document.querySelectorAll('.linkList-link[data-id="'+ sectionId +'"]')[0].classList.add('active')
					}			
					
				})
			
		}, false )
	}

	if(window.innerWidth <= 1024){
		window.addEventListener('scroll', function(){		
			
				Array.from(document.querySelectorAll('.main-content .section')).map(function(section){										

					if(section.getBoundingClientRect().top <= 100 && section.getBoundingClientRect().top >= 0){
						// console.log(section.getBoundingClientRect().top)
						var sectionId = section.getAttribute('id')
						Array.from(document.querySelectorAll('.linkList-link')).map(function(link){
							link.classList.remove('active')
						})
						document.querySelectorAll('.linkList-link[data-id="'+ sectionId +'"]')[0].classList.add('active')
					}			
					
				})
			
		}, false )
	}

	
	var isScrolling; 

	
	document.getElementById('mobile-sidebar-toggle').addEventListener('click', function(e){
		e.preventDefault()

		var showtimer = 0;
		document.getElementById('mobile-sidebar-toggle').classList.add('hide')
		Array.from(document.getElementsByClassName('linkList-link')).map(function(link){
			
			var thelink = link			
			setTimeout(function(){
				thelink.classList.add('show')			
			}, showtimer)

			showtimer = (showtimer + 20)

		})
	})
		
	


})


