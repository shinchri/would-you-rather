import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'

class LeaderBoard extends Component {

    render() {
        const { users, userIds} = this.props
        console.log(this.props.users)
        return (
            <div>
                {userIds.map((id) => (
                    <ScoreCard
                        key={id} 
                        user-name={users[id].name}
                        user-question={Object.keys(users[id].questions).length}
                        user-answer={Object.keys(users[id].answers).length}
                        score={Object.keys(users[id].questions).length + Object.keys(users[id].answers).length}
                    />
                ))}
            </div>
        )
    }
}


function mapStateToProps({users}) {
    const userIds = Object.keys(users).sort((a,b) => {
        const user2 = Object.keys(users[b].answers).length + Object.keys(users[b].questions).length
        const user1 = Object.keys(users[a].answers).length + Object.keys(users[a].questions).length
        return user2 - user1
    })
    return {
        users,
        userIds
    }
}

export default connect(mapStateToProps)(LeaderBoard)