import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import Page from './views/page'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Page} path="/dev_site/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
