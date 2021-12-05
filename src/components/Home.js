import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Home extends Component {
    render() {
        const { authedUser } = this.props
        if (authedUser === null) {
            console.log('To login page');
            return <Redirect to='/login' />
        }
        
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser,
        users: Object.values(users),
        questions: Object.values(questions)
    }
}

export default connect(mapStateToProps)(Home)