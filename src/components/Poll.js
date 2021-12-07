import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatDate } from '../utils/helper'

class Poll extends Component {
    render() {
        
        return (
            
            <div className="poll-info">
                <div className="row">
                    <div className="col">
                        <h4 className="name">{this.props.name} asks:</h4>
                    </div>
                </div>
                <div className='row'>
                    <div className="col">
                        <img src={this.props.avatar} alt={this.props.name} className="avatar"/>
                    </div>
                    <div className = "col-6" >
                        <h5 className="question">Would you rather...?</h5>
                        <div className="option"><b>{this.props.question.optionOne.text}</b> or <b>{this.props.question.optionTwo.text}</b></div>
                        <Link to={`/questions/${this.props.questionId}`} className="poll-button">View Poll</Link>
                    </div>
                </div>
                

                
            </div>
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