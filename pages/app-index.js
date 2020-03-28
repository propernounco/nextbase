import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import TileLink from '../partials/tile-link.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class HomePage extends React.Component {	
	    
	render() {
	
		return <div className="app-index page">
							
				<Meta title="Login" 
						desc="" 
						canonical=""
				/>

				<div className="container">
		
					<div className="page-title-section center">
						<h2>Welcome, Jason</h2>
					</div>
									
					<TileLink href="/property-owners" src="property-owners" text="Property Owners" />
					
					<TileLink href="/properties" src="properties" text="Properties" />

					<TileLink href="/all-inspections" src="inspections" text="Inspections" />

					<TileLink href="/reports" src="reports" text="Reports" />

					<TileLink href="/all-work-orders" src="work-orders" text="Work Orders" />

					<TileLink href="/all-media" src="media" text="Media" />
					
				</div>
			
		</div>
	}
}


export default HomePage;