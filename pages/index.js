import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Link from 'next/link'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
class HomePage extends React.Component {
	
	constructor() {
	    super();
	    this.state = {};
	}
	static async getInitialProps(ctx) {
		let url = ctx.req.headers.referer
	  	return {
	  		url: url
	  	}
	}
	
	render() {			
		return <div className="login page">
				<div className="login-form-contain container">
					<div className="text center text-center bottommargin-5">
						<h1 className="white">Login To Get Started</h1>
					</div>				
					<form action="" className="login-form">
						<input type="text" className="email ui-input" placeholder="email address"/>
						<input type="password" className="password ui-input" placeholder="password"/>
						<button className="round-btn white">Login</button>
						<a href="#" className="forgot-password">Forgot Password</a>
					</form>
				</div>			
			</div>
	}
}


export default HomePage;