import React from 'react'
import { connect } from 'react-redux'

class Nav extends React.Component {
    render() {
        const { authedUser, user } = this.props
        console.log(authedUser)
        console.log(user)
        return (
            <nav className='nav'>
                <ul>
                    <li>
                        Home
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
                        <button>Logout</button>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps({authedUser, users}) {

    return {
        authedUser: "tylermcginnis",
        user: Object.values(users).filter((user) => user.id === "tylermcginnis")
    }
}

export default connect(mapStateToProps)(Nav)

