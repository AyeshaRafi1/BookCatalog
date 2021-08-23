import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <div className='header'>
      <div></div>
      <div className='options'>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Redirect to='./' />
        )}
      </div>
    </div>
  );
};

export default Header;
