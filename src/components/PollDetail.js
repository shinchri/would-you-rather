import React, { Component} from "react";
import { connect } from "react-redux";
import Poll from "./Poll";
import { handleAddUserAnswerToQuestion } from '../actions/questions'

class PollDetail extends Component {

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
            handleAddUserAnswerToQuestion(this.props.qid, this.state.optionSelected)
        );
    }

    checkSelectedOPtion() {
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
        this.checkSelectedOPtion();
      }
    
      componentDidUpdate(prevProps) {
        if (this.props.hasAnswered !== prevProps.hasAnswered) {
          this.checkSelectedOPtion();
        }
      }



    render() {
        return (
            <div>
                {/* <h2 className="text-center">Poll Details</h2>
                <div className="add-question-container border">
                <Poll qid={this.props.questionId} />
                <form onSubmit={this.handleSubmit} className="p-20">
                    <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        name="optradio"
                        onChange={this.handleChanges}
                        disabled={this.props.hasAnswered}
                        id="optionOne"
                        value="optionOne"
                        className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="optionOne">
                        {this.props.question.optionOne.text}
                    </label>
                    </div>
                    <div className="custom-control custom-radio">
                    <input
                        type="radio"
                        name="optradio"
                        value="optionTwo"
                        id="optionTwo"
                        onChange={this.handleChanges}
                        disabled={this.props.hasAnswered}
                        className="custom-control-input"
                    />
                    <label className="custom-control-label" htmlFor="optionTwo">
                        {this.props.question.optionTwo.text}
                    </label>
                    </div>
                    {!this.props.hasAnswered && (
                    <button
                        disabled={this.state.optionSelected === ""}
                        type="submit"
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                    )}
                </form>
                {this.props.hasAnswered && (
                    <div className="">
                    <div className="progress">
                        <h5>Option 1: {this.props.totalVotesOpt1} Voted</h5>
                        <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${this.props.percentage1}%` }}
                        >
                        {this.props.percentage1}%
                        </div>
                        <h5>Option 2: {this.props.totalVotesOpt2} Voted</h5>
                        <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${this.props.percentage2}%` }}
                        >
                        {this.props.percentage2}%
                        </div>
                    </div>
                    <span>Total number of votes: {this.props.totalVotes}</span>
                    </div>
                )}
                </div> */}
            </div>
        )
    }
}

function calculatePercentageForOption(option, totalVotes) {
    return parseFloat(option.votes.length / totalVotes * 100).toFixed(2)
    
}

function mapStateToProps({questions, authedUser, users}, props) {
    console.log("** ", props)
    // const { questionId } =  props.match.params.question_id
    // const user = users[authedUser]
    // const question = questions[questionId]
    // const totalVotesOpt1 = question.optionOne.votes.length;
    // const totalVotesOpt2 = question.optionTwo.votes.length;
    // const totalVotes = totalVotesOpt1 + totalVotesOpt2

    return {
        authedUser,
        // questionId,
        // question,
        // totalVotes,
        // totalVotesOpt1,
        // totalVotesOpt2,
        // hasAnswerd: Object.keys(user.answers).includes(questionId),
        // percentage1: calculatePercentageForOption(question.optionOne, totalVotes),
        // percentage2: calculatePercentageForOption(question.optionTwo, totalVotes),
        // user
    }
}

export default connect(mapStateToProps)(PollDetail)