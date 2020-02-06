import Link from 'next/link';

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


const HomeFirst = () => (	    	
    	<div className="first-section">		
			<div className="big-contain image-split">
				<div className="big-video-block opaque" id="big-video-fade-in">
					// <video id="main-video" width="100%" height="100%" muted loop playsInline autoPlay>
			 	// 		<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.mp4" type="video/mp4" />
			 	// 		<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.webm" type="video/webm" />
			 	// 		<source src="https://res.cloudinary.com/propernoun/video/upload/q_auto,f_auto/pn-montage.ogv" type="video/ogv" />
			 	// 	</video>
				</div>
				<div className="small-image opaque delayed" id="small-image-fade-in">
					
					<div className="schedule-links">
						
						<Link href="/contact"><a className="schedule-link">Schedule A Call</a></Link>
						<Link href="" ><a className="schedule-link download-deck">Download Digital Deck</a></Link>
						<Link href="/contact"><a className="schedule-link">Tour Our Studio</a></Link>
					</div>
					
					<img src={`${publicRuntimeConfig.imageUrl}/w_500,c_scale/main-room.jpg`} alt="real estate website" />
				</div>
			</div>
			<div className="text-container">
				<div className="container opaque" id="hero-text-fade-in">
					<h3 className="page-title-xl">A Digital Agency for People, Places & Ideas.</h3>
					<p>
						Proper Noun is a boutique web design agency located in Hollywood, FL. Proper Noun focuses on informational and <a href="/services/ecommerce-web-design">e-commerce web design</a>, application development, <a href="/services/search-engine-optimization">SEO</a>, <a href="/services/digital-marketing">digital marketing</a> and branding. We are located within General Provision in Downtown Fort Lauderdale.
					</p>
					<a href="/portfolio" className="cta-link white topmargin-5">
						View Our Work
					</a>
				</div>
			</div>
		</div>


)

export default HomeFirst