import { element, style } from '@mkenzo_8/puffin'
import LogoImage  from '../../assets/logo.svg'

const LogoWrapper = style`
	&{
		padding:10px;
	}
`

const Logo = () => {
	return element({
		components:{
			LogoWrapper
		}
	})`
	<div class="${LogoWrapper}">
		<img src="${LogoImage}"/>
	</div>
	`
}

export default Logo