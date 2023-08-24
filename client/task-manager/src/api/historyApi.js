import axios from "axios";
import BaseUrl from "./base-url";

// const DeleteCourseApi = async (id) => {
//   const result = await axios.delete(BaseUrl + "/" + id);
//   return result.data;
// };

const getHistory = async () => {
  try {
    const result = await axios.get(BaseUrl + "/history");
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

// const createCourseApi = async (formData) => {
//   const result = await axios.post(BaseUrl, formData);
//   return result.data;
// };

// const getOneCourseDataApi = async (id) => {
//   const result = await axios.get(BaseUrl + "/" + id);
//   return result.data;
// };

// const upDateCourseApi = async (id, newData) => {
//   const result = await axios.patch(BaseUrl + "/" + id, newData);
//   return result.data;
// };

export {
  //   DeleteCourseApi,
  getHistory,
  //   createCourseApi,
  //   getOneCourseDataApi,
  //   upDateCourseApi,
};
