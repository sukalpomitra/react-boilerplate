import React from 'react'
import { Provider } from 'react-redux'

// import AppRouter from './AppRouter'
import store from '../store'

import { Router, Route, IndexRoute } from 'react-router'

import StateToProps from './StateToProps'
import Players from './Players'
import Leaderboard from './Leaderboard'
import { history } from '../store'



const App = (props) => {
  return (
    <Provider store={ store }>
      {/* <AppRouter /> */}
      <Router history={ history }>
        <Route path='/' component={ StateToProps }>
          <IndexRoute component={ Players } />
          <Route path='leaderboard' component={ Leaderboard } />
        </Route>
      </Router>
    </Provider>
  )
}

export default App
