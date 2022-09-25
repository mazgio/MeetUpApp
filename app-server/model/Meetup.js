import mongoose from "mongoose";

const MeetupSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    //da modificare con array di id´s

    // joiners: [{
    //     type: mongoose.Types.ObjectId,
    // }],
    joiners: {
        type: Number,
    },
    //da modificare con creator id
    creator: {
        type: String,
        required: true,
        trim: true,
    },
    image: String,

}, {
    timestamps: true
}

);

export default mongoose.model("meetups", MeetupSchema, "meetup");