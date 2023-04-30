const prodConfig = { apiUrl: "/api" };
const devConfig = { apiUrl: "http://localhost:8080/api" };
export const config =
	process.env.NODE_ENV === "development" ? devConfig : prodConfig;
