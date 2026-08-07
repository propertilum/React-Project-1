function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">DevBrand</div>
      <ul className="nav-links">
        <li><a href="#home" className="nav-link">Home</a></li>
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar