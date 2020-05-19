const LoadingWindow = (props) => (
  
<div id="loading-window" className={`loading-window ${props.visibleState}`}  aria-hidden="true">
    
    
    <div className="props-message" id="props-message">
    	<div className="block-loading">
			<div className="loader"></div>
    	</div>
    	<p>
    		{props.message}
    	</p>
	    <p className="small">Please Wait...</p> 
	    
    </div>

    
</div>
 
)

export default LoadingWindow