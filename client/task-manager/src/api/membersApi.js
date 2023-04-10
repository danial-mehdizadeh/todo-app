import axios from "axios";

const BaseUrl = ".";

// const DeleteCourseApi = async (id) => {
//   const result = await axios.delete(BaseUrl + "/" + id);
//   return result.data;
// };
const createMember = async (body) => {
  try {
    let { skill: _, ...myBody } = body;
    const result = await axios.post(BaseUrl + "/u/register", myBody);
    return result.member;
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
    return result.member;
  } catch (error) {
    if (!error.response) {
      // network error
      this.errorStatus = "Error: Network Error";
    } else {
      this.errorStatus = error.response.data.message;
    }
  }
};
export { createMember, getAllMembers, getMember, searchMember };
