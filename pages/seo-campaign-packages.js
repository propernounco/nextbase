import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Meta from '../partials/seo-meta.js'
import Link from 'next/link'

class SeoProcess extends React.Component {

	componentDidMount(){
	  	
	  	console.log('mounted my dudes')
		
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
			
		return <div className="campaigns-page">
			
			<Meta 
				title="Top Organic SEO Services | Proper Noun"
				desc="Proper Noun provides high quality, organic SEO services to local businesses, e-commerce websites, SAAS companies, and enterprise business. Schedule a free strategy session."
				canonical="https://www.propernoun.co/seo-services"				
			/>	
	
					
					
					<div className="section top-section">
						<div className="container">
							<div className="text center ">
								<h1 className="page-title-xl">Our SEO Campaign Packages</h1>
							</div>
							<div className="text-center small-contain topmargin-3">
								<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nam vero, maiores animi harum at libero expedita enim quibusdam id debitis, doloribus iure fugit praesentium reiciendis repellat quos! Hic, sequi.
								</p>
							</div>						
							
						</div>						
					</div>
					<div className="section package-tiles-section">
						<div className="contain">
						
							<div className="switches">
								<a href="#none" className="switch" id="local-seo">Local SEO</a>
								<a href="#none" className="switch active" id="national-seo">National SEO</a>
								<a href="#none" className="switch" id="ecommerce-seo">eCommerce SEO</a>
							</div>

							<div className="package-titles local-seo">

								<h2>Local SEO Packages</h2>
								
								<div className="package-item">
									<h3 className="item-title">Starter Package</h3>
									<span className="monthly-cost">$750/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>
										

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
									
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								<div className="package-item">
									<h3 className="item-title">Basic Package</h3>
									<span className="monthly-cost">$1250/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>
									
										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



								<div className="package-item">
									<h3 className="item-title">Standard Package</h3>
									<span className="monthly-cost">$2000/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								



							</div>




							<div className="package-titles national-seo active">

								<h2>National SEO Packages</h2>
										
								<div className="package-item">
									<h3 className="item-title">Starter Package</h3>
									<span className="monthly-cost">$750/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>
										

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
									
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								<div className="package-item">
									<h3 className="item-title">Basic Package</h3>
									<span className="monthly-cost">$1250/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>
									
										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



								<div className="package-item">
									<h3 className="item-title">Standard Package</h3>
									<span className="monthly-cost">$2000/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								<div className="package-item">
									<h3 className="item-title">Advanced Package</h3>
									<span className="monthly-cost">$3500/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">8</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



								<div className="package-item">
									<h3 className="item-title">Pro Package</h3>
									<span className="monthly-cost">$5000/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">8</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">5</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>
										
										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">12</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>

										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



							</div>



							<div className="package-titles ecommerce-seo">
		
								<h2>eCommerce SEO Packages</h2>

								<div className="package-item">
									<h3 className="item-title">Starter Package</h3>
									<span className="monthly-cost">$750/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>
										

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
									
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								<div className="package-item">
									<h3 className="item-title">Basic Package</h3>
									<span className="monthly-cost">$1250/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>
									
										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



								<div className="package-item">
									<h3 className="item-title">Standard Package</h3>
									<span className="monthly-cost">$2000/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>




								<div className="package-item">
									<h3 className="item-title">Advanced Package</h3>
									<span className="monthly-cost">$3500/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>

										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">8</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>
										
										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



								<div className="package-item">
									<h3 className="item-title">Pro Package</h3>
									<span className="monthly-cost">$5000/mo</span>
	
									<div className="item-section">
										<div className="item-row">
											<span>SEO Audit</span>
										</div>
										<div className="item-row">
											<span>NAP Optimization</span>
										</div>
										<div className="item-row">
											<span>Close Content Gaps</span>
										</div>
										<div className="item-row">
											<span>Onsite Optimization</span>
										</div>
										<div className="item-row">
											<span>Monthly Report</span>
										</div>
									</div>

									<div className="item-section">
										<h4>Monthly Deliverables</h4>

										<div className="item-row">
											<span>On-Site Blog Content</span>
											<span className="count">3</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create highly optimized blog articles geared towards driving traffic with strategically chosen keywords. These articles will typically range in length from 1000 to 2000 words.
											</span>
										</div>

										<div className="item-row">
											<span>On-Site Pillar Content</span>
											<span className="count">2</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Pillar content is similar to our on-page blog content but just much longer in length and written with greater detail. These articles will typically range in length from 2000 to 5000+ words.
											</span>
										</div>

										<div className="item-row">
											<span>Off-Site Article Links</span>
											<span className="count">8</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create articles and then publish them on authority websites within relevant niches to build credibility for your website around the web.
											</span>
										</div>

										<div className="item-row">
											<span>Optimized Videos</span>
											<span className="count">4</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												We create informational videos based on your article content and website content for publication on your YouTube channel.
											</span>
										</div>

										<div className="item-row">
											<span>Visual Assets</span>
											<span className="count">5</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We include a graphic or stock photo with every piece of on-page content we create.</span>
										</div>

										<div className="item-row">
											<span>Authority Mix</span>
											<span className="count">1</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">We build a variety of links to your website around the Internet on social media channels, web 2.0 websites, directories, local citaiton websites, Q&A websites and much more.</span>
										</div>
										
										<div className="item-row">
											<span>Monthly Consulting</span>
											<span className="count">12</span>
											<span className="info-icon">&#9432;</span>
											<span className="info-details">
												Each month we allocate a certain number of hours for consulting, website review, recommendations and ongoing optimization.
											</span>
										</div>

										<a href="#" className="more-information">
											get more information	
										</a>
									</div>

								</div>



							</div>





						</div>
					</div>

		</div>
	}
}


export default SeoProcess;


