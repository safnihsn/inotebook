import "../Home.css";
import landingImage from "../assets/noemi-macavei-katocz-fSB5tMpXc9Q-unsplash.jpg";
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
          <div className="another">
            <h1>Forget forgetting!</h1>
            <p>Say hello to your digital brain — iNoteBook.</p>
            <p>From midnight thoughts to grocery lists ,</p>
            <p>we keep it all safe, neat, and ready whenever you need it.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
