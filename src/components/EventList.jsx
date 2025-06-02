import React from "react";
import axios from "axios";

export default function EventList({ events, onSelect, onDelete }) {
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/events/${id}`);
    onDelete(id);
  };

  return (
    <ul className="space-y-2">
      {events.map((event) => (
        <li key={event._id} className="p-4 bg-white rounded shadow">
          <div className="flex justify-between items-center">
            <div onClick={() => onSelect(event)} className="cursor-pointer">
              <h3 className="text-lg font-semibold">{event.title}</h3>
              <p>{event.date} — {event.location}</p>
            </div>
            <button onClick={() => handleDelete(event._id)} className="text-red-600">Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}