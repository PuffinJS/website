import { puffin } from '@mkenzo_8/puffin'

import router from '../router.js'
import state from '../state.js'

const StyledNavBar = puffin.style.div`
    ${state}
    a{
        padding:15px;
        text-decoration:none; 
        white-space:nowrap;
        cursor:pointer;
    }
    a:hover{
        color:{{hoveringText}};
    }
    a.active{
        color:{{hoveringText}}
    }
    &{
        padding:25px;
        margin:0px;
        overflow:auto;
        display:flex;
    }
`

const Navbar = puffin.element(`
    <div>
        <StyledNavBar>
            <routerLink  path="/home" class="active">🏠 Home</routerLink>
            <routerLink  path="/contact">📞 Contact</routerLink>
            <routerLink  path="/docs">📚 Documentation</routerLink>
        </StyledNavBar>
    </div>
`,{
    components: {
        routerLink:router.link,
        StyledNavBar
    }
})

export default Navbar