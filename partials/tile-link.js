import Link from 'next/link'
import Svg from '../partials/svg.js'
import RightCaret from '../public/static/svg/right-caret.svg';

const TileLink = (props) => (
  
	<Link href={`${props.href}`}>
	  <a className="tile-link">
	  <span className="icon"><Svg src={`${props.src}`} /></span>
	  <span className="text">{`${props.text}`}</span>
	  <span className="action"><RightCaret /></span>
	  </a>
	</Link>

)

export default TileLink