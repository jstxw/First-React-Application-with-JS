import "../css/LandingPage.css";
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
              Awkward in Conversations? Learn to Socialize Using
            </h1>
            <h2 className="landing-title2">NoMovieFOMO</h2>
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
            <div className="aboutmecontainer">
              <h1>Developer's Notes</h1>
              <div className="aboutme-quote">by Justin Wang</div>
              <div className="aboutmetext">
                This website was created as part of Shipwrecked 2025. As a movie
                fanatic, I sometimes have a hard time keeping track of the
                latest movies to watch. I know a lot of other young people feel
                the same way. This website fixes that, alongside a live chat to
                discuss plot twists, cliff hangers, and dramas with others.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
