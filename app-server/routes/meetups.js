import express from "express";
import { addMeetup } from "../controllers/Meetups/addMeetup.js";
import { getMeetupById } from "../controllers/Meetups/getMeetupById.js";
import { getMeetups } from "../controllers/Meetups/getMeetups.js";

const router = express.Router();

router.route("/").get(getMeetups);

router.route("/:id").get(getMeetupById);

router.route("/add").post(addMeetup);

export default router;