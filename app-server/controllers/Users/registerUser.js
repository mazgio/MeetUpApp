

export const registerUser = (req, res) => {
    console.log(req.body);

    const { email, password, confirmPassword } = req.body;

    if (!email || !password || !confirmPassword) {

        return res.status(400).send({ error: "empty fields" });
    }
    if (JSON.stringify(password).length < 6) {
        return res
            .status(400)
            .send({ error: "Password should be at least 6 characters" });
    }
    if (password !== confirmPassword) {
        return res.status(400).send({ error: "Password do not match" });
    }
};