import React from 'react'
import getConfig from 'next/config'
import Link from 'next/link'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class AllWorkOrders extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	workOrders: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
          
    }	

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'work_orders')
			  	.then(res => {					  			  								
					return res.json()

			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					workOrders: json,			    
			    		propertySlug: json[0].acf.property.post_name,
      					isLoading: false      					
      				}		      				      				
      			))		
	}

	render() {
				
		return <div className="all-work-orders page">
					<Meta title="All Work Orders" 
							desc="" 
							canonical=""
					/>
					<div className="container">				
						<PageTitle title="All Work Orders" />		
						<PageSearch placeholder="Work Orders" />	

				
						<div className="white-tile property-unit-list list topmargin-2">			
							{
								this.state.isLoading ? 
								<div className="block-loading"><div className="loader"></div></div> :
								this.state.workOrders.map(workOrder => {
									let d = new Date(workOrder.acf.work_order_date)									
									let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});																			
									return (
												<TwoRowListItem rowOne={entities.decode(workOrder.title.rendered)} rowTwo={date} href={`/work-orders/${workOrder.slug}/details`} />							
											)
								})										
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


export default AllWorkOrders