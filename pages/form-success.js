import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import ContactForm from '../partials/contact-form.js'
import Head from 'next/head'
import Link from 'next/link'
import Meta from '../partials/seo-meta.js'

class ContactThanks extends React.Component {

	componentDidMount() {
	   	 
	}

	render() {
			
		return <div className="home-contain">
				
				<Meta 
						title="Thanks For Contacting Proper Noun | Fort Lauderdale Web Design" 
						desc="Thanks for contacting Proper Noun to setup a strategy session for your project. We will be in touch shortly." 
						canonical="https://www.propernoun.co/form-success"
				/>	

			<div className="contact-page">
				<div className="section light full-height">
					<div className="container toppad-15 bottompad-15">
						<div className="small-contain text center">
							<h1>Thanks For Contacting Proper Noun.</h1>
							<p className="med topmargin-5">
								One of our team members will be in touch shortly to discuss your project. In the meantime, feel free to browse our <a className="underline" href="/articles">articles</a>, our <a className="underline" href="/portfolio">portfolio</a>, and our other <a className="underline" href="/agency-services">services</a>.
							</p>

							<div className="buttons center topmargin-5">
								<a href="/" className="flat-btn small theme-blue">Return Home</a>
							</div>
						</div>
					</div>
				</div>
							
			</div>
			
		</div>
	}
}


export default ContactThanks;