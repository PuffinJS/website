import { puffin } from '@mkenzo_8/puffin'
import LogoImage  from '../../assets/logo.svg'

const LogoWrapper = puffin.style.div`
    &{
        padding:10px;
    }
`

const Logo = puffin.element(`
    <LogoWrapper>
        <img src="${LogoImage}"/>
    </LogoWrapper>
`,{
    components:{
        LogoWrapper
    }
})

export default Logo