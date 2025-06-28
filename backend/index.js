import dotenv from 'dotenv'
dotenv.config();

import session from 'express-session'
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import errorMiddleware from './error/errorMiddleware.js'

const app = express();
app.use(cors());

app.use(session({
	secret: 'your-secret-keysdsdsd',
	resave: false,   
	saveUninitialized: false,        
}));
  


//Routes









//Error middleware
app.use(errorMiddleware);


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("Server online at PORT", process.env.PORT);
		})	
	})
.catch((err) => console.error("DB Error:", err));
