import AppError from "../error/appError.js";
import wrapAsyncErrors from "../error/wrapAsyncErrors.js";
import User from "../models/User.js";

const userController = {};

userController.loginAdmin = async (req , res , next) => {
	const {username , password} = req.body;

	if(!username || !password){
		return next(new AppError("Please provide username and password", 400));
	}

	const user = await User.findOne({username});

	if(!user || user.role !== "admin"){
		return next(new AppError("User not found", 404));
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);

	if(!isPasswordCorrect){
		return next(new AppError("Invalid username or password", 401));
	}

	req.session.user = user;
	res.status(200).json({
		success : true,
		message: "Admin Login successful"
	});
}

userController.loginVolunteer = async (req , res , next) => {
	const {username , password} = req.body;

	if(!username || !password){
		return next(new AppError("Please provide username and password", 400));
	}

	const user = await User.findOne({username});

	if(!user || user.role !== "volunteer"){
		return next(new AppError("User not found", 404));
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);


	if(!isPasswordCorrect){
		return next(new AppError("Invalid username or password", 401));
	}

	req.session.user = user;
	res.status(200).json({
		success : true,
		message: "Volunteer Login successful"
	});
}

userController.loginVLE = wrapAsyncErrors(async (req , res,  next) => {
	const {username , password} = req.body;

	if(!username || !password){
		return next(new AppError("Please provide username and password", 400));
	}

	const user = await User.findOne({username});

	if(!user && user.role !== "vle"){
		return next(new AppError("User not found", 404));
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);

	if(!isPasswordCorrect){
		return next(new AppError("Invalid username or password", 401));
	}

	req.session.user = user;
	res.status(200).json({
		success : true,
		message: "VLE Login successful"
	});
});

userController.logout = wrapAsyncErrors(async (req , res , next) => {
	req.session.destroy();
	res.status(200).json({
		success : true,
		message: "Logout successful"
	});
})


userController.registerVolunteer = wrapAsyncErrors(async (req , res , next) => {
	const adminUser = await User.findOne({role : "admin" , username : req.session.user});

	if(!adminUser){
		return next(new AppError("Unauthorized", 403));
	}

	const {volunteerUsername , password} = req.body;

	if(!volunteerUsername || !password){
		return next(new AppError("Please provide username and password", 400));
	}

	const existingUser = await User.findOne({username : volunteerUsername});

	if(existingUser){
		return next(new AppError("User already exists", 400));
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({username : volunteerUsername, password : hashedPassword, role : "volunteer"});

	res.status(201).json({
		success : true,
		message: "Volunteer registered successfully",
		volunteer : newUser
	});
})

userController.registerVLE = wrapAsyncErrors(async (req , res , next) => {
	const authorizedUser = await User.findOne({role : {$in : ["admin" , "volunteer"]} , username : req.session.user});

	if(!authorizedUser){
		return next(new AppError("Unauthorized", 403));
	}

	const {vleUsername , password} = req.body;

	if(!vleUsername || !password){
		return next(new AppError("Please provide username and password", 400));
	}

	const existingUser = await User.findOne({username : vleUsername});

	if(existingUser){
		return next(new AppError("VLE already exists", 400));
	}
	
	const hashedPassword = await bcrypt.hash(password, 10);

	const newUser = await User.create({username : volunteerUsername, password : hashedPassword, role : "volunteer"});

	res.status(201).json({
		success : true,
		message: "Volunteer registered successfully",
		VLE : newUser
	});
})

export default userController;