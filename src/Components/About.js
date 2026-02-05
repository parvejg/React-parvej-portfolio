import "./About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hi! I'm Md Parvez, a passionate Web Developer. I love building modern,
          responsive, and user-friendly websites. My goal is to create amazing
          experiences for users while writing clean and efficient code.
        </p>

        <h3 className="skills-title">Skills</h3>
        <div className="skills-list">
          <span className="skill">HTML</span>
          <span className="skill">CSS</span>
          <span className="skill">JavaScript</span>
          <span className="skill">React.js</span>
          <span className="skill">Node.js</span>
          <span className="skill">Git</span>
        </div>
      </div>
      <div className="about-image">
        <img src="/Images/parvej-picc.jpg" alt="About Me" />
      </div>
    </section>
  );
};

export default About;
