import Link from 'next/link';
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const HomeStrategy = () => (	    	

<div className="strategic-web-design line-bg-sec center on">
	<div className="container">
		<h2>Our <strong>Strategic</strong> Website Design Process.</h2>
		<div className="strategic-circles">
			<div className="strategic-circle circle fade-in-content-left opaque" data-attr-id="circle-strategy">
				<img src={`${publicRuntimeConfig.imageUrl}/strategy-circle.svg`} alt="real estate website" />

				<span className="title">
					Strategy
				</span>
			</div>
			<div className="dots fade-in-content-left opaque delayed">
				<img src={`${publicRuntimeConfig.imageUrl}/dots-down.png`} alt="dots" />									
			</div>
			<div className="strategic-circle circle fade-in-content-left opaque delayed" data-attr-id="circle-design" >
				<img src={`${publicRuntimeConfig.imageUrl}/design-circle.svg`} alt="design services" />								
				<span className="title">
					Design
				</span>
			</div>
			<div className="dots fade-in-content-left opaque delayed-x">
				<img src={`${publicRuntimeConfig.imageUrl}/dots-up.png`} alt="dots" />	
			</div>
			<div className="strategic-circle circle fade-in-content-left opaque delayed-x" data-attr-id="circle-development">									
				<img src={`${publicRuntimeConfig.imageUrl}/development-circle.svg`} alt="web development services" />
				<span className="title">
					Development
				</span>
			</div>
			<div className="dots fade-in-content-left opaque delayed-2x">									
				<img src={`${publicRuntimeConfig.imageUrl}/dots-down.png`} alt="dots down" />
			</div>
			<div className="strategic-circle circle fade-in-content-left opaque delayed-2x" data-attr-id="circle-delivery">									
				<img src={`${publicRuntimeConfig.imageUrl}/delivery-circle.svg`} alt="project delivery" />
				<span className="title">
					Delivery
				</span>
			</div>
		</div>
	</div>
</div>
					
)

export default HomeStrategy
