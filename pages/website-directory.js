import React from 'react'
import getConfig from 'next/config'
import ContactSection from '../partials/page-contact-section.js'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Link from 'next/link'

import Meta from '../partials/seo-meta.js'

// const resourceFolder = './pdfs/';
// const fs = require('fs-extra')
// const find = require('find');

class WebsiteDirectory extends React.Component {
	
	constructor() {
	    super();
	    this.state = { 
	    	articles: [],
	    	resources: [] 
	    };
	}

	static async getInitialProps(ctx) {
		
		let url = ctx.req.headers.referer

	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){
		
		fetch('//cms.propernoun.co/wp-json/wp/v2/posts?per_page=50')
			  	.then(res => res.json())
		      	.then(json => this.setState({ articles: json }));	  	
		
		fetch('/show-resources')
			  	.then(res => res.json())
			  	// .then(json => console.log(json))
		      	.then(json => this.setState({ resources: json }));	  	
		
	}

	render() {
			
		return <div className="single-article-page">
				<Meta 
					title="Website Directory Page | Proper Noun"
					desc="Easily find what you are looking for on the Proper Noun website using our full website directory."
					canonical='https://www.propernoun.co/website-directory'
				/>	

				<div className="big-container">		
					
					<div className="article">									
						<div className="row flex toppad-3">

							<div className="col-1-l col-12-m col-12 mobile-hide">
								&nbsp;
							</div>

							<div className="col-10-l col-12-m col-12">

								<div className="row">
									<div className="col-10-l col-10-m col-12">
										<h1 className="article-title">
											Website Directory
										</h1>
										<p className="big topmargin-3">
											All pages, posts, resources, and other information on the Proper Noun website.
										</p>
					
										
									</div>
									<div className="col-2-l col-2-m col-12"></div>
								</div>

								<div className="bottommargin-3 topmargin-5 text-content">
									
									<div className="block topmargin-10">
										<h3 className="section-title-s">Pages</h3>	
										<hr />
										<div className="row topmargin-6">
											<div className="col-3-l col-4-m col-12">
												<a href="/">Home</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/about">Who We Are</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/agency-services">Our Services</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/portfolio">Our Portfolio</a>
											</div>
											
										</div>			

										<div className="row topmargin-4">
											<div className="col-3-l col-4-m col-12">
												<a href="/articles">Articles</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/bigcommerce-web-design-company">BigCommerce Services</a>
											</div>								
											<div className="col-3-l col-4-m col-12">
											 	<a href="https://website-grader.propernoun.co">Website Grader</a>
											</div>								
											<div className="col-3-l col-4-m col-12">
												<a href="https://cpt-generator.propernoun.co">Custom Post Type Generator</a>
											</div>
											
										</div>	

										<div className="row topmargin-4">
											<div className="col-3-l col-4-m col-12">
												<a href="/contact">Contact</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/website-platforms">Website Platforms</a>
											</div>								
											<div className="col-3-l col-4-m col-12">
											 	<a href="/seo-process">Our SEO Process</a>
											</div>								
											<div className="col-3-l col-4-m col-12">
												<a href="/seo-services">Our SEO Services</a>
											</div>
											
										</div>			

											
									</div>
									
								
									<div className="block topmargin-10">
										<h3 className="section-title-s">Services</h3>	
										<hr />
										<div className="row topmargin-6">
											<div className="col-3-l col-4-m col-12">
												<a href="/services/web-design">Web Design</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/ecommerce-web-design">E-Commerce Web Design</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/app-development">App Development</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/wordpress-web-design">Wordpress Web Design</a>
											</div>
										</div>			

										<div className="row topmargin-4">
											<div className="col-3-l col-4-m col-12">
												<a href="/services/bigcommerce-web-design">BigCommerce Web Design</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/magento-website-design">Magento Web Design</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/branding-ux">Branding &amp; UX</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/digital-marketing">Digital Marketing</a>
											</div>								
										</div>			

										<div className="row topmargin-4">
											<div className="col-3-l col-4-m col-12">
												<a href="/services/search-engine-optimization">Search Engine Optimization</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="/services/wordpress-website-security">WordPress Security</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												&nbsp;
											</div>
											<div className="col-3-l col-4-m col-12">
												&nbsp;
											</div>
										</div>			

									</div>
											

									<div className="block topmargin-10">
										<h3 className="section-title-s">Articles</h3>	
										<hr />
										
										<div className="row topmargin-6">

											{
												this.state.articles.map(article =>(
														<div className="col-3-l col-4-m col-12 topmargin-2" key={article.title.rendered}>
															<a href="/articles/'{{ article.slug }}">
																{ article.title.rendered.replace('&#8211;', '-').replace('&#8217', "'").replace('&#038;', '&') }																
															</a>
														</div>
													)
												)	
											}
																														
										</div>																														
									</div>

									<div className="block topmargin-10">
										<h3 className="section-title-s">Resources</h3>	
										<hr />
									
										 <div className="row">
											 {
											 	this.state.resources.map( (resource, index) => (

														<div className="col-3-l col-4-m col-12 topmargin-2" key={resource}>
											 				<a href={ resource } className="block">
											 					{ 
																	resource.replace('static/', '').replace('pdfs/', ' ').replace(/-|_/g, ' ').replace(/_|_/g, ' ')																	
											 					}																
											 				</a>
											 			</div>
																					 			
											 		)
											 	)	
											 }																					
										 </div>														
									</div>
						
									<div className="block topmargin-10">
										<h3 className="section-title-s">Partners</h3>	
										<hr />
										<div className="row topmargin-6">
											<div className="col-3-l col-4-m col-12">
												<a href="https://upcity.com/local-marketing-agencies/profiles/proper-noun" className="responsive-img" >
									            	<img src="https://app.upcity.com/images/badges/featured.png" alt="upcity" className="responsive-img" />
									          	</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												<a href="http://www.brenkoweb.com" className="responsive-img">
									            	<img src="/static/images/brenkoweb.png" alt="brenkoweb" className="responsive-img" />
									          	</a>
											</div>
											<div className="col-3-l col-4-m col-12">
												&nbsp;
											</div>
											<div className="col-3-l col-4-m col-12">
												&nbsp;
											</div>
										</div>													
									</div>
									
								</div>				

							</div>
						
							<div className="col-1-l col-1-m col-12 mobile-hide">
								&nbsp;
							</div>
							
						</div>					
					</div>		

				</div>
				

				<ContactSection />
				
			</div>

	}
}


export default WebsiteDirectory;