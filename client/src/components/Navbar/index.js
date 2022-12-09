import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a to="/"  class="navbar-brand" href="#">Totoro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link" aria-current="page" href="#">Log In</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" class="nav-link" href="#">Sign Up</Link>
        </li>
        <li class="nav-item">
          <Link to="/home" class="nav-link">Home</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);	
}

export default Navbar;

{/* <nav>
			<a href="/">Home</a>
			<Link to="/">Home</Link>
			
			<Link to="/about">About</Link>
			<Link to="/contact">Contact</Link>
		</nav> */}