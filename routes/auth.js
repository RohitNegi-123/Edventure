const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model("User");
const bcrypt = require('bcryptjs');

// router.get("/kin", function (req, res) {
//     res.send("Yoo");
// })

router.post("/signed-in", (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
        res.json({ error: "Fill all details" })
    }
    User.findOne({ email: email })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).send("Invalid Email or Password");
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        // res.send("Yeah!! You signed in successfully");
                        // const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const { _id, name, email, followers, following, pic } = savedUser;
                        res.json({ user: { _id, name, email, followers, following, pic } });
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or password" })
                    }

                })
                .catch(err => {
                    console.log(err);
                })
        })
    // res.json({ message: "Success" })
    // res.send("Yooooo")
})
router.post("/signed-up", (req, res) => {
    const { name, email, password } = req.body;
    console.log(email, password);
    if (!name || !email || !password) {
        res.json({ error: "Fill all details" })
    }
    User.findOne({ email: email })
        .then(function (savedUser) {
            if (savedUser) {
                return res.status(422).json({ error: "User already existed!" });
            }
            bcrypt.hash(password, 15)
                .then(hashed => {
                    const user = new User({
                        email,
                        password: hashed,
                        name
                    })

                    user.save()
                        .then(user => {
                            // transporter.sendMail({
                            //     to: user.email,
                            //     from: "no-reply@Sologram.com",
                            //     subject: "signup success",
                            //     html: "<h1>welcome to Sologram</h1>"
                            // })
                            res.json({ message: "saved successfully" });
                        })
                        .catch(err => {
                            console.log(err);
                        })
                })

        })
        .catch(err => {
            console.log(err);
        })
    // res.json({ message: "Success" })
    // res.send("Yooooo")
})

module.exports = router;