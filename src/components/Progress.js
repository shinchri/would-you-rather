import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/Progressbar'

class Progress extends Component {
    render() {
        const { option_number, question, option, percentage, totalVotes} = this.props

        return (
            <div className="option_progress">
                <h6>Option {option_number}:</h6>
                <p>{question.optionOne.text}</p>
                <ProgressBar now={percentage} label={`${percentage}`}/>
                <span>{option} out of {totalVotes} votes</span>
            </div>
        )
    }
}

export default Progress