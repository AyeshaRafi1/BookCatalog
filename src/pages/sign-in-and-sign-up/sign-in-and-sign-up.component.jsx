import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import Spinner from '../../components/spinner/spinner.component';

import './sign-in-and-sign-up.styles.scss';

import { selectCurrentUser } from '../../redux/user/user.selectors';

const SignInAndSignUpPage = ({currentUser}) => {
  return(
  <div>
    {currentUser?
  (
    <Spinner/>
  )
  :
  (
    <div>
      
    <h1 className="sign-in-sign-up-page-heading">Welcome to your Book Catalog, Please Sign in to continue</h1>
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp />
    </div>
    </div>
  )
  }
  
  </div>
)};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(SignInAndSignUpPage);
