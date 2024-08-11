import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGINS,
    credentials: true
}))  // cors 
app.use(express.json({ limit: "16kb" })) //json  accept
app.use(express.urlencoded({
    extended: true, limit: "16kb"
})) // for fatching url data 
app.use(express.static("public")) // for storeing  image and etc on an own server
app.use(cookieParser())  //  for setCookies and getCookies :--> reading and writing purpose  

// Routes Import 
import userRouter from './routes/user.routes.js';


//Routes Declaration
app.use("/api/v1/user", userRouter)


export { app }