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
      image: "https://thirdspacelearning.com/wp-content/uploads/2019/11/How-do-prime-numbers-work.png",
  },
  {
      id: 3,
      question: "What is the largest mammal in the world?",
      options: ["Blue Whale", "African Elephant", "Great White Shark", "Giraffe"],
      correctAnswers: ["Blue Whale"],
      image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Blue_Whale_%28Balaenoptera_musculus%29_in_the_Southern_Ocean.jpg",
  },
  {
      id: 4,
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correctAnswers: ["Mars"],
      image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Mars_After_Dusk.jpg",
  },
  {
      id: 5,
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"],
      correctAnswers: ["William Shakespeare"],
      image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Romeo_and_Juliet.jpg",
  },
];

export default questions;
