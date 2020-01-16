import { puffin } from '@mkenzo_8/puffin'
import Logo  from '../components/logo'
import centeredAlign from '../components/centeredAlign'

const Home = puffin.element(`
    <div>
        <centeredAlign>
            <Logo/>
            <h1>PuffinJS</h1>
        </centeredAlign>
        <centeredAlign>
            <h3>npm install @mkenzo_8/puffin </h3>
        </centeredAlign>
        <button click="$test">.</button>
    </div>
`,{
    components:{
        centeredAlign,
        Logo
    },
    methods:[
        function test(){
            console.log('.')
        }
    ]
})

export default Home