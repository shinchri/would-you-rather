import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Login from './Login'

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
            : <h1>Starter Code!</h1>
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
