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

		const service = await fetch(getConfig.serverRuntimeConfig.api_base + '/api_path' + ctx.req.params.slug)	   
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 


		let meta_title;
	    let meta_desc;	

		let url = 'https://' + ctx.req.headers.host + '/articles/' + ctx.req.params.slug

		if(data.length <= 0){
			ctx.res.statusCode = 404	
			meta_title = "Whoops We Can't Find That Article | Proper Noun"
	    	meta_desc = "Looks like the article you're looking for doesn't exist here any more. Sorry."
			return {
				errorCode,
				article: data,
				meta_title: meta_title,
				meta_desc: meta_desc,
				url: url				
			}	    
		}
		else{
			meta_title = await data[0].yoast_meta.yoast_wpseo_title
	    	meta_desc = await data[0].yoast_meta.yoast_wpseo_metadesc
			return {
		    	errorCode,
			    article: data,
			    meta_title: meta_title,
			    meta_desc: meta_desc,
			    url: url
			}
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