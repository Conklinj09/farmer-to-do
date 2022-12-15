import { Link } from 'react-router-dom';


function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark">
			<div className="container-fluid">
				<a to="/" className="navbar-brand text-white" href="#">Totoro</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item text-white">
							<Link to="/" className="nav-link text-white" aria-current="page" href="#">Home</Link>
						</li>
						<li className="nav-item text-white">
							<Link to="/signup" className="nav-link text-white" href="#">Sign Up</Link>
						</li>
						<li className="nav-item text-white">
							<Link to="/login" className="nav-link text-white">Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

