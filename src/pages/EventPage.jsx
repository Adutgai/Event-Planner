import { useState, useEffect } from "react";
import { getEvents, getTasksByEvent, updateTask, deleteTask } from "../api/api";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function EventPage() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [tasks, setTasks] = useState([]);

  const refreshEvents = async () => {
    const res = await getEvents();
    setEvents(res.data);
  };

  useEffect(() => {
    refreshEvents();
  }, []);

  useEffect(() => {
    if (selectedEvent) {
      getTasksByEvent(selectedEvent._id).then((res) => setTasks(res.data));
    }
  }, [selectedEvent]);

  const handleTaskToggle = async (id, completed) => {
    await updateTask(id, { completed });
    if (selectedEvent) {
      const res = await getTasksByEvent(selectedEvent._id);
      setTasks(res.data);
    }
  };

  const handleTaskDelete = async (id) => {
    await deleteTask(id);
    if (selectedEvent) {
      const res = await getTasksByEvent(selectedEvent._id);
      setTasks(res.data);
    }
  };

  const handleEventDelete = (id) => {
    setEvents(events.filter((e) => e._id !== id));
    if (selectedEvent?._id === id) setSelectedEvent(null);
  };

  return (
    <div className="space-y-6">
      <EventForm onCreate={(event) => setEvents([...events, event])} />
      <EventList events={events} onSelect={setSelectedEvent} onDelete={handleEventDelete} />
      {selectedEvent && (
        <div className="mt-6">
          <h2 className="text-xl font-bold">Tasks for {selectedEvent.title}</h2>
          <TaskForm eventId={selectedEvent._id} onCreate={(task) => setTasks([...tasks, task])} />
          <TaskList tasks={tasks} onToggle={handleTaskToggle} onDelete={handleTaskDelete} events={events} />
        </div>
      )}
    </div>
  );
}