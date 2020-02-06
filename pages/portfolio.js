import React from 'react'
// import Layout from '../partials/layout.js'
import PortfolioContainer from '../partials/portfolio-container.js'
import LoadingDiv from '../partials/loading-div.js'
import ContactForm from '../partials/contact-form.js'
import ContactSection from '../partials/page-contact-section.js'
import Meta from '../partials/seo-meta.js'
import getConfig from 'next/config'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

class Portfolio extends React.Component {

	constructor() {
	    super();
	    this.state = { 
	    	portfolio: [],
	    	isLoading: true 
	    };	    

	}

	static async getInitialProps(ctx) {		
		let url = ctx.req.headers.referer
	  	return {
	  		url: url
	  	}
	}

	componentDidMount() {		
		
		let totalPages;
		let currentPage = 1;		

		const setWaypoint = (page) => {
			
			new Waypoint({
				  element: document.querySelectorAll('.portfolio-items ul li:last-child')[0],
				  handler: function(direction) {		  
				  	
				    if(direction == 'down'){							
				    	loadMorePosts(page)														   
				    }		
				    if(direction == 'up'){	
				    
				    }		   		    			    
				  },
				  offset: '220%'
				})	

			// new Waypoint.Inview({
			// 		element: document.querySelectorAll('.portfolio-items ul li:last-child')[0],
			// 		enter: function(direction) {				    
			// 		    if(direction == 'up'){
			// 		    	// elem.classList.add('small-float')
			// 		    }
			// 		    else{					    					    		
			// 				loadMorePosts(page)														   
			// 		    }
			// 		},				  
			// 		exited: function(direction) {
			// 		    if(direction == 'down'){
					    
			// 		    }
			// 		}
			// 	})	 
		}


		fetch('//cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=9')
			  	.then(res => {
					totalPages = parseFloat(res.headers.get('X-WP-TotalPages'))												
			  		return res.json()	
			  	})
		      	.then(json => this.setState(
		      				{ portfolio: json,
							  isLoading: false
		      				}
		      			)
		      		).then(function(){
		      // 			let morePosts = new Waypoint({
								//   element: document.getElementsByClassName('contact-section')[0],
								//   handler: function(direction) {		  
								//     if(direction == 'down'){	
								//     	if(currentPage <= totalPages){
								//     		currentPage++;
								// 			loadMorePosts(currentPage)	
								//     	}								    									    								    
								//     }		
								//     if(direction == 'up'){	
								    	
								//     }		   		    			    
								//   },
								//   offset: '180%'
								// })
						currentPage++;												
						setWaypoint(currentPage) 		
						
						
		      		})		
		// window.addEventListener('load', (e) => {

			
										
				
		// })      		    
	
		const loadMorePosts = (page) => {
						
						let newArticles;
						let currentArticles = this.state.portfolio;

						fetch('//cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=9&page=' + page)
							  	.then(res => res.json())
							  	.then(json => this.state.portfolio.concat(json))
						      	.then(items => this.setState({ portfolio: items }))
						      	.then(function(){
									currentPage++;
						      		if(currentPage <= totalPages){							
										setWaypoint(currentPage)
									}
									else{
										Waypoint.disableAll()
									}
						      	})		
					
				}  		
	}

	


	render() {
			
		const loading = this.state.isLoading;
				
		return <div className="portfolio-contain">
					<Meta 
						title="Web Design & Web Development Portfolio | Proper Noun" 
						desc="Browse a selection of our most recent web design projects, WordPress websites, web app development work and strategic branding design case studies." 
						canonical='https://www.propernoun.co/portfolio'						
					/>									

					<div className="portfolio-page">
						<div className="intro-area">
							<div className="bg">
								
							</div>

							<div className="container">
								<div className="title-area">			
									<h1 className="page-title text-white">Our Work</h1>
									<h2 className="subheader text-white white text-white bottommargin-4 delayed">A Selection of Recent Projects</h2>			

									<div className="small-topmargin-8">
										<p className=" delayed-x faded text-white large">
											We've worked with brands, businesses and organizations from around the world. Here's a selection of our some of our most recent projects as well as a few we're most proud of. 
										</p>			
									</div>
									
								</div>		
							</div>

							<div className="computer-section">								
								<img src={`${publicRuntimeConfig.imageUrl}/portfolio-top-image.png`} alt="web-design-portfolio" /> 
							</div>
						</div>

						{/*Portfolio Block */}
										
						
						{loading ? (
					        <LoadingDiv />
					      ) : (

					      	<PortfolioContainer>

								{
									this.state.portfolio.map( caseStudy => (

										<li className="" key={caseStudy.slug}>

											<a href={`/portfolio/${caseStudy.slug}`} className="image">
												<img src={`${ caseStudy.acf.primary_image.sizes.large }`} alt={`${caseStudy.title.rendered}`} />
											</a>
											<div className="project-info">						
												<a href={`portfolio/${caseStudy.slug}`} className="project-title">
													{entities.decode(caseStudy.title.rendered)}
												</a>

												<a href={`portfolio/${caseStudy.slug}`} className="go-link">View Project</a>
											</div>
										</li>
											
									))
								}											
							</PortfolioContainer>
					        
					    )}
					

						<div className="topmargin-15"></div>


						<ContactSection />

						
					</div>

				</div>
	}
}


export default Portfolio;