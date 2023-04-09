import UserModel from "../model/User.model.js";
import ContestModel from "../model/Contest.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ENV from "../config.js";
import otpGenerator from "otp-generator";

/** middleware for verify user */
export async function verifyUser(req, res, next) {
    try {
        const { username } = req.method == "GET" ? req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({ username });
        if (!exist) return res.status(404).send({ error: "Can't find User!" });
        next();
    } catch (error) {
        return res.status(404).send({ error: "Authentication Error" });
    }
}

// POST http://localhost:8080/api/createcontest
export async function createcontest(req, res) {
    try {
        const {
            contestId,
            ques1d,
            ques1i,
            ques1o,
            ques2d,
            ques2i,
            ques2o,
            ques3d,
            ques3i,
            ques3o,
            start,
            end
        } = req.body;
        //check existing contest with same id
        const existcontestId = new Promise((resolve, reject) => {
            ContestModel.findOne({ contestId }, function (err, contest) {
                if (err) reject(new Error(err));
                if (contest) reject({ error: "Please use unique contestId" });

                resolve();
            });
        });

        Promise.all([existcontestId])
            .then(() => {
                const contest = new ContestModel({
                    contestId,
                    ques1d,
                    ques1i,
                    ques1o,
                    ques2d,
                    ques2i,
                    ques2o,
                    ques3d,
                    ques3i,
                    ques3o,
                    start,
                    end,
                });
                contest
                    .save()
                    .then((result) =>
                        res.status(201).send({ msg: "Contest Register Successfully" })
                    )
                    .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
                console.log(error);
                return res.status(400).send({ error });
            });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

/** POST: http://localhost:8080/api/register 
 * @param : {
  "username" : "example123",
  "password" : "admin123",
  "email": "example@gmail.com",
  "firstName" : "bill",
  "lastName": "william",
  "mobile": 8009860560,
  "address" : "Apt. 556, Kulas Light, Gwenborough",
  "profile": ""
}
*/
export async function register(req, res) {
    try {
        const { username, password, profile, email } = req.body;

        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function (err, user) {
                if (err) reject(new Error(err));
                if (user) reject({ error: "Please use unique username" });

                resolve();
            });
        });

        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function (err, email) {
                if (err) reject(new Error(err));
                if (email) reject({ error: "Please use unique Email" });

                resolve();
            });
        });

        Promise.all([existUsername, existEmail])
            .then(() => {
                if (password) {
                    bcrypt
                        .hash(password, 10)
                        .then((hashedPassword) => {
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || "",
                                email,
                            });

                            // return save result as a response
                            user
                                .save()
                                .then((result) =>
                                    res.status(201).send({ msg: "User Register Successfully" })
                                )
                                .catch((error) => res.status(500).send({ error }));
                        })
                        .catch((error) => {
                            return res.status(500).send({
                                error: "Enable to hashed password",
                            });
                        });
                }
            })
            .catch((error) => {
                return res.status(500).send({ error });
            });
    } catch (error) {
        return res.status(500).send(error);
    }
}

/** POST: http://localhost:8080/api/login 
 * @param: {
  "username" : "example123",
  "password" : "admin123"
}
*/
export async function login(req, res) {
    const { username, password } = req.body;

    try {
        UserModel.findOne({ username })
            .then((user) => {
                bcrypt
                    .compare(password, user.password) //second arg is the encrypted pass from database
                    .then((passwordCheck) => {
                        if (!passwordCheck)
                            return res.status(400).send({ error: "Don't have Password" });

                        // create jwt token
                        const token = jwt.sign(
                            {
                                userId: user._id,
                                username: user.username,
                            },
                            ENV.JWT_SECRET,
                            { expiresIn: "24h" }
                        );

                        // const token =jwt.sign({
                        //                     userId: user._id,
                        //                     username : user.username
                        //                 }, 'secret' , { expiresIn : "24h"});

                        return res.status(200).send({
                            msg: "Login Successful...!",
                            username: user.username,
                            token,
                        });
                    })
                    .catch((error) => {
                        return res.status(400).send({ error: "Password does not Match" });
                    });
            })
            .catch((error) => {
                return res.status(404).send({ error: "Username not Found" });
            });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

// POST: http://localhost:8080/api/Adminlogin
export async function Adminlogin(req, res) {
    const { username, password } = req.body;

    try {
        UserModel.findOne({ username })
            .then((user) => {
                bcrypt
                    .compare(password, user.password) //second arg is the encrypted pass from database
                    .then((passwordCheck) => {
                        if (!passwordCheck)
                            return res.status(400).send({ error: "Don't have Password" });

                        // create jwt token
                        const Admintoken = jwt.sign(
                            {
                                userId: user._id,
                                username: user.username,
                            },
                            ENV.JWT_SECRET,
                            { expiresIn: "24h" }
                        );

                        // const token =jwt.sign({
                        //                     userId: user._id,
                        //                     username : user.username
                        //                 }, 'secret' , { expiresIn : "24h"});

                        return res.status(200).send({
                            msg: "Login Successful...!",
                            username: user.username,
                            Admintoken,
                        });
                    })
                    .catch((error) => {
                        return res.status(400).send({ error: "Password does not Match" });
                    });
            })
            .catch((error) => {
                return res.status(404).send({ error: "Username not Found" });
            });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

/** GET: http://localhost:8080/api/contest/123 */
export async function getContest(req, res) {
    const { contestId } = req.params;

    try {
        if (!contestId) return res.status(501).send({ error: "Invalid Contest-Id" });

        ContestModel.findOne({ contestId }, function (err, contest) {
            if (err) return res.status(500).send({ err });
            if (!contest)
                return res.status(501).send({ error: "Couldn't Find the contest" });

            /** remove password from user */
            // mongoose return unnecessary data with object so convert it into json
            const { ...rest } = Object.assign({}, contest.toJSON());

            return res.status(201).send(rest);
        });
    } catch (error) {
        return res.status(404).send({ error: "Cannot Find contest-Id Data" });
    }
}

/** GET: http://localhost:8080/api/user/example123 */
export async function getUser(req, res) {
    const { username } = req.params;

    try {
        if (!username) return res.status(501).send({ error: "Invalid Username" });

        UserModel.findOne({ username }, function (err, user) {
            if (err) return res.status(500).send({ err });
            if (!user)
                return res.status(501).send({ error: "Couldn't Find the User" });

            /** remove password from user */
            // mongoose return unnecessary data with object so convert it into json
            const { password, ...rest } = Object.assign({}, user.toJSON());

            return res.status(201).send(rest);
        });
    } catch (error) {
        return res.status(404).send({ error: "Cannot Find User Data" });
    }
}

/** PUT: http://localhost:8080/api/updateuser 
 * @param: {
  "header" : "<token>"
}
body: {
    firstName: '',
    address : '',
    profile : ''
}
*/
export async function updateUser(req, res) {
    try {
        // const id = req.query.id;
        const { userId } = req.user;

        if (userId) {
            const body = req.body;

            // update the data
            UserModel.updateOne({ _id: userId }, body, function (err, data) {
                if (err) throw err;

                return res.status(201).send({ msg: "Record Updated...!" });
            });
        } else {
            return res.status(401).send({ error: "User Not Found...!" });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
}

/** GET: http://localhost:8080/api/generateOTP */
export async function generateOTP(req, res) {
    req.app.locals.OTP = await otpGenerator.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
    res.status(201).send({ code: req.app.locals.OTP });
}

/** GET: http://localhost:8080/api/verifyOTP */
export async function verifyOTP(req, res) {
    const { code } = req.query;
    if (parseInt(req.app.locals.OTP) === parseInt(code)) {
        req.app.locals.OTP = null; // reset the OTP value
        req.app.locals.resetSession = true; // start session for reset password
        return res.status(201).send({ msg: "Verify Successsfully!" });
    }
    return res.status(400).send({ error: "Invalid OTP" });
}

// successfully redirect user when OTP is valid
/** GET: http://localhost:8080/api/createResetSession */
export async function createResetSession(req, res) {
    if (req.app.locals.resetSession) {
        return res.status(201).send({ flag: req.app.locals.resetSession });
    }
    return res.status(440).send({ error: "Session expired!" });
}

// update the password when we have valid session
/** PUT: http://localhost:8080/api/resetPassword */
export async function resetPassword(req, res) {
    try {
        if (!req.app.locals.resetSession)
            return res.status(440).send({ error: "Session expired!" });

        const { username, password } = req.body;

        try {
            UserModel.findOne({ username })
                .then((user) => {
                    bcrypt
                        .hash(password, 10)
                        .then((hashedPassword) => {
                            UserModel.updateOne(
                                { username: user.username },
                                { password: hashedPassword },
                                function (err, data) {
                                    if (err) throw err;
                                    req.app.locals.resetSession = false; // reset session
                                    return res.status(201).send({ msg: "Record Updated...!" });
                                }
                            );
                        })
                        .catch((e) => {
                            return res.status(500).send({
                                error: "Enable to hashed password",
                            });
                        });
                })
                .catch((error) => {
                    return res.status(404).send({ error: "Username not Found" });
                });
        } catch (error) {
            return res.status(500).send({ error });
        }
    } catch (error) {
        return res.status(401).send({ error });
    }
}
