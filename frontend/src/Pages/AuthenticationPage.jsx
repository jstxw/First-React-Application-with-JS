import { auth, provider } from "../services/firebaseconfig";
import { signInWithPopup } from "firebase/auth";

const Auth = () => {
  const signinWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };
  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signinWithGoogle}>Sign In With Google</button>
    </div>
  );
};
export default Auth;
