import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <header className="text-center p-6 bg-blue-500 text-white text-3xl font-bold">
          Event Planner
        </header>
        <main className="max-w-4xl mx-auto py-10 px-4">
          <Routes>
            <Route path="/" element={<EventPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;