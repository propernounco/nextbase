import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


const MarketingForm = (props) => (	    	
    	<form action="" className="ui-form form-submit" id="main-contact-form" data-form-id="8" >
	
			<div className="message">
				<div className="text center">
					<h3>Sending Message</h3>
					<p>Please wait...</p>
				</div>		
			</div>

			<div className="ui-input-group no-margin">						
				<input type="text" id="name" name="name" placeholder="Your Name" className="ui-input fluid required" />
			</div>

			<div className="ui-input-group">							
				<input type="text" id="email" name="email" placeholder="Your Email" className="ui-input fluid required required-email" />
			</div>		

			<div className="ui-input-group">							
				<input type="text" id="website_url" name="website_url" placeholder="Your Website URL" className="ui-input fluid required" />		
			</div>

			<input type="hidden" id="submitted_page" name="submitted_page" placeholder="" className="ui-input fluid" value={props.pagename} />		
			
			<input type="hidden" name="form_id" value="7" className="ui-input fluid form_id" />

			<button className="proper-btn primary fluid topmargin-3">Send Your Message</button>

		</form>

)

export default MarketingForm





