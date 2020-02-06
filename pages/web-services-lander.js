import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import feather from 'feather-icons'
import Meta from '../partials/seo-meta.js'
import getConfig from 'next/config'
import PortfolioContainer from '../partials/portfolio-container.js'
import fetch from 'isomorphic-unfetch'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

class SingleService extends React.Component {

	constructor() {
	    super();
	    this.state = { 
	    	portfolio: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps(ctx) {				

	    const service = await fetch('//cms.propernoun.co/wp-json/wp/v2/web_design_services/?slug=' + ctx.req.params.slug)
	    const serviceError = service.statusCode > 200 ? service.statusCode : false;
	    const serviceData = await service.json(); 


	    if(serviceData.length <= 0){
			ctx.res.statusCode = 404	
			return {
				serviceError,
				service: serviceData
			}	    
		}
		else {
			let img_url = '';
			let video_url = '';
			let hasVideo = false;

			let url = 'https://' + ctx.req.headers.host + '/web/' + ctx.req.params.slug

			if(serviceData[0].acf.hero_video){
				video_url = serviceData[0].acf.hero_video
				hasVideo = true;
		    }

		    if(serviceData[0].acf.hero_image){
				img_url = serviceData[0].acf.hero_image.sizes.mid_size
		    }

		    return {
		    	serviceError,	    	
			    service: serviceData,
			    meta_title: serviceData[0].yoast_meta.yoast_wpseo_title,
			    meta_desc: serviceData[0].yoast_meta.yoast_wpseo_metadesc,
			    url: url,	
			    hasVideo: hasVideo,
			    img_url: img_url,
			    video_url: video_url			
			}	

		}
		
	}


	componentDidMount(){

		feather.replace()
		
		fetch('//cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=6')
				  	.then(res => res.json())
			      	.then(json => this.setState(
			      				{ portfolio: json,
								  isLoading: false
			      				}
			      			)
			      		)		
				
	}

	render() {
		
		let service
		if(this.props.service.length > 0){
			 service = this.props.service[0]
		}

		return  <div>
					<Meta 
							title={ this.props.meta_title } 
							desc={ this.props.meta_desc }
							canonical={this.props.url}
							css="/static/css/sales-lander.css" 
						/>	
					
					{
						this.props.service[0] ? (
							<div className="page-body sales-lander">
				
								<div className="first-section">
									<div className="big-container">
										
										<div className="content">
											<h1 className="section-title">								
												{ service.acf.hero_title }
												
											</h1>
											<span className="orange-sep"></span>
											
											<div className="hero_text" dangerouslySetInnerHTML={{__html: service.acf.hero_text }} />							
											
											{
												service.acf.hero_links &&
												<div className="actions flex items-center">

													{
														service.acf.hero_links.map( link => (

																link.link.blue_button == 'yes' ? (
																	<a key={`${link.link.link_url}`} href={`${link.link.link_url}`} className="flat-btn theme-blue small"> {link.link.link_text} </a>
																):(
																	<a key={`${link.link.link_url}`} href={`${link.link.link_url}`} className="flat-btn no no-left small"> {link.link.link_text} </a>
																)			
																
															)
														)
													}
													
												</div>
											}
											
										</div>
										{
											service.acf.hide_background_image == 'yes' ? (
												<div className="video">						
													<div className="media-container">
														{
															this.props.hasVideo ? (
																<iframe width="560" height="315" src="https://www.youtube.com/embed/EceSgY9bDnc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>													
															) : (
																<img src={`${this.props.img_url}`} alt="{service.acf.hero_title}"/>
															)
														}								
													</div>					
												</div>
											) : (
												<div className="video laptop-bg">						
													<div className="media-container">
														{
															this.props.hasVideo ? (
																<iframe width="560" height="315" src="https://www.youtube.com/embed/EceSgY9bDnc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>													
															) : (
																<img src={`${this.props.img_url}`} alt="{service.acf.hero_title}"/>
															)
														}								
													</div>					
												</div>
											)
										}						
									</div>
									
									
								</div>
								
								<section className="section second-section">
									<div className="container">
										<div className="small-contain text center">
											
											<h2 className="section-title-l">
												{ service.acf.first_section_title }
											</h2>

											{
												service.acf.first_section_subtitle &&
												<h3 className="underline-title topmargin-2">
													{ service.acf.first_section_subtitle }
												</h3>
											}
											

											<div className="text topmargin-2" dangerouslySetInnerHTML={{ __html: service.acf.first_section_content }}>
											</div>
											
										</div>
										

										{		
											service.acf.first_section_tiles &&												
												<div className="lander-bullets">
												
												{
													Array.from(service.acf.first_section_tiles).map( tile => (	
														
														//Loop Herreee
														<div className="bullet" key={`${tile.title}`}>
															
															{
																tile.icon &&
																<i data-feather={`${tile.icon}`} />	
															}											

															<span className="text">
																{tile.title}
															</span>
															<p>
																{tile.text}
															</p>
															<a href="/contact" className="learn-more">Request More Info</a>
														</div>
														//End loop here
														
													))	
												}						

												</div>																		
										}
										
										{
											service.acf.below_tile_content &&
											<div className="text center small-contain topmargin-10">
												
												<h3 className="italic-text-xl">
													{ service.acf.below_tile_title }
												</h3>
												<p className="med topmargin-3">
													{ service.acf.below_tile_content }
												</p>
												
											</div>
										}
										
										{
											service.acf.below_tile_links &&
											<div className="actions flex items-center flex-center topmargin-5">									
												{
													service.acf.below_tile_links.map(below_link => (
															below_link.link.blue_button == 'yes' ? (
																<a className="flat-btn theme-blue small" href={`${below_link.link.link_url}`} key={`${below_link.link.link_url}`}>
																	{below_link.link.link_text}
																</a>
															):(
																<a className="flat-btn small" href={`${below_link.link.link_url}`} key={`${below_link.link.link_url}`}>
																	{below_link.link.link_text}
																</a>
															)											
														)
													)
												}
											</div>
										}
										
									
										
									</div>									
									
								</section>

								<PortfolioContainer>

									{
										this.state.portfolio.map( caseStudy => (

											<li className="" key={caseStudy.slug}>

												<a href={`/portfolio/${caseStudy.slug}`} className="image">
													<img src={`${caseStudy.acf.primary_image.url}`} alt={`${caseStudy.title.rendered}`} />
												</a>
												<div className="project-info">						
													<a href={`/portfolio/${caseStudy.slug}`} className="project-title">
														{caseStudy.title.rendered.replace('&#8217;', "'")}
													</a>

													<a href={`/portfolio/${caseStudy.slug}`} className="go-link">View Project</a>
												</div>
											</li>
												
										))
									}			
									
								</PortfolioContainer>
								
								{
									service.acf.parallax_section_content &&
									<section className="section bottom-cta">
										<div className="container">
											
											<div className="row flex items-center">
												
												<div className="col-6-l col-12">
													
													<h3 className="italic-text-xl">
														{service.acf.parallax_section_title}
													</h3>
													<div className="topmargin-3">
														<div className="text med" dangerouslySetInnerHTML={{ __html: service.acf.parallax_section_content }}>
															
														</div>
													</div>
												</div>
												<div className="col-6-l col-12">
													<ContactForm />
												</div>
											</div>
											
										</div>
									</section>
								}
								

								<div className="client-sec">
									<div className="container">				
										<div className="responsive-img">
											<img src="/static/images/client-logos-white.png" alt="proper noun clients"/>
										</div>				
									</div>
								</div>
								
								<section className="light section customer-testimonials">
									<div className="container">
										
										<div className="small-contain text-center bottommargin-10">
											<h2 className="italic-text-xl">what our clients are saying</h2>
										</div>
										{/*<span className="orange-sep center"></span>*/}
										
										<div className="big-image right-float">
											<div className="image">
												<img src={`${publicRuntimeConfig.imageUrl}/google-reviews.png`} alt="lander" />
											</div>
											<div className="content">
												<p>
													We have been working with Proper Noun for several years and on several projects. They are always responsive, accessible, honest, and completely organized. If you have hired web developers before, you can appreciate the value of these traits. We feel very fortunate to have found Adam and will continue to work with him and the team at proper noun for as long as they'll have us. :) Thank you guys for your amazing work!
												</p>
												<span className="orange-sep"></span>
												<p className="subheader-s">Bryant Smallwood</p>
												<p>Smallwood's Yachtwear</p>
											</div>
										</div>
										<div className="big-image left-float topmargin-10">
											<div className="image">
												<img src='/static/images/yotpo.png' alt="lander" />
											</div>
											<div className="content">
												<p>
													It took us a while to find a company who could accomplish what we needed for our website. It was well worth the wait. Adam and his team was a total and utter pleasure to work with. Their hard work, patience, and professionalism far exceeded our expectations. They were always avaible to answer any questions we had. Any ideas we had they would expand on them to make them much better. Their attitude was always positive and upbeat. They delivered a remarkable new modern design to our website ahead of schedule and was always there for us when we wanted to tweak something. Upon launching our new design, we have had record sales numbers. Thank you Adam and your team for your hard work and dedication and we look forward to working with you guys on our next projects.
												</p>
												<span className="orange-sep"></span>
												<p className="subheader-s">Tito De La Vega</p>
												<p>BlueDogInk.com</p>
											</div>
										</div>
													
									</div>
								</section>

								<ContactSection />
									
								{
									service.acf.bottom_content_title &&
									<section className="section">

										<div className="container add-color-sq">
											
											<h2 className="section-title">{service.acf.bottom_content_title}</h2>
											
											<div className="text body-text topmargin-3" dangerouslySetInnerHTML={{ __html: service.acf.bottom_content_text }}>
												
												{/*<p>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit pariatur dolore aspernatur ab quod, repellendus molestias, iste quis beatae. Commodi officia at consequuntur sequi ea odit, ex, delectus. Accusantium, id! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus voluptas vero earum harum, corporis suscipit optio quidem cum veniam eaque. Hic nam, a, cum eveniet nulla maiores quas voluptate rem!
												</p>

												<h3 className="separator-title">
													Title Separator
												</h3>
												*/}							

											</div>
																	
										</div>
									</section>
										
								}
								

								

							</div>
						) : (
							<div className="page-body single-service">
								<div className="section black mid-height">
									<div className="container">
										<div className="small-contain text center white text-white">
											<h2 className="section-title">Whoops. Looks Like You're Lost</h2>
											<p className="white topmargin-3">
												Looks like you've found a page that does not exist... which means you haven't found anything? What a conundrum.
											</p>
											
											<div className="buttons center">
												<a href="/" className="flat-btn btn blue small">Return Home</a>
											</div>												

										</div>
									</div>									
								</div>
								<ContactSection />
							</div>
						)
					}
					
			
				</div>
	}
}
export default SingleService;