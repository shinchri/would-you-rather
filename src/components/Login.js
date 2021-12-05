import React, { Component } from 'react'
import { connect } from 'react-redux'


class Login extends Component {
    render () {
        const { authedUser, users} = this.props
        console.log(JSON.stringify(users))

        return (
            <div>
                <h1>Hello</h1>
                {<h1>{authedUser}</h1>}
                <ul>
                    {Object.entries(users).forEach(([key, value]) => (
                        <li key={key}>{value}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    return {
        authedUser,
        users
    }
}


export default connect(mapStateToProps)(Login)