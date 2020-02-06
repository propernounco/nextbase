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

const articleJSON = function(articleTitle, articleDesc, articleDate, url, image) {

	return {
		  __html: `{
		   "@context": "http://schema.org",
			  "@type": "NewsArticle",
			  "mainEntityOfPage": {
			    "@type": "WebPage",
			    "@id": "${url}"
			  },
			  "headline": "${articleTitle}",
			  "image": [    
			  	"${image}"
			   ],
			  "datePublished": "{article_date}",  
			  "dateModified": "{article_date}",  
			  "author": {
			    "@type": "Person",
			    "name": "Adam Hodson"
			  },
			   "publisher": {
			    "@type": "Organization",
			    "name": "Proper Noun",
			    "logo": {
			      "@type": "ImageObject",
			      "url": "${publicRuntimeConfig.imageUrl}/pn-dark.png"
			    }
			  },
			  "description": "${articleDesc}"
		}`
	};
}

const ArticleSchema = (props) => (	    

    <script type="application/ld+json" dangerouslySetInnerHTML={articleJSON(props.articleTitle, props.articleDesc, props.articleDate, props.url, props.articleImage)}></script>
)

export default ArticleSchema









