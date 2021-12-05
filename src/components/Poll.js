import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helper'

class Poll extends Component {
    render() {
        
        return (
            <Link to={`/questions/${this.props.questionId}`} >
                <div className="poll-info">
                    <span className="name">{this.props.name}</span>
                    <span className="time">{this.props.timestamp}</span>
                    <span className="question">Would you rather...?</span>
                    <span className="option">{this.props.question.optionOne.text}</span>
                    <span>OR</span>
                    <span className="option">{this.props.question.optionTwo.text}</span>
                </div>
            </Link>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, { questionId }) {
    const question = questions[questionId]
    const author = users[question.author]
    return {
        authedUser,
        name: author.name,
        avatar: author.avatarURL,
        question: questions[questionId],
        timestamp: formatDate(question.timestamp),
        questionId
    }
}

export default connect(mapStateToProps)(Poll)