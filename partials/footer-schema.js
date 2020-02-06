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

const ratingJSON = function() {

	return {
		  __html: `{
		   "@context": "http://schema.org",
            "@type": "Organization",
            "name": "Proper Noun",
            "url": "https://www.propernoun.co",
            "sameAs": [ "https://www.facebook.com/propernounco",
            "https://twitter.com/propernounco",
            "https://www.instagram.com/propernounco/",
            "https://dribbble.com/propernoun",
            "https://www.behance.net/propernoun",
            "https://www.youtube.com/channel/UCirbErckJolj1iXQsQJ9c1g",
            "https://www.google.com/search?kgmid=/m/02pw1n&hl=en-FL&kgs=e60f7d94cfca72fa&q=Web%20Design%20Agency"],
            "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "",
            "bestRating": 5,
            "reviewCount": ""
            },
            "logo": "/static/images/pn-dark.png"
		}`
	};
}

const serviceJSON = function() {

	return {
		  __html: `{
		   "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Proper Noun",
            "image": "/static/images/pn-dark.png",
            "@id": "https://www.propernoun.co",
            "url": "https://www.propernoun.co",
            "telephone": "9546741258",
            "priceRange": "$$$$",
            "address": {
            "@type": "PostalAddress",
            "streetAddress": "300 SW 1st Ave #155",
            "addressLocality": "Fort Lauderdale",
            "addressRegion": "FL",
            "postalCode": "33301",
            "addressCountry": "US"
            },
            "geo": {
            "@type": "GeoCoordinates",
            "latitude": 26.1194302,
            "longitude": -80.14486449999998
            },
            "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
            ],
            "opens": "09:00",
            "closes": "18:00"
            }
		}`
	};
}

const localJSON = function() {

	return {
		  __html: `{
		   "@context": "http://schema.org",
            "@type": "LocalBusiness",
            "image": "/static/images/pn-dark.png",
            "priceRange": "$$$$",
            "telephone": "(954) 674-1258",
            "name": "Proper Noun",
            "logo": "/static/images/pn-dark.png",
            "description": "Proper Noun is a web design agency specializing in website design, digital marketing and SEO.",
            "openingHours": "MON-FR: 9AM-6PM",
            "geo": {
            "@type": "GeoCircle",
            "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "26.1194302",
            "longitude": "-80.14486449999998"
            },
            "geoRadius": 50
            },
            "url": "https://www.propernoun.co",
            "sameAs": [
            "https://www.facebook.com/propernounco",
            "https://www.instagram.com/propernounco/",
            "https://twitter.com/propernounco",
            "https://www.linkedin.com/company/propernoun"
            ],
            "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-954-674-1258",
            "contactType": "Customer Service",
            "email": "hello@propernoun.co",
            "contactOption": "",
            "areaServed": "",
            "availableLanguage": "English"
            },
            "address": {
            "@type": "PostalAddress",
            "addressCountry": "United States",
            "addressLocality": "Fort Lauderdale",
            "addressRegion": "FL",
            "postalCode": "33301",
            "streetAddress": "300 SW 1st Ave #155"
            }
		}`
	};
}


const FooterSchema = (props) => (	    

    <div>
    	<script type="application/ld+json" dangerouslySetInnerHTML={serviceJSON()}></script>
    	<script type="application/ld+json" dangerouslySetInnerHTML={localJSON()}></script>
    </div>
    
)

export default FooterSchema









