import { useState } from "react";
import axios from "axios";

export default function TaskForm({ eventId, onCreate }) {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/tasks", {
      description,
      completed: false,
      eventId,
    });
    onCreate(res.data);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input className="w-full border p-2" type="text" placeholder="Task description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Task</button>
    </form>
  );
}