
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
// import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import SimpleDrop from '../partials/simple-drop.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class Reports extends React.Component {	
	
	static getInitialProps({store, isServer, pathname, query}) {
        // store.dispatch({type: 'property_owner'}); // component will be able to read from store's state when rendered      
        let properties = [
			{
				text: 'Kirkman Oaks',
				value: '1'
			},
			{
				text: '1234 Miami Ave',
				value: '2'
			},
			{
				text: 'Publix Plaza',
				value: '3'
			}
	    ]
	    return {
	    	properties: properties	 
	    }; 
    }


	render() {		
		
		return <div className="reports page">
					<Meta title="Reports" 
							desc="" 
							canonical=""
					/>
										
					<div className="container">				
						<PageTitle title="Inspection Reports" />										
						
						<SimpleDrop dropClass="property-drop" buttonVal="All Properties" dropItems={this.props.properties} {...this.props} />			

						<div className="white-tile property-owners-list list topmargin-2" >			
							<TwoRowListItem rowOne="January 12, 2020" rowTwo="Property Name" href="/single-inspection" />
							<TwoRowListItem rowOne="December 15, 2019" rowTwo="Property Name" href="/single-inspection" />
							<TwoRowListItem rowOne="November 13, 2019" rowTwo="Property Name" href="/single-inspection" />
						</div>
					</div>			
				</div>
	}
}


export default Reports