import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'

class Nav extends React.Component {

    handleLogout = (e) => {
        
        console.log("Logout")

        this.props.dispatch(logout())
    }

    render() {
        const { user, authedUser } = this.props

        if (authedUser === null) {
            return <Redirect to='/' />
        }
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        New Question
                    </li>
                    <li>
                        Leaderboard
                    </li>
                    <li>
                        {user[0].name}
                    </li>
                    <li>
                        <button onClick={this.handleLogout}>Logout</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}) {

    return {
        authedUser,
        user: Object.values(users).filter((user) => user.id === authedUser) || null
    }
}

export default connect(mapStateToProps)(Nav)

