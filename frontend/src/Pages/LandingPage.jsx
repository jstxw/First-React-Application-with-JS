import "/Users/Ssivf/vs code projects/NoMovieFOMO/frontend/src/css/LandingPage.css";
import { useNavigate } from "react-router-dom";
import Backgroundlanding from "../backgroundlandingpage";

function Landing() {
  const navigate = useNavigate();

  const reftomovies = () => {
    navigate("/Home");
  };
  return (
    <div>
      <div className="backgroundlanding" style={{ height: "100%" }}>
        <Backgroundlanding />
        <div className="landing-container">
          <div className="landing-overlay"></div>
          <div className="landing-content">
            <h1 className="landing-title">
              Awkward in Conversations? Learn to Socialize Using NoMovieFOMO
            </h1>
            <p className="landing-subtitle">
              Movies, TV Shows, and Live Discussions.
            </p>
            <p className="landing-description">
              Only For Movie Fantics. Click Below To Explore.
            </p>
            <div className="landing-cta">
              <div className="landing-input-container">
                <button
                  onClick={reftomovies}
                  className="landing-get-started-btn"
                >
                  See Movies &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
