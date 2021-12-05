import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import Fragment from 'render-fragment'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {

    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.loading === true
            ? null
            : <div>
                <Route path='/login' component={Login} />
                <Route path='/' exact >
                  <Nav />
                  <Home />
                </Route>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({users, questions}) {
  return {
    loading: Object.keys(users).length === 0 || Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App);
