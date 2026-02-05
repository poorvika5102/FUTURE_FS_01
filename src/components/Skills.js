function Skills() {
  return (
    <section id="skills">
      <h2 style={{textAlign:"center"}}>My Skills</h2>
      <div style={styles.grid}>
        <div style={styles.card}>Frontend: HTML, CSS, JS, React</div>
        <div style={styles.card}>Backend: Node.js, Express</div>
        <div style={styles.card}>Database: MongoDB</div>
        <div style={styles.card}>Tools: Git, GitHub, Firebase</div>
      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "40px"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center"
  }
};
export default Skills;