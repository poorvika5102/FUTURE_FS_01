function Projects() {
  return (
    <section id="projects">
      <h2 style={{textAlign:"center"}}>Projects</h2>
      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Notes App</h3>
          <p>Full stack notes app with authentication and database storage.</p>
          <button style={styles.btn}>GitHub</button>
        </div>

        <div style={styles.card}>
          <h3>AI Resume Skill Matcher</h3>
          <p>Matches resumes with job descriptions using NLP.</p>
          <button style={styles.btn}>GitHub</button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginTop: "40px"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px"
  },
  btn: {
    marginTop: "10px",
    padding: "8px 16px",
    background: "#38bdf8",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};
export default Projects;