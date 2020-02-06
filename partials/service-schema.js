import React from 'react'
import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const formatDate = function(date){

    var todayTime = new Date();
    var month = format(todayTime .getMonth() + 1);
    var day = format(todayTime .getDate());
    var year = format(todayTime .getFullYear());
    return month + "/" + day + "/" + year;

}

const singleServiceJSON = function(serviceTitle, serviceImage, serviceDesc, serviceUrl) {

	return {
		  __html: `{
		   "@context": "http://schema.org",
			"@type": "Service",
			"serviceType": "Web Design",
			"areaServed": [
				{
					"@type": "City",
					"name": "Fort Lauderdale",
					"@id": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida"
				}
			],
			"audience": "http://www.wikidata.org/entity/Q131524",
			"provider": {
				"@type": "Organization",
				"name": "Proper Noun",
				"@id": "https://www.propernoun.co/"
			},
			"availableChannel": {
				"@type": "ServiceChannel",
				"serviceUrl": "https://www.propernoun.co",
				"ContactPoint": {
					"@type": "ContactPoint",
					"telephone": "+1-954-674-1258",
					"name": "Proper Noun Contact Point",
					"faxNumber": "",
					"description": "Sales phone number for Proper Noun",
					"contactType": "sales",
					"availableLanguage": "https://en.wikipedia.org/wiki/English_language",
					"areaServed": [
						{
							"@id": "https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida"
						},
						"https://en.wikipedia.org/wiki/Fort_Lauderdale,_Florida"
					],
					"@id": "https://www.propernoun.co/contact"
				},
				"serviceLocation": "300 SW 1st Ave #155, Fort Lauderdale, FL 33301",
				"name": "Proper Noun",
				"description": "Contact Proper Noun by phone, web or office.",
				"@id": "https://www.propernoun.co"
			},
			"description": "${serviceDesc}",
			"image": [
				"${serviceImage}",
				{
					"@type": "ImageObject",
					"width": "1698",
					"url": "${serviceImage}",
					"height": "1131",
					"@id": "${serviceTitle}"
				}
			],
			"name": "${serviceTitle}",
			"serviceOutput": {
				"@type": "Service",
				"name": "${serviceTitle}",
				"@id": "${serviceUrl}"
			},
			"url": "${serviceUrl}",
			"@id": "${serviceUrl}"
		}`
	};
}

const SingleServiceSchema = (props) => (	    	
    <script type="application/ld+json" dangerouslySetInnerHTML={singleServiceJSON( props.serviceTitle, props.serviceImage, props.serviceDesc, props.serviceUrl )}></script>
)

export default SingleServiceSchema









