import dotenv from 'dotenv'
dotenv.config();


import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const app = express();
app.use(cors());


mongoose.connect(process.env.MONGO_CONNECTION_STRING)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log("Server online at PORT", process.env.PORT);
		})	
	})
.catch((err) => console.error("DB Error:", err));
