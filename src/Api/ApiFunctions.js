import axios from 'axios';
export const getAllTasks = async () => {
  try {
    const response = await axios.get('http://localhost:5000/Tasks');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteTask = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/Tasks/${id}`);
  } catch (error) {
    console.log(error);
  }
};
export const editTask = async (id, task) => {
  try {
    await axios.put(`http://localhost:5000/Tasks/${id}`, task);
  } catch (error) {
    console.log(error);
  }
};
export const getTaskId = async (id) => {
  try {
    const response = await axios.get(`http://localhost:5000/Tasks/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}