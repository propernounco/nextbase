// import Link from 'data-prefetch-link'
// import Link from 'next/link'
import Link from 'next-data-link';
import getConfig from 'next/config'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const linkStyle = {
  marginRight: 15
}

const Header = () => (	   
	
		<div className="big-contain">
			
			<Link prefetch  href="/">					
				<a className="logo">
					<img className="dark" src={`${publicRuntimeConfig.imageUrl}/pn-dark.png`} alt="proper noun - fort lauderdale web design agency" />
					<img className="light" src={`${publicRuntimeConfig.imageUrl}/pn-white.png`} alt="proper noun - fort lauderdale web design agency" />
				</a>
			</Link>
			
			<div className="nav-trigger" id="nav_toggle">
				<a href="" className="menu-text">Menu</a>	
				<a href="" aria-label="menu-trigger" className="icon"><span></span></a>
			</div>
	
		</div>

	
)

export default Header