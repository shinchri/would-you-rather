import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/Progressbar'

class Progress extends Component {
    render() {
        const { user_vote, option_number, question, option, percentage, totalVotes} = this.props
        console.log(user_vote)
        return (
            <div className="option_progress">
                <h6>Option {option_number}: {user_vote === true ? <span className="select">Selected</span> : null}</h6>
                <p>{question.optionOne.text}</p>
                <ProgressBar now={percentage} label={`${percentage}`}/>
                <span>{option} out of {totalVotes} votes</span>
            </div>
        )
    }
}

export default Progress