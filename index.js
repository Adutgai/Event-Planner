import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import eventRoutes from './routes/eventRoutes.js';
import taskRoutes from './routes/tasksRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use('/api/events', eventRoutes);
app.use('/api/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
