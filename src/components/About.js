import "../About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-heading">About <span className="highlight">iNoteBook</span></h1>
        <p className="about-text">
          iNoteBook is your digital companion for organizing thoughts, tasks, and ideas all in one place. Whether you're a student, a professional, or someone who just loves keeping notes, this platform is tailored to help you stay productive.
        </p>
        <p className="about-text">
          Fast, simple, and secure — our mission is to simplify your note-taking experience without compromising on performance.
        </p>
        <p className="about-footer">~ Built with ❤️ by <span className="author">Jagriti Kanwar</span>.</p>
      </div>
    </div>
  );
};

export default About;
