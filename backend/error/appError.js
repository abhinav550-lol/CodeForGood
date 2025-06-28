class AppError extends Error {
	constructor(status, message) {
		super(message);
		this.status = status;
		this.isOperational = true; // Marks it as an expected error

		Error.captureStackTrace(this, this.constructor);
	}
}

export default AppError;
