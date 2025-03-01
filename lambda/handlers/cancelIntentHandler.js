import Alexa from 'ask-sdk-core';
import { getLocalizedText } from '../helpers/languageHelper.js';

export const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
            (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent' ||
                Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speechText = getLocalizedText(handlerInput, 'GOODBYE');
        return handlerInput.responseBuilder.speak(speechText).getResponse();
    }
};