import React, { Component } from 'react'
import { connect } from 'react-redux'
import ScoreCard from './ScoreCard'
import Row from 'react-bootstrap/Row'

class LeaderBoard extends Component {

    render() {
        const { users, userIds} = this.props
        return (
            <div>
                <Row xs={1} md={1} className="g-4">
                {userIds.map((id) => (
                    <ScoreCard
                        key={id} 
                        user_name={users[id].name}
                        user_question={Object.keys(users[id].questions).length}
                        user_answer={Object.keys(users[id].answers).length}
                        score={Object.keys(users[id].questions).length + Object.keys(users[id].answers).length}
                        avatar={users[id].avatarURL}
                    />
                ))}
                </Row>
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