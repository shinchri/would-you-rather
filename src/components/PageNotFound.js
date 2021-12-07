import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h1>Requested Page is Not Found</h1>
                <NavLink to="/home" activeClassName="active" className="poll-button">
                    Go to Home
                </NavLink>
            </div>
        )
    }
}


export default PageNotFound

