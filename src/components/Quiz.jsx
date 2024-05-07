import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Quiz() {
    const { quiztype } = useParams();
    const [quizdata, setQuizData] = useState([]);

    useEffect(() => {
        async function getQuizData() {
            const headers = {
                "Authorization" :"bearer c58abec0ba87154bc576d1ee62ddf794f7c344ed23c001a05cab2d044b3861792cd491a32902a67951004847cedbe2b75693c88e7b8e9a53c12192d9e1f3b5adde4b991112eb844bf0ae88e59f512e0af9de9be5bfcba516dda296c8c807a6a3faa866413f3fcbd7ec595c35476bdfc1e6fcefb7d322ca29e4ff19c046f47370"
            };
            try {
                const response = await axios.get(`http://localhost:1337/api/quizzes/${quiztype}?populate[0]=questions`, { headers });
                setQuizData(response.data.data.attributes.questions.data);
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        }
        getQuizData();
    }, []);
    if (!Array.isArray(quizdata)) {
        return <p>Error loading quiz data</p>;
    }

    return (
        <>
            {/**/}
            {quizdata.map((question, index) => (
                <Question data = {question}/>
            ))}
        </>
    );
}
