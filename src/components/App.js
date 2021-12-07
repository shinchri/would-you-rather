import React, { Component } from 'react'
import { connect } from 'react-redux'
import {handleInitialData } from '../actions/shared'
import Login from './Login'
import Navs from './Nav'
import Home from './Home'
import Fragment from 'render-fragment'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PollDetail from './PollDetail'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import PageNotFound from './PageNotFound'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  // Check this out if you want the data to persist on reload
  // https://www.npmjs.com/package/redux-persist
  render() {
    return (
      <Router>
        <Fragment>
          <div className='container'>
            {this.props.loading === true
            ? <Route path='/' component={Login} />
            : <div>
                <Switch>
                  <Route path='/home' exact >
                    <Navs />
                    <Home />
                  </Route>
                  <Route path='/question/add'>
                    <Navs />
                    <NewQuestion />
                  </Route>
                  <Route path='/questions/:question_id' >
                    <Navs />
                    <PollDetail />
                  </Route>
                  <Route path='/leaderboard'>
                    <Navs />
                    <LeaderBoard />
                  </Route>
                  <Route path='/404' component={PageNotFound} />
                  <Redirect exact from='/' to='/home' />
                </Switch>
              </div>
            }
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);
