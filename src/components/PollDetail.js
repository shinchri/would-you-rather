import React, { Component} from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from 'react-router-dom'
import Progress from './Progress'
import Question from './Question'

class PollDetail extends Component {

    render() {
        if (!this.props.hasQuestion) {
            return <Redirect to='/404' />
        }

        return (
            <div>
                <div className="add-question-container">
                    
                    {!this.props.hasAnswerd
                    ?   (<Question questionId={this.props.questionId}/>)
                    :   (<div className="">
                            <div className="row poll-detail-name">
                                <h4>
                                    <img src={this.props.avatar} alt={this.props.name} className="avatar"/>
                                    Asked by {this.props.user.name}
                                </h4>
                                
                            </div>
                            
                            <h3>Results:</h3>
                            <div>
                                <Progress 
                                    option_number={1}
                                    question={this.props.question} 
                                    option={this.props.totalVotesOpt1} 
                                    percentage={this.props.percentage1} 
                                    totalVotes = {this.props.totalVotes}
                                    user_vote={this.props.choice==='optionOne' ? true : false}
                                />
                                <Progress
                                    option_number={2} 
                                    question={this.props.question} 
                                    option={this.props.totalVotesOpt2} 
                                    percentage={this.props.percentage2} 
                                    totalVotes = {this.props.totalVotes}
                                    user_vote={this.props.choice==='optionTwo' ? true : false}
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

    console.log(Object.keys(questions).includes(questionId))
    if(!Object.keys(questions).includes(questionId)) {
        // there is no such question
        return {
            hasQuestion: false
        }
    }   
    else{
        const user = users[authedUser]
        const question = questions[questionId]
        const totalVotesOpt1 = question.optionOne.votes.length;
        const totalVotesOpt2 = question.optionTwo.votes.length;
        const totalVotes = totalVotesOpt1 + totalVotesOpt2;
        const author = users[question.author]
        const choice = author.answers[questionId]

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
            user,
            avatar: author.avatarURL,
            name: author.name,
            choice,
            hasQuestion: true
        }
    }
}

export default withRouter(connect(mapStateToProps)(PollDetail))