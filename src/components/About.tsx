function About() {
  return (
    <section id="about" className="about">
      <div className="about-section-content">
        <div className="about-section-header">
          <h1 className="about-me-header">About Me</h1>
          <p className="info info-medium">
            Here you will find information about me and my current skills
          </p>
        </div>
        <div className="about-section-info">
          <div>
            <h1 className="about-section-info-header">Get to know me!</h1>
            <p className="info info-small">
              I'm a <strong>frontend web developer</strong> who transforms{" "}
              <strong>designs</strong> into user-friendly{" "}
              <strong>digital experiences</strong> using <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, and <strong>JavaScript</strong>. With a keen
              eye for detail and a passion for clean,{" "}
              <strong>responsive design</strong>, I'm dedicated to creating
              engaging <strong>websites</strong> that captivate users.
              <br /> <br /> In addition to my technical skills, I prioritize{" "}
              <strong>user-centric design</strong> principles, aiming to provide
              seamless <strong>navigation</strong> and an enjoyable{" "}
              <strong>user experience</strong>. With a strong foundation in
              front-end frameworks like <strong>React</strong>, I'm always
              excited to take on new challenges and push the boundaries of
              what's possible in web development. I'm passionate about creating{" "}
              <strong>digital solutions</strong> that leave a lasting
              impression.
            </p>
          </div>
          <div className="skills">
            <h2 className="skills-header">My Skills</h2>
            <div className="skill-list">
              <div className="skill">Python</div>
              <div className="skill">HTML</div>
              <div className="skill">CSS</div>
              <div className="skill">Javascript</div>
              <div className="skill">React</div>
              <div className="skill">C++</div>
              <div className="skill">Typescript</div>
              <div className="skill">GIT</div>
              <div className="skill">GitHub</div>
              <div className="skill">Basic SQL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
