import axios from "axios";

const BaseUrl = "http://localhost:5000/tasks";

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
const getTask = async (body, user = "guest") => {
  try {
    const result = await axios.get(BaseUrl + "/" + body._id, { user });
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

const deleteTask = async (id, user = "guest") => {
  try {
    const result = await axios.delete(BaseUrl + "/" + body._id, { user });
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
const updateTask = async (body, user = "guest") => {
  try {
    const result = await axios.patch(BaseUrl + "/" + body._id, { user, body });
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
    const result = await axios.post(BaseUrl, { user, body });
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
