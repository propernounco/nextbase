import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Meta from '../partials/seo-meta.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class SinglePortfolio extends React.Component {
	
	static async getInitialProps(ctx) {	
			
	    const res = await fetch('//cms.propernoun.co/wp-json/wp/v2/case_studies?slug=' + ctx.req.params.slug)
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 

	    let url = 'https://' + ctx.req.headers.host + '/portfolio/' + ctx.req.params.slug

	    if(data.data && parseFloat(data.data.status) == 400){
			ctx.res.statusCode = 404
			ctx.res.end('Not Found')
			return;
		}

	    let meta_title = ''
	    let meta_desc = ''
		
		if(data.length > 0){
			meta_title = data[0].yoast_meta.yoast_wpseo_title
			meta_desc = data[0].yoast_meta.yoast_wpseo_metadesc
		}
		else{
			meta_title = 'Whoops'
			meta_desc = "whoops looks like you're lost"	
		}

	    return {
	    	errorCode,
		    caseStudy: data,
		    url: url,
		    meta_title: meta_title,
		    meta_desc: meta_desc		    
		}
		
	}

	componentDidMount(){
		document.getElementsByClassName('header')[0].classList.add('secondary')
	}

	render() {
			
		return <div>	

				<Meta 
					title={ this.props.meta_title } 
					desc={ this.props.meta_desc } 
					canonical={this.props.url}
				/>	
				
				{
					this.props.caseStudy.length > 0 ? (

						<div className="page-body single-portfolio">


							<div className="first-section flex items-center">
								<div className="big-container">
									<div className="title bottommargin-10 bottommargin-1-m">
										<h1 className='page-title-xl'>
											{ entities.decode(this.props.caseStudy[0].title.rendered) }
										</h1>
									</div>
									<div className="row">
										<div className="col-3-l col-6-m col-12 deliverables">

											<h3 className='subheader-s bottommargin-2'>Deliverables</h3>
											{
												this.props.caseStudy[0].deliverables.map( 
													deliverable => (																								
														<div key={deliverable.deliverable}>
															{ 
																deliverable.link ? (
																	<a href={`${deliverable.link}`} >
																		{ deliverable.deliverable }
																	</a>
																) : (
																	<p>
																		{ deliverable.deliverable }
																	</p>
																)
															}													
														</div>
													)
												)
											}									
										</div>

										<div className="col-3-l col-6-m col-12 the-work">
											<h3 className='subheader-s bottommargin-2'>Work</h3>
											{
												this.props.caseStudy[0].the_work.map( 
													work => (																								
														<div key={work.work}>
															{ 
																work.link ? (
																	<a href={`${work.link}`} >
																		{ work.work }
																	</a>
																) : (
																	<p>
																		{ work.work }
																	</p>
																)
															}													
														</div>
													)
												)
											}									
										</div>
										
										<div className="col-6-l col-12-m col-12 project-description topmargin-4-m">					
											<p className="subheader-portfolio">										
												{ this.props.caseStudy[0].project_description_title }
											</p>										
											<div dangerouslySetInnerHTML={{ __html: this.props.caseStudy[0].project_description }} />
										</div>
									</div>
								</div>
							</div>

							<div className="first-image full-image" id='first-section'>		
								<img data-anchor-target="#first-section" data-start="transform:translateY(0%)" data-end="transform:translateY(-30%)"  src={`${ this.props.caseStudy[0].full_width_image.url }`} alt="web-design-portfolio" />
							</div>

							<div className="section light-bg desktop-portfolio-items" id="second-section">
								<div className="toppad-8 bottompad-8 toppad-0-m bottompad-0-m">

									<div className="container bottommargin-8">
										<p className="page-title-medium">									
											{ this.props.caseStudy[0].second_section_title }										
										</p>

										<p className="topmargin-2">
											{ this.props.caseStudy[0].second_section_content }																			
										</p>
									</div>

									{
										this.props.caseStudy[0].big_image && 
											<div className="big-container">
												<div className="responsive-img">	
													<img src={`${ this.props.caseStudy[0].big_image.url }`} alt="web design agency portfolio"/>													
												</div>
											</div>									
									}							


									<div className="container topmargin-8">								
										{
											this.props.caseStudy[0].third_section_title &&
												<h2 className="page-title-medium">
													{ this.props.caseStudy[0].third_section_title }																			 
												</h2>
										}
								
										<p className="topmargin-2">
											{ this.props.caseStudy[0].third_section_content }																			
										</p>


										
										{
											this.props.caseStudy[0].section_images.map(image => (
													<div key={image.image.filename}>
														{
															image.image.filename ? (
																<div className="responsive-img item topmargin-4">
																	<img src={`${ image.image.url }`} alt="web-design" />
																</div>
															) : (
																<div>
																	<div className="topmargin-4"></div>
																	<div className="da-chev-container">
																	  <div className="da-chevron"></div>
																	  <div className="da-chevron"></div>
																	  <div className="da-chevron"></div>
																	</div>
																</div>														
															)
														}
													</div>
												)
											)
										}
																	

										<p className="topmargin-5">
											{ this.props.caseStudy[0].third_section_bottom_text }																		
										</p>

									</div>

								</div>
							</div>
							{
								this.props.caseStudy[0].divider_image &&
									<div className="section overflow-visible offset-phone no-pad">
										<div className="container">
											<div className="row flex items-center">
												<div className="col-5-l col-6-m col-12">
													<div className="title">
														<h3 className="page-title-medium bottommargin-3">
															{ this.props.caseStudy[0].fourth_section_title }																					
														</h3>

														<p>
															{ this.props.caseStudy[0].fourth_section_content }																				
														</p>
													</div>
												</div>
												<div className="col-7-l col-6-m col-12 phone-image">
													<div className="responsive-img top-offset">
														<img src={`${ this.props.caseStudy[0].divider_image.url }`} alt="website-design" />	
													</div>
												</div>
											</div>
											
										</div>
									</div>
							}
							
							{
								this.props.caseStudy[0].mobile_images &&
									<div className="section iphone-portfolio light-bg no-pad-bottom">
										<div className="container toppad-8 bottompad-8 toppad-2-m bottompad-4-m">
											<div className="row">
												{
													this.props.caseStudy[0].mobile_images.map(image => (
															<div className="col-4-l col-4-m col-12" key={`${image.image.url}`}>
																<div className="responsive-img">
																	<img src={`${ image.image.url }`} alt="web design portfolio" />
																</div>							
															</div>
														)
													)
												}										
											</div>
										</div>
									</div>									
							}

							{
								this.props.caseStudy[0].full_width_images &&
								<div className="section iphone-portfolio light-bg no-pad-bottom">
									<div className="container toppad-8 bottompad-8 toppad-2-m bottompad-4-m">
										<div className="row">
											{
												this.props.caseStudy[0].mobile_images.map(image => (
														<div className="col-12-l col-12-m col-12" key={image.image.url}>
															<div className="da-chev-container">
															  <div className="chevron"></div>
															  <div className="chevron"></div>
															  <div className="chevron"></div>
															</div>

															<div className="col-4-l col-4-m col-12">
																<div className="responsive-img">
																	<img src={`${image.image.url}`} alt="miami-web-agency" />
																</div>							
															</div>
														</div>
													)
												)
											}
										</div>																				
									</div>
									
								</div>								
							}
							
							{
								this.props.caseStudy[0].project_url &&											
								<div className="section light-bg no-pad-top">
									<div className="container">
										<div className="text center toppad-2 bottompad-1">
											<a href={`${this.props.caseStudy[0].project_url}`} className="flat-btn theme-blue xl" target="_blank">
													View This Project
											</a>
										</div>
									</div>											
								</div>								
							}
							
							


							<div className="second-image full-image" id='second-section'>
								
								<div className="content-area container flex items-center">
									<div className="row">

										<div className="col-12">
										
											<h3 className="subheader-portfolio text-white">Want To Schedule A Strategy Session?</h3>	
											<h2 className="page-title-xl topmargin-2 text-white">Drop Us A Line.</h2>

											<div className="row topmargin-5">

												<div className="col-3-l col-6-m col-12">
													<div className="office">
														<p className="strong">Our Offices</p>
														<address className="topmargin-1 text-white">
														300 SW 1ST Avenue, #155 <br />
														Fort Lauderdale, FL 33301
													</address>
													</div>	
												</div>
												<div className="col-3-l col-6-m col-12">
													<div className="phone ">
														
														<p className="strong">Give Us A Call.</p>	
														<a className="topmargin-1">
															954.674.1258
														</a>	

													</div>
												</div>
												<div className="col-3-l col-6-m col-12">
													<div className="email ">
														<p className="strong">Send Us An Email.</p>	
														<a className="topmargin-1">
															hello@propernoun.co
														</a>	
													</div>
												</div>
												<div className="col-3-l col-6-m col-12">
													<div className="social">
														<p className="strong">Connect With Us On Social.</p>	
														<a className="topmargin-1">
															@propernounco
														</a>	
													</div>
												</div>

											</div>

											<div className="buttons left topmargin-8">
												<a href="/contact" className="proper-btn blue">
													Send Us A Message Now!
												</a>
											</div>								
										</div>
									

									</div>
									
								</div>

								<img data-anchor-target="#second-section" data-start="transform:translateY(10%)" data-end="transform:translateY(-10%)"  src={`${ this.props.caseStudy[0].contact_background_image.url }`} alt="creative-marketing-agency" />
							</div>

						</div>

						
					) : (

						<div className="page-body single-portfolio">
							<div className="section mid-height">
								<div className="container">
									<div className="small-contain text center">
										<h2 className="section-title">Whoops. Looks Like You're Lost</h2>
										<p className="topmargin-3">
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


export default SinglePortfolio;