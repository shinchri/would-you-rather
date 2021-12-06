import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddUserAnswerToQuestion } from '../actions/questions'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Question extends Component {

    state = {
        optionSelected: ''
    }

    handleChanges = (e) => {
        this.setState({
            optionSelected: e.target.value
        });
    };


    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(
            handleAddUserAnswerToQuestion(this.props.questionId, this.state.optionSelected)
        );
        this.setState({
            optionSelected: ''
        })
    }

    checkSelectedOption() {
        if (
            this.props.hasAnswered &&
            this.props.question.optionOne.votes.includes(this.props.authedUser)
        ) {
            document.getElementById("optionOne").checked = true;
        } else if (
            this.props.hasAnswered &&
            this.props.question.optionTwo.votes.includes(this.props.authedUser)
        ) {
            document.getElementById("optionTwo").checked = true;
        }
    }
    
    componentDidMount() {
        this.checkSelectedOption();
    }

    componentDidUpdate(prevProps) {
        if (this.props.hasAnswered !== prevProps.hasAnswered) {
            this.checkSelectedOption();
        }
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <h3>Would you rather...</h3>
                    <Form.Check type="radio" name="group1" id="optionOne" value="optionOne" label={this.props.question.optionOne.text} onChange={this.handleChanges}/>
                    <Form.Check type="radio" name="group1" id="optionTwo" value="optionTwo" label={this.props.question.optionTwo.text} onChange={this.handleChanges}/>
                    <Button type="submit" variant="primary" disabled={this.state.optionSelected === ""}>Submit</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, props) {
    const questionId = props.questionId
    const user = users[authedUser]
    const question = questions[questionId]

    return {
        questionId,
        user,
        question,
        hasAnswered: Object.keys(user.answers).includes(questionId)
    }
}

export default connect(mapStateToProps)(Question)