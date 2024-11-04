import express, { Request, Response } from 'express';
import questions from '../data/question';



interface UserResponse {
  questionId: number;
  selectedOptions: string[];
  timeTaken: number;
}

const router = express.Router();
let userResponses: UserResponse[] = [];
let startTime: number = 0;

router.post('/start', (req: Request, res: Response) => {
  userResponses = []; // Reset user responses
  startTime = Date.now();
  res.status(200).json({ message: 'Quiz started', questions });
});

router.post('/submit', (req: Request, res: Response) => {
  const { questionId, selectedOptions, timeTaken }: UserResponse = req.body;
  userResponses.push({ questionId, selectedOptions, timeTaken });
  res.status(200).json({ message: 'Response recorded' });
});

router.post('/finish', (req: Request, res: Response) => {
  const score = calculateScore();
  const correctCount = userResponses.filter(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (question) {
      return JSON.stringify(question.correctAnswers.sort()) === JSON.stringify(response.selectedOptions.sort());
    }
    return false;
  }).length;

  const report = {
    totalScore: score,
    totalCount: questions.length,
    correct: correctCount,
    incorrect: userResponses.length - correctCount,
  };
  res.status(200).json(report);
});

function calculateScore(): number {
  return userResponses.reduce((total, response) => {
    const question = questions.find(q => q.id === response.questionId);
    if (question && JSON.stringify(question.correctAnswers.sort()) === JSON.stringify(response.selectedOptions.sort())) {
      return total + 10; // Add custom scoring logic if needed
    }
    return total;
  }, 0);
}

export default router;
