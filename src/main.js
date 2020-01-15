import { puffin } from '@mkenzo_8/puffin'

import Navbar from './components/navbar'
import Body from './components/body'
import centeredAlign from './components/centeredAlign'

import router from './router.js'
import state from './state.js'

const AppWrapper = puffin.style.div`
    ${state}
    *{
        font-family:Montserrat, sans-serif;
        color: {{textColor}}
    }
    body{
        padding:0px;
        margin:0px;
    }
    .footer{
        position:absolute;
        bottom:20px;
        text-align:center;
    }
`

const App = puffin.element(`

    <div>
        <AppWrapper>
            <Navbar/>
            <Body>
                <routerBox/>
                <centeredAlign>
                    <b class="footer">Made by Marc Espín Sanz </b>
                </centeredAlign>
            </Body>
        </AppWrapper>
    </div>
`,{
    components:{
        Navbar,
        routerBox:router.box,
        AppWrapper,
        Body,
        centeredAlign
    }
})

puffin.render(App,document.getElementById("app"))