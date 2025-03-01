import Alexa from 'ask-sdk-core';
import { getLocalizedText, questions } from '../helpers/languageHelper.js';
import { askNextQuestion, assignHouse } from '../helpers/questionHelper.js';

export const AnswerIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            Alexa.getIntentName(handlerInput.requestEnvelope) === 'AnswerIntent';
    },
    handle(handlerInput) {
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const intent = handlerInput.requestEnvelope.request.intent;
        const locale = handlerInput.requestEnvelope.request.locale || 'es-ES';
        const slotAnswer = intent.slots.answer && intent.slots.answer.value ? intent.slots.answer.value.toLowerCase() : null;
        const slotDirectAnswer = intent.slots.directAnswer && intent.slots.directAnswer.value ? intent.slots.directAnswer.value.toLowerCase() : null;

        const userAnswer = slotAnswer || slotDirectAnswer;
        console.log(userAnswer);
        if (!userAnswer) {
            return handlerInput.responseBuilder
                .speak(getLocalizedText(handlerInput, 'INVALID_OPTION'))
                .reprompt(getLocalizedText(handlerInput, 'CHOOSE_OPTION'))
                .getResponse();
        }

        const currentQuestion = questions[locale][sessionAttributes.questionIndex];

        if (currentQuestion.options.includes(userAnswer)) {
            sessionAttributes.answers[userAnswer] = currentQuestion.mapping[userAnswer];
            sessionAttributes.questionIndex++;
        } else {
            return handlerInput.responseBuilder
                .speak(getLocalizedText(handlerInput, 'INVALID_OPTION'))
                .reprompt(getLocalizedText(handlerInput, 'CHOOSE_OPTION'))
                .getResponse();
        }


        if (sessionAttributes.questionIndex < questions[locale].length) {
            return askNextQuestion(handlerInput);
        } else {
            return assignHouse(handlerInput);
        }
    }
};