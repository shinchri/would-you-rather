import React, { Component } from 'react'
import Poll from './Poll'

class PollList extends Component {
    render() {
        return (
            <div className="border poll-list-container">
                <h3 className="text-center">{this.props.title}</h3>
                <ul className="p-0">
                {this.props.questionIds.map(questionId => (
                    <li key={questionId} className="poll-card border">
                        <Poll questionId={questionId} />
                    </li>
                ))}
                </ul>
            </div>
        )
    }
}

export default PollList