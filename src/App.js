import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";

function App() {
	return (
		<div className="vh-100 d-flex flex-column">
			<Navbar />
			<div className="d-flex flex-fill flex-column app-color">
				<Feedback />
			</div>
		</div>
	);
}
export default App;
