import React from 'react'
// import Layout from '../partials/layout.js'
import Head from 'next/head'
import ArticleContainer from '../partials/articles-container.js'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import HomeFirstSection from '../partials/home-first-section.js'
import HomePortfolio from '../partials/home-portfolio.js'
import HomeStrategy from '../partials/home-strategic-web-design.js'
import ProcessSection from '../partials/home-process-section.js'
import HomeContent from '../partials/home-content-section.js'


const Home = (props) => (	
	<div className="home-contain">
		<Head>
			<title>Home</title>
		</Head>

		<div className="home-page">
			
			<HomeFirstSection />
			<HomePortfolio />
			<div className="line-bg-sec right no-subheadline">
				<div className="container flex">
					<div className="text-container">
						<h2>We’ve made some <strong> <br />pretty cool stuff.</strong></h2>
						<div className="text-content">
							<p>
								As a top web designer in <a href="https://www.hollywoodfl.org/">Hollywood</a>, We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
							</p>
							<p>
								Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
							</p>
						</div>
					</div>
					<div className="image-container fade-in-content opaque" data-bg-img="">
						<div className="tilted-video">
							
						</div>
					</div>
				</div>
			</div>
			
			<HomeStrategy />
			
			<ProcessSection />
				
			<div className="section dark development-section">
				<div className="container">
					<div className="row flex items-center dream-block">
						<div className="col-6-l col-12">
							<h3 className="underline-title">
							This Is How We Do It
							</h3>
							<h2 className="section-title-xl">If You Can Dream It, We Can Develop It.</h2>
							<div className="text-content topmargin-5">
								<p>
									When it comes to custom app development, e-commerce extensions, wordpress plugins and other app functionality for the web, our rule is "If You Can Dream It, We Can Develop It".
								</p>
								<p>
									Our team excels at creating programmable solutions with premium user experiences to solve problems and deliver new business opportunities. We have also created a number of commercial extensions for Magento, plugins WordPress, as well as custom PHP scripts and web applications to facilitate business services for our clients.
								</p>
							</div>
							<div className="buttons topmargin-5">
								<a href="<?= get_home_url('portfolio'); ?>" className="cta-link white">See Our Work</a>
							</div>
						</div>
						<div className="col-6-l col-12 scroller-browser">
							<div className="browser-window">
								<div className="clip-window">
									<img src={`${publicRuntimeConfig.imageUrl}/code-illustration-long.png`} alt="web design process" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="line-bg-sec left topmargin-10 bone-broth-block">
				<div className="container flex">
					<div className="image-container" data-bg-img="" >
						
						<div className="colored-block purple-bg"></div>
						<img className="max-height-img float-trigger" src={`${publicRuntimeConfig.imageUrl}/pn-bone-broth.png`} alt="web design process" />
					</div>
					<div className="text-container">
						<h3 className="underline-title">Brand Identity for the Digital Age</h3>
						<h2>Branding & Strategy <br /> Services</h2>
						<div className="text-content">
							<p>
								We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
							</p>
							<p>
								Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
							</p>
						</div>
						<div className="buttons topmargin-5">
							<a href="<?= get_home_url('portfolio'); ?>" className="cta-link ">See Our Work</a>
						</div>
					</div>
					
				</div>
			</div>

			<div className="line-bg-sec right topmargin-15 bottommargin-15">
				
				<div className="container flex">
					<div className="image-container" data-bg-img="">
						
						<div className="colored-block green-gradient"></div>
						<img className="max-height-img float-trigger" src={`${publicRuntimeConfig.imageUrl}/pn-ad.png`} alt="marketing seo" />
					</div>
					<div className="text-container">
						<h3 className="underline-title">Digital Marketing & SEO</h3>
						<h2>Build Brand <br />Awareness</h2>
						<div className="text-content">
							<p>
								We have created custom brand websites, highly optimized eCommerce properties, and a multitude of extensions, plugins and other digital experiences for brands and buisiness around the world.
							</p>
							<p>
								Our web design work is focused primarily on custom web application development, custom Wordpress web design, BigCommerce e-commerce development, custom Magento web design and custom Shopify web design, however we are available to work with other platforms and technologies as well as for custom web application development.
							</p>
						</div>
						<div className="buttons topmargin-5 bottommargin-3">
							<a href="<?= get_home_url('portfolio'); ?>" className="cta-link ">See Our Work</a>
						</div>
					</div>
					
				</div>
			</div>

			
			<ArticleContainer>
				{
					props.articles.map( article => (

						<div className="article" key={article.slug}>
							
							<a href={`/articles/${article.slug}`} className="thumb">
								<img src={`${article.acf.main_image.url}`} alt="" />
							</a>
							
							<div className="details">
								<a href={`/articles/${article.slug}`} className="article-title">
									{article.title.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
								</a>
								<p>
									{article.excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")}
								</p>
							</div>

							<a href={`/articles/${article.slug}`} className="outline-btn dark">Read More</a>

						</div>
					))
				}					
			</ArticleContainer>			
		</div>
		<HomeContent />
	</div>
)

Home.getInitialProps = async function(){

//	window.scrollTo(0, 0))

	const res = await fetch('http://cms.propernoun.co/wp-json/wp/v2/posts')
	const data = await res.json()

	return {
	    articles: data.map(article => article)
	}
}


export default Home;