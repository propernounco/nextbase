import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import ContactForm from '../partials/contact-form.js'
import Head from 'next/head'
import Link from 'next/link'
import Meta from '../partials/seo-meta.js'

class ContactPage extends React.Component {

	componentDidMount() {
	   	  setTimeout(function(){
			window.scrollTo(0, 0)
			document.getElementById('main-video').play()				
	   	  }, 500)
	}

	render() {
			
		return <div className="home-contain">
				
				<Meta 
						title="Contact Us To Schedule A Strategy Session | Proper Noun" 
						desc="Contact Proper Noun to setup a strategy session for your next web design, app development, digital marketing or SEO project." 
						canonical="https://www.propernoun.co/contact"
				/>	

			<div className="contact-page">

				<div className="video">
					
					<video id="main-video" width="100%" height="100%" muted loop playsInline>
						<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.mp4" type="video/mp4" />
						<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.webm" type="video/webm" />
						<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.ogv" type="video/ogv" />
					</video>
				</div>

				<div className="content-area">
					
					<div className="container">

						<div className="row full-width contact-contents">
							<div className="col-6-m col-6-l col-12">
								<h1 className="page-title-medium">
									Let's Get In Touch
								</h1>
								<p>
									We love to talk about new project ideas &amp; movie trivia.
								</p>
									
								<div className="office topmargin-5">
									<p className="strong">Our Offices</p>

									<address className="topmargin-1 text-white">
										<span dangerouslySetInnerHTML={ {__html: publicRuntimeConfig.address } } />
									</address>
									<a href="https://www.google.com/maps/place/1932+Tyler+St,+Fort Lauderdale,+FL+33020/@26.0122043,-80.1485849,17z/data=!3m1!4b1!4m5!3m4!1s0x88d9aba1c526b3ff:0xaf5b1171d4cd90d7!8m2!3d26.0121995!4d-80.1463909" target="_blank">Get Directions</a> &nbsp; 
									<a href="#map-sec">View On Map</a>
								</div>	

								<div className="phone topmargin-2">
									
									<p className="strong">Give Us A Call.</p>	
									<a href="tel:19546741258" className="topmargin-1">
										954.674.1258
									</a>	

								</div>


								<div className="email topmargin-3">
									<p className="strong">Schedule A Phone Session</p>	
									<a href="https://propernoun.as.me/schedule.php" className="topmargin-1">
										Select An Appointment
									</a>	
								</div>
						
								<div className="email topmargin-3">
									<p className="strong">Send Us An Email.</p>	
									<a href="mailto:hello@propernoun.co" className="topmargin-1">
										hello@propernoun.co
									</a>	
								</div>
						

								<div className="social topmargin-3">
									<p className="strong">Connect With Us On Social.</p>	
									<a className="topmargin-1">
										@propernounco
									</a>	
									<div className="flex topmargin-3 bottommargin-1 social-icons">
								    <a href="https://www.facebook.com/propernounco" className="med">
								      <i className="fi-social-facebook"></i>
								    </a>

								    <a href="https://www.instagram.com/propernounco" className="med">
								      <i className="fi-social-instagram"></i>
								    </a>

								    <a href="https://www.youtube.com/channel/UCirbErckJolj1iXQsQJ9c1g" className="med">
								      <i className="fi-social-youtube"></i>
								    </a>
								  </div>
								</div>


							</div>
							<div className="col-6-m col-6-l col-12">
								<div className="contact-form">
									<ContactForm />
								</div>
							</div>
						</div>

					</div>
			
				</div>
							
			</div>
			
		</div>
	}
}


export default ContactPage;