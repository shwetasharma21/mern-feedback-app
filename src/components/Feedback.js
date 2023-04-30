import { useState } from "react";

import laughIcon from "../assets/laugh-icon.svg";
import smileIcon from "../assets/smile-icon.svg";
import confusedIcon from "../assets/confused-icon.svg";
import sadIcon from "../assets/sad-icon.svg";
import { submitFeedbackReq } from "../utils/httpService";
import { toast } from "react-toastify";

function Feedback() {
	const [rating, setRating] = useState();
	const [feedback, setFeedback] = useState("");
	const [ratingList] = useState([sadIcon, confusedIcon, smileIcon, laughIcon]);

	const handleFeedbackInput = (e) => {
		const value = e.target.value;
		setFeedback(value);
	};
	const handleFeedbackSubmit = async (e) => {
		e.preventDefault();
		const feedbackValue = feedback.trim();
		if (feedbackValue.length === 0) return toast.error("Invalid feedback");
		if (rating === undefined) return toast.error("Please select a reaction");
		const data = await submitFeedbackReq(feedbackValue, rating);
		if (data.success) {
			setFeedback("");
			setRating();
			toast.success(data.message);
		} else {
			toast.error(data.message);
		}
	};
	return (
		<div className="d-flex justify-content-center mt-4 vw-100 mb-4">
			<div className="card shadow">
				<div className="card-header text-center">
					<span>Your feedback makes our day!</span>
				</div>
				<div className="mt-2 px-2 text-center px-4">
					<p>I would like your feedback to improve my teaching.</p>
					<p>What is your reaction of today's lecture?</p>
					<div>
						{ratingList.map((item, index) => (
							<img
								className={`mx-2 ${rating !== index ? "smiley-grayScale" : ""}`}
								src={item}
								height={48}
								alt=""
								key={index}
								onClick={() => setRating(index)}
							/>
						))}
					</div>
				</div>
				<div className="card-body mt-0 px-4 py-0 text-center">
					<div className="d-flex my-4">
						<div
							className={`flex-fill border rounded-pill p-2 m-2 ${
								rating < 2 ? "shadow-sm bg-danger text-light" : "shadow"
							}`}
						>
							Suggestion
						</div>
						<div
							className={`flex-fill border rounded-pill p-2 m-2 ${
								rating > 1 ? "shadow-sm bg-success text-light" : "shadow"
							}`}
						>
							Compliment
						</div>
					</div>

					<p>Please leave your feedback below.</p>
					<form onSubmit={handleFeedbackSubmit}>
						<textarea
							className="form-control"
							placeholder="Feedback"
							id="feedback"
							onChange={handleFeedbackInput}
							value={feedback}
						/>

						<div className="d-flex justify-content-center my-3">
							<button className="btn btn-success">Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
export default Feedback;
