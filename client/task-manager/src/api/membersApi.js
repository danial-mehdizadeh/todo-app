import axios from "axios";

import BaseUrl from "./base-url";

// const DeleteCourseApi = async (id) => {
//   const result = await axios.delete(BaseUrl + "/" + id);
//   return result.data;
// };
const loginApi = async (body) => {
  try {
    const result = await axios.post(BaseUrl + "/u/login", body);
    localStorage.setItem("token", result.data.token);
    localStorage.setItem("user", body.username);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
const createMember = async (body) => {
  try {
    let { skill: _, ...myBody } = body;
    const result = await axios.post(BaseUrl + "/u/register", myBody);
    return result.data;
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
};
const getMember = async (id) => {
  try {
    const result = await axios.get(BaseUrl + "/u/" + id);
    return result.data;
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
};
const getAllMembers = async (id, body) => {
  try {
    const result = await axios.get(BaseUrl + "/u/board");
    return result.data;
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
};
const searchMember = async (body) => {
  try {
    const result = await axios.post(BaseUrl + "/u/search", body);
    return result.data;
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
};
export { createMember, getAllMembers, getMember, searchMember, loginApi };
