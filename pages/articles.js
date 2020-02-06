import React from 'react'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ArticlePageContainer from '../partials/articles-page-container.js'
import LoadingDiv from '../partials/loading-div.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Meta from '../partials/seo-meta.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class Articles extends React.Component {
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	articles: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps(ctx) {		

		// let url = ctx.req.headers.referrer	

		let page;		
		
		if(Object.keys(ctx.query).length > 0){
			page = parseFloat(ctx.query.page)
		}	
		else{
			page = 1
		}

		let base
		if((page - 1) == 0){
			base = 1;
		}
		else{
			base = page - 1;
		}

		const service = await fetch('//cms.propernoun.co/wp-json/wp/v2/posts?per_page=1&page=' + (base * 10))
	    const serviceError = service.statusCode > 200 ? service.statusCode : false;
	    const serviceData = await service.json(); 

		if(serviceData.data && parseFloat(serviceData.data.status) == 400){
			ctx.res.statusCode = 404
			ctx.res.end('Not Found')
			return;
		}
			
		if(serviceData.length <= 0){
			ctx.res.statusCode = 404	
			ctx.res.end('Not Found')	
			return;			   
		}
		
	  	return {	  		
	  		page: page
	  	}

	}

	componentDidMount() {					

		let totalPages;
		let pagination = '<ul class="pagination">';			
		
		fetch('//cms.propernoun.co/wp-json/wp/v2/posts?per_page=10&page=' + this.props.page)
			  	.then(res => {
			  		totalPages = parseFloat(res.headers.get('X-WP-TotalPages'))			  		
			  		for(var i = 1; i <= totalPages; i++){
			  			if(i == this.props.page){
							pagination += '<li><a class="active" href="/articles?page=' + i + '">' + i + '</a></li>'
			  			}
			  			else{
			  				pagination += '<li><a href="/articles?page=' + i + '">' + i + '</a></li>'	
			  			}
						
			  		}		  		
					return res.json()
			  	}).then(json => this.setState(
	      				{ 	      					
	      					articles: json,
							isLoading: false,
							pagination: pagination
	      				}		      				
	      			))		      	
	}


	render() {

		const loading = this.state.isLoading;
		
		let canon;

		if(this.props.page > 1){
			canon = "https://www.propernoun.co/articles?page=" + this.props.page
		} 
		else{
			canon = "https://www.propernoun.co/articles"	
		}

		return <div>
				<Meta 
					title="Web Design Articles, Case Studies & Tutorials | Proper Noun" 
					desc="Web design case studies, web development articles, marketing case studies, facebook marketing tutorials and much more can be found in the Proper Noun blog." 
					canonical={`${canon}`} 
				/>				
				<div className="articles-page page-body">
					<div className="intro-area">
						<div className="bg">
							
						</div>
						<div className="container">	
							<div className="med-contain">
								<div className="text center">										
									<h1 className="section-title text-white appear-text bottommargin-4">
										Articles & News
									</h1>									
									<div className="fade-in-text text-white large">
										<p>
											Thoughts on technology, design, development, digital marketing, creativity and the advertising industry at large from the Proper Noun team and select contributors.
										</p>
									</div>				
								</div>
							</div>
						</div>	
					</div>
					
					<section className="light section blog-sec">
							<div className="container">
							<div className="articles-columns">
								<div className="articles-column">
									{loading ? (
									        <LoadingDiv />
									    ) : (

									      	<ArticlePageContainer>
											{
												this.state.articles.map( article => (

													<div className="article" key={article.slug}>
														

														<a href={`/articles/${article.slug}`} className="thumb">
															 {article.acf.main_image ? (
														        <img src={`${article.acf.main_image.sizes.medium }`} alt="{article.slug}" />
														      ) : (
														        <img src='/static/images/pn-square.jpg' alt="{article.slug}" />
														      )}										
														</a>
														
														<div className="details">
															<a href={`/articles/${article.slug}`} className="article-title">
																{/*{article.title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&').replace('&#8217;', "'").replace('&#038;', '&')}*/}
																{entities.decode(article.title.rendered)}
															</a>

															<span dangerouslySetInnerHTML={{ __html: article.excerpt.rendered.substring(0, 400) }} />																 
															
															<a href={`/articles/${article.slug}`} className="outline-btn dark">Read More</a>

														</div>

														

													</div>
												))
											}					
											</ArticlePageContainer>
									        
									    )}
								</div>
								<div className="sidebar-column">
									<div className="component">
										<a href="" className="responsive-img show-seo-audit">
											<img src="/static/images/ecommerce-case-study-ad.png" alt="ecommerce-case-study"/>
										</a>
									</div>

									<div className="component">
										<a href="/articles/squarespace-vs-wordpress" className="responsive-img">
											<img src="/static/images/sidebar-wp-v-sq.png" alt="squarespace-vs-wordpress"/>
										</a>
									</div>

									<div className="component">
										<a className="responsive-img" href='https://affiliate.nexcess.net/offer?item=MzUyMDR8MTA'><img src='/static/images/nexcess_material_13x_250x250.png' alt='Nexcess 13X Hosting Performance' /></a>
									</div>
								</div>
							</div>
						</div>
					</section>	

					
					
					<div className="container">
						<div className="pagination-container" dangerouslySetInnerHTML={{ __html: this.state.pagination }} />
					</div>

					<ContactSection />

				</div>
				
			</div>
	}
}


export default Articles;