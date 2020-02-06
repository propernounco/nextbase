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

class WebsitePlatforms extends React.Component {
	
	static async getInitialProps(ctx) {
		
		let url = ctx.req.headers.referer

	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){
		
		
	}

	render() {
			
		return <div className="single-article-page">
				<Meta 
					title="Website Platforms We Work With | Proper Noun"
					desc="Proper Noun can create custom websites and web applications on the worlds leading website platforms including WordPress, WooCommerce, BigCommerce, Shopify and Magento."
					canonical='https://www.propernoun.co/website-platforms'
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
											Website Platforms That We Work With
										</h1>
										<p className="big topmargin-3">
											We've built websites and web applications using some of the most widely used website platforms on the Internet.
										</p>
					
										<div className="topmargin-3"></div>
										<div className="addthis_inline_share_toolbox_np3p"></div>
										
									</div>
									<div className="col-2-l col-2-m col-12"></div>
								</div>

								<hr />

								<div className="bottommargin-3 topmargin-5 text-content">

									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/website-platforms.jpg`} alt="website platforms" />
									</div>

									<p>
										As a <a href="https://www.propernoun.co">web design agency</a>, Proper Noun has worked on a wide variety of website platforms and content management systems. Headquartered in Downtown Fort Lauderdale, Florida, Proper Noun provides web design services and digital marketing services to clients across the world.
									</p>

									<p>
										Our experienced team of web developers, web designers, and digital marketers combine their skills to make sure that our web design projects are designed and engineered for the specific content management system or website platform in question.
									</p>

									<p>
										Many times, clients will ask us "what is the best website platform for my website?" or "what is the best way for me to create a website?".  The answer is usually dependent upon whether or not the client has a need for ecommerce features, the type of content the client plans to use, and just how tech-savvy the client is. 
									</p>

									
									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/wordpress-website-platform.jpg`} alt="WordPress web design" />
									</div>

									<h2>WordPress</h2>
									<p>
										WordPress is an open source content management system which can be utilized to build a wide variety of websites. With an initial release in 2003, WordPress has changed the world of web design over the years. Currently, more than 27% of the Internet is powered by WordPress and it has been downloaded more than 19 million times. This makes it one of the most popular website content management systems in the world.
									</p>

									<p>
										WordPress makes it easy for designers to control every aspect of their website's content and media. Because it is open source and self-hosted, there is a global community of WordPress developers that are constantly proving the CMS. Both of these reasons make WordPress the best website building platform for almost any website project.
									</p>

									<p>
										As a site builder, it typically won't be as straightforward to use as something like a Weebly site, but depending on the WordPress developers you work with and their approach to building a WordPress website, the exact user experience may vary.
									</p>

									<h4>World's Most Popular CMS Platform</h4>

									<p>
										WordPress recently introduced its own drag-and-drop website builder called Gutenberg. This tool makes building sites much easier for website owners who have an eye for design. The Gutenberg editor is very user-friendly, and all of the components can be customized to fit your custom theme.
									</p>

									<p>
										As a content management system, it is one of the most flexible when it comes to creating custom themes. For an experienced web design agency, the design options are essentially limitless.  
									</p>
				
									<p>
										The CMS is extremely easy to customize, allowing for a website developer to include custom text inputs, image and media uploads, file uploads, and so much more. This makes adding, editing and managing website pages easy as ever. 
									</p>

									<p>
										Proper Noun has created a variety of custom WordPress themes including real estate websites, video learning websites, e-commerce websites, informational websites, restaurant websites, media websites and blogs, and so much more.
									</p>


									<a href="/contact" className="cta-link topmargin-1 bottommargin-5">
										Schedule A Strategy Session
									</a>
					
									
									<h3>WordPress Web Platform Plugins</h3>
									<p>
										WordPress can also be extended to include nearly limitless custom functionality through what is known as WordPress plugins. A plugin is a custom piece of code that lives outside of your theme files but creates some sort of custom code for either the frontend or backend of your website.
									</p>

									<p>
										There is a large community of WordPress developers around the world that are constantly contributing new code and new plugins to the WordPress ecosystem. Currently, there are more than 50,000 free plugins available for download.
									</p>

									<p>
										There are also a huge number of commercial plugins available for WordPress that fulfill a variety of needs. If you have a simple e-commerce need, WooCommerce is a great solution for small businesses that want to sell online. Our skilled web developers can create functional, custom plugins for your <a href="https://www.propernoun.co/services/wordpress-web-design/">WordPress website</a>. No matter what need you are looking to meet or user experience you are looking to create, we can design a solution.
									</p>

									<p>
										We also offer special WordPress Search Engine Optimization services to make sure that your site is bringing in the traffic it deserves. 
									</p>


									<a href="/contact" className="cta-link topmargin-1 bottommargin-5">
										Schedule A Strategy Session
									</a>
									
									<div className="responsive-img toppad-5">
										<img src={`${publicRuntimeConfig.imageUrl}/bigcom-dashboard.jpg`} alt="mobile first web design" />
									</div>

									<h2>Mobile-First Web Design</h2>
									
									<p>
										Mobile-first web design is when the primary focus for the website layout is how it will appear on mobile devices. While this may seem like a counter-intuitive approach, more people are doing their browsing and shopping online every day.  Mobile-first web design is great for conversion optimization if most of your traffic is coming from phones and tablets. 
									</p>

									<p>
										Mobile-first web design allows customers to have a unique and enjoyable mobile experience. It also ensures the experience will be designed with intent. This is different than just interacting with a desktop-based website on a mobile device, which can be clunky and difficult to navigate.
									</p>

									<p>
										More and more businesses are taking this approach due to the increase in mobile website traffic.  It can be especially helpful when it comes to e-commerce web design as it can make it easier for mobile users to shop and checkout.
									</p>

									<p>
										Interested in exploring a mobile-first web design for your business website or e-commerce store? Message us today and schedule your strategy session!
									</p>

									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/ecommerce-website-platforms.jpg`} alt="e-commerce platforms" />
									</div>
									
				
									<h3>E-commerce Web Design</h3>
									<p>
										Looking to start selling your products or services online with an e-commerce website? Don't worry, Proper Noun has you covered. We have created successful websites on almost every major e-commerce platform including BigCommerce, Magento, Shopify, and WooCommerce. 
									</p>


									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/bigcommerce-web-design-company.jpg`} alt="bigcommerce platform" />
									</div>

									<h2>BigCommerce Platform</h2>
									
									<p>
										BigCommerce is currently our <strong>preferred e-commerce website platform</strong>.  It is a managed e-commerce platform which means you do not need to pay for web hosting. The pricing ranges depending on the number of sales that you make each year and is very affordable. Unlike wix or weebly, there is not a free plan available, but you can sign up for as low as $29 per month.
									</p>

									<p>
										Despite being hosted on BigCommerce servers, you can still use your custom domain with a <a href="https://www.propernoun.co/bigcommerce-web-design-company">BigCommerce website</a>. The website platform does not offer a free domain, but you can purchase new domains right from the BigCommerce dashboard. 
									</p>
									
									<p>
										When building a BigCommerce website we will either use the BigCommerce Stencil Theme Engine or build a custom e-commerce application. BigCommerce also provides a series of command line developer tools to ensure complete integration and the most enjoyable user experience for your customers.
									</p>

									<p>
										The BigCommerce API can be used to create custom e-commerce extensions of all sorts. Whether you just need an engine for "in-app purchases" or would like to create a custom e-commerce application for your brand, BigCommerce can meet your needs.
									</p>

									<p>
										We also love to work with the BigCommerce API so that we can create unique BigCommerce extensions and applications for ecommerce websites. By utilizing the API, we are also able to build both frontend and backend user experiences specific to your brand as well as unique web apps that have e-commerce functions built in. 
									</p>

									<p>
										Thanks to the BigCommerce API, we are able to design a near limitless amount of e-commerce functions to your BigCommerce website, from simple tools on your site to powerful mobile phone applications. 
									</p>

									<p>
										The web platform also now offers the Store Design feature. This merchandising tool allows business owners to manipulate their storefront on-screen making it easier than ever to customize your site to exactly how you want it.
									</p>

									<p>
										Email us today to find out how using BigCommerce can better serve your customers!
									</p>

									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/magento-ecommerce-website-platform.jpg`} alt="Magento web design platform" />
									</div>

									<h2>Magento</h2>
									
									<p>
										Magento is another very popular web platform for e-commerce website development. It is an open source website platform which means it is free to use, however you must buy your own website hosting. Magento gives e-commerce businesses advanced control over their products and product data as well as the look and feel of their e-commerce store. 
									</p>

									<p>
										This website platform is a powerful program and allows merchants to offer up to 500,000 goods on each site. Plus it can handle more than 80,000 orders per hour.  It also has a very robust data model, which means you can create highly customized products.
									</p>

									<p>
										Our Magento website building process begins with creating a detailed wireframe in Photoshop or Sketch before beginning any code creation. Once we have a pixel-perfect wireframe, we then develop a fully interactive static HTML theme. 
									</p>

									<p>
										Once we have the static HTML theme created, we then begin integration with Magento. Our Magento sites are all unique, custom-built, and fully responsive and functional. 
									</p>

									<p>
										Starting in February 2019 we are now exclusively building <a href="https://www.propernoun.co/services/magento-website-design">Magento websites</a> on the Magento 2 e-commerce platform. We will still continue to support existing Magento 1 websites as needed, but all new Magento website construction will be for Magento 2. 
									</p>

									<p>
										In our opinion, Magento 2 should be considered an enterprise solution. As such, clients should expect a number of additional costs for adequate website hosting,  server caching, ongoing website management and more. 
									</p>

									<p>
										Website projects built for Magento 2 will be the most costly of all of the platforms we work on. The time required to design, develop, test and secure is considerable in comparison to other e-commerce platforms. As a result, there is a greater cost and longer timelines to complete these projects.
									</p>

									<p>
										If you're interested in learning about building an enterprise e-commerce website on Magento 2 give us a call today to learn more!
									</p>
					

									<div className="responsive-img">
										<img src={`${publicRuntimeConfig.imageUrl}/shopify-ecommerce-website-platform.jpg`} alt="Shopify website platform" />
									</div>

									<h2>
										Shopify
									</h2>

									<p>
										One of the most well-known platforms for online stores, Shopify lets your business easily sell its products and services online. Shopify can be used to build websites, web apps, mobile apps and more. 
									</p>

									<p>
										Shopify can also easily integrate with social media, in pop-up shops and brick-and-mortar locations. They also provide businesses the ability to control all aspects of the merchant process from inventory all the way to shipping. 
									</p>
				
									<p>
										Shopify offers an extensive app store allowing for website owners to easily add different usability to the site. Apps can be used to introduce a number of frontend and backend features, which can help increase profits and conversion rates.
									</p>

									<p>
										Shopify also features its Shopify Payments tool. As opposed to other merchants which use third-party payment processors like PayPal, Shopify keeps it all in-house so you can manage everything from one place. 
									</p>

									<p>
										Still can't find that perfect app to elevate your business? Our experienced team can create unique Shopify plugins for your site so that you can stand out from the competition!
									</p>

									<h2>
										Our Web Design Services
									</h2>

									<p>
										We are a skilled and experienced team of web designers, web developers, and internet marketers. We recognize that every website is unique, which is why we always start by working with our clients to understand their goals and branding style. We also understand that the <strong><em>website platform</em>, or CMS, is also important decision</strong>.
									</p>
												

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


export default WebsitePlatforms;