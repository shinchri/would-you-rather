import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Login from './Login'
import Nav from './Nav'
import Home from './Home'
import Fragment from 'render-fragment'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        this.props.authedUser !== null ? (
          <>
            {props.match.path === "/questions/:question_id" &&
            !Object.keys(this.props.questions).includes(
              props.match.params.question_id
            ) ? (
              <Redirect to="/404" />
            ) : (
              <Component {...props} />
            )}
          </>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );

  render() {

    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.loading === true
            ? null
            : <div>
                <Switch>
                  <Route path='/login' component={Login} />
                  <this.PrivateRoute exact path='/' component={Home} />
                  {/* <Route path='/' exact component={Home} /> */}
                </Switch>
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
