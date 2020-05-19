import React from 'react'
import getConfig from 'next/config'
import { connect } from 'react-redux'
import Link from 'next/link'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import PropertiesDrop from '../partials/properties-drop.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class AllWorkOrders extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	// workOrders: [],	    	
	    	propertiesLoading: true,	    	
	    	properties: [],
	    	selectedProperty: '',
	    };
	    // this.testChange = this.testChange.bind(this)
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
        store.dispatch({ 
    		type: "DROP_BUTTON_TEXT", 
    		payload: "Select A Property"
    	})

    	store.dispatch({ 
    		type: "WORK_ORDER_LIST_LOADING", 
    		payload: true
    	})
		
		store.dispatch({
			type:"WORK_ORDER_LIST",
			payload: []
		})

        return{			
			auth_token: req.cookies.tcii_auth_token,
			user_id: req.cookies.tcii_user_id,
		}
    }	

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'work_orders')
			  	.then(res => {					  		  							
					return res.json()
			  	})			  				  	
				.then(json => {
					this.setState(
      				{ 	      					      					      					
			    		propertySlug: json[0].acf.property ? json[0].acf.property.post_name : '',
      					isLoading: false      					
      				})		      				      				
					this.props.dispatch({ 
						type: "WORK_ORDER_LIST",
						payload: json
					});			 
					this.props.dispatch({ 
						type: "WORK_ORDER_LIST_LOADING",
						payload: false
					});			  			
				})
    			

      	fetch(publicRuntimeConfig.api_base + 'properties')
			  	.then(res => {					  			  								
					return res.json()
			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					properties: json,	
						propertiesLoading: false	   					
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

					
						{																										
							this.state.propertiesLoading ?
							<div className="block-loading">
								<div className="loader"></div>
							</div>
							:
							<PropertiesDrop dropClass="property-drop" buttonVal={this.props.dropdowns.dropButtonText} dropItems={this.state.properties} {...this.props} changeFunc='refreshWorkOrders' />			
						}

						<div className="white-tile property-unit-list list topmargin-2">			
							{
								this.props.workOrders.workOrderLoading ? 
								<div className="block-loading"><div className="loader"></div></div> :
								this.props.workOrders.workOrderList.map(workOrder => {
									let d = new Date(workOrder.acf.work_order_date)									
									let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});																			
									return (
												<TwoRowListItem key={workOrder.id} rowOne={entities.decode(workOrder.title.rendered)} rowTwo={date} href={`/work-orders/${workOrder.slug}/details`} />							
											)
								})										
							}
						</div>				
						
						<div className="topmargin-2">
							{/*<Link href="/new-work-order">*/}
								<a href="/new-work-order" className="button primary full-width">New Work Order</a>
							{/*</Link>*/}
						</div>
						
						
					</div>								
					
				</div>
	}
}

export default connect(state => state)(AllWorkOrders);