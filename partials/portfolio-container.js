const PortfolioContainer = (props) => (
  <div className="portfolio-block light">
		<div className="container">
			<h2 className="page-section-title">We Love Building <br /><strong>Awesome</strong> Websites.</h2>	
			
			<div className="portfolio-items items-xl">
				<ul>
					{props.children}			
				</ul>
			</div>
		</div>
	</div>
)

export default PortfolioContainer
