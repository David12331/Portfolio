import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 



  return (
    <header>
      <h1>Welcome to David's portfolio</h1>
      <nav className='navStyle'>
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/about">
          <div>ABOUT</div>
        </Link>
        <Link to="/projects">
          <div>PROJECTS</div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;