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

        this.setState(() => ({
            toHome: true
        }))

        this.props.dispatch(setAuthedUser(userId))

        
    }

    render () {
        const { toHome } = this.state
        const { users} = this.props
        console.log(toHome)
        if (toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <span >Sign in</span>
                    <select onChange={(e) => this.handleChange(e.target.value)} required>
                        <option value="" defaultValue={{label: "Select Your Option", value: 0}}>Select your option</option>
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

function mapStateToProps ({authedUser, users}) {
    return {
        users: Object.values(users),
        authedUser
    }
}


export default connect(mapStateToProps)(Login)