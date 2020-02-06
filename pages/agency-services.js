import React from 'react'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ArticlePageContainer from '../partials/articles-page-container.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import getConfig from 'next/config'
import Meta from '../partials/seo-meta.js'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class Services extends React.Component {
	
	static async getInitialProps(ctx) {
	    const res = await fetch('//cms.propernoun.co/wp-json/wp/v2/services')
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 

	    let url = ctx.req.headers.referer

	    return {
	    	errorCode,
		    services: data.map(service => service),
		    url: url
		}
	}

	render() {

		return 	<div>
					<Meta 
						title="Web Design Services & Web Development Services | Proper Noun" 
						desc="Proper Noun is a creative agency located in Fort Lauderdale, FL specializing in web design, SEO, web development, user experience design, and digital marketing"
						canonical='https://www.propernoun.co/agency-services'
					/>	

					<div className="page-body services">
						<div className="section first-section">
							
							<div className="services-hero">
								<div className="title">
									<h1 className="page-title text-white">Our Agency Services</h1>
									<p className="text-white topmargin-4">
										Our focus as an agency can be broken down in to three core competencies - technology, design & branding, and digital marketing. Below are a variety of agency services we offer.
									</p>
									
									<div className="buttons center items-center topmargin-8">
										<a href="/contact" className="round-button white download-deck">
											Get Our SEO Deck
										</a>
										<a href="/contact" className="round-button white solid">
											Schedule A Call
										</a>
									</div>
									
								</div>
							</div>

							<div className="client-logos">
								<div className="big-container">
									<a href="/portfolio" className="responsive-img">
										<img src="/static/images/client-logos-white.png" alt="proper noun clients"/>
									</a>
								</div>
							</div>
							
						</div>
						
						
						<div className="section services-section">
							<div className="big-container services-grid">
								
								<div className="row flex items-center service-row">
									<div className="col-6-l col-12 item-text">
										<div className="text">
											<h3 className="pretitle">web</h3>
											<div className="indent">
												<h2 className="section-title-l bottommargin-3">
													Web Design
												</h2>
												<p>
													Modern design, clean user experience, and fast page speed performance are the foundation of all of our websites. From this core we create responsive websites, online properties and digital products fully customized to your brand. We believe websites should be attractive, easy to use and have a sense of purpose – we help deliver that.
												</p>

												<ul className="page-sublinks">
													<li>
														<a href="/web-design-process">Web Design Process</a>
													</li>
													<li>
														<a href="/web/wordpress-web-design-services">WordPress Web Design</a>
													</li>
													<li>
														<a href="/web/responsive-web-design">Responsive Web Design</a>
													</li>
													<li>
														<a href="/services/wordpress-website-security">WordPress Website Security</a>
													</li>
												</ul>
												
												<a href="/services/web-design" className="flat-btn theme-blue small topmargin-5">
													More About Web Design
												</a>
											</div>											
										</div>
									</div>

									<div className="col-6-m col-12 image-area">
										<div className="responsive-img">
											<img src="/static/images/web-design-service-head.jpg" alt="web design services" />
										</div>										
									</div>
								</div>									

								<div className="row flex items-center service-row">
									<div className="col-6-l col-12 item-text">
										<div className="text">
											<h3 className="pretitle">web</h3>
											<div className="indent">
												<h2 className="section-title-l bottommargin-3">
													E-Commerce Web Design
												</h2>
												<p>
													Our talented team of designers and developers works on the top e-commerce platforms including Magento, BigCommerce,  WooCommerce Web Design, and Shopify. 
												</p>
												<ul className="page-sublinks">
													<li>
														<a href="/services/bigcommerce-web-design">BigCommerce Web Design</a>
													</li>
													<li>
														<a href="/services/magento-website-design">Magento Web Design</a>
													</li>
													<li>
														<a href="/articles/bigcommerce-vs-shopify-comparison">BigCommerce vs. Shopify</a>
													</li>
													<li>
														<a href="/articles/bigcommerce-vs-magento-how-do-they-stack-up">BigCommerce vs. Magento</a>
													</li>
												</ul>												
												<a href="/services/web-design" className="flat-btn theme-blue small topmargin-5">
													More About Web Design
												</a>
											</div>											
										</div>
									</div>
									<div className="col-6-m col-12 image-area">
										<div className="responsive-img">
											<img src={`${publicRuntimeConfig.imageUrl}/ecommerce_buuwgb.jpg`} alt="e-commerce web design" />
										</div>										
									</div>
								</div>	

								<div className="row flex items-center service-row">
									<div className="col-6-l col-12 item-text">
										<div className="text">
											<h3 className="pretitle">web</h3>
											<div className="indent">
												<h2 className="section-title-l bottommargin-3">
													Application Development
												</h2>
												<p>
													Our team is passionate about app development. We work hands on with our clients to conceptualize, design and develop fully functional applications for the web including progressive web applications, for iPhone, for Android.
												</p>
												{/*<ul className="page-sublinks">
													<li>
														<a href="">BigCommerce Web Design</a>
													</li>
													<li>
														<a href="">Magento Web Design</a>
													</li>
													<li>
														<a href="">Shopify Web Design</a>
													</li>
													<li>
														<a href="">WooCommerce Web Design</a>
													</li>
												</ul>		*/}										
												<a href="/services/app-development" className="flat-btn theme-blue small topmargin-5">
													Application Development
												</a>
											</div>											
										</div>
									</div>
									<div className="col-6-l col-12 image-area">
										<div className="responsive-img">
											<img src={`${publicRuntimeConfig.imageUrl}/app-dev1_gdizjz.gif`} alt="app development" />
										</div>										
									</div>
								</div>	


								<div className="row flex items-center service-row">
									<div className="col-6-l col-12 item-text">
										<div className="text">
											<h3 className="pretitle">marketing</h3>
											<div className="indent">
												<h2 className="section-title-l bottommargin-3">
													Search Engine Optimization
												</h2>
												<p>
													At the end of the day a great SEO campaign is only about a few important things - A fast, well-optimized website, a steady stream of well written, authority content, and an always growing profile of backlinks from authority websites.
												</p>
												<ul className="page-sublinks">
													<li>
														<a href="/seo/seo-campaigns">SEO Campaigns</a>
													</li>					
													<li>
														<a href="/seo-services">SEO Services</a>
													</li>
													<li>
														<a href="/seo-process">Our SEO Process</a>
													</li>
													<li>
														<a href="/seo/seo-website-audits">SEO Website Audits</a>
													</li>
													<li>
														<a href="/seo/on-page-optimization">On-Page Optimization</a>
													</li>
													<li>
														<a href="/seo/local-citation-building-service">Local Citation Building</a>
													</li>																				
												</ul>												
												<a href="/services/web-design" className="flat-btn theme-blue small topmargin-5">
													Our SEO Services
												</a>
											</div>											
										</div>
									</div>
									<div className="col-6-l col-12 image-area">
										<div className="responsive-img">
											<img src={`${publicRuntimeConfig.imageUrl}/man-blogging-2_lbddup.jpg`} alt="seo services" />
										</div>										
									</div>
								</div>


								<div className="row flex items-center service-row last">
									<div className="col-6-l col-12 item-text">
										<div className="text">
											<h3 className="pretitle">marketing</h3>
											<div className="indent">
												<h2 className="section-title-l bottommargin-3">
													Digital Marketing
												</h2>
												<p>
													The core of any digital marketing campaign is developing a powerful brand message that resonates with it's target audience.  No matter the advertising medium or channel of delivery, if the message that you are paying to promote does not connect with it's audience, your digital marketing campaign will never realize it's full potential.
												</p>
												<ul className="page-sublinks">
													<li>
														<a href="/marketing/facebook-advertising-services">Facebook Advertising</a>
													</li>
													{/*<li>
														<a href="/marketing/instagram-advertising-company">Instagram Advertising</a>
													</li>*/}
													<li>
														<a href="/marketing/email-marketing">Email Marketing</a>
													</li>
													<li>
														<a href="/marketing/retargeting">Retargeting</a>
													</li>													
																																					
												</ul>												
												<a href="/services/digital-marketing" className="flat-btn theme-blue small topmargin-5">
													More About Digital Marketing
												</a>
											</div>											
										</div>
									</div>
									<div className="col-6-l col-12 image-area">
										<div className="responsive-img">
											<img src={`${publicRuntimeConfig.imageUrl}/digital-marketing-hero_gzegxz.jpg`} alt="digital marketing" />
										</div>		
								
									</div>
								</div>


							</div>							
						</div>
						

						<ContactSection />

					</div>
				
				</div>
	}
}


export default Services;