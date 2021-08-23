import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import HomePage from "./pages/homepage/homepage.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { initalizeBookState } from "./redux/books/books.actions";

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      }

      dispatch(setCurrentUser(userAuth));
      dispatch(initalizeBookState());
    });

    return () => unSubscribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          render={() =>
            currentUser ? <Redirect to='/homepage' /> : <SignInAndSignUpPage />
          }
        />
        <Route path='/homepage' component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
