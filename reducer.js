
import * as actionTypes from '../Action/action_types';

export default function (state = {
    userName: '',
    password: '',
    login: '',
}, action) {
    switch (action.type) {

        case actionTypes.USERNAME_CHANGED:
            return {
                ...state,
                userName: action.userName
            }
        case actionTypes.PASSWORD_CHANGED:
            return {
                ...state,
                password: action.password
            }
        case actionTypes.LOGIN_CHANGED:
            console.log('login attempted')
            break;
        default:
            return state;
    }
};
