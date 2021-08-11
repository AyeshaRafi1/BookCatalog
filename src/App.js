import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import HomePage from './pages/homepage/homepage.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;
  componentDidUpdate() {
    console.log("an update just happened")
  }

  componentDidMount() {
    console.log("how many times does this happen?");
    console.log(this.state);
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Switch>

          <Route
            exact
            path='/'
            render={() =>
              this.currentUser ? (
                <Redirect to='/homepage'/>
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
          <Route path='/homepage' component={HomePage} />
          
        </Switch>
      </div>
    );
  }
}

export default App;