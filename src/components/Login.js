import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

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

        if (toHome === true) {
            return <Redirect to='/home' />
        }

        return (
            <div>
                <h1 className="signin-heading">Sign in</h1>
                <Form onSubmit={this.handleLogin} className="login-form">
                    <Form.Control as="select" aria-label="User Select" onChange={(e) => this.handleChange(e.target.value)}>
                        <option key="blankChoice" value=''>Select User</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>{user.name}</option>
                        ))}
                    </Form.Control>
                    <Button type="submit" variant="primary" disabled={this.state.userId === ''}>Sign In</Button>
                    
                </Form>
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