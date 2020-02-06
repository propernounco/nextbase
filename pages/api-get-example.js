import React from 'react'
import Link from 'next/link'
import Layout from '../partials/layout.js'
import getConfig from 'next/config'
import fetch from 'isomorphic-unfetch'
import Meta from '../partials/seo-meta.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


class ApiExample extends React.Component {
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	articles: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps(ctx) {		

		// let url = ctx.req.headers.referrer	

		let page;		
		
		if(Object.keys(ctx.query).length > 0){
			page = parseFloat(ctx.query.page)
		}	
		else{
			page = 1
		}

		let base
		if((page - 1) == 0){
			base = 1;
		}
		else{
			base = page - 1;
		}

		const service = await fetch(getConfig.serverRuntimeConfig.api_base + '/api_path')
	    const serviceError = service.statusCode > 200 ? service.statusCode : false;
	    const serviceData = await service.json(); 

		if(serviceData.data && parseFloat(serviceData.data.status) == 400){
			ctx.res.statusCode = 404
			ctx.res.end('Not Found')
			return;
		}
			
		if(serviceData.length <= 0){
			ctx.res.statusCode = 404	
			ctx.res.end('Not Found')	
			return;			   
		}
		
	  	return {	  		
	  		page: page
	  	}

	}

	componentDidMount() {					

		let totalPages;
		let pagination = '<ul class="pagination">';			
		
		fetch(getConfig.serverRuntimeConfig.api_base  + this.props.page)
			  	.then(res => {
			  		totalPages = parseFloat(res.headers.get('X-WP-TotalPages'))			  		
			  		for(var i = 1; i <= totalPages; i++){
			  			if(i == this.props.page){
							pagination += '<li><a class="active" href="/articles?page=' + i + '">' + i + '</a></li>'
			  			}
			  			else{
			  				pagination += '<li><a href="/articles?page=' + i + '">' + i + '</a></li>'	
			  			}
						
			  		}		  		
					return res.json()
			  	}).then(json => this.setState(
	      				{ 	      					
	      					articles: json,
							isLoading: false,
							pagination: pagination
	      				}		      				
	      			))		      	
	}


	render() {

		const loading = this.state.isLoading;
		
		let canon;

		if(this.props.page > 1){
			canon = "https://www.propernoun.co/articles?page=" + this.props.page
		} 
		else{
			canon = "https://www.propernoun.co/articles"	
		}

		return <div>
				<Meta 
					title="" 
					desc="" 
					canonical={`${canon}`} 
				/>				
				<div className="page-body">
					

				</div>
				
			</div>
	}
}


export default Articles;