// wrapAsyncErrors.js
const wrapAsyncErrors = (fn) => {
	return (req, res, next) => {
		fn(req, res, next).catch(next);
	};
};

export default wrapAsyncErrors;
