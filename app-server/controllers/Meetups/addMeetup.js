import Meetup from "../../model/Meetup.js";


export const addMeetup = async (req, res) => {

    // res.send("ciao");



    try {
        const NewMeetup = new Meetup({ ...req.body });

        console.log(req.body);

        if (!req.body.title) {
            throw new Error("Title is required");
        }
        if (!req.body.title) {
            throw new Error("Description is required");
        }
        if (!req.body.title) {
            throw new Error("Creator is required");
        }

        const save = await NewMeetup.save();

        if (save) {
            res.status(202).send({ message: "Meetup saved" });
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
};

