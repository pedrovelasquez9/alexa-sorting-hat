import Alexa from 'ask-sdk-core';
import { getLocalizedText } from '../helpers/languageHelper.js';

export const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speechText = getLocalizedText(handlerInput, 'HELP');
        return handlerInput.responseBuilder.speak(speechText).reprompt(speechText).getResponse();
    }
};