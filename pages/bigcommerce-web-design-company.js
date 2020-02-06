import React from 'react'
import getConfig from 'next/config'
import PageContactSection from '../partials/page-contact-section'
import Meta from '../partials/seo-meta.js'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Link from 'next/link'

class SeoProcess extends React.Component {

	static async getInitialProps(ctx) {		
		let url = ctx.req.headers.referer
	  	return {
	  		url: url
	  	}
	}

	render() {
			
		return <div className="single-article-page">
					<Meta 
						title="BigCommerce Web Design Company | Proper Noun" 
						desc="Proper Noun is a BigCommerce web design company located in Fort Lauderdale, FL. We create custom BigCommerce templates, BigCommerce extensions and API development." 
						canonical='https://www.propernoun.co/bigcommerce-web-design-company'
					/>
					
					<div className="container">				
						<div className="article">									
							<div className="row flex toppad-3">
								<div className="col-1-l col-1-m col-12 mobile-hide">
									&nbsp;
								</div>

								<div className="col-10-l col-10-m col-12">

									<div className="row">
										<div className="col-10-l col-10-m col-12">
											<h1 className="article-title">
												BigCommerce Web Design Company
											</h1>
											<p className="big topmargin-3">
												BigCommerce is the fastest growing e-commerce platform for small businesses to enterprise e-commerce stores. 
											</p>
						
											<div className="topmargin-3"></div>
											<div className="addthis_inline_share_toolbox_np3p"></div>
											
										</div>
										<div className="col-2-l col-2-m col-12"></div>
									</div>

									<hr />

									<div className="bottommargin-3 topmargin-5 text-content">

										<p>Are you looking for a <a href="https://www.propernoun.co">web design agency</a> that is experienced in building and maintaining BigCommerce websites? Are you in search of a trusted partner to help you grow your BigCommerce store? We are an experienced BigCommerce partner, well-versed in <a href="https://www.propernoun.co/services/bigcommerce-web-design">BigCommerce web design</a>, BigCommerce web development, and internet marketing and social media marketing for BigCommerce stores. While we are happy to work with just about any BigCommerce ecommerce website, here are a few of the primary services we offer to website owners.</p>

										
										<div className="responsive-img">
											<img src="/static/images/bigcom-webdesign-company.webp" alt="bigcommerce-web-design" />
										</div>

										<h2>BigCommerce Website Design</h2>
										<p>We design and develop custom BigCommerce Templates and custom BigCommerce themes for e-commerce brands of all sizes. As a BigCommerce partner, design BigCommerce websites for experienced BigCommerce store owners and brand new store owners alike. We are well versed with Stencil, the BigCommerce theme engine, which means we are also happy to take over web design projects and website management of existing BigCommerce websites with no problem.</p>

										<p>We follow <a href="https://developer.bigcommerce.com/">BigCommerce web design best practices</a> when it comes to building ecommerce websites, always aim for optimum page load times by utilizing the latest in technology such as Ajax and ReactJS, and always design the layout and content of our websites to be clean, attractive and most importantly, to drive users towards the conversion.</p>

										<p>With BigCommerce, it’s fast and easy to setup an e-commerce website, so that as a store owner, you can focus on building your brand message and growing your monthly sales. The wide array of tools and services available to all BigCommerce website owners makes website management a breeze, and BigCommerce account managers are also on hand to assist with anything store owners may need.</p>

										<p>If you’re interested in learning more about having Proper Noun design a custom BigCommerce website template for you, you can learn more about our process or schedule a strategy session with our team to discuss your project.</p>
					


										<a href="/contact" className="link-text link-green topmargin-1">
											Schedule A Strategy Session
										</a>

										
										<h2>BigCommerce API Integration</h2>
										<p>We have also built various web applications and web services that utilize the BigCommerce API as it’s e-commerce backbone. For example, if a client was interested in building a standalone web application in HapiJS, a NodeJS framework, we could simply utilize the BigCommerce API to handle any of the needed e-commerce functionalities without actually needing to build our app as a BigCommerce “theme”.</p>

										<p>The API can be used to build out iPhone applications, web applications, progressive web applications (or progressive web apps), and any number of other types of popular applications with ease. This means that developers are able to build out top of the line apps that seriously outperform a standard website, however can rely on the tested, proven, and most importantly, secure e-commerce endpoints that BigCommerce makes available.</p>

										<p>When it comes to headless e-commerce API’s, BigCommerce is also one of the best priced options when compared to it’s closest competitors. API’s like Moltin offer a considerable number of features like BigCommerce, however have a considerably higher price tag. It is also more stable and used in more production environments than some of it’s other competitors like Reaction Commerce, Koa.js, or Cart.js.</p>

										<p>The BigCommerce API can be a powerful asset in any modern application that requires an ecommerce component. If you’re interested in learning more about how we may use BigCommerce to deliver ecommerce functionality to your app, please schedule a strategy session today.</p>
					


										<a href="/contact" className="link-text link-green topmargin-1">
											Schedule A Strategy Session
										</a>
										

										<h2>BigCommerce Speed Optimization</h2>
										
										<p>One important factor that many web design companies overlook when designing a website is the website page speed and load times. A wide number of factors play in to how a website loads including the size of the images and videos and whether or not they’ve been properly optimized, whether or not the javascript and CSS files have been minified and compressed, whether or not your template files and code is “bloated” as well as a number of other things.</p>

										<p>When it comes to the page speed, we also look at a number of performance indicators and metrics. For example, we don’t just look at the full page load time, but also at the time to first byte and time to first paint. These two factors aren’t measuring the time it takes for the full page to load, but rather how long it takes for the page to first render as well as how long it takes for it to be first ‘usable’.</p>

										<p>When optimizing for page speed, we take a methodical approach to achieving the best possible load times. We start by taking care of the “low hanging fruit”, or the easiest updates that will have the biggest impact. Once we implement these changes, we then run another round of tests and then continue to implement additional changes as we go. This allows us to better identify the true issues facing your store as well as to debug in a safer, more efficient way.</p>

										<p>As page speed and load times are a very important factor in your websites search engine rankings and ultimately your organic traffic, making sure that your BigCommerce website loads quickly is paramount to success. If you have a BigCommerce store that you feel could be faster, or if you’d like to find out more about how we can improve your BigCommerce website page speed, schedule a strategy session with us today.</p>
										
										<div className="responsive-img toppad-5">
											<img src="/static/images/bigcom-dashboard.jpg" alt="bigcommerce-web-design" />
										</div>
					
										<h2>BigCommerce Maintenance &amp; Management</h2>
										<p>Do you own or operate a BigCommerce website and need an extra pair of hands to help with the day to day management? Ready to start focusing more on the marketing and logistical side of your ecommerce website and need an experienced BigCommerce partner to handle the ongoing website design and page creation? We are happy to work with brands and businesses of all sizes and scope.</p>

										<p>Whether you are looking for minimal something minimal like a small maintenance package or an expert you can have on hand for sporadic support, or something as involved as a 40 hour to 80 hour per month e-commerce development retainer, we can create an engagement structure that fits your companies needs. We work with clients in a variety of capacities from limited engagements to multi-year, ongoing retainers.</p>

										<p>If you’re interested in learning about any of our BigCommerce website design, development or management services or how Proper Noun can work with your e-commerce store, reach out to us today to schedule a strategy session.</p>
										
									</div>				

								</div>
							
								<div className="col-1-l col-1-m col-12 mobile-hide">
									&nbsp;
								</div>
								
							</div>					
						</div>		

					</div>
					

					<PageContactSection />
					
				</div>

	}
}


export default SeoProcess;


