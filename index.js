import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import {dbConnection} from "./dbConnection/dbConnection.js";
import {SERVER_PORT} from "./config/config.js";


const app = express();

app.use(morgan("tiny"))
app.use(express.json()) //permite decodificar y traer body de json
app.use(express.urlencoded({extended:true})) //permite decodificar y traer body de Form-encode
app.use(cookieParser())

app.use(routes);

app.use((req,res,next) =>{
    console.log(req.body)
    res.status(404).send({success:false,message:"not found"});
});

await dbConnection.sync();

app.listen(SERVER_PORT,()=>{
    console.log("LISTENING ON PORT:", SERVER_PORT);
})


