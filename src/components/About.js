import React from "react";

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2>About Me</h2>
      <p>
        I'm an aspiring full stack developer passionate about building real-world
        applications and solving problems with technology.
      </p>
    </section>
  );
}

const styles = { section: { padding: "60px 20px", textAlign: "center" } };

export default About;
