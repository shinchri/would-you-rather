import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

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
            <div>
                
                <h3>Create New Question</h3>
                <span>Complete the question:</span>
                <form onSubmit={this.handleAddQuestion} >
                    <span>Would you rather...</span>
                    <input type='text' id="optionOne" onChange={this.handleChange}/>
                    <span> - OR - </span>
                    <input type='text' id="optionTwo" onChange={this.handleChange}/>
                    <button disabled={!this.state.optionOne || !this.state.optionTwo}>Submit</button>
                </form>
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