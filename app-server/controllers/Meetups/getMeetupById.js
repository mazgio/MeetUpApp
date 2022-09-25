import Meetup from "../../model/Meetup.js";

export const getMeetupById = async (req, res) => {
    const { id } = req.params;

    await Meetup.findById(id)
        .then(meetup => {
            res.status(200).send(meetup);
        });

    // const meetupFound = meetups.find(meetup => meetup.id === id);

};