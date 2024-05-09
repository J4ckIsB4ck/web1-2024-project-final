import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";
import axios from "axios";
import './Quiz.css';

export default function Quiz() {
    const { quiztype } = useParams();
    const [quizdata, setQuizData] = useState([]);
    const [quizName, setQuizName] = useState(quiztype);

    useEffect(() => {
        async function getdata() {
            const headers = {
                "Authorization": "bearer c58abec0ba87154bc576d1ee62ddf794f7c344ed23c001a05cab2d044b3861792cd491a32902a67951004847cedbe2b75693c88e7b8e9a53c12192d9e1f3b5adde4b991112eb844bf0ae88e59f512e0af9de9be5bfcba516dda296c8c807a6a3faa866413f3fcbd7ec595c35476bdfc1e6fcefb7d322ca29e4ff19c046f47370"
            };
            const data = await axios.get(`http://localhost:1337/api/questions/?filters[quiz][$eq]=${quiztype}&populate=*`, { headers });
            setQuizData(data.data.data)
        }
        
        getdata();
    }, []);
    return (
        <>
            <div className="question-header">
                <h2>Welcome to {quizName} Quiz</h2> 
                {quizdata.map((question, index) => (
                    <Question key={question.id} data={question.attributes}/>
                ))}
            </div>
            <div className="question-footer-buttons">
                <button className="footer-buttons">Finish Test</button>
                <button className="footer-buttons"><a href="/" >Return Home</a></button>
            </div>
        </>
    );
}
