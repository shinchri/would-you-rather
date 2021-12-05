import { _getUsers, _getQuestions } from "../utils/_DATA";

import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'

function getInitialData() {
    return Promise.all([
        _getUsers(),
        _getQuestions()
    ]).then(([users, questions]) => ({
        users,
        questions,
        authedUser: null
    }))
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
            })
    }
}
