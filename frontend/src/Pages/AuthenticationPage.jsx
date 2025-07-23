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
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>
        <p className="auth-desc">Sign in with Google to continue to MovieFinder</p>
        <button className="google-signin-btn" onClick={signinWithGoogle}>
          <span className="google-icon" style={{ marginRight: 12, display: 'inline-flex', alignItems: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24"><g><path fill="#4285F4" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.383 0-6.148-2.805-6.148-6.25s2.765-6.25 6.148-6.25c1.93 0 3.227.82 3.969 1.523l2.719-2.648c-1.719-1.594-3.945-2.57-6.688-2.57-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.648-.07-1.141-.156-1.555z"/><path fill="#34A853" d="M3.545 7.545l3.281 2.406c.898-1.523 2.367-2.5 4.174-2.5 1.18 0 2.242.406 3.078 1.195l2.312-2.312c-1.406-1.312-3.211-2.125-5.39-2.125-3.672 0-6.75 2.992-6.75 6.75 0 1.07.258 2.078.711 2.953z"/><path fill="#FBBC05" d="M12 22c2.672 0 4.922-.883 6.563-2.406l-3.047-2.492c-.844.57-1.922.898-3.516.898-2.742 0-5.07-1.844-5.898-4.32l-3.242 2.5c1.633 3.211 5.086 5.32 9.14 5.32z"/><path fill="#EA4335" d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.242 3.648-5.617 3.648-3.383 0-6.148-2.805-6.148-6.25s2.765-6.25 6.148-6.25c1.93 0 3.227.82 3.969 1.523l2.719-2.648c-1.719-1.594-3.945-2.57-6.688-2.57-5.523 0-10 4.477-10 10s4.477 10 10 10c5.742 0 9.547-4.023 9.547-9.695 0-.648-.07-1.141-.156-1.555z" opacity=".1"/></g></svg>
          </span>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};
export default Auth;
