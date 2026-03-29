import axios from "axios";

const API_URL = "/api/employees";

export const saveEmployeeAPI = (employee) => {
  return axios.post(API_URL, employee);
};

export const getEmployeeAPI = () => {
  return axios.get(API_URL);
};

export const deleteEmployeeAPI = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export const getEmployeeAPIById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const updateEmployeeAPI = (id, employee) => {
  return axios.put(`${API_URL}/${id}`, employee);
};