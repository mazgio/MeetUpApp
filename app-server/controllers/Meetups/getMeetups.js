
import Meetup from "../../model/Meetup.js";

export const getMeetups = async (_req, res) => {


    await Meetup.find()
        .sort({ createdAt: -1 })  // ordine per data di inserimento
        .then((meetups) => {

            res.status(202).send(meetups);
        }).catch(err => {
            throw new Error(err);
        });
};