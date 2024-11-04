import express, { Application } from 'express';
import cors from 'cors';
import quizRoutes from './routes/quizRoutes';

const app: Application = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
