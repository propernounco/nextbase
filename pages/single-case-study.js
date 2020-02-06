import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
// import ArticleSchema from '../partials/article-schema.js'
import getConfig from 'next/config'
import Router from 'next/router'
import Meta from '../partials/seo-meta.js'
import fetch from 'isomorphic-unfetch'

import smoothscroll  from 'smoothscroll-polyfill';


const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class CaseStudy extends React.Component {
	
	static async getInitialProps(ctx) {				
	    const res = await fetch('//cms.propernoun.co/wp-json/wp/v2/seo_case_studies/?slug=' + ctx.req.params.slug)
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 

		let meta_title;
	    let meta_desc;
		
		let url = 'https://' + ctx.req.headers.host + '/case-studies/' + ctx.req.params.slug

		if(data.length <= 0){
			ctx.res.statusCode = 404	
			meta_title = "Whoops We Can't Find That Article | Proper Noun"
	    	meta_desc = "Looks like the article you're looking for doesn't exist here any more. Sorry."
			return {
				errorCode,
				caseStudy: data,
				meta_title: meta_title,
				meta_desc: meta_desc,
				url: url
			}	    
		}
		else{

			meta_title = await (data[0].yoast_meta ? data[0].yoast_meta.yoast_wpseo_title : data[0].title.rendered) 
	    	meta_desc = await data[0].yoast_meta.yoast_wpseo_metadesc

			return {
		    	errorCode,
			    caseStudy: data,
			    meta_title: meta_title,
			    meta_desc: meta_desc,
			    url: url	    
			}
		}	
	    		
	}

	componentDidMount(){
		
		smoothscroll.polyfill();

		for(var li = 0;  li < document.getElementsByClassName('linkList-link').length; li++){
			document.getElementsByClassName('linkList-link')[li].addEventListener('click', function(e){
				e.preventDefault()
				
				var hidetimer = 0;
				if(window.innerWidth <= 1024 ){
					Array.from(document.getElementsByClassName('linkList-link')).map(function(link){
						
						var thelink = link			
						setTimeout(function(){
							thelink.classList.remove('show')			
						}, hidetimer)

						hidetimer = (hidetimer + 20)

					})
				}

				document.getElementById(this.getAttribute('data-id')).scrollIntoView({
					behavior: 'smooth'					
				})

				document.getElementById('mobile-sidebar-toggle').classList.remove('hide')

				// document.getElementById(this.getAttribute('data-id')).scrollTop = 0;
				// document.getElementsByClassName("main-content")[0].scrollTop += 10;

				// window.scrollTop += 120;


			})
		}		

	}

	render() {
		let case_study_title = ''
		let case_study_desc = ''
		let case_study_img_url = ''
		let case_study_date = ''
		
		if(this.props.caseStudy.length > 0){
			// article_title = this.props.caseStudy[0].title.rendered.replace(/<\/?[^>]+(>|$)/g, "").replace("\&#8211;", '&').replace('&#8217;', "'").replace('&#038;', '&');
			case_study_title = entities.decode(this.props.caseStudy[0].title.rendered);
			case_study_desc = this.props.caseStudy[0].yoast_meta.yoast_wpseo_metadesc;
			// case_study_img_url = this.props.caseStudy[0].acf.main_image.url;
			case_study_img_url = '';

			case_study_date = new Date(this.props.caseStudy[0].date);
			const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
			
			//case_study_date = months[article_date.getMonth()] + ' ' + article_date.getDay() + ', ' + article_date.getFullYear();
			case_study_date = ''

		}
		else{
			case_study_title = "You're in the wrong place foo!";
			case_study_desc = "You're in the wrong place foo!";
			case_study_img_url = '';
			case_study_date = ''			
		}
		
	
			
		return <div>		
				<Meta 
					title={ this.props.meta_title } 
					desc={ this.props.meta_desc } 
					canonical={this.props.url}
					css='/static/css/case-study.css'
					js='/static/js/case-study.js'
				/>	
				
				{
					this.props.caseStudy[0] ? (
						<div className="single-case-study">

							<div className="sidebar">
								<div className="linkList">
									<a href="#none" className="mobile-sidebar-toggle" id="mobile-sidebar-toggle">&nbsp; </a>
									<a href="#none" data-id="intro-section" className="linkList-link active">Introduction</a>
									<a href="#none" data-id="campaign-metrics" className="linkList-link">Key Campaign Metrics</a>
									<a href="#none" data-id="campaign-overview" className="linkList-link">Campaign Overview</a>
									<a href="#none" data-id="findings" className="linkList-link">Campaign Findings</a>								
									{
										this.props.caseStudy[0].acf.content_sections.map(section => (
												<a href="#none" data-id={`${ section.section_title.toLowerCase().replace(/ /g, '-').replace(/&/g, '').replace(/'/g, "")}`} key={`${ section.section_title.replace(' ', '-')}`} className="linkList-link">{entities.decode(section.section_title)}</a>
											)
										)
									}
									<a href="" className="show-seo-audit">download the PDF</a>
									<a href="/contact" className="">book consultation</a>
								</div>
							</div>
							
							<div className="main-content">

								<section className="section intro-section" id="intro-section">
									<div className="container">
										<div className="med-contain">

											<div className="text center text-center">
												<h1 className="page-title">{ entities.decode(this.props.caseStudy[0].title.rendered) }</h1>
												
												<p className="block topmargin-3 ">
													{entities.decode(this.props.caseStudy[0].acf.campaign_description )}
												</p>
											</div>
											
										</div>									
									</div>
								</section>

								<section className="section topborder" id="campaign-metrics">
									<div className="container">
										<h2 className="section-title text-center">
											Key Campaign Metrics
										</h2>

										<div className="campaign-metrics">

											{
												this.props.caseStudy[0].acf.bullets.map(bullet => (
														<div className="metric" key={bullet.bullet_label}>
															<div className="metric-label">
																{ bullet.bullet_label }
															</div>

															<div className="metric-value">
																{ bullet.bullet_value }
															</div>

															<div className="metric-desc">
																{ bullet.bullet_description }
															</div>
														</div>
													)
												)
											}
																						
										</div>

										
									</div>
								</section>

								<section className="section topborder" id="campaign-overview">
									<div className="container">
										<h2 className="section-title">
											Campaign Overview
										</h2>

										<div className="text topmargin-3 section-content" dangerouslySetInnerHTML={{ __html: this.props.caseStudy[0].acf.campaign_overview }} >
										</div>
									</div>
								</section>

								<section className="section topborder" id="findings">
									<div className="container">
										<h2 className="section-title">
											{ entities.decode(this.props.caseStudy[0].acf.findings_heading) }
										</h2>

										<div className="text topmargin-3 section-content" dangerouslySetInnerHTML={{ __html: this.props.caseStudy[0].acf.findings_description }} >
										</div>
									</div>
								</section>

								{
									this.props.caseStudy[0].acf.content_sections.map(section => (
											<section className="section topborder" key={`${section.section_title.replace(/ /g, '-').replace(/'/g, '')}`} id={`${section.section_title.toLowerCase().replace(/ /g, '-').replace(/&/g, '').replace(/'/g, "")}`} >
												<div className="container">
													<h2 className="section-title">{entities.decode(section.section_title)}</h2>
													
													{
														section.section_subtitle &&
														<p className="italic-text topmargin-2">
															{ entities.decode(section.section_subtitle) }
														</p>
													}

													<div className="section-content topmargin-5" dangerouslySetInnerHTML={{ __html: section.section_content }} >
														
													</div>
												</div>
											</section>
										)
									)
								}

							</div>
									
							{/*<ArticleSchema articleTitle={`${article_title}`} articleDesc={`${article_desc}`} articleDate={`${article_date}`} articleImage={`${article_img_url}`} url={`${this.props.url}`}  />*/}

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


export default CaseStudy;