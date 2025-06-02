// src/api/api.js
import axios from "axios";

const API_BASE = "http://localhost:5000";

// Events API
export const getEvents = () => axios.get(`${API_BASE}/events`);

// Tasks API
export const getTasksByEvent = (eventId) =>
  axios.get(`${API_BASE}/tasks/${eventId}`);

export const updateTask = (taskId, updates) =>
  axios.put(`${API_BASE}/tasks/${taskId}`, updates);

export const deleteTask = (taskId) =>
  axios.delete(`${API_BASE}/tasks/${taskId}`);
