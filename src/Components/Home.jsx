export default function Home() {
  return <div className="card">Welcome to Quiz App</div>
}
import React from "react";
import quizImg from "../assets/quiz.jpg";
import studentsImg from "../assets/students.jpg";
import aboutImg from "../assets/about.jpg";
import "./Home.css"; // optional for styling

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to the Quiz App</h1>
      <p>
        Test your knowledge, track your progress, and enjoy learning with our interactive quizzes!
      </p>

      <div className="home-cards">
        {/* Quiz Card */}
        <div className="home-card">
          <img src={quizImg} alt="Quiz" />
          <h3>Interactive Quizzes</h3>
          <p>Take fun and challenging quizzes to improve your skills.</p>
        </div>

        {/* Students Card */}
        <div className="home-card">
          <img src={studentsImg} alt="Students" />
          <h3>Student Dashboard</h3>
          <p>Track your scores, monitor progress, and stay motivated.</p>
        </div>

        {/* About Card */}
        <div className="home-card">
          <img src={aboutImg} alt="About" />
          <h3>About Us</h3>
          <p>Learn more about our platform and how we help you succeed.</p>
        </div>
      </div>
    </div>
  );
}
