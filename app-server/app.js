// importare dipendenze necessarie
import express, { response } from "express";
import cors from "cors";
import meetupsRouter from "./routes/meetups.js";
import usersRouter from "./routes/users.js";
import mongoose from "mongoose";

const app = express();
const PORT = 4000;
const DB_URI = "mongodb+srv://giorgiomazz:clark183@cluster0.lgsk576.mongodb.net/meetup-app?retryWrites=true&w=majority";
app.use(cors());
app.use(express.json());

// configurare le routes
app.use("/meetups", meetupsRouter);
app.use("/users", usersRouter);


// inizializzare server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`App connected on http://localhost:${PORT}`);
});

// configurare il db




//


mongoose.connect(DB_URI).then((res) => console.log(res.connection, "connected")).catch(err => console.log(err));