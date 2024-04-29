// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions = [

        {
            type: "radiogroup",
            name: "question1",
            title: "What is the first thing you should do if you discover a fire?",
            choices: [
                "Call your friends",
                "Evacuate immediately",
                "Attempt to put it out yourself",
                "Take a picture"
            ],
            correctAnswer: "Evacuate immediately",
            explanation: "It's crucial to prioritize your safety and evacuate the area immediately to avoid being trapped by the fire."
        },
        {
            type: "radiogroup",
            name: "question2",
            title: "What should you do if you witness someone struggling in the water?",
            choices: [
                "Feel doors for heat before opening?",
                "Use elevators",
                "Crawl low under smoke",
                "Follow the designated evacuation route"
            ],
            correctAnswer: "Use elevators",
            explanation: "Elevators can become hazardous during a fire, so it's important to use stairs for evacuation to avoid being trapped."
        },
        {
            type: "radiogroup",
            name: "question3",
            title: "What should you do if your clothing catches on fire?",
            choices: [
                "Run around to put it out",
                "Stop, drop, and roll",
                "Ignore it and continue what you're doing",
                " Call for help"
            ],
            correctAnswer: "Stop, drop, and roll",
            explanation: "This technique helps to smother the flames and prevent the fire from spreading further on your clothing."
        },
        {
            type: "radiogroup",
            name: "question4",
            title: "Which type of fire extinguisher is suitable for most common fires, including wood, paper, and cloth?",
            choices: [
                "Type A",
                "Type B",
                "Type C",
                "Type D"
            ],
            correctAnswer: "Type A",
            explanation: "Type A fire extinguishers are suitable for common combustibles like wood, paper, and cloth."
        },
        {
            type: "radiogroup",
            name: "question5",
            title: "In case of a fire, what is the recommended way to check if a door is safe to open?",
            choices: [
                "Kick it open",
                "Open it quickly and rush through",
                "Feel the door with the back of your hand",
                "Ignore the door and find another route"
            ],
            correctAnswer: "Feel the door with the back of your hand",
            explanation: "By feeling the door for heat with the back of your hand, you can assess if it's safe to open without risking burns."
        },
        {
            type: "radiogroup",
            name: "question6",
            title: "What should you do if you cannot escape a burning building?",
            choices: [
                "Scream for help",
                "Find a hiding spot",
                "Stay low, close to the ground, and cover your nose and mouth",
                "Use your phone to call friends"
            ],
            correctAnswer: "Stay low, close to the ground, and cover your nose and mouth",
            explanation: "This helps to minimize smoke inhalation and increases your chances of survival until help arrives."
        },
        {
            type: "radiogroup",
            name: "question7",
            title: "Which of the following is a common cause of household fires?",
            choices: [
                "Excessive water usage",
                "Leaving cooking unattended",
                "Turning off electrical appliances",
                "Storing matches in a damp area"
            ],
            correctAnswer: "Leaving cooking unattended",
            explanation: "Unattended cooking is one of the leading causes of household fires, making it important to stay vigilant while cooking"
        },
        {
            type: "radiogroup",
            name: "question8",
            title: "What should you do if you encounter smoke in a building during a fire?",
            choices: [
                "Stand up and wave your arms",
                "Try to blow the smoke away",
                "Hold your breath and run through the smoke",
                "Stay low and crawl beneath the smoke to safety"
            ],
            correctAnswer: "Stay low and crawl beneath the smoke to safety",
            explanation: "Smoke rises, so staying low and crawling can help you find cleaner air and navigate through the building during a fire."
        },

        {
            type: "radiogroup",
            name: "question9",
            title: "How often should smoke alarms be tested to ensure they are functioning properly?",
            choices: [
                "Every 3 years",
                "Every 6 months",
                "Once a year",
                "Only when you smell smoke"
            ],
            correctAnswer: "Once a year",
            explanation: "Smoke alarms should be tested at least once a year to ensure they are functioning correctly and can provide early warning in case of a fire."
        },
        {
            type: "radiogroup",
            name: "question10",
            title: "Which of the following is NOT a safe practice when using candles?",
            choices: [
                "Keep candles at least 12 inches away from anything that can burn",
                "Leave candles unattended when leaving a room",
                "Use candle holders that are sturdy and won't tip over",
                "Keep candles out of reach of pets and children"
            ],
            correctAnswer: "Leave candles unattended when leaving a room",
            explanation: "It's unsafe to leave candles burning unattended as they pose a fire hazard, and it's essential to extinguish them before leaving the room or going to sleep."
        }];

    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Fire Saftey Quiz -Alexi",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Fire Saftey. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            var explanation = question.explanation;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
            console.log("Explanation: " + explanation);
        }
    });

    return <Survey model={survey} />;
}
