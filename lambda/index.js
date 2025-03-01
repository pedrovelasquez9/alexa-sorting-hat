import Alexa from 'ask-sdk-core';
import { getLocalizedText } from './helpers/languageHelper.js';
import { QuestionIntentHandler } from './handlers/questionIntentHandler.js';
import { AnswerIntentHandler } from './handlers/answerIntentHandler.js';
import { LaunchRequestHandler } from './handlers/launchRequestHandler.js'; 
import { CancelAndStopIntentHandler } from './handlers/cancelIntentHandler.js'; 
import {ErrorHandler} from './handlers/errorHandler.js';
import {HelpIntentHandler} from './handlers/helpIntentHandler.js';

export const handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        QuestionIntentHandler,
        AnswerIntentHandler,
        CancelAndStopIntentHandler,
        HelpIntentHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
