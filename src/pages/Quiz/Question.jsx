import React, { useEffect, useState } from "react";
import axios from "axios";
import './Quiz.css';

export default function Question(props) {
    const [answersData, setAnswersData] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState("");

    useEffect(() => {
        setAnswersData(props.data.answers.data);
        setCorrectAnswer(props.data.correct_answer.data.attributes.text_question);
    }, [props.data.answers.data, props.data.correct_answer]);

    const answerClick = (answerText) => {
        setSelectedAnswer(answerText);
    }

    return (
        <>
            <div className="question-container">
                <div className="question-card">
                    <div className="question-name">{`${props.data.text_question}`}</div>
                    <ul className="question-variants">
                        {answersData.map((answer) => {
                            const isCorrect = correctAnswer === answer.attributes.text_question;
                            const isSelected = selectedAnswer === answer.attributes.text_question;
                            const buttonClassName = isSelected ? (isCorrect ? "correct-answer" : "wrong-answer") : "question-variant-button";

                            return (
                                <button
                                    className={buttonClassName}
                                    key={answer.id}
                                    onClick={() => answerClick(answer.attributes.text_question)}
                                    disabled={selectedAnswer !== null}
                                >
                                    {answer.attributes.text_question}
                                </button>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
