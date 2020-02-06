import fetch from 'isomorphic-unfetch'
import React from 'react'

// const PortfolioHOC = function(Child) {
// 	return class Higher extends React.Component {
// 		static getInitialProps(ctx) {
// 			return Child.getInitialProps(ctx)
// 		}
// 	}
// }

class PortfolioBlock extends React.Component {

	async componentWillMount() {	
		
		const res = await fetch('http://cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=12')
	    const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    const data = await res.json(); 
	
		return this.props.portfolioItems = data;
		

	}

	// 	console.log('aodjasodij')			
	  
	    // const res = await fetch('http://cms.propernoun.co/wp-json/wp/v2/case_studies?per_page=12')
	    // const errorCode = res.statusCode > 200 ? res.statusCode : false;
	    // const data = await res.json(); 
	// 	let img_url = '';

	// 	console.log('aps')
	//    	console.log(data)

	//     return {
	//     	errorCode,
	// 	    portfolioItems: data		    
	// 	}
	
		
	// }

	render() {
		

	    return <h1>Hi</h1>;
	}
}

export default PortfolioBlock