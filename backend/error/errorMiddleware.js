export default function errorMiddleware(err, req, res, next) {
	// Default status code and message
	let statusCode = err.statusCode || 500;
	let message = err.message || "Internal Server Error";

	// Mongoose Validation Error (e.g., required field missing, invalid types)
	if (err.name === "ValidationError") {
		const errors = Object.values(err.errors).map(val => val.message);
		message = errors.join(", ");
		statusCode = 400;
	}

	// Mongoose Duplicate Key Error
	if (err.code === 11000) {
		const field = Object.keys(err.keyValue)[0];
		message = `Duplicate value for '${field}': '${err.keyValue[field]}'`;
		statusCode = 400;
	}

	// CastError for invalid ObjectId
	if (err.name === "CastError") {
		message = `Invalid value for field '${err.path}': ${err.value}`;
		statusCode = 400;
	}

	res.status(statusCode).json({
		success: false,
		message
	});
}
