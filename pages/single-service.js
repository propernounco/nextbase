import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ContactForm from '../partials/contact-form.js'
import ServiceContactForm from '../partials/service-contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import ServiceSchema from '../partials/service-schema.js'
import Meta from '../partials/seo-meta.js'
// import PortfolioGrid from '../lib/portfolio.js'
// import servicePageContainer from '../partials/services-page-container.js'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import fetch from 'isomorphic-unfetch'



class SingleService extends React.Component {

	constructor(){
		super();
		this.state = {
			portfolios: [],
			isLoading: true
		}
	}
	
	  
	static async getInitialProps(ctx) {	

	    const service = await fetch('//cms.propernoun.co/wp-json/wp/v2/services/?slug=' + ctx.req.params.slug)
	    const serviceError = service.statusCode > 200 ? service.statusCode : false;
	    const serviceData = await service.json(); 
	
		let url = 'https://' + ctx.req.headers.host + '/services/' + ctx.req.params.slug
		

		if(serviceData.length <= 0){
			ctx.res.statusCode = 404		    
		}
					
		console.log(url)

		let img_url = '';
		let meta_title = '';
		let meta_desc = '';
		// let meta_title = "Whoops - Looks Like You're Lost!"
		// let meta_desc = "Looks like you've found a page that does not exist... which means you haven't found anything? What a conundrum."
	
		if(serviceData.length > 0){			
			if(serviceData[0].acf.featured_image){
				img_url = serviceData[0].acf.featured_image.url
		    }
		    meta_title = await serviceData[0].yoast_meta.yoast_wpseo_title
		    meta_desc = await serviceData[0].yoast_meta.yoast_wpseo_metadesc
		}
		else{
			meta_title = "Whoops - Looks Like You're Lost!"
		    meta_desc = "Looks like you've found a page that does not exist... which means you haven't found anything? What a conundrum."
		}
	    

	    return {
	    	serviceError,	    	
		    service: serviceData,
		    meta_title: meta_title,
		    meta_desc: meta_desc,
		    url: url,	
			featured_bg: {						  
						  backgroundImage: img_url
						},
			bottom_bg: {						  
						  backgroundImage: img_url
						}
		}	
	}

	componentDidMount(){
		fetch('//cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=6')
			.then(res => res.json())
			.then(json => this.setState({
				portfolios: json,
				isLoading: false	
			}))
			
	}


	render() {

		let caseStudy = '';

		if(this.props.service.length > 0){

			let _service = this.props.service[0]

			if(_service.acf.case_study_title){

				caseStudy = '<div class="featured-case-study" style="background-image:url('+ _service.acf.case_study_image.url +')">' +								
								'<div class="big-container flex items-center">' +
									'<div class="text-contents">' +										
										'<h3 class="case-study-pre-head">Featured Case Study</h3>'+
										'<h2 class="section-title-xl">'	+		
											 _service.acf.case_study_title +
										'</h2>' +									
										'<h3 class="short-title">' +											
											 _service.acf.case_study_subtitle +
										'</h3>' +
										'<div class="text">' +										
											'<p>' +
												_service.acf.case_study_description +
											'</p>' +
										'</div>' +
										'<div class="buttons ">' +
											'<a href="/portfolio" class="proper-btn blue">'+ 
												'View All Case Studies' +
											'</a>' +
										'</div>' +										
									'</div>' +
									'<div class="featured-image">' +
										'<img src="'+ _service.acf.featured_image.url + '" alt="Proper Noun" />' +
									'</div>'												
								'</div>'
							'</div>';		

			}
			else{
							
				let allItems = '';

				let portfolioItems = this.state.portfolios
			
				allItems += '<div class="portfolio-items">'
				for(var vi = 0; vi < portfolioItems.length; vi++ ){
			

					allItems += '<div class="item">' +
										'<a href="/portfolio/'+ portfolioItems[vi].slug + '">' +
											'<img src="'+ portfolioItems[vi].primary_image.url +'" alt="Fort Lauderdale Web Design Agency" />' +
										'</a>'+
									'</div>'	
				}
					
				allItems += '</div>'			
				caseStudy = allItems;				
			}
			
		}
		else{

		}
		
		return  <div>		
					<Meta 
						title={ this.props.meta_title } 
						desc={ this.props.meta_desc } 
						canonical={this.props.url}
					/>	
							
						{
							this.props.service[0] ? (
								<div className="page-body single-service" >
									<div className="first-section flex items-center" style={{ backgroundImage: `url(${this.props.service[0].main_image.sizes['twentyseventeen-featured-image']})`  }} >
										<div className="container">
											
											<div className="row items-center flex">				
												
												<div className="col-7-l col-12-m col-12 project-description">		
													<div className="title bottommargin-2 bottommargin-1-m">
														<h1 className='section-title-l text-white'>							
															{ this.props.service[0].title.rendered.replace('&#038;', '&') }
														</h1>
													</div>

													<h3 className="subheader-s bottommargin-6 text-white">																		
														{ this.props.service[0].acf.page_subtitle }		
													</h3>

													<p className="text-white" dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.page_first_description } } />		
													
													<div className="buttons topmargin-8">
														<a href="/contact" className="link-text white">
															Book A Strategy Session
														</a>
														<a href="https://website-grader.propernoun.co" className="link-text white leftmargin-3">
															Use Our Website Grader
														</a>	
													</div>										
												</div>

												<div className="col-1-l">
													&nbsp;
												</div>

												<div className="col-4-l col-offset-1-l cta-contact">
													<ServiceContactForm />
												</div>

												<div className="mobile-cta-contact">
													
												</div>

											</div>
										</div>
									</div>
									
									<section className="section first-content-section">
										<div className="container">
											<div className="row topmargin-4 bottommargin-4">												
												<div className="col-4-l col-12">
													<h2 className="section-title-l">											
														{ this.props.service[0].acf.second_section_title }		
													</h2>
												</div>
												<div className="col-8-l col-12 topmargin-3-m">																									
													<div dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.second_section_content } } />																										


													{
														this.props.service[0].second_section_link ? (																
															<a href={`${this.props.service[0].second_section_link.link_url || '/contact'}`} className="cta-link topmargin-6">
																{ this.props.service[0].second_section_link.link_text || 'Book A Strategy Session' }
															</a>
														) : (
															<a href="/contact" className="cta-link topmargin-6">
																Book A Strategy Session
															</a>
														)
													}
													
												</div>	
											</div>			
										</div>
									</section>

									<section className="no-pad section split-items">
										<div className="row topborder flex items-center first-split-item">
											<div className="col-5-l  col-6-m col-12 item-content">
												<div className="med-contain">									
													<h2 className="section-title bottommargin-3">											
														{ this.props.service[0].acf.third_section_title }
													</h2>										
													<div dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.third_section_content } } />
													
													{
														this.props.service[0].third_section_link ? (															
															<a href={`${this.props.service[0].third_section_link.link_url || '/contact'}`} className="cta-link topmargin-6">
																{ this.props.service[0].third_section_link.link_text || 'Book A Strategy Session' }
															</a>
														) : (
															<a href="/contact" className="cta-link topmargin-6">
																Book A Strategy Session
															</a>
														)
													}

												</div>									
											</div>

											<div className="col-7-l col-6-m col-12 item-image">
												<div className="responsive-img cover">
													
													<img src={`${ this.props.service[0].acf.third_section_image }`} alt="service->title->rendered" />
												</div>
											</div>		

										</div>


										<div className="row flex items-center">
											<div className="col-7-l col-6-m col-12">
												<div className="responsive-img cover">																								
													<img src={`${ this.props.service[0].acf.fourth_section_image }`} alt="" />
												</div>
											</div>

											<div className="col-5-l col-6-m col-12">
												<div className="med-contain">
												
													<h2 className="section-title bottommargin-3">
														{ this.props.service[0].acf.fourth_section_title }											
													</h2>
													
													<div dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.fourth_section_content } } /> 

													{
														this.props.service[0].fourth_section_link ? (															
															<a href={`${this.props.service[0].fourth_section_link.link_url || '/contact'}`} className="cta-link topmargin-6">
																{ this.props.service[0].fourth_section_link.link_text || 'Book A Strategy Session' }
															</a>
														) : (
															<a href="/contact" className="cta-link topmargin-6">
																Book A Strategy Session
															</a>
														)
													}

												</div>
											</div>				
										</div>

									</section>
					
									<section dangerouslySetInnerHTML={{__html: caseStudy }} />																
									{/*<div className="portfolio-items" dangerouslySetInnerHTML={{__html: caseStudy }} />																*/}
									
									<section className="section light">
										<div className="container">
											<div className="small-contain">
												<div className="text center toppad-8 bottompad-8">
													<h2 className="section-title bottommargin-4">										
														{ this.props.service[0].acf.fifth_section_title }
													</h2>

													<div dangerouslySetInnerHTML={{__html:  this.props.service[0].acf.fifth_section_content }}></div>									
													
													{
														this.props.service[0].fifth_section_link ? (

															this.props.service[0].fifth_section_link.length > 0 &&														
															<a href={`${this.props.service[0].fifth_section_link.link_url}`} className="cta-link topmargin-6">
																{ this.props.service[0].fifth_section_link.link_text }
															</a>
														) : (
															<div className="buttons center">
																<a href="/contact" className="flat-btn small theme-blue link-green topmargin-6">
																	Book A Strategy Session
																</a>
															</div>														
														)
													}
													
												</div>
											</div>											
										</div>
									</section>
									
									<ContactSection />

									<ServiceSchema serviceTitle={`${this.props.service[0].title.rendered}`} serviceImage={`${this.props.service[0].main_image.sizes['twentyseventeen-featured-image']}`} serviceUrl={`${this.props.url}`} serviceDesc={`${ this.props.meta_desc }`} />
								
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