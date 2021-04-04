import React from 'react'
import './body.scss'
import { Route, Switch } from 'react-router'
import About from './Routs/About/about'
import Topics from './Routs/Topics/topics'
import Contact from './Routs/Contact/contact'
import Flexbox from './Routs/Flexbox/flexbox'
import SubMenu from './Routs/Topics/SubMenu/subMenu'
import Home from './Routs/Home/home'
import Leg from './Routs/Leg/leg'

export default function Body()  {

   return(
      <div>
         <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About}/>
            <Route path="/topics/:id" component={SubMenu}/>
            <Route path="/topics" component={Topics} />
            <Route path="/contact" component={Contact} />
            <Route path="/flexbox" component={Flexbox} />
            <Route path="/leg" component={Leg} />
         </Switch>
      </div>
   )
}

