import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import { connect } from 'react-redux'

import Head from 'next/head'
import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

import Link from 'next/link'
const axios = require('axios').default;

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();
import Search from '../public/static/svg/search-solid.svg'

let wto;


class SinglePropertyWorkOrders extends React.Component {

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	workOrders: [],
	    	isLoading: true,
	    	workOrderSearch: '' 
	    };

	    this.searchWorkOrders = this.searchWorkOrders.bind(this)
	    this.updateWorkOrders = this.updateWorkOrders.bind(this)
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
            
        store.dispatch({
			type: "WORK_ORDER_LIST",
			payload: []
        }) 
        store.dispatch({
			type: "WORK_ORDER_LIST_LOADING",
			payload: true
        })        
	
		return {		    	
	    	propertyId: req.params.id		    
		}

    }	

	searchWorkOrders(){
	
		console.log(publicRuntimeConfig.api_base + 'work_orders?search=' + encodeURI(this.state.workOrderSearch))

		axios.get(publicRuntimeConfig.api_base + 'work_orders?search=' + encodeURI(this.state.workOrderSearch))		
				.then(json => {
					console.log(json.data)

					this.props.dispatch({
						type:"WORK_ORDER_LIST",
						payload: json.data
					})

					this.props.dispatch({ 
						type: "WORK_ORDER_LIST_LOADING",
						payload: false
					});	
				})
		
	}
	
	

	updateWorkOrders(){
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })

	    clearTimeout(wto);
	    wto = setTimeout(() => {			
	    	this.props.dispatch({
	    		type: "WORK_ORDER_LIST_LOADING",
	    		payload:true
	    	})
			this.searchWorkOrders()
	    }, 1000)
	 	//wto = setTimeout(function() {
		//// do stuff when user has been idle for 1 second		    
		// }, 1000)

	}

	handleChange(event) {
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })
	}

	componentDidMount(){

		axios.get(publicRuntimeConfig.api_base + 'work_orders?filter[meta_key]=property&filter[meta_value]=' + this.props.propertyId)		
				.then(json => {
					this.props.dispatch({
						type:"WORK_ORDER_LIST",
						payload: json.data
					})

					this.props.dispatch({ 
						type: "WORK_ORDER_LIST_LOADING",
						payload: false
					});	
				})
	}

	render() {
				
		return <div className="single-property-info page">
					<Meta title="Single Property Info" 
							desc="" 
							canonical=""
					/>
					<div className="container">				
						<PageTitle title={this.props.propertyTitle} />		
						
						<div className="page-search">						
							<input type="text" name="workOrderSearch" className="search-field ui-input full" placeholder="Work Orders" onChange={this.updateWorkOrders} />					
							<Search />
						</div>

				
						<div className="white-tile property-unit-list list topmargin-2">			
							{	
								this.props.workOrders.workOrderLoading ? 
									<div className="block-loading">
										<div className="loader"></div>
									</div>
								:
								
								<div className="test">
									{
										this.props.workOrders.workOrderList.map(work => {										
												let d = new Date(work.acf.work_order_date)									
												let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});									
												
												return (
													<TwoRowListItem rowOne={entities.decode(work.title.rendered)} rowTwo={date} key={work.slug} href={`/work-orders/${work.slug}/details`} />
												)
											}																			
										)	
									}
								</div>
														
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

export default connect(state => state)(SinglePropertyWorkOrders);