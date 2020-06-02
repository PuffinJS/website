import { element, style, render, routerBox } from '@mkenzo_8/puffin'

import Navbar from './components/navbar'
import centeredAlign from './components/centeredAlign'

import Home from './routes/home'
import Contact from './routes/contact'
import Documentation from './routes/docs'
import Demo from './routes/demo'

const AppStyle = style`
	body{
		padding:0px;
		margin:0px;
	}
	&  *{
		font-family:Montserrat, sans-serif;
		color: black;
	}
	& .footer{
		position:absolute;
		bottom:20px;
		text-align:center;
	}
	& > .container {
		padding: 0 20px;
	}
`

const App = element({
	components:{
		Navbar,
		routerBox,
		centeredAlign,
		Home,
		Contact,
		Documentation,
		Demo
	}
})`
	<div class="${AppStyle}">
		<Navbar/>
		<div class="container">
			<routerBox default="/home">
				<Home from="/home"/>
				<Contact from="/contac"/>
				<Documentation from="/docs"/>
				<Demo from="/demo"/>
			</routerBox>
			<centeredAlign>
				<b class="footer">Made by Marc Espín Sanz </b>
			</centeredAlign>
		</div>
	</div>
`

render(App,document.getElementById("app"))