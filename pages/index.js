import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Link from 'next/link'
import LazyLoad from 'react-lazyload';

import ArticleContainer from '../partials/articles-container.js'
import HomeFirstSection from '../partials/home-first-section.js'
import HomePortfolio from '../partials/home-portfolio.js'
import HomeStrategy from '../partials/home-strategic-web-design.js'
import ProcessSection from '../partials/home-process-section.js'
import HomeContent from '../partials/home-content-section.js'

import Meta from '../partials/seo-meta.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class HomePage extends React.Component {
	
	constructor() {
	    super();
	    this.state = { articles: [] };
	}

	static async getInitialProps(ctx) {
		let url = ctx.req.headers.referer
	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){
		
		
	  	document.getElementById('big-video-fade-in').classList.add('animation', 'fade-in-up')	   	  
	   	
	   	if(window.innerWidth > 768){
			document.getElementsByClassName('first-section')[0].classList.add('on')  						

			setTimeout(() => {
		   		document.getElementsByClassName('small-image')[0].classList.add('animation', 'fade-in-up')
		   	}, 300)  
		   	
		}	

		setTimeout(() => {
	   		document.getElementById('hero-text-fade-in').classList.add('animation', 'fade-in-up')
	   		// document.getElementById('big-video-fade-in').classList.add('small-float')	   	  
	   	}, 250)  	

		fetch('//cms.propernoun.co/wp-json/wp/v2/posts')
			  	.then(res => res.json())
		      	.then(json => this.setState({ articles: json }))
		      	.then(function(){
		      		console.log('run')
			   		   		   			
					var vidplaced = false; 

					var tilted_video = new Waypoint({
					  element: document.getElementsByClassName('tilted-video')[0],
					  handler: function(direction) {		  

					  	var the_vid = this.element;
					    if(direction == 'down'){		
						
					    	if(!vidplaced){
					    		
					    		var small_vid = '<video id="small-video" width="100%" height="100%" muted loop playsInline>' +
										'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.mp4" type="video/mp4">' +
										'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.webm" type="video/webm">' +
										'<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/proper-dm-short.ogv" type="video/ogv">' +
										'</video>';									
								document.getElementsByClassName('tilted-video')[0].innerHTML = small_vid	
								vidplaced = true;				
					    	}

					    	the_vid.classList.add('in-view')						    		    	
							document.getElementById('small-video').play()		    		

					    	
					    }		
					    if(direction == 'up'){	
					    	document.getElementById('small-video').pause()	    	
					    	the_vid.classList.remove('in-view')
					    	the_vid.classList.remove('small-float')			    	
					    }		   		    			    
					  },
					  offset: '50%'
					})	
					
					var sf_content = document.getElementsByClassName('small-float-add');
					for(var sf = 0; sf < sf_content.length; sf++){
						
						var elem = sf_content[sf]

					    new Waypoint.Inview({
							element: elem,				  
							entered: function(direction) {				    
							    if(direction == 'up'){
							    	// elem.classList.add('small-float')
							    }
							},				  
							exited: function(direction) {
							    if(direction == 'down'){
							    	elem.classList.remove('small-float')
							    }
							}
						})	  	
					}
								
					if(document.getElementsByClassName('development-section').length > 0){				
						
						
						var dev_sec_trigger = new Waypoint({
						  element: document.getElementsByClassName('development-section')[0],
						  handler: function(direction) {		  
						    if(direction == 'down'){		    			    	
						    	document.getElementsByClassName('clip-window')[0].classList.add('scroll-img')
						    }		
						    if(direction == 'up'){		    	
						    	document.getElementsByClassName('clip-window')[0].classList.remove('scroll-img', 'small-float'); 		    	
						    }		   		    
						  },
						  offset: '80%'
						})
					}						

					// function play_video(){
					// 	if(window.innerWidth > 768){						
					//     	if(document.getElementById('main-video')){
					// 			document.getElementById('main-video').play()
					//     	}							
					// 	}	
					// }
					// window.addEventListener('load', (e) => {
					//   // Todo...
					//     if(window.innerWidth > 768){						
					//     	if(document.getElementById('main-video')){
					// 			document.getElementById('main-video').play()
					//     	}							
					// 	}
					// });
					
		})	  	




		// window.onload = function(){

		
			
		// }
		
	}

	render() {
			
		return <div className="home-contain">
							
			<Meta title="Top Web Design Agency In Fort Lauderdale | Proper Noun" 
					desc="Proper Noun is a web design agency located in Fort Lauderdale, FL. We specialize in WordPress web design, e-commerce web design, SEO and digital marketing." 
					canonical="https://www.propernoun.co"
			/>
			
			<div className="home-page">
				
				<div className="first-section">		
					<div className="big-contain image-split">				
						<div className="big-video-block opaque" id="big-video-fade-in">
							{/*<div id="main-video"></div>		*/}	
							<LazyLoad>
								<video id="main-video" width="100%" height="100%" muted loop playsInline autoPlay onLoad={() => ( this.play() )} >
						 			<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.mp4" type="video/mp4" />
						 			<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.webm" type="video/webm" />
						 			<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.ogv" type="video/ogv" />
								</video>
							</LazyLoad>													
						</div>
						<div className="small-image opaque delayed" id="small-image-fade-in">
							
							<div className="schedule-links">
								
								<Link href="/contact"><a className="schedule-link">Schedule A Call</a></Link>
								<Link href=""><a className="schedule-link download-deck">Download SEO Deck</a></Link>
								<Link href=""><a className="schedule-link show-seo-audit">Download SEO Case Study</a></Link>
								<a href="/portfolio" className="schedule-link">View Our Work</a>
							</div>
							
							<img src={`${publicRuntimeConfig.imageUrl}/w_500,c_scale/main-room.jpg`} alt="real estate website" />
						</div>

					</div>
					<div className="text-container">
						<div className="container opaque" id="hero-text-fade-in">
							<h3 className="page-title-xl">An Agency for People, Places & Ideas.</h3>
							<p>
								Proper Noun is a boutique web design agency <a href="/web/fort-lauderdale-web-design">located in Fort Lauderdale, FL</a>. Proper Noun focuses on informational and <a href="/services/ecommerce-web-design">e-commerce web design</a>, application development, <a href="/services/search-engine-optimization">SEO</a>, <a href="/services/digital-marketing">digital marketing</a> and branding. We are located within the General Provisions work space in Downtown Fort Lauderdale.
							</p>
							<a href="/portfolio" className="cta-link white topmargin-5">
								View Our Work
							</a>
						</div>
					</div>
				</div>

				<HomePortfolio />

				<div className="line-bg-sec right no-subheadline">
					<div className="container flex">
						<div className="text-container">
							<h2>We’ve made some <strong> <br />pretty cool stuff.</strong></h2>
							<div className="text-content">
								<p>
									As a top website design & development agency in <a href="https://www.fortlauderdale.gov/">Fort Lauderdale</a>, We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
								</p>
								<p>
									Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
								</p>
							</div>
						</div>
						<div className="image-container fade-in-content opaque" data-bg-img="">
							<div className="tilted-video">
								
							</div>
						</div>
					</div>
				</div>
				
				<HomeStrategy />
				
				<ProcessSection />
					
				<div className="section dark development-section">
					<div className="container">
						<div className="row flex items-center dream-block">
							<div className="col-6-l col-12">
								<h3 className="underline-title">
								This Is How We Do It
								</h3>
								<h2 className="section-title-xl">If You Can Dream It, We Can Develop It.</h2>
								<div className="text-content topmargin-5">
									<p>
										When it comes to custom app development, e-commerce extensions, wordpress plugins and other app functionality for the web, our rule is "If You Can Dream It, We Can Develop It".
									</p>
									<p>
										Our team excels at creating programmable solutions with premium user experiences to solve problems and deliver new business opportunities. We have also created a number of commercial extensions for Magento, plugins WordPress, as well as custom PHP scripts and web applications to facilitate business services for our clients.
									</p>
								</div>
								<div className="buttons topmargin-5">
									<a href="/portfolio" className="cta-link white">See Our Work</a>
								</div>
							</div>
							<div className="col-6-l col-12 scroller-browser">
								<div className="browser-window">
									<div className="clip-window">
										<img src={`${publicRuntimeConfig.imageUrl}/w_600,c_scale/code-illustration-long.png`} alt="web design process" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="line-bg-sec left bone-broth-block">
					<div className="container flex">
						<div className="image-container" data-bg-img="" >
							
							<div className="colored-block purple-bg"></div>
							<img className="max-height-img float-trigger" src={`${publicRuntimeConfig.imageUrl}/pn-bone-broth.png`} alt="web design process" />
						</div>
						<div className="text-container">
							<h3 className="underline-title">Brand Identity for the Digital Age</h3>
							<h2>Branding & Strategy <br /> Services</h2>
							<div className="text-content">
								<p>
									We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
								</p>
								<p>
									Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
								</p>
							</div>
							<div className="buttons topmargin-5">
								<a href="/contact" className="cta-link ">Book Strategy Session</a>
							</div>
						</div>
						
					</div>
				</div>

				<div className="line-bg-sec right brand-awareness-block">					
					<div className="container flex">
						<div className="image-container" data-bg-img="">							
							<div className="colored-block green-gradient"></div>
							<img className="max-height-img float-trigger"  src={`${publicRuntimeConfig.imageUrl}/pn-ad.png`} alt="marketing seo" />
						</div>
						<div className="text-container">
							<h3 className="underline-title">Digital Marketing & SEO</h3>
							<h2>Build Brand <br />Awareness</h2>
							<div className="text-content">
								<p>
									We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
								</p>
								<p>
									Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
								</p>
							</div>
							<div className="buttons topmargin-5 bottommargin-3">
								<a href="/portfolio" className="cta-link ">See Our Work</a>
							</div>
						</div>						
					</div>
				</div>
							
				<ArticleContainer>
					{
						this.state.articles.map( article => (			

							<div className="article" key={article.slug}>
	
								{
									article.acf.main_image ? 
									<a href={`/articles/${article.slug}`} className="thumb">
										<img src={`${ article.acf.main_image.sizes.thumbnail }`} alt={`${article.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&')}`} />
									</a>
									:
									<a href={`/articles/${article.slug}`} className="thumb">
										<img src={`${ '/static/images/pn-square-180.jpg'}`} alt={`${article.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&')}`} />
									</a>
								}								

								<div className="details">
									<a href={`/articles/${article.slug}`} className="article-title">
										
										{entities.decode(article.title.rendered)}

										{/*{article.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&').replace('&#8221;', '"').replace('&#8220;', '"')}*/}
									</a>
									<p>
										{article.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&').substring(0, 120)}...}
									</p>

									<a href={`/articles/${article.slug}`} className="outline-btn dark">Read More</a>

								</div>

								

							</div>
						))
					}					
				</ArticleContainer>		

			</div>
			<HomeContent />
		</div>
	}
}


export default HomePage;