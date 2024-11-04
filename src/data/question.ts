interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswers: string[];
    image?: string | null;
  }
  
  const questions: Question[] = [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Paris", "Rome", "Berlin", "Madrid"],
      correctAnswers: ["Paris"],
      image: null,
    },
    {
      id: 2,
      question: "Select the prime numbers.",
      options: ["2", "4", "5", "9"],
      correctAnswers: ["2", "5"],
      image: null,
    },
    // Add more questions as needed
  ];
  
  export default questions;
  