import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


const LoadingDiv = () => (	    	
    <div className="loading-div">
    	<div className="small-contain">
    		<div className="loader"></div>
    	</div>    		
	</div>
)

export default LoadingDiv

