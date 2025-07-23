import React, { useState } from "react";
import "../css/Forum.css";
import Auth from "../Pages/AuthenticationPage";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Forum() {
  const [isAuth, setisAuth] = useState(cookies.get("auth-token")); //bascially, if there is a cookie anywhere,
  //the user is authenticated. If the user is not authenticated, render the authentication component

  if (!isAuth) {
    return (
      <>
        <div>
          <Auth setisAuth={setisAuth} />
        </div>
      </>
    );
  }

  return (
    <>
      <div>Chat</div>
    </>
  );
}

export default Forum;
