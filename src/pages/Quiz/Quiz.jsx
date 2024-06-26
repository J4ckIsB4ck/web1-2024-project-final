import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Quiz.css';

export default function Quiz() {
    const { quiztype } = useParams();
    const [quizdata, setQuizData] = useState([]);
    const [quizName, setQuizName] = useState(quiztype);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState(0);
    const [score, setScore] = useState(null);
    const [isTestFinished, setIsTestFinished] = useState(false);
    const [resultText, setResultText] = useState("");

    useEffect(() => {
        async function getdata() {
            const headers = {
                "Authorization": "bearer c58abec0ba87154bc576d1ee62ddf794f7c344ed23c001a05cab2d044b3861792cd491a32902a67951004847cedbe2b75693c88e7b8e9a53c12192d9e1f3b5adde4b991112eb844bf0ae88e59f512e0af9de9be5bfcba516dda296c8c807a6a3faa866413f3fcbd7ec595c35476bdfc1e6fcefb7d322ca29e4ff19c046f47370"
            };
            const data = await axios.get(`http://localhost:1337/api/questions/?filters[quiz][$eq]=${quiztype}&populate=*`, { headers });
            setQuizData(data.data.data);
            setTotalQuestions(data.data.data.length);
        }
        
        getdata();
    }, [quiztype]);

    const handleAnswer = (isCorrect) => {
        setAnsweredQuestions(answeredQuestions + 1);
        if (isCorrect) {
            setCorrectAnswers(correctAnswers + 1);
        }
        if (answeredQuestions + 1 === totalQuestions) {
            setIsTestFinished(true);
        }
    };

    const handleFinishTest = () => {
        const currentScore = `${correctAnswers}/${totalQuestions}`;
        setScore(currentScore);
        if (currentScore === "5/5") {
            setResultText("Молодец! Так держать");
        } else if (currentScore >= "3/5") {
            setResultText("Хорошо, но ты можешь лучше");
        } else {
            setResultText("Тебе нужно постараться");
        }
    };

    return (
        <>
            <div className="question-header">
                <h2>Welcome to {quizName} Quiz</h2> 
                {quizdata.map((question, index) => (
                    <Question key={question.id} data={question.attributes} onAnswer={handleAnswer} />
                ))}
            </div>
            <div className="question-footer-buttons">
                <button className="footer-buttons" onClick={handleFinishTest} disabled={!isTestFinished}>Finish Test</button>
                {score !== null && <div className="question-footer-rezult">{`Score: ${score}`}{resultText && ` - ${resultText}`}</div>}
                <button className="footer-buttons"><a href="/" >Return Home</a></button>
            </div>
        </>
    );
}
