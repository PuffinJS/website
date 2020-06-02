import { element, style } from '@mkenzo_8/puffin'
import Logo  from '../components/logo'
import centeredAlign from '../components/centeredAlign'

const Home = () => {
	return element({
		components:{
			centeredAlign,
			Logo
		}
	})`
		<div>
			<centeredAlign>
				<Logo/>
				<h1>PuffinJS</h1>
			</centeredAlign>
			<centeredAlign>
				<h3>npm install @mkenzo_8/puffin </h3>
			</centeredAlign>
		</div>
	`
}

export default Home