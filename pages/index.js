import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Link from 'next/link'

import Router from 'next/router';
import  { Redirect } from 'react-router-dom'

import LoadingWindow from '../partials/loading-window'

const axios = require('axios').default;
const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class HomePage extends React.Component {
	
	constructor() {
	    super();
	    this.state = {
	    	username: '',
	    	password: '',	
	    	error: false,
	    	errorMessage: '',
	    	loggedIn: false,
	    	loadingWindowStatus: 'hide',
	    	loadingWindowMessage: 'Logging In. Please Wait'    
	    };

	    this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.login = this.login.bind(this);
    	this.setCookie = this.setCookie.bind(this);
    	this.getCookie = this.getCookie.bind(this);

	}
	static async getInitialProps(ctx) {
		let url = ctx.req.headers.referer	
	  	return {
	  		url: url
	  	}
	}

	componentDidMount(){
		console.log('aooohhhyeeeaaa')
		console.log(localStorage)

		let authCookie = this.getCookie('tcii_auth_token')
		console.log(authCookie)

		if(authCookie){			
			this.setState({
				loggedIn: true
			})
			Router.push('/app-index')
		}		
	}

	handleSubmit(e){
		e.preventDefault()
		console.log(this.state)
	}

	handleChange(event) {
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })
	}

	setCookie(cname, cvalue, exdays) {
	  var d = new Date();
	  d.setTime(d.getTime() + (exdays*24*60*60*1000));
	  var expires = "expires="+ d.toUTCString();
	  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	}

	getCookie(cname) {
	  var name = cname + "=";
	  var decodedCookie = decodeURIComponent(document.cookie);
	  var ca = decodedCookie.split(';');
	  for(var i = 0; i <ca.length; i++) {
	    var c = ca[i];
	    while (c.charAt(0) == ' ') {
	      c = c.substring(1);
	    }
	    if (c.indexOf(name) == 0) {
	      return c.substring(name.length, c.length);
	    }
	  }
	  return "";
	}

	login(e){
		e.preventDefault()

		const loginData = {
			username: this.state.username,
			password: this.state.password
		}
	
		this.setState({
			loadingWindowStatus: 'show'
		})
		
		axios.post('https://tciiapp.propernoun.co/wp-json/jwt-auth/v1/token', {
			username: loginData.username,
			password: loginData.password	
		})
		.then(data => {
			//set storage

			this.setState({
				loadingWindowMessage: 'Login Succesful. Redirecting.'
			})
	
			this.setCookie('tcii_auth_token', data.data.token)
			this.setCookie('tcii_auth_email', data.data.user_email)
			this.setCookie('tcii_auth_username', data.data.user_nicename)

			// localStorage.setItem('tcii_auth_token', data.data.token)
			// localStorage.setItem('tcii_auth_email', data.data.user_email)
			// localStorage.setItem('tcii_auth_username', data.data.user_nicename)
	
			this.setState({
				loggedIn: true				
			})

			Router.push('/app-index')
		})
		.catch(err => {
			this.setState({
				error: true,
				errorMessage: err,				
				loadingWindowMessage: 'Login Failed. Try Again.'		
			})
			setTimeout(() => {
				this.setState({
					loadingWindowStatus: 'hide'
				})
			}, 1000)
			
		})

	}
	

	render() {			


		return <div className="login page">		

				
				<div className="login-form-contain container">
					<div className="text center text-center bottommargin-5">
						<h1 className="white">Login To Get Started</h1>
					</div>				
					<form action="/" className="login-form" id="login-form" onSubmit={this.login}>
						<input type="text" name="username" className="email ui-input" value={this.state.username} onChange={this.handleChange} placeholder="email address"/>
						<input type="password" name="password" className="password ui-input" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
						<button className="round-btn white">Login</button>
						<a href="#" className="forgot-password">Forgot Password</a>
					</form>
				</div>	

				<LoadingWindow visibleState={this.state.loadingWindowStatus} message={this.state.loadingWindowMessage}  />                                      

			</div>
	}
}


export default HomePage;