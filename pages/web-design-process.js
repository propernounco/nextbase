import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import Link from 'next/link'
import Meta from '../partials/seo-meta.js'
import PageContactSection from '../partials/page-contact-section.js'

class WebDesignProcess extends React.Component {


	static async getInitialProps(ctx) {		
		let url = ctx.req.headers.referer

	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){	  
		
		window.addEventListener('load', (e) => {
		  // Todo...

			for(var x = 0; x < document.querySelectorAll('.sectioned-info .section').length; x++ ){
				
				new Waypoint.Inview({
					  element: document.querySelectorAll('.sectioned-info .section')[x],
					  enter: function(direction) {

					  	
					  },
					  entered: function(direction) {				    				   			


					  },
					  exit: function(direction) {

					   	var new_id = this.element.id		    
					    
					    for(var px = 0; px < document.querySelectorAll('.linklist a').length; px++){
							document.querySelectorAll('.linklist a')[px].classList.remove('active')
					    }

					    console.log(new_id)
					    
					    let els = document.querySelectorAll("a[href='#website-audits']");
					    

					    // document.querySelectorAll('.linklist a[href="#'+ new_id +'"]').classList.add('active')
						if(document.querySelectorAll("a[href='#"+ new_id +"']").length > 0){							
							document.querySelectorAll("a[href='#"+ new_id +"']")[0].classList.add('active');
						}						
					  },
					  exited: function(direction) {
					    if(direction == 'down'){
					    	
					    }
					  }
				})	

			}			
	
		});
		
	}

	render() {
			
		return <div className="sectioned-info">
				
				<Meta 
					title="Our Web Design Process | Proper Noun"
					desc="Our web design process is strategic and methodical. When we build a website, we design it to achieve goals and to tell the brand story."
					canonical='https://www.propernoun.co/web-design-process'					
				/>	
	
					<div className="linklist">
						<ul>			
							<li>
								<a href="#website-audits">
									Research & Planning
								</a>								
							</li>
							<li>
								<a href="#keyword-research">
									Wireframing
								</a>								
							</li>
							<li>
								<a href="#seo-strategy">
									Website Templating
								</a>								
							</li>
							<li>
								<a href="#on-page-optimization">
									CMS Integration
								</a>								
							</li>
							<li>
								<a href="#content-creation">
									Functional Development
								</a>								
							</li>
							<li>
								<a href="#off-page-optimization">
									Website Testing
								</a>								
							</li>
							<li>
								<a href="#ongoing-campaigns">
									Website Launch
								</a>				
							</li>
						</ul>		
					</div>
					
					<div className="section first-section web-design-process-first" id="first-section">
						<div className="container">

							<h1 className="page-title-xl">Our Web Design Process</h1>
							<h3 className="italic-text section-title-m">A Look At Our Approach <br /> To 
								Web Design
							</h3>
						
							<div className="orange-sep"></div>

							<p className="med">
								Building a website is easy. Building an outstanding wesbite is not. At Proper Noun, we take a strategic, methodical approach to website design and development.  We believe that brand messaging should drive design, not the other way around.
							</p>
							
						</div>
					</div>

					<div className="section">

						<div className="container">		

							<div className="row">
								<div className="col-4-l col-12">
									<h2 className="section-title-l">How We Build Websites</h2>
								</div>

								<div className="col-8-l col-12">

									<p className="med">
										When we build a website, we tailor every aspect of the design and the functionality to the brand. We never use pre-bought or commercial themes for our projects, every one of our websites is developed custom for the client. Our websites are fast, efficient, and they come fully optimized for performance in the search engines.
									</p>

									<a href="/contact" className="cta-link topmargin-3">
										Schedule A Strategy Session
									</a>

								</div>
							</div>	
							
							

						</div>

					</div>

					<div className="section full-height light" id="website-audits">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-process-website-audit.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Research & Planning</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Every great website starts with a well-conceived plan. Every well-conceived plan starts with thorough research. We spend time to talk with our clients and learn about their brands before beginning any website design project. We also do
										industry research and benchmarking and competitor research beore creating our design concept.
									</p>

									<a href="https://website-grader.propernoun.co" className="cta-link topmargin-3">
										Get A Free Website Audit
									</a>
								</div>

								
							</div>
							
							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span> Brand Research</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										The very first step in any of our web design projects is going to be brand research. We conduct a series of interviews with our clients to understand the finer points of their brand identity, brand message and their business. 
										It is important that we have a great background on the brand, that we understand any competitive advantages or brand differentiators, and most importantly we try to hone in on the
										brand's message.   
									</p>

								</div>

							</div>	

							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span> Competitor Research</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Once we have a handle on our clients brand, brand identity and brand message, we take a look at what the competition is doing. We analyze things like website aesthetics, website organization,
										internal linking structure, pillar pages, and much more. We also look at what the competitors are doing from an on-page search engine optimization standpoint to factor in to our on-page optimization strategy.
									</p>

								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Industry Research & Benchmarking</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Industry research and benchmarking is one of the most important parts of our research and planning phase. Once we finish analyzing your direct competitors, we expand our analysis to focus on the leaders within your overall industry. We analyze factors like the technology being used,
										baseline performance metrics, design aesthetics, content strategy, and user experience. No matter the size of your business or how long you've been in operation, our goal as a web design agency is to develop websites for our clients that are on par with the leaders in their industry. 
									</p>								
								
								</div>

							</div>	
							
							<div className="row toppad-15">								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">4.</span>Develop Design Concept</h3>
								</div>

								<div className="col-9-l col-12">
									<p>
										Once we've completed our research and planning we begin to formulate a design concept. Our design concept will describe the intended look and feel of the website, will include sample photography and video examples for intended photo direction, and most importantly, will describe how we plan to tell your brand story. 
										When our clients have existing brand guidelines or brand identity documentation, we make sure to implement all of the specifics in to our design concept document.  Once we've received approval of the design document, we begin our web design process.
									</p>																														
								</div>
							</div>	
						</div>

						<div className="buttons center topmargin-5">
							<a href="/portfolio" className="flat-btn small theme-blue">View Our Work</a><a href="/contact" className="flat-btn theme-blue small">Book A Meeting</a>
						</div>

					</div>



					<div className="section" id="keyword-research">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-6">
										<img src={`${publicRuntimeConfig.imageUrl}/keyword-search.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Wireframing</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Before writing any code, we create a detailed website rendering called a wireframe. The website wireframe will act as the blueprint for our website design project.
									</p>								

								</div>

								
							</div>


							<div className="row toppad-10">
								
									<h3 className="section-title-s italic-text">Pixel Perfect Design</h3>
									<p>
										Our website wireframes will be an exact representation of how your website will look down to the pixel. Our wireframes are created at the exact dimensions your website will be built, so you will know exactly how your website will look and operate before we write even the first line of code. 
									</p>									

									<h3 className="section-title-s italic-text">Web Design Blueprint</h3>
									<p>
										Our website wireframes not only dictate the look and feel of the website, but also help to layout how the website will be organized and how it will function.  In this sense, our wireframes act as a blueprint for our web design and web development projects. This methodology ensures that our clients are aware and approve of our design direction and that no key pages or website functionality are overlooked.
									</p>
									

									<a href="/contact" className="cta-link topmargin-3">
										Schedule A Strategy Session
									</a>			
							</div>	

						
						</div>

					</div>


					
					<div className="section light" id="seo-strategy">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-strategy-development.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Website Templating</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										After we complete our website wireframe we begin templating your website. Website templating involves building out the individual page structures or layouts that will be used to render information. For example, a blog may be made up of thousands of individual posts, however, it's likely every post will use the same template. 
										Our approach to website templating depends on the type of website we're building.
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-10">

								<h3 className="section-title-s italic-text">HTML Templating</h3>								
								<p>
									When building an HTML5 website, WordPress website, or e-commerce website, we will typically start with an HTML template. We utilize HTML, CSS and Javascript to transform the website wireframe into a fully interactive website template. The client will be able to interact with just about every aspect of the frontend website that utilizes dummy data.
								</p>
								
								<h3 className="section-title-s italic-text">Framework Templating</h3>
								<p>
									If we are building a custom web application, a website that utilizes a library like ReactJS, or a website using a framework like NextJS, we will build our template in the appropriate templating language. Typically we will use JSX for our templates unless the framework calls specifically for something else.									   
								</p>
								
							</div>	
						</div>
					</div>



					<div className="section" id="on-page-optimization">

						<div className="container">		
							
							<div className="text text-center">										
							
								<h2 className="section-title">Data / CMS Integration</h2>

								<div className="orange-sep centered"></div>

								<p className="med topmargin-3">
									After the client has approved the website templates, it's time to integrate the templates with the live data. Depending on the project, the data may be populated by a CMS like WordPress or Magento, or could be API driven. This is the
									point where the dummy data is replaced with your actual website information, products, and other website data.
								</p>
							
							</div>

							<div className="buttons center topmargin-5">
								<a href="/contact" className="flat-btn theme-blue">Book A WordPress Demo</a>
							</div>

						</div>

					</div>


					<div className="section full-height light" id="content-creation">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-6">
										<img src={`${publicRuntimeConfig.imageUrl}/seo-copywriting.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Functional Development</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										Once we've completed integrating our website template with our data source or CMS, the final stage of the web design process is developing any functional components that are necessary. 
										Functional components are the pieces of the website that facilitate some sort of functionality based on user input. 
									</p>
								</div>

								
							</div>


							<div className="row toppad-10">
								
								<h3 className="section-title-s italic-text">WordPress Plugin Development</h3>
								<p>
									When our WordPress website clients have a specific functional need, we will typically implement the functionality as a plugin. WordPress plugins are self-contained functional components that can be enabled or disabled without impacting other website functionality. 
									Because they're self-contained, they can be managed and maintained separately from the rest of the theme code.
								</p>

								<h3 className="section-title-s italic-text">Magento Extension Development</h3>
								<p>
									When our Magento clients have a need for custom functionality, we will create it as a Magento extension. Similar to a WordPress plugin, a Magento extension very literally extends the native functionality of the Magento platform.
									We've built a wide range of Magento extensions for social media, custom payment methods, dropshipping, security, user-experience improvements and much more. 
								</p>

								<h3 className="section-title-s italic-text">Custom Web Service Development</h3>
								<p>
									We develop custom web services to fulfill a wide variety of needs. In these cases, we typically use NodeJS to develop custom API to that the web service can be accessed and consumed by any authorized application. 
									Web services are ideal for things like shared functionality or data between a web app and a mobile app.
								</p>												
								
								<a href="/contact" className="cta-link topmargin-3">
									Book A Strategy Session
								</a>

							</div>

						
						</div>

					</div>

					
					<div className="section full-height" id="off-page-optimization">

						<div className="container">		
							
							<div className="row flex items-center">			
								
								<div className="col-5-m col-6-s col-12">
									<div className="responsive-img rightmargin-8">
										<img src={`${publicRuntimeConfig.imageUrl}/off-page-optimization.png`} alt="website audit" />
									</div>
								</div>

								<div className="col-7-m col-6-s col-12">
									<h2 className="section-title">Website Testing & Optimization</h2>

									<div className="orange-sep"></div>

									<p className="med topmargin-3">
										the final step before launching a client website is website testing and optimization.  We test for a wide variety of factors prior to placing the website on a development server for our clients to test.										
									</p>
								</div>

								
							</div>
							
							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">1.</span>Bug Testing</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										The first phase of website testing is bug testing. We look for any glitches, errors, broken links, broken images or other issues that just aren't right. We typically do a round of bug testing on our own prior to bringing the client in for testing. 
									</p>
									
								</div>

							</div>	


							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">2.</span>User Experience Testing</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Once we finish testing for bugs, we then start testing out the user experience. Do all of the click areas and hover areas work as expected? Are there any aspects of the design that don't function as well as originally intended? Is there anywhere that we can improve overall usability? 
										We look at these factors and many others to make sure that when users come to your website, they will have the best possible experience.
 									</p>
								
								</div>

							</div>	
							
							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">3.</span> Responsive Testing</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Responsive testing is really an extension of user experience testing. Once we complete our general user experience testing we then begin to look at the site in various screensizes and devices. 
										We make sure that the website is just as easy to use on mobile and tablet devices as it is on desktop devices. We also will test the website in a variety of random browser sizes to ensure that users with minimized browsers will still be able to access
										all aspects of the website functionality.
									</p>
														
									

								</div>
							</div>

							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">4.</span> Security Testing</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Once we've completed our responsive testing, we've finished the aesthetic portion of our tests. Next up on our checklist is security testing. Project characteristics like the CMS in questions, and the data sources we're integrating with will dictate our approach to security audits. 
										In every case we test for things like potential injection attack locations, input validaiton, input sanitization, and more.  We will also utilize security plugins or extensions when the CMS provides for it.
										Also, whenever applicable, we will bring in a third-party security testing company to validate our tests. 
									</p>
					
								</div>
							</div>	

							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">5.</span> Page Speed Optimization</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										Page speed testing and optimization is one of the most important tests that we run from an SEO standpoint. We test for a variety of page speed factors, and optimize things like images, CSS and Javascript delivery, and how the server compresses files. We pride ourselves on building fast, 
										responsive websites. 
									</p>
					
									
								</div>
							</div>	

							<div className="row toppad-15">
								
								<div className="col-3-l col-12">
									<h3 className="section-title-m"><span className="number">6.</span> On-Page SEO</h3>
								</div>

								<div className="col-9-l col-12">

									<p>
										The final step in our web design process is on-page optimization. As a web design and SEO agency, we always make sure to "send our websites out in to the world" in SEO fighting shape. We optimize every page around a focus keyword or topic and make sure all best practices are followed. 
										We then audit the website using a variety of SEO audit tools to ensure there are no on-page optimization concerns.
									</p>
					
								</div>
							</div>	

						</div>
					</div>

					<div className="section light" id="ongoing-campaigns">

						<div className="container">		
							
							<div className="text text-center">																		
								
								<h2 className="section-title">Website Launch</h2>

								<div className="orange-sep centered"></div>

								<p className="med topmargin-3">
									Once we’ve finished all of our testing and optimization we run through another round of testing with the client. This is also the time where we will go through website training with the client as needed. Once the client has fully approved the website, we then migrate the code to the client's servers and launch the website. 
								</p>

								<p className="med strong bold">
									Interested in finding out how we'd approach designing your website? 
									<br/>Book a strategy session using the form below.
								</p>

								
														
							</div>
													
						</div>

					</div>
					
					<PageContactSection />
					
				</div>
	}
}


export default WebDesignProcess;


