import express from "express";
import { registerUser } from "../controllers/Users/registerUser.js";


const router = express.Router();


router.route("/register").post(registerUser);

router.route("/login").post((req, res) => {
    console.log(req.body);
});



export default router;