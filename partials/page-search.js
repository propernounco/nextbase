import Search from '../public/static/svg/search-solid.svg'

const PageSearch = (props) => (		
	<div className="page-search">						
		<input type="text" className="search-field ui-input full" placeholder={`Search ${props.placeholder}`} />					
		<Search />
	</div>
)

export default PageSearch