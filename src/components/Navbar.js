function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={{color:"#38bdf8"}}>Poorvika</h2>
      <div>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#1e293b",
    position: "sticky",
    top: 0
  }
};
export default Navbar;