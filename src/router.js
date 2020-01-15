import { puffin } from '@mkenzo_8/puffin'

import Home from './routes/home'
import Contact from './routes/contact'
import Documentation from './routes/docs'

import Lost from './components/lost'

const router = puffin.router([
    {
        path:'/',
        component:Home,
        title:'Home | PuffinJS'
    },{
        path:'/home',
        component:Home,
        title:'Home | PuffinJS'
    },{
        path:'/contact',
        component:Contact,
        title:'Contact | PuffinJS'
    },{
        path:'/docs',
        component:Documentation,
        title:'Docs | PuffinJS'
    }
],{
    lost:{
        component:Lost,
        title:'You are lost | PuffinJS'
    }
})


export default router