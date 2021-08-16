import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div>
    <h1 className="sign-in-sign-up-page-heading">Welcome to your Book Catalog, Please Sign in to continue</h1>
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
  </div>
);

export default SignInAndSignUpPage;
