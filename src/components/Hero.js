function Hero() {
  return (
    <section style={styles.hero}>
      <h1 style={styles.title}>Hi, I'm Poorvika 👋</h1>
      <h2 style={styles.subtitle}>Full Stack Web Developer</h2>
      <p>I build responsive, modern web applications using React and Node.js</p>
      <a href="#projects">
        <button style={styles.button}>View My Work</button>
      </a>
    </section>
  );
}

const styles = {
  hero: {
    textAlign: "center",
    paddingTop: "120px",
    paddingBottom: "120px"
  },
  title: { fontSize: "48px" },
  subtitle: { color: "#38bdf8" },
  button: {
    marginTop: "30px",
    padding: "12px 24px",
    backgroundColor: "#38bdf8",
    color: "#0f172a",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer"
  }
};
export default Hero;  