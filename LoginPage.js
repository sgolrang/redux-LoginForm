import React from 'react';
import { connect } from 'react-redux';
import { setLogin, setUserName, setPassword } from '../Action/Action';

const LoginPage =(props) => {
        console.log("%%%%%%");
   const emailChangedHandler =(event)=>{
       setUserName ({ value: event.target.value });
    }
    const passwordChangedHandler = (event) => {
        setPassword({ value: event.target.value });
        console.log('@@@@@@');
    }
    const loginStatusChanged =(event) => {
        console.log('######### SSSS')
        setLogin();
    }

        return (
            <div>
                <form>
                    <br />

                    <label><strong>Email</strong></label>
                    <input type="email" name="email"
                        value={props.userName}
                        onChange={emailChangedHandler} />
                    <br />
                    <label><strong>Password</strong></label>
                    <input type="password" name="password"
                        value={props.password}
                        onChange={passwordChangedHandler}
                    />
                    <br />
                    <button onClick={(e) => {
                        e.preventDefault();
 
                    }, loginStatusChanged()}>
                        LOGIN
                        </button>

                </form>

            </div>
        );
    }


const mapStateToProps = (state) => {
    return {
        userName: state.username,
        password: state.password,
        login: state.login
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserName: (username) => dispatch(setUserName(username)),
        setPassword: (password) => dispatch(setPassword(password)),
        setLogin: () => dispatch(setLogin())
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)