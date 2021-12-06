import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PollList from './PollList'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

class Home extends Component {
    render() {
        const { authedUser } = this.props
        if (authedUser === null) {
            return <Redirect to='/' />
        }
        
        return (
            <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
                <Tab eventKey="unanswered" title="Unanswered">
                    <PollList
                    title="Unanswered Questions"
                    questionIds={this.props.unanswered}
                    />
                </Tab>
                <Tab eventKey="answered" title="Answered">
                    <PollList
                    title="Answered Questions"
                    questionIds={this.props.answered}
                    />
                </Tab>
            </Tabs>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    let user, answered, unanswered;

    if (authedUser !== null) {
        user = users[authedUser]
        answered = Object.keys(user.answers)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
        unanswered = Object.keys(questions)
            .filter(id => !answered.includes(id))
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
    
    return {
        authedUser,
        user,
        answered,
        unanswered
    }
}

export default connect(mapStateToProps)(Home)