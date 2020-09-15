import store from '../store/store';
import * as actionTypes from './action_types';

export const setUserName = (value) => {
    return { type: actionTypes.USERNAME_CHANGED, userName: value }
}
export const setPassword = (value => {
    return {type: actionTypes.PASSWORD_CHANGED, password: value}
})
export const setLogin = () => {
    console.log('store', store.getState().userName)
    return{ type: actionTypes.LOGIN_CHANGED}
    
}
