import React from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions';
import './sign-in.styles.scss';

class SignIn extends React.Component{
  constructor() {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

 handleSubmit = async event => {
   event.preventDefault();
   const {emailSignInStart} = this.props;
   const {email, password} = this.state;
   emailSignInStart(email, password);
   // try {
   //   await auth.signInWithEmailAndPassword(email, password);
   //   this.setState({email: '', password: ''})
   // } catch(error) {
   //   console.error(error);
   // }

 }

 handleOnChange = event => {
   const {value, name} = event.target;
   this.setState({[name]: value})
 }
  render() {
    const {googleSignInStart} = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
          name='email'
          type='email'
          value={this.state.email}
          handleChange={this.handleOnChange}
          label='email'
          required
          />

          <FormInput
          name='password'
          type='password'
          value={this.state.password}
          handleChange={this.handleOnChange}
          label='password'
          required
          />
          <div className='buttons'>
            <CustomButton type="submit">Sign in</CustomButton>

            <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>

        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
})
  // <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
export default connect(null, mapDispatchToProps)(SignIn);
