import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import ArticleSchema from '../partials/article-schema.js'
import ArticlePageContainer from '../partials/articles-page-container.js'
import getConfig from 'next/config'
import Router from 'next/router'
import Meta from '../partials/seo-meta.js'
import fetch from 'isomorphic-unfetch'

import MediaQuery from 'react-responsive';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class Articles extends React.Component {

	static async getInitialProps(ctx) {				
	    const res = await fetch('//cms.propernoun.co/wp-json/wp/v2/posts/?slug=' + ctx.req.params.slug)
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 


		let meta_title;
	    let meta_desc;	

		let url = 'https://' + ctx.req.headers.host + '/articles/' + ctx.req.params.slug

		if(data.length <= 0){
			ctx.res.statusCode = 404	
			meta_title = "Whoops We Can't Find That Article | Proper Noun"
	    	meta_desc = "Looks like the article you're looking for doesn't exist here any more. Sorry."
			return {
				errorCode,
				article: data,
				meta_title: meta_title,
				meta_desc: meta_desc,
				url: url				
			}	    
		}
		else{
			meta_title = await data[0].yoast_meta.yoast_wpseo_title
	    	meta_desc = await data[0].yoast_meta.yoast_wpseo_metadesc
			return {
		    	errorCode,
			    article: data,
			    meta_title: meta_title,
			    meta_desc: meta_desc,
			    url: url
			}
		}	

	}


	render() {
		let article_title = ''
		let article_desc = ''
		let article_img_url = ''
		let article_date = ''
		
		if(this.props.article.length > 0){
			// article_title = this.props.article[0].title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&').replace('&#8217;', "'").replace('&#038;', '&');
			article_title = entities.decode(this.props.article[0].title.rendered);
			article_desc = this.props.article[0].yoast_meta.yoast_wpseo_metadesc;
			article_img_url = this.props.article[0].acf.main_image.url;
			article_date = new Date(this.props.article[0].date);
			const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			article_date = months[article_date.getMonth()] + ' ' + article_date.getDay() + ', ' + article_date.getFullYear();

		}
		else{
			article_title = "You're in the wrong place foo!";
			article_desc = "You're in the wrong place foo!";
			article_img_url = '';
			article_date = ''			
		}
		
	
			
		return <div>		
				<Meta 
					title={ this.props.meta_title } 
					desc={ this.props.meta_desc } 
					canonical={this.props.url}
				/>	
				
				{
					this.props.article[0] ? (
						<div className="single-article-page">
							<div className="container">		
								
								<div className="article">				
															
									<div className="flex topmargin-7 topmargin-5-m">
	
										
											<div className="article-sidebar">

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
										
										
										<div className="article-content-section">
											<div className="bottommargin-3">

												<div className="article-text">
													
													{
														article_img_url &&
														<div className="responsive-img">
															<img src={`${article_img_url}`} alt="web design blog post" />
														</div>
													}						
													

													<div className="article-text-contain">
														<h1 className="article-title topmargin-3">
															{article_title}
														</h1>

														<div className="date topmargin-2">																					
															<p className="small">{article_date}</p> 												
															<p className="small">Posted By <a href="https://medium.com/@adamchodson" target="_blank">Adam Hodson</a></p>
															<div>
																<div className="addthis_inline_share_toolbox_np3p"></div>
															</div>
														</div>
																						

														<div className="article-content" dangerouslySetInnerHTML={ {__html: this.props.article[0].content.rendered} } />	
													</div>

												</div>
					
												
											</div>				
										</div>


									</div>					
								</div>		
							</div>
							
							<ContactSection />

							<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5b7e109bcdc80828"></script>

							<ArticleSchema articleTitle={`${article_title}`} articleDesc={`${article_desc}`} articleDate={`${article_date}`} articleImage={`${article_img_url}`} url={`${this.props.url}`}  />

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


export default Articles;