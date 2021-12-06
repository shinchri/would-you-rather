import React, { Component} from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Progress from './Progress'
import Question from './Question'

class PollDetail extends Component {

    render() {
        return (
            <div>
                <div className="add-question-container border">
                    
                    {!this.props.hasAnswerd
                    ?   (<Question questionId={this.props.questionId}/>)
                    :   (<div className="">
                            <h3>Results:</h3>
                            <div>
                                <Progress 
                                    option_number={1}
                                    question={this.props.question} 
                                    option={this.props.totalVotesOpt1} 
                                    percentage={this.props.percentage1} 
                                    totalVotes = {this.props.totalVotes}
                                />
                                <Progress
                                    option_number={2} 
                                    question={this.props.question} 
                                    option={this.props.totalVotesOpt2} 
                                    percentage={this.props.percentage2} 
                                    totalVotes = {this.props.totalVotes}
                                />
                            </div>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

function calculatePercentageForOption(option, totalVotes) {
    return parseFloat(option.votes.length / totalVotes * 100).toFixed(2)
    
}

function mapStateToProps({questions, authedUser, users}, props) {
    const questionId  =  props.match.params.question_id
    const user = users[authedUser]
    const question = questions[questionId]
    const totalVotesOpt1 = question.optionOne.votes.length;
    const totalVotesOpt2 = question.optionTwo.votes.length;
    const totalVotes = totalVotesOpt1 + totalVotesOpt2

    return {
        authedUser,
        questionId,
        question,
        totalVotes,
        totalVotesOpt1,
        totalVotesOpt2,
        hasAnswerd: Object.keys(user.answers).includes(questionId),
        percentage1: calculatePercentageForOption(question.optionOne, totalVotes),
        percentage2: calculatePercentageForOption(question.optionTwo, totalVotes),
        user
    }
}

export default withRouter(connect(mapStateToProps)(PollDetail))