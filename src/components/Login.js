import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {

    state = {
        userId: '',
        toHome: false
    }

    handleChange = (id) => {
        this.setState(() => ({
            userId: id
        }))
    }

    handleLogin = (e) => {
        e.preventDefault()

        const { userId } = this.state

        this.props.dispatch(setAuthedUser(userId))

        this.setState(() => ({
            toHome: true
        }))
    }

    render () {
        const { toHome } = this.state
        const { users} = this.props

        if (toHome === true) {
            console.log('Redirect to home.')
            return <Redirect to='/' />
        }

        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <span >Sign in</span>
                    <select onChange={(e) => this.handleChange(e.target.value)} required>
                        <option value="" disabled selected>Select your option</option>
                        {users.map((user) => (
                        <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </select>
                    <button type='submit'>Sign in</button>
                </form>
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    return {
        users: Object.values(users)
    }
}


export default connect(mapStateToProps)(Login)