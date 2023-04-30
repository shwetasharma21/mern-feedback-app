import { useState } from "react";

import laughIcon from "../assets/laugh-icon.svg";
import smileIcon from "../assets/smile-icon.svg";
import confusedIcon from "../assets/confused-icon.svg";
import sadIcon from "../assets/sad-icon.svg";

function Feedback() {
	const [rating, setRating] = useState();
	const [ratingList] = useState([sadIcon, confusedIcon, smileIcon, laughIcon]);
	return (
		<div className="d-flex justify-content-center mt-4 vw-100 mb-4">
			<div className="card shadow">
				<div className="card-header text-center">
					<span>Your feedback makes our day!</span>
				</div>
				<div className="mt-2 px-2 text-center px-4">
					<p>I would like your feedback to improve my teaching.</p>
					<p>What is your opinion of today's lecture?</p>
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
					<div className="form-floating">
						<textarea
							class="form-control"
							placeholder=" "
							id="feedback"
						></textarea>
						<label for="feedback">Feedback</label>
					</div>
					<div className="d-flex justify-content-center my-3">
						<button type="button" className="btn btn-success">
							Submit
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Feedback;
