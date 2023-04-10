import axios from "axios";

const BaseUrl = "./tasks";

// const DeleteCourseApi = async (id) => {
//   const result = await axios.delete(BaseUrl + "/" + id);
//   return result.data;
// };
const getAllTasks = async function (body) {
  try {
    const result = await axios.get(BaseUrl, body);
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
const getTask = async (id) => {
  try {
    const result = await axios.get(BaseUrl + "/" + id);
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

const deleteTask = async (id) => {
  try {
    const result = await axios.delete(BaseUrl + "/" + id);
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
const updateTask = async (id, body) => {
  try {
    const result = await axios.patch(BaseUrl + "/" + id, body);
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
const createTask = async (body, user = "guest") => {
  try {
    console.log(body);
    const result = await axios.post(BaseUrl, body);
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

export { createTask, getTask, deleteTask, getAllTasks, updateTask };
