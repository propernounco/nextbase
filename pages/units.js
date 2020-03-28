import React from 'react'
import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class Properties extends React.Component {	
	
	static getInitialProps({store, isServer, pathname, query}) {
        // store.dispatch({type: 'property_owner'}); // component will be able to read from store's state when rendered      
    }


	render() {
		
		// const setOwnerState = () => this.props.dispatch({ type: 'property_owner',
		// 		payload: 'ahhhhh' });

		
		return <div className="units page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>

					<div className="container">				
						<PageTitle title="All Units" />				
						<PageSearch placeholder="Units" />	
						<div className="white-tile property-owners-list list topmargin-2">			
							<TwoRowListItem rowOne="Unit 1420" rowTwo="2300 sq feet" href="/single-unit" />
							<TwoRowListItem rowOne="Unit 1421" rowTwo="1200 sq feet" href="/single-unit" />
							<TwoRowListItem rowOne="Unit 1422" rowTwo="3000 sq feet" href="/single-unit" />
							<TwoRowListItem rowOne="Unit 1423" rowTwo="2000 sq feet" href="/single-unit" />
						</div>
					</div>			
				</div>
	}
}


export default connect(state => state)(Properties);