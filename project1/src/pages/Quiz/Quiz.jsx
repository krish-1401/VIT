import React, { useState } from 'react';
import './Quiz.css'; // Import your CSS file
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const questions=[
    {
        question:"A car doesn't have ?",
        answers:[
            {text:"Wings", correct:true},
            {text:"Steering Wheel", correct:false},
            {text:"Air Conditioner", correct:false},
            {text:"Wipers", correct:false},
        ]
    },
    {
        question:"Which device reduces the airborne noise of the engine ?",
        answers:[
            {text:"Mudflap", correct:false},
            {text:"Crank", correct:false},
            {text:"Silencer", correct:true},
            {text:"Connecting Rod", correct:false},
        ]
    },
    {
        question:"What is the name for the rubber portion of your windscreen wipers ?",
        answers:[
            {text:"Semiconductor", correct:false},
            {text:"Blades", correct:true},
            {text:"Glass", correct:false},
            {text:"Polyster", correct:false},
        ]
    },
    {
        question:"What is the name of the part which takes debris out of air ?",
        answers:[
            {text:"Engine", correct:false},
            {text:"Duct", correct:false},
            {text:"Silencer", correct:false},
            {text:"Filter", correct:true},
        ]
    },
    {
        question:"Radiators pull what into the engine to help cooling ?",
        answers:[
            {text:"Air", correct:true},
            {text:"Smell", correct:false},
            {text:"CO2", correct:false},
            {text:"Heat", correct:false},
            
        ]
    },
    {
        question:"What is the function of a car radiator ?",
        answers:[
            {text:"Heating", correct:false},
            {text:"Cooling", correct:true},
            {text:"Noise Reduction", correct:false},
            {text:"Cleaning", correct:false},
        ]
    },
    {
        question:"What device in the engine keeps the coolant moving ?",
        answers:[
            {text:"Regulator", correct:false},
            {text:"Blades", correct:false},
            {text:"Conductor", correct:false},
            {text:"Water Pump", correct:true},
        ]
    },
];
    

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [disableAnswers, setDisableAnswers] = useState(false);

    const startQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setDisableAnswers(false);
    };

    const showQuestion = () => {
        const currentQuestion = questions[currentQuestionIndex];
        return (
            <>
                <h2>{currentQuestion.question}</h2>
                {currentQuestion.answers.map((answer, index) => (
                    <button
                        key={index}
                        className={`btn ${selectedAnswer === index && answer.correct ? "correct" : selectedAnswer === index ? "incorrect" : ""}`}
                        onClick={() => selectAnswer(index, answer.correct)}
                        disabled={disableAnswers}
                    >
                        {answer.text}
                    </button>
                ))}
            </>
        );
    };

    const selectAnswer = (index, isCorrect) => {
        setSelectedAnswer(index);
        if (isCorrect) {
            setScore(score + 1);
        }
        setDisableAnswers(true);
    };

    const handleNextButton = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswer(null); // Reset selected answer
        setDisableAnswers(false); // Enable answer buttons for the next question
    };

    const showScore = () => {
        return (
            <div>
                <p>You have scored {score} out of {questions.length}</p>
                <button onClick={startQuiz} id='next-btn'>Re-Quiz</button>
            </div>
        );
    };

    return (
        <>
            <Header ht="85px"/>
            <div className="cover cover-it">
                <div className="quiz_app">
                    <h1>Simple Quiz</h1>
                    <div className="quiz">
                        {currentQuestionIndex < questions.length ? showQuestion() : showScore()}
                        <button onClick={handleNextButton} id="next-btn" style={{ display: currentQuestionIndex < questions.length ? "block" : "none" }}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Quiz;