import React from "react";
import Question from "./Question";
import { useParams } from "react-router-dom";

export default function Quiz(){
    const { quiztype} = useParams();
    return (
        <>
            <Question />
            <div>{quiztype}</div>
        </>
    )
}