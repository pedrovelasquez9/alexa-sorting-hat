import { getLocalizedText, questions } from "./languageHelper.js";


export const askNextQuestion = (handlerInput) => {
    const locale = handlerInput.requestEnvelope.request.locale || 'es-ES';
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const questionIndex = sessionAttributes.questionIndex;
    const question = questions[locale][questionIndex];

    return handlerInput.responseBuilder.speak(question.text).reprompt(question.text).getResponse();
};

export const assignHouse = (handlerInput) => {
    const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
    const houseScores = { Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 };

    for (const answer in sessionAttributes.answers) {
        houseScores[sessionAttributes.answers[answer]]++;
    }

    const sortedHouse = Object.keys(houseScores).reduce((a, b) => houseScores[a] > houseScores[b] ? a : b);
    const speechText = `${getLocalizedText(handlerInput, 'HOUSE_ASSIGNMENT')} ${sortedHouse}! ${getLocalizedText(handlerInput, 'GOODBYE')}`;

    return handlerInput.responseBuilder.speak(speechText).getResponse();
};