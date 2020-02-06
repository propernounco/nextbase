import React from 'react'
import getConfig from 'next/config'
import ContactForm from '../partials/contact-form.js'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

const PageContactSection = () => (
	
	<section className="contact-section" >

		<div className="container full-height flex items-center">			
			
			<div className="info-sec">
				
				<div className="row full-width flex items-center">
					<div className="col-6-m col-6-l col-12">
						<h3 className="page-title-medium">
							Let's Get In Touch
						</h3>
						<p>
							We love to talk about new project ideas &amp; movie trivia.
						</p>
							
						<div className="office topmargin-4">
							<p className="strong">Our Offices</p>
							<p className="topmargin-1">
								<span dangerouslySetInnerHTML={{ __html: publicRuntimeConfig.address }} />
							</p>
						</div>	

						<div className="phone topmargin-4">
							
							<p className="strong">Give Us A Call.</p>	
							<a className="topmargin-1">
								954.674.1258
							</a>	

						</div>
						
						<div className="email topmargin-4">
							<p className="strong">Send Us An Email.</p>	
							<a className="topmargin-1">
								hello@propernoun.co
							</a>	
						</div>

						<div className="social topmargin-4">
							<p className="strong">Connect With Us On Social.</p>	
							<a className="topmargin-1">
								#propernoun
							</a>	
						</div>


					</div>
					<div className="col-6-m col-6-l col-12">
						<div className="contact-form" >
							<ContactForm />
						</div>
					</div>
				</div>
			</div>							
		</div>					
	</section>

)	

export default PageContactSection