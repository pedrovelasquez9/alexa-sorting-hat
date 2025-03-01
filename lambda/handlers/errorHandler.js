
export const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.error(`Error handled: ${error.message}`);
        return handlerInput.responseBuilder.speak("Lo siento, ha ocurrido un error. Inténtalo de nuevo.").getResponse();
    }
};
