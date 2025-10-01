import "../Home.css";
import Notes from "./Notes";

const Home = ({ showAlert }) => {
  const isLoggedIn = localStorage.getItem("token");

  return (
    <>
      {isLoggedIn ? (
        <div className="notes-wrapper">
          <Notes showAlert={showAlert} />
        </div>
      ) : (
        <div className="home-full-bg">
          <div className="hero-section">
            <h1 className="hero-title">Forget forgetting!</h1>
            <p className="hero-subtitle">Say hello to your digital brain — <span className="highlight">iNoteBook</span>.</p>
            <p className="hero-text">From midnight thoughts to grocery lists,</p>
            <p className="hero-text">we keep it all safe, neat, and ready whenever you need it.</p>
            <button className="get-started-btn">Get Started</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
