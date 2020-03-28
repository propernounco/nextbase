import Link from 'next/link';
import getConfig from 'next/config'
import Bell from '../public/static/svg/bell.svg'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const linkStyle = {
  marginRight: 15
}

const Header = () => (	   	
	<div className="large-contain">			
		

		<Link href="/app-index">
			<a className="logo">
				<img src={`/static/images/tcii-logo.png`} alt="tcii" />					
			</a>
		</Link>
		
		<a className="notifications-trigger">
			<Bell />
		</a>	
		
		<div className="nav-trigger" id="nav_toggle">

			<a href="#" className="nav-trigger-link">
				<div className="menu">
					<span></span>
					<span></span>
					<span></span>
				</div>					
			</a>					
			
		</div>	

	</div>	
)

export default Header