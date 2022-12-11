import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav class="navbar navbar-expand-sm ">
  <div class="container-fluid">
    <a to="/"  class="navbar-brand" href="#">Totoro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/login" class="nav-link active" aria-current="page" href="#">Log In</Link>
        </li>
        <li class="nav-item">
          <Link to="/signup" class="nav-link active" href="#">Sign Up</Link>
        </li>
        <li class="nav-item">
          <Link to="/home" class="nav-link active">Home</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);	
}

export default Navbar;

