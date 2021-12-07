import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class NewQuestion extends Component {

    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false
    }

    handleChange = (e) => {
        if (e.target.id==='optionOne') {
            this.setState({
                optionOne: e.target.value
            })
        }
        else {
            this.setState({
                optionTwo: e.target.value
            })
        }
    }

    handleAddQuestion = (e) => {
        e.preventDefault()

        this.props.dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))

        this.setState({
            optionOne: '',
            optionTwo: '',
            toHome: true
        })
    }
    render() {
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to='/home' />
        }
        return (
            <div className="border">
                
                <h3>Create New Question</h3>
                <span>Would you rather...</span>

                <Form onSubmit={this.handleAddQuestion}>
                    <Form.Control type='text' placeholder="Enter Option One Text Here" id="optionOne" onChange={this.handleChange}/>
                    <span> - OR - </span>
                    <Form.Control type='text' placeholder="Enter Option Two Text Here" id="optionTwo" onChange={this.handleChange}/>
                    <Button className="new-question-button" type='submit' variant="primary" disabled={!this.state.optionOne || !this.state.optionTwo}>Submit</Button>
                    
                </Form>
            </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)