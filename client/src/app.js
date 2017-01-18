'use strict'

Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){"use strict";if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(void 0!==n&&null!==n){n=Object(n);for(var o=Object.keys(n),a=0,i=o.length;i>a;a++){var c=o[a],b=Object.getOwnPropertyDescriptor(n,c);void 0!==b&&b.enumerable&&(r[c]=n[c])}}}return r}});
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router'
//import { syncHistoryWithStore} from 'react-router-redux'

import { createHashHistory } from 'history'

import Header from './components/header'
import mconsole from './components/mconsole'
import mdetail from './components/mdetail'
import store from './store'

class app extends React.Component{
	render() {
		return (
      <div><Header/>
        <div>
          {this.props.children}
        </div>
      </div>
      )
	}
}
//const history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store)
const history = useRouterHistory(createHashHistory)({ queryKey: false })

render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={app}>
          <IndexRoute component={mconsole} />
          <Route path="mconsole" component={mconsole}/>
          <Route path="mdetail" component={mdetail}/>
        </Route>
      </Router>
    </Provider>,
  document.getElementById('app')
)
