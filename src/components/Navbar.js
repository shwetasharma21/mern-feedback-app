import linkedInLogo from "../assets/linkedin.svg";

function Navbar() {
	return (
		<div>
			<nav className="navbar sticky-top nav-color">
				<div className="container-fluid">
					<span className="navbar-brand text-light fs-4">Your Feedback 📝</span>
					<a
						className="navbar-brand p-0 m-0"
						href="https://www.linkedin.com/in/shweta-sharma-81b739144/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="me-1 text-light">Shweta Sharma</span>
						<img src={linkedInLogo} height={32} alt="linkedIn" />
					</a>
				</div>
			</nav>
		</div>
	);
}
export default Navbar;
