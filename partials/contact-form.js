import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


const ContactForm = () => (	    	
    	<form action="" className="ui-form form-submit" id="main-contact-form" data-form-id="1" >
	
			<div className="message">
				<div className="text center">
					<h3>Sending Message</h3>
					<p>Please wait...</p>
				</div>		
			</div>

			<div className="ui-input-group">						
				<input type="text" id="name" name="name" placeholder="Your Name" className="ui-input fluid required" />
			</div>

			<div className="ui-input-group">							
				<input type="text" id="email" name="email" placeholder="Your Email" className="ui-input fluid required required-email" />
			</div>

			<div className="ui-input-group">							
				<input type="text" id="phone" name="phone" placeholder="Your Phone Number" className="ui-input fluid required required-phone" />		
			</div>

			<div className="ui-input-group">							
				<textarea name="message" id="message" placeholder="How Can We Help?" className="ui-textarea fluid" cols="10" rows="10"></textarea>
			</div>

			<input type="hidden" name="form_id" value="1" className="ui-input fluid form_id" />

			<button className="proper-btn primary fluid topmargin-3">Send Your Message</button>

		</form>

)

export default ContactForm





