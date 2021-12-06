import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA"
import { addUserQuestion, addUserAnswer } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
// export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        return _saveQuestion({
            optionOneText,
            optionTwoText,
            author: authedUser
        })
        .then((question) => {
            dispatch(addQuestion(question))
            dispatch(addUserQuestion(question))
        })
    }
}

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

// export function addUserAnswerToQuestion(authedUser, questionId, answer) {
//     return {
//         type: ADD_USER_ANSWER,
//         authedUser,
//         questionId,
//         answer
//     }
// }

export function handleAddUserAnswerToQuestion(questionId, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState()
        return _saveQuestionAnswer({
            authedUser,
            qid: questionId,
            answer
        }).then(() => {
            // dispatch(addUserAnswerToQuestion(authedUser, questionId, answer))
            dispatch(addUserAnswer(authedUser, questionId, answer))
        })
    }
}