import React from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import Meta from '../partials/seo-meta.js'
// import SVG from '../partials/venndiagram.js'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

class AboutPage extends React.Component {

	static async getInitialProps(ctx) {
		
		let url = 'https://www.propernoun.co/about'

	  	return {
	  		url: url
	  	}
	}

	componentDidMount() {
	   	setTimeout(function(){
			window.scrollTo(0, 0)

			let fired = false;
		
			new Waypoint.Inview({
				element: document.getElementsByClassName('venndiagram')[0],
				enter: function(direction) {
					if(direction == 'down'){
					    	
				    	var venfile = document.getElementById('venn-div').getAttribute('data-venn-diagram')
				    	if(!fired){
				    		setTimeout(function(){
					    		 new Vivus('venn-div', { duration: 100, type:'oneByOne', file: venfile }, function(){			    		 	
					    		 	document.querySelectorAll('.venndiagram .fade-in-img')[0].style.display = 'block'
					    		 });
					    		 fired = true;
					    	}, 50)
				    	}			    	
					}
				}				
			})	  

	   	}, 180)

				
		
	}

	render() {
			
		return <div className="about-contain">
			
			<Meta 
				title="Creative Web Design Company in Florida | Proper Noun"
				desc="As a web design company, Proper Noun team focuses on creating powerful digital products including websites and web applications for our clients."
				canonical='https://www.propernoun.co/about'
				js="/static/vendors/vivus/vivus.min.js"
			/>	

			<div className="about">

				<div className="first-section">
					<div className="line-bg-sec line-dark left no-subheadline">
					
						<div className="container flex">
							<div className="text-container">
								<h2 className="fade-in-content-right opaque">We Specialize In People, Places, & Things</h2>

								<div className="text-content">
									<p className="fade-in-content-right opaque delay">
										We're passionate about clean, purposeful design, utilizing the latest web technologies to build powerful digital products, and crafting brand messaging and digital marketing campaigns that are backed by clear strategies and powerful stories and executed with vision and efficiency.
									</p>
								
									<a href="/contact" className="cta-link fade-in-content-right opaque delay-xl">
										Schedule A Strategy Session
									</a>

								</div>
							</div>

							<div className="image-container image-container-xl fade-in-content opaque" data-bg-img="">
								<img className="max-height-img" src={`${publicRuntimeConfig.imageUrl}/lightbulb-about.png`} alt="About Proper Noun" />
							</div>

						</div>

					</div>
					
				</div>

				<div className="section no-pad bottommargin-10">
					<div className="container toppad-3">
						<h2 className="page-section-title">We build brands & products <br />
							that people <strong>love</strong></h2>

						<div className="row topmargin-5">
							<div className="col-6-m">
								<p>
									Proper Noun is a web design company and digital marketing studio located in downtown Fort Lauderdale, FL. We specialize in web design, WordPress web development, app development, e-commerce web design, branding and brand strategy, SEO, and digital marketing. 
								</p>
							</div>
							<div className="col-6-m">
								<p>
									We always focus on crafting engaging messaging paired with a clean user experience in our design.  We believe that excellent website design contains not only great aesthetics, but also functionality and usability. We utilize this same approach in our digital marketing and content creation campaigns.
								</p>
							</div>
						</div>	
					</div>
				</div>


				<div className="line-bg-sec line-xl line-blue right no-subheadline unslide">
					
					<div className="container flex">
						<div id="venn-div" className="venndiagram" data-venn-diagram="static/images/venndiagram.svg" data-venn-diagram-img="static/images/venndiagram.svg" >				
							<img className="fade-in-img" src={`${publicRuntimeConfig.imageUrl}/venndiagram.png`} alt="web design process" />
							
						</div>
					</div>

				</div>

				<div className="section no-pad bottommargin-10">
					<div className="container toppad-3">
						
						<div className="row topmargin-5">
							<div className="col-4-l col-12 bottommargin-5-t">
								<h3 className="underline-title">Branding</h3>

								<p>
									We know that a strong business is built with exceptional branding, and make sure to center every campaign we create around the brand’s core message.
								</p>
							</div>
							<div className="col-4-l col-12 bottommargin-5-t">

								<h3 className="underline-title">Technology</h3>

								<p>
									One of our primary focuses as an agency is delivering top of the line digital products that utilize the latest and greatest web technologies.
								</p>
							</div>

							<div className="col-4-l col-12">

								<h3 className="underline-title">Marketing</h3>

								<p>
									We know that building a successful brand online is about running strategic, impactful digital media campaigns that built brand awareness and focus on ROI.
								</p>
							</div>
						</div>	
					</div>
				</div>

				<div className="parallax-bg quote-callout" data-bg-img={`${publicRuntimeConfig.imageUrl}/about-space-bg.jpg`} data-section-height="360">
					
					<div className="container full-height flex items-center flex-column flex-center">
						<h3 className="quote-text">
							A team of creatives, marketers, and technical specialists 
							with a passion for meaningful design.
						</h3>
						<div className="buttons center topmargin-5">
							<a href="/contact" className="outline-btn white">
								Schedule A Meeting
							</a>
						</div>
					</div>

				</div>

				<div className="section strategic-approach-full">

					<div className="container">
						<div className="row">
							<div className="col-6-l col-12">
								
								<h3 className="underline-title">
									This Is How We Do It
								</h3>

								<h2 className="section-title-xl white">Our Strategic <br /> Approach</h2>

								<div className="text-content topmargin-6">
									<p>
										Whether we are taking on a branding project, web development project, or a digital marketing project, we employ the same strategic approach to each situation. 
									</p>

									<p>
										By starting with a specific strategic message or goal in mind, and building each aspect of the project to move the customers toward the goal, we are able to successfully reproduce project results.
									</p>
								</div>

							</div>
							<div className="col-6-l col-12">
								<div className="machine-image">
									<img src={`${publicRuntimeConfig.imageUrl}/about-process-machine.svg`} alt="Process Machine"/>

									
								</div>
							</div>
						</div>


						<ul className="strategic-process-timeline topmargin-15">
							<li className="fade-in-content opaque">
								<div className="text fade-in-content-left opaque delay">
									<h3>Strategy</h3>
									<p>
										We start every project or campaign with a deep dive in to the core message behind the brand to develop an overall campaign direction and strategy.
									</p>
								</div>
							</li>

							<li className="fade-in-content opaque">
								<div className="text fade-in-content-right opaque delay">
									<h3>Concept Creation</h3>
									<p>
										Once we’ve finished creating our overall project strategy, we then begin the creation of various concept for creative, tactics, deliverables, and more.
									</p>
								</div>
							</li>

							<li className="fade-in-content opaque">
								<div className="text fade-in-content-left opaque delay">
									<h3>Design</h3>
									<p>
										After the completion of our project concept, we begin the phase for both creative assets as well as the design of any campaign tactics. 
									</p>
								</div>	
							</li>

							<li className="fade-in-content opaque">
								<div className="text fade-in-content-right opaque delay">
									<h3>Product Development</h3>
									<p>
										Once our design phase is complete, we begin product development. Depending on the engagement, this could be anything from a web application to a full-scale digital marketing funnel. 
									</p>
								</div>	
							</li>

							<li className="fade-in-content opaque">
								<div className="text fade-in-content-left opaque delay">
									<h3>Brand Growth</h3>
									<p>
										Once we’ve completed product development and gone to production, we then work with our client’s towards continued growth of brand awareness and visibility. 
									</p>
								</div>	
							</li>

						</ul>

						<div className="buttons center topmargin-10 fade-in-content opaque ">
							<a href="/contact" className="outline-btn white">Schedule A Strategy Session</a>
						</div>
					</div>
					
				</div>

				<div className="section meet-our-team">
					<div className="container">
						<div className="row flex items-end">
							<div className="col-4-xl col-3-l col-12">
								<div className="text">
									<span className="underline-title">Leadership Team</span>
									<h4 className="section-title-l">Meet Our Team</h4>				
									
								</div>
							</div>
							<div className="col-8-xl col-9-l col-12">
								<div className="text-content">
									<p>
										Proper Noun is made up of a diverse group of experienced designers, web developers and digital marketers from around the United States and the world. 
									</p>
									<p>
										In addition to the core team, Proper Noun also retains an extensive network of professionals from various disciplines that we collaborate on a variety of creative projects.
									</p>

								</div>
							</div>
						</div>

						<div className="row members">
							<div className="col-4-l col-12 member bottommargin-5-t">
								<img src={`${publicRuntimeConfig.imageUrl}/adam-hodson.jpg`} alt="Adam Hodson" />

								<h4>Adam Hodson</h4>
								<p>Co-Founder / Technology</p>

								<div className="social-links flex items center topmargin-4">
									<a href="https://medium.com/@adamchodson/" target="_blank">
										<i className="fi-social-medium"></i>
									</a>

									<a href="https://www.twitter.com/adamhodson" target="_blank">
										<i className="fi-social-twitter"></i>
									</a>

									<a href="https://www.github.com/adamhodson" target="_blank">
										<i className="fi-social-github"></i>
									</a>

									<a href="https://www.dribbble.com/propernoun" target="_blank">
										<i className="fi-social-dribbble"></i>
									</a>


								</div>
							</div>

							<div className="col-4-l col-12 member bottommargin-5-t">
								<img src={`${publicRuntimeConfig.imageUrl}/chris-halavacs.jpg`} alt="Chris Halavacs" />

								<h4>Chris Halavacs</h4>
								<p>Co-Founder / Design</p>

								<div className="social-links flex items center topmargin-4">		

									<a href="https://www.chrishalavacs.com" target="_blank">
										<i className="fi-web"></i>
									</a>

									<a href="https://www.behance.net/propernoun" target="_blank">
										<i className="fi-social-behance"></i>
									</a>

									<a href="https://www.dribbble.com/propernoun" target="_blank">
										<i className="fi-social-dribbble"></i>
									</a>

								</div>

							</div>
							<div className="col-4-l col-12 member">
								<img src={`${publicRuntimeConfig.imageUrl}/alex-gallner.jpg`} alt="Adam Hodson" />

								<h4>Alex Gallner</h4>
								<p>Marketing</p>

								<div className="social-links flex items center topmargin-4">		

									<a href="http://alexanderbenjamin.co" target="_blank">
										<i className="fi-web"></i>
									</a>

									<a href="https://twitter.com/AlexGallner" target="_blank">
										<i className="fi-social-twitter"></i>
									</a>

								</div>

							</div>
						</div>
					</div>
				</div>


				<div className="section light bottom-content">
					<div className="container add-color-sq">
						
						<div className="med-contain toppad-9">
							<div className="text title bottommargin-5">
								<h1 className="section-title">Web Design Company in Fort Lauderdale</h1>
							</div>

							<div className="text-content">
								<p>
									Proper Noun is a web design company and so much more.  Our principals are each experts in their own fields of branding, design, digital marketing and web development. Our core focus has traditionally been website design and development, however our team is also passionate about creating great content and providing SEO services. We have worked with small businesses, emerging brands, and even companies on the Fortune 500. 
								</p>

								<p>
									We have also recently started offering Internet marketing and digital marketing services as a digital marketing agency. As a full service digital agency, we specialize in Facebook advertising, Instagram advertising, Google advertising and much more.
								</p>

								<p>
									When you work with Proper Noun, you know you are working with a top web design firm. When we build a custom website we focus on creating a cutting edge, mobile friendly responsive web design. As a result, we have become one of the top web design companies in Fort Lauderdale, FL and the greater South Florida area. If you're interested in learning more about how we can help you grow your online presence, <a href="/contact">contact us today</a>.
								</p>
							</div>
							
						</div>
						
					</div>
				</div>

				
				
			</div>
			
		</div>
	}
}


export default AboutPage;