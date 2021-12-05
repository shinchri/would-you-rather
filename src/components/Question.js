import { connect } from 'react-redux'
import React, { Component } from 'react'

class Question extends Component {
    render() {
        const { question } = this.props

        if (question === null) {
            return <p>This Question does not exist.</p>
        }

        const {
            id, author, timestamp, optionOne, optionTwo
        } = question

        return (
            <div>
                {console.log(question)}
                Hello
            </div>
        )
    }
}

function mapStateToProps() {
    return
}

export default connect()(Question)