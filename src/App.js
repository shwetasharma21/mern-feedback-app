import Navbar from "./components/Navbar";
import Feedback from "./components/Feedback";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<div className="vh-100 d-flex flex-column">
			<Navbar />
			<ToastContainer />
			<div className="d-flex flex-fill flex-column app-color">
				<Feedback />
			</div>
		</div>
	);
}
export default App;
