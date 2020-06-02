import { element, style, routerLink } from '@mkenzo_8/puffin'


const StyledNavBar = style`
	& {
		padding:25px;
		margin:0px;
		overflow:auto;
		display:flex;
	}
	& a {
		padding:15px;
		text-decoration:none; 
		white-space:nowrap;
		cursor:pointer;
		user-select: none;
	}
	& a:hover{
		color:gray;
	}
	& a.active{
		color:gray
	}
`

const Navbar = () => {
	return element({
		components: {
			routerLink
		}
	})`
	<div class="${StyledNavBar}">
		<routerLink  to="/home" class="active">🏠 Home</routerLink>
		<routerLink  to="/contact">📞 Contact</routerLink>
		<routerLink  to="/docs">📚 Documentation</routerLink>
		<routerLink  to="/demo">🤩 Demo</routerLink>
	</div>
`
}

export default Navbar