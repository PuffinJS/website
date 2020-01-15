import { puffin } from '@mkenzo_8/puffin'
import state from '../state.js'

const Body = puffin.style.div`
    ${state}
    &{
        padding:20px;
    }
`

export default Body