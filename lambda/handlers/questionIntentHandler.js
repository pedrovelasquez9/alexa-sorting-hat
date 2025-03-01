import Alexa from 'ask-sdk-core';
import {askNextQuestion} from "../helpers/questionHelper.js"

export const QuestionIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QuestionIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        sessionAttributes.answers = {};
        sessionAttributes.questionIndex = 0;
        return askNextQuestion(handlerInput);
    }
};