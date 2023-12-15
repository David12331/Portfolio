import { Link } from "react-router-dom";
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1 className="title" style={{ color: '#fff' }}>Welcome to David`s Portfolio</h1>
      <nav className='navStyle'>
        <Link to="/" style={{ color: '#fff' }}>
          <div>HOME</div>
        </Link>
        <Link to="/about" style={{ color: '#fff' }}>
          <div>ABOUT</div>
        </Link>
        <Link to="/projects" style={{ color: '#fff' }}>
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;