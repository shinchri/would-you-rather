import React from 'react'
import { connect } from 'react-redux'
import { Redirect, NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

class Navs extends React.Component {

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
            <Navbar collapseOnSelect expand="lg" variant="light" style={{padding: '20px'}}>
                
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/home" activeClassName="active" className="nav-item">
                            Home
                        </NavLink>
                        <NavLink to="/question/add" activeClassName="active" className="nav-item">
                            New Question
                        </NavLink>
                        <NavLink to="/leaderboard" activeClassName="active" className="nav-item">
                            Leader Board
                        </NavLink>
                    </Nav>
                    
                </Navbar.Collapse>
                <span className='user-greeting'>
                    Hello, {user[0].name}
                    <img src={user[0].avatarURL} alt={user[0].name} className="avatar"/>
                    </span>
                <Button onClick={this.handleLogout} variant="outline-dark">Logout</Button>
                
            </Navbar>
        )
    }
}

function mapStateToProps({authedUser, users}) {

    return {
        authedUser,
        user: Object.values(users).filter((user) => user.id === authedUser) || null
    }
}

export default connect(mapStateToProps)(Navs)

