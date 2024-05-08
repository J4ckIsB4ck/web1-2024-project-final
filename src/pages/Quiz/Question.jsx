import React, { useEffect, useState } from "react";
import axios from "axios";
import './Quiz.css';

export default function Question(props) {
    const [questiondata, setQuestionData] = useState([]);

    useEffect(() => {
        async function getQuestionData() {
            const headers = {
                "Authorization": "bearer c58abec0ba87154bc576d1ee62ddf794f7c344ed23c001a05cab2d044b3861792cd491a32902a67951004847cedbe2b75693c88e7b8e9a53c12192d9e1f3b5adde4b991112eb844bf0ae88e59f512e0af9de9be5bfcba516dda296c8c807a6a3faa866413f3fcbd7ec595c35476bdfc1e6fcefb7d322ca29e4ff19c046f47370"
            };
            try {
                const response = await axios.get(`http://localhost:1337/api/questions/${props.data.id}?populate=*`, { headers });
                setQuestionData(response.data.data.attributes.answers.data);
            } catch (error) {
                console.error("Error fetching question data:", error);
            }
        }
        getQuestionData();
    }, []);

    return (
        <>
            <div className="question-container">
                <div className="question-card">
                    <div className="question-name">{`${props.data.attributes.text_question}`}</div>
                    <ul className="question-variants">
                        {questiondata.map(answer => (
                            <button className="question-variant-button" key={answer.id}>{answer.attributes.text_question}</button>
                        ))}
                    </ul>

                </div>
            </div>
        </>
    );
};
