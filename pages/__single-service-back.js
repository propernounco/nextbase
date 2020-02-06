import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
// import PortfolioGrid from '../lib/portfolio.js'
// import servicePageContainer from '../partials/services-page-container.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class SingleService extends React.Component {
	
	constructor(props) {
	    super(props);
	    // this.handleChange = this.handleChange.bind(this);
	    this.state = {
	      // "DataSource" is some global data source
	      portfolios: ''
	    };
	  }
	  
	static async getInitialProps(ctx) {				

	    const service = await fetch('http://cms.propernoun.co/wp-json/wp/v2/services/?slug=' + ctx.req.params.slug)
	    const serviceError = service.statusCode > 200 ? service.statusCode : false;
	    const serviceData = await service.json(); 

	    const portfolios = await fetch('http://cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=6')
	    const portfoliosError = portfolios.statusCode > 200 ? portfolios.statusCode : false;
	    const portfoliosData = await portfolios.json(); 

		let img_url = '';

	    if(serviceData[0].acf.featured_image.url){
			img_url = serviceData[0].acf.featured_image.url
	    }

	    return {
	    	serviceError,
	    	portfoliosError,
		    service: serviceData,
		    meta_title: serviceData[0].yoast_meta.yoast_wpseo_title,
		    meta_desc: serviceData[0].yoast_meta.yoast_wpseo_metadesc,
			featured_bg: {						  
						  backgroundImage: img_url
						},
			bottom_bg: {						  
						  backgroundImage: img_url
						},						
			portfolios: portfoliosData.map(item => item)
		}	
	}
	

	render() {

		let caseStudy = '';

		if(this.props.service[0].acf.case_study_title){

			caseStudy = '<div class="featured-case-study" style="background-image:url('+ this.props.service[0].acf.case_study_image.url +')">' +								
							'<div class="big-container flex items-center">' +
								'<div class="text-contents">' +										
									'<h3 class="case-study-pre-head">Featured Case Study</h3>'+
									'<h2 class="section-title-xl">'	+		
										 this.props.service[0].acf.case_study_title +
									'</h2>' +									
									'<h3 class="short-title">' +											
										 this.props.service[0].acf.case_study_subtitle +
									'</h3>' +
									'<div class="text">' +										
										'<p>' +
											this.props.service[0].acf.case_study_description +
										'</p>' +
									'</div>' +
									'<div class="buttons ">' +
										'<a href="/portfolio" class="proper-btn blue">'+ 
											'View All Case Studies' +
										'</a>' +
									'</div>' +										
								'</div>' +
								'<div class="featured-image">' +
									'<img src="'+ this.props.service[0].acf.featured_image.url + '" alt="Proper Noun" />' +
								'</div>'												
							'</div>'
						'</div>';		

		}
		else{
						
			let allItems = '';

			let portfolioItems = this.props.portfolios
		
			allItems += '<div class="portfolio-items">'
			for(var vi = 0; vi < portfolioItems.length; vi++ ){
		

				allItems += '<div class="item">' +
									'<a href="'+ portfolioItems[vi].slug + '">' +
										'<img src="'+ portfolioItems[vi].primary_image.url +'" alt="Hollywood Web Design Agency" />' +
									'</a>'+
								'</div>'	
			}
				
			allItems += '</div>'			
			caseStudy = allItems;				
		}
				
		return  <div>		
					<Head>
						<title>{ this.props.meta_title }</title>
						<meta name="description" content={`${ this.props.meta_title }`}/>
					</Head>
			
					<div className="page-body single-service">
					
						<div className="first-section flex items-center">
							<div className="container">
								
								<div className="row items-center flex">				
									
									<div className="col-7-l col-12-m col-12 project-description">		
										<div className="title bottommargin-2 bottommargin-1-m">
											<h1 className='section-title-l text-white'>							
												{ this.props.service[0].title.rendered }
											</h1>
										</div>

										<h3 className="subheader-s bottommargin-6 text-white">																		
											{ this.props.service[0].acf.page_subtitle }		
										</h3>

										<p className="text-white" dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.page_first_description } } />		
										
										<div className="buttons topmargin-8">
											<a href="/contact" className="link-text white">
												Request A Free Consultation
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
										'partials/main-contact-form.php'
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
										
										<a href="/contact" className="link-text link-green topmargin-6">
											Request A Strategy Session
										</a>
									</div>	

								</div>			
							</div>
						</section>
						<section className="no-pad section split-items">

							<div className="row topborder flex items-center">
								<div className="col-5-l  col-6-m col-12">

									<div className="med-contain">
									
										<h2 className="section-title bottommargin-3">											
											{ this.props.service[0].acf.third_section_title }
										</h2>										

										<div dangerouslySetInnerHTML={ {__html: this.props.service[0].acf.third_section_content } } />

										<a href="/contact" className="link-text link-green topmargin-6">
											Request A Strategy Session
										</a>
									</div>
									
								</div>

								<div className="col-7-l col-6-m col-12">
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

										<a href="" className="link-text link-green topmargin-6">
											Request A Strategy Session
										</a>

									</div>
								</div>				
							</div>

						</section>
		
						<section dangerouslySetInnerHTML={{__html: caseStudy }} />																
						{/*<div className="portfolio-items" dangerouslySetInnerHTML={{__html: caseStudy }} />																*/}
						
						<section className="section light">
							<div className="container">
								<div className="title center toppad-8 bottompad-8">
									<h2 className="section-title bottommargin-4">										
										{ this.props.service[0].acf.fifth_section_title }
									</h2>

									<div dangerouslySetInnerHTML={{__html:  this.props.service[0].acf.fifth_section_content }}></div>									

									<a href="/contact" className="link-text link-green topmargin-6">
										Schedule a { this.props.service[0].title.rendered } Consultation
									</a>
								</div>
							</div>
						</section>


						<div className="second-image full-image" id='second-section' >
							
							<div className="content-area container flex items-center">
								<div className="row">

									<div className="col-12">
									
										<h3 className="subheader-portfolio text-white">Want To Schedule A Strategy Session?</h3>	
										<h2 className="page-title-xl topmargin-2 text-white">Drop Us A Line.</h2>

										<div className="row topmargin-5">

											<div className="col-3-l col-6-m col-12">
												<div className="office">
													<p className="strong">Our Offices</p>
													<p className="topmargin-1">
														1932 Tyler Street <br />
														Hollywood, FL 33027
													</p>
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
												Schedule a Strategy Session
											</a>
										</div>
							
									</div>
								
								</div>
								
							</div>

							<img src="/static/images/team-at-table.jpg" alt="miami-web-design" />
						</div>

					</div>
				
				</div>
	}
}


export default SingleService;