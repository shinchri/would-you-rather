import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {
    render () {
        const { authedUser, users} = this.props

        return (
            <div>
                <h1>Hello</h1>
                {<h1>{authedUser}</h1>}
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users: Object.values(users)
    }
}


export default connect(mapStateToProps)(Login)