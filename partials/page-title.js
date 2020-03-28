import Link from 'next/link'
import Arrow from '../public/static/svg/arrow-left-solid.svg'
import Router from 'next/router';

const PageTitle = (props) => (
		
		<div className="page-title-section">
			<h2>{props.title}</h2>						
			<Link href="#"><a onClick={() => Router.back()} className="go-back"><Arrow /> go back</a></Link>						
		</div>
	
)

export default PageTitle

