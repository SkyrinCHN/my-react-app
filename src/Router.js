import React from 'react';
import {Router,Switch,Redirect} from 'react-router-dom';

import App from '././App';

import Demo01 from './components/demo01/demo1';
import Demo02 from './components/demo02/demo02';
import Demo03 from './components/demo03/demo03';

const Root = ()=>{
  <div>
    <Switch>
      <Route 
        path='/' 
        render={props =>(
        <App>
          <Switch>
            <Route path='/' exact component={App} />
            <Route path='/demo01' component={Demo01} />
            <Route path='/demo02' component={Demo02} />
            <Route path='/demo03' component={Demo03} />
            <Route render={()=> <Redirect to='/' />} />
          </Switch>
        </App>
      )}
      />
    </Switch>
  </div>
}
 export default Root;