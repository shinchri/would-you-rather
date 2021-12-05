import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import Fragment from 'render-fragment'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

 

  render() {
    const { authedUser} = this.props

    return (
      <div>
        {this.props.loading === true
        ? null
        : <div>
            {authedUser === undefined
            ? <Login />
            : <Fragment>
                <Nav />
                <Home />
              </Fragment>            
            
            }
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps({users, questions}) {
  return {
    loading: Object.keys(users).length === 0 || Object.keys(questions).length === 0
  }
}

export default connect(mapStateToProps)(App);
