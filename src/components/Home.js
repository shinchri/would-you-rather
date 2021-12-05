import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
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