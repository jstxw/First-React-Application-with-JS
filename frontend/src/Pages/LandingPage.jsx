import "../css/LandingPage.css";
import { useNavigate } from "react-router-dom";
import Backgroundlanding from "../backgroundlandingpage";
import Navbar from "./NavBar";

function Landing() {
  const navigate = useNavigate();

  const reftomovies = () => {
    navigate("/Home");
  };
  return (
    <div>
      <Navbar />
      <div className="backgroundlanding" style={{ height: "100%" }}>
        <Backgroundlanding />

        <div className="landing-container">
          <div className="landing-overlay"></div>
          <div className="landing-content">
            <h1 className="landing-title"></h1>
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
          </div>
        </div>
      </div>
      <div className="aboutmecontainer">
        <h1>Developer's Notes</h1>
        <div className="aboutme-quote">by Justin Wang</div>
        <div className="aboutmetext">
          NoMovieFOMO was developed for Shipwrecked 2025 to help movie enthusiasts stay updated with the latest releases and engage in meaningful discussions. Our platform is designed to make it easy to discover trending movies, TV shows, and connect with a vibrant community. We hope you enjoy exploring and sharing your passion for film with others.
        </div>
      </div>
    </div>
  );
}

export default Landing;
