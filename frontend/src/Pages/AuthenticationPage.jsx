import { auth, provider } from "../services/firebaseconfig";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import { useNavigate } from "react-router-dom";
import Forum from "./Forum";

//cookies are used to keep users authenticated through cookies assiociated with users that are logged in

const Auth = (props) => {
  const { setisAuth } = props; //from forum.jsx
  const navigate = useNavigate();
  const signinWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      navigate("/Forum");
      setisAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signinWithGoogle}>Sign In With Google</button>
    </div>
  );
};
export default Auth;
