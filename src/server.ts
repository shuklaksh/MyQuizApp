import express, { Application } from 'express';
import cors from 'cors';
import quizRoutes from './routes/quizRoutes';

const app: Application = express();
const PORT = 8000;

app.use(cors({
  origin: '*', // Allow all origins for testing (adjust this in production)
}));
app.use(express.json());

app.get('/test',(res: any, req: any) => {
  res.send("Running")
})

app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
