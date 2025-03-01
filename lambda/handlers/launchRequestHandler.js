import Alexa from 'ask-sdk-core';
import { getLocalizedText } from '../helpers/languageHelper.js';

export const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speechText = getLocalizedText(handlerInput, 'WELCOME');
        return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
    }
};