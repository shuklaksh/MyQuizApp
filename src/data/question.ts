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
  {
      id: 3,
      question: "What is the largest mammal in the world?",
      options: ["Blue Whale", "African Elephant", "Great White Shark", "Giraffe"],
      correctAnswers: ["Blue Whale"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBjM0CasJNiZg5qrSlddf7Ir69sqg51chXQ&s",
  },
  {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswers: ["Mars"],
      image: "https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg",
  },
  {
      id: 5,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
      correctAnswers: ["William Shakespeare"],
      image: null,
  },
];

export default questions;
