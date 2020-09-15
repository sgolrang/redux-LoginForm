import React from 'react';
import LogingPage from './LoginPage';
// class LoginForm extends React.Component {



//     emailChangedHandler = (event) => {
//         this.props.setUserName({ value: event.target.value });
//     }
//     passwordChangedHandler = (event) => {
//         this.props.setPassword({ value: event.target.value });
//     }
//     loginStatusChanged = (event) => {
//         console.log('######### SSSS')
//         this.props.setLogin();
//     }

//     render() {


//         console.log('######### SANA', this.props.login)

//         return (
//             <div>
//                 <form>
//                     <br />

//                     <label><strong>Email</strong></label>
//                     <input type="email" name="email"
//                         value={this.props.userName}
//                         onChange={this.emailChangedHandler} />
//                     <br />
//                     <label><strong>Password</strong></label>
//                     <input type="password" name="password"
//                         onChange={this.passwordChangedHandler}
//                         value={this.props.password}
//                     />
//                     <br />
//                     <button onClick={(e) => {
//                         e.preventDefault();
//                         this.props.loginStatusChanged()}}>
//                         LOGIN
//                         </button>

//                 </form>

//             </div>
//         );
//     }
// }
const LogingPageContainer = (props) => {
  return (
<LogingPage />
  )

    }


// const mapStateToProps = (state) => {
//     return {
//         userName: state.username,
//         password: state.password,
//         login: state.login
//     };
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         setUserName: (username) => dispatch(setUserName(username)),
//         setPassword: (password) => dispatch(setPassword(password)),
//         setLogin: () => dispatch(setLogin())
//     };
// }


export default LogingPageContainer;