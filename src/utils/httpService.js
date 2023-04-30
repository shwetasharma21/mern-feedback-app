import axios from "axios";
import { config } from "../config/index";

const httpCall = async (httpConfig) => {
	try {
		const result = await axios(httpConfig);
		return result.data;
	} catch (err) {
		return err.response.data;
	}
};

const submitFeedbackReq = (feedback, rating) => {
	const httpConfig = {
		method: "post",
		url: `${config.apiUrl}/feedback/submitFeedback`,
		data: {
			feedback,
			rating,
		},
	};
	return httpCall(httpConfig);
};

export { submitFeedbackReq };
