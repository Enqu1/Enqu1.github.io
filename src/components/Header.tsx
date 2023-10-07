function Header() {
  return (
    <section className="header">
      <div className="header-content">
        <h1 className="header-name">
          <a href="./">Liam Gardner</a>
        </h1>
        <div className="header-links">
          <h3>
            <a className="header-link" href="#home">
              Home
            </a>
          </h3>
          <h3>
            <a className="header-link" href="#about">
              About
            </a>
          </h3>
          <h3>
            <a className="header-link" href="#projects">
              Projects
            </a>
          </h3>
          <h3>
            <a className="header-link" href="#about">
              Contact
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Header;
