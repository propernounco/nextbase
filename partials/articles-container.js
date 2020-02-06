const ArticlesContainer = (props) => (
	<section className="light section blog-sec">
		<div className="container">
		<div className="row">
			<div className="col-3-xl col-12">
				<div className="text">
					<span className="underline-title">Recent News &amp; Articles</span>
					<h4 className="section-title-l">What's New</h4>
					<a href="/articles" className="italic-link topmargin-7">Read Our Blog</a>
				</div>
			</div>
			<div className="col-9-xl col-12">
				<div className="articles recent-articles">						
					{props.children}						
				</div>
			</div>
		</div>	
		</div>
	</section>
)

export default ArticlesContainer
