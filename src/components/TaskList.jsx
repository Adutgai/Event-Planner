import axios from "axios";

export default function TaskList({ tasks, onToggle, onDelete, events }) {
  const getEventTitle = (id) => events.find((e) => e._id === id)?.title || "Unknown";

  return (
    <div className="mt-6 space-y-6">
      {[...new Set(tasks.map((task) => task.eventId))].map((eventId) => (
        <div key={eventId}>
          <h3 className="text-lg font-bold">{getEventTitle(eventId)}</h3>
          <ul className="space-y-2 mt-2">
            {tasks.filter((task) => task.eventId === eventId).map((task) => (
              <li key={task._id} className="flex justify-between items-center p-2 bg-white rounded shadow">
                <div>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task._id, !task.completed)}
                    className="mr-2"
                  />
                  <span className={task.completed ? "line-through" : ""}>{task.description}</span>
                </div>
                <button onClick={() => onDelete(task._id)} className="text-red-600">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}