import Link from 'next/link'

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const HomePortfolio = () => (	    	
    	
	<div className="portfolio-block">

		<div className="container">
			<h2 className="page-section-title fade-in-content opaque">We Love Building <br /><strong>Awesome</strong> Websites.</h2>	
			
			<div className="portfolio-items">
				<ul>
					<li className="fade-in-content opaque">
						<a href="/portfolio/officecrave-com" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/office-crave-bg-4_ebelb9.jpg`} alt="OfficeCrave.com" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									E-Commerce	
								</span>
								<span>
									Design
								</span>
								<span>
									Development
								</span>
								 <span>
								 	Branding
								 </span>
							</div>
							<a href="/portfolio/officecrave-com" className="project-title">
								OfficeCrave
							</a>

							<a href="/portfolio/officecrave-com" className="go-link">View Project</a>
						</div>
					</li>
					<li className="fade-in-content opaque">
						<a href="/portfolio/executive-electrocardiogram-education" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/register-bg_zxdbdo.jpg`} alt="Wordpress" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									Design
								</span>
								<span>
									E-Commerce	
								</span>
								<span>
									WordPress
								</span>
										 
							</div>
							<a href="/portfolio/executive-electrocardiogram-education" className="project-title">
								ecgEDU
							</a>

							<a href="/portfolio/executive-electrocardiogram-education" className="go-link">View Project</a>
						</div>
					</li>
					<li className="fade-in-content opaque delayed">
						<a href="/portfolio/hey-dude-shoes" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/hey-dude-641x390.png`} alt="e-commerce" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									E-Commerce	
								</span>
								<span>
									Shopify Development
								</span>
								
							</div>
							<a href="/portfolio/hey-dude-shoes" className="project-title">
								Hey Dude Shoes
							</a>

							<a href="/portfolio/hey-dude-shoes" className="go-link">View Project</a>
						</div>
					</li>
					
					<li className="fade-in-content opaque delayed">
						<a href="/portfolio/wewood" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/wewood-504x390.png`} alt="WeWOOD Magento e-commerce store" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									Shopify
								</span>
								<span>
									Web Design
								</span>							
								 <span>
								 	Branding
								 </span>
							</div>
							<a href="/portfolio/wewood" className="project-title">
								WeWOOD Watches
							</a>

							<a href="/portfolio/wewood" className="go-link">View Project</a>
						</div>
					</li>

					<li className="fade-in-content opaque delayed-x">
						<a href="/portfolio/bluedogink" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/bluedog-727x390.jpg`} alt="BlueDogInk e-commerce" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									E-Commerce	
								</span>
								<span>
									Design
								</span>							
								 <span>
								 	Branding
								 </span>
							</div>
							<a href="/portfolio/bluedogink" className="project-title">
								Blue Dog Ink
							</a>

							<a href="/portfolio/bluedogink" className="go-link">View Project</a>
						</div>
					</li>
					
					<li className="fade-in-content opaque delayed-x">
						<a href="/portfolio/wolf-medical" className="image">
							<img width="420" height="420" src={`${publicRuntimeConfig.imageUrl}/w_400,c_scale/wolfmed-564x390.png`} alt="Wolf Medical Magento" />
						</a>
						<div className="project-info">
							<div className="categories">
								<span>
									E-Commerce	
								</span>
								<span>
									Design
								</span>
								
								 <span>
								 	Branding
								 </span>
							</div>
							<a href="/portfolio/wolf-medical" className="project-title">
								Wolf Medical Supply
							</a>

							<a href="/portfolio/wolf-medical" className="go-link">View Project</a>
						</div>
					</li>
					
				</ul>

				<div className="buttons center">
					<a href="/portfolio" className="outline-btn dark">View Our Work</a>
				</div>

			</div>
	</div>
</div>

)

export default HomePortfolio