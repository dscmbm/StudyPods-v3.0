import axios from "axios";
import jwt_decode from "jwt-decode";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

/** Make API Requests */

/** To get username from Token */
export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot find Token");
  let decode = jwt_decode(token);
  
  return decode;
}

export async function getContestid() {
  let id = {contestId:"090423"};
  
  return id;
}

/** authenticate function */
export async function authenticate(username) {
  try {
    return await axios.post("/api/authenticate", { username });
  } catch (error) {
    return { error: "Username doesn't exist...!" };
  }
}

/** get User details */
export async function getUser({ username }) {
  try {
    const { data } = await axios.get(`/api/user/${username}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}

/** get contest details */
export async function getContest({ contestId }) {
  try {
    const { data } = await axios.get(`/api/user/${contestId}`);
    return { data };
  } catch (error) {
    return { error: "Password doesn't Match...!" };
  }
}

/** register user function */
export async function registerContest(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`/api/createcontest`, credentials);

    let {
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
    } = credentials;
    return Promise.resolve(msg);
  } catch (error) {
    console.log(error);
    return Promise.reject({ error });
  }
}

/** register user function */
export async function registerUser(credentials) {
  try {
    const {
      data: { msg },
      status,
    } = await axios.post(`/api/register`, credentials);

    let { username, email } = credentials;

    /** send email */
    if (status === 201) {
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text: msg,
      });
    }

    return Promise.resolve(msg);
  } catch (error) {
    
    return Promise.reject({ error });
  }
}

/** register admin function */
export async function adminregisterUser(credentials) {
  if (
    credentials.specialkey ===
    "jqwbncjbwjcbnuqbwcjbqubcjwuwgcu7tgw7578t578578tc8ywgbjhbcjwbcjb88y68989yquigbcuibquibd78y8968968cugquicghbhqcuiqu7856778786q"
  ) {
    try {
      const {
        data: { msg },
        status,
      } = await axios.post(`/api/register`, credentials);

      let { username, email } = credentials;

      /** send email */
      if (status === 201) {
        await axios.post("/api/registerMail", {
          username,
          userEmail: email,
          text: msg,
        });
      }

      return Promise.resolve(msg);
    } catch (error) {
      return Promise.reject({ error });
    }
  } else
    return Promise.reject({
      error: "Invalid Special Key, Chup Chap Register as User Kar!",
    });
}

/** login function */
export async function verifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("/api/login", { username, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

/** admin login function */
export async function adminverifyPassword({ username, password }) {
  try {
    if (username) {
      const { data } = await axios.post("/api/Adminlogin", {
        username,
        password,
      });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password doesn't Match...!" });
  }
}

/** update user profile function */
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/api/updateuser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ error: "Couldn't Update Profile...!" });
  }
}

/** generate OTP */
export async function generateOTP(username) {
  try {
    const {
      data: { code },
      status,
    } = await axios.get("/api/generateOTP", { params: { username } });

    // send mail with the OTP
    if (status === 201) {
      let {
        data: { email },
      } = await getUser({ username });
      let text = `Your Password Recovery OTP is ${code}. Verify and recover your password.`;
      await axios.post("/api/registerMail", {
        username,
        userEmail: email,
        text,
        subject: "Password Recovery OTP",
      });
    }
    return Promise.resolve(code);
  } catch (error) {
    return Promise.reject({ error });
  }
}

/** verify OTP */
export async function verifyOTP({ username, code }) {
  try {
    const { data, status } = await axios.get("/api/verifyOTP", {
      params: { username, code },
    });
    return { data, status };
  } catch (error) {
    return Promise.reject(error);
  }
}

/** reset password */
export async function resetPassword({ username, password }) {
  try {
    const { data, status } = await axios.put("/api/resetPassword", {
      username,
      password,
    });
    return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}
