import { useState } from "react";
import axios from "axios";

export default function EventForm({ onCreate }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/events", {
      title,
      date,
      location,
    });
    onCreate(res.data);
    setTitle("");
    setDate("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded shadow-md">
      <input className="w-full border p-2" type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input className="w-full border p-2" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input className="w-full border p-2" type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Create Event</button>
    </form>
  );
}