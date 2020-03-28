// <TwoRowListItem rowOne="Broken Window" rowTwo="November 10, 2019" href="/single-work-order" />
// 							<TwoRowListItem rowOne="Bathroom Mold" rowTwo="October 15, 2019" href="/single-work-order" />
// 							<TwoRowListItem rowOne="AC Unit" rowTwo="July 10, 2019" href="/single-work-order" />							
import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

import Link from 'next/link'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class SinglePropertyWorkOrders extends React.Component {

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	workOrders: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		const request = await fetch(publicRuntimeConfig.api_base + 'work_orders?filter[meta_key]=property&filter[meta_value]=' + req.params.id)	   
	    const errorCode = request.statusCode > 200 ? request.statusCode : false;
	    const workOrders = await request.json(); 	

		let propertyTitle = workOrders[0].acf.property.post_title
	
		console.log(workOrders[0].slug)

		if(workOrders.length <= 0){
			// ctx.res.statusCode = 404	
			// meta_title = "404 Page Not Found | TCII "
	  //   	meta_desc = ""
			return {
				errorCode				
			}	    
		}
		else{			
			return {
		    	errorCode,
			    workOrders: workOrders,
			    propertyTitle: propertyTitle,
			    propertySlug: workOrders[0].acf.property.post_name,
			}
		}	
    }	

	render() {
				
		return <div className="single-property-info page">
					<Meta title="Single Property Info" 
							desc="" 
							canonical=""
					/>
					<div className="container">				
						<PageTitle title={this.props.propertyTitle} />		
						<PageSearch placeholder="Work Orders" />	

				
						<div className="white-tile property-unit-list list topmargin-2">			
							{
								this.props.workOrders.map(work => {
										
										let d = new Date(work.acf.work_order_date)									
										let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});									
										
										return (
											<TwoRowListItem rowOne={entities.decode(work.title.rendered)} rowTwo={date} key={work.slug} href={`/work-orders/${work.slug}/details`} />
										)
									}																			
								)							
							}							
						</div>		

						<div className="topmargin-2">
							<Link href="/new-work-order">
								<a className="button primary full-width">New Work Order</a>
							</Link>
						</div>

					</div>								
					
				</div>
	}
}


export default SinglePropertyWorkOrders