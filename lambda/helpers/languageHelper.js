export const languageStrings = {
    'es-ES': {
        WELCOME: "¡Bienvenido al test del Sombrero Seleccionador! Responde 5 preguntas y te asignaré a una casa de Hogwarts. Di 'comenzar' para empezar.",
        INVALID_OPTION: "Esa opción no es válida. Inténtalo de nuevo.",
        CHOOSE_OPTION: "Elige una de las opciones disponibles.",
        GOODBYE: "¡Gracias por participar en la selección de Hogwarts! Hasta la próxima.",
        HOUSE_ASSIGNMENT: "Felicidades, has sido asignado a",
        HELP: "Esta es la skill del sombrero seleccionador, puedes responder las preguntas del sombrero para saber a qué casa de Hogwarts perteneces, para empezar, puedes decir 'comenzar'",
        ERROR: "Ha ocurrido un error, la skill se cerrará"
    },
    'en-US': {
        WELCOME: "Welcome to the Sorting Hat test! Answer 5 questions and I'll assign you to a Hogwarts house. Say 'start' to begin.",
        INVALID_OPTION: "That option is not valid. Try again.",
        CHOOSE_OPTION: "Choose one of the available options.",
        GOODBYE: "Thanks for participating in the Hogwarts sorting! See you next time.",
        HOUSE_ASSIGNMENT: "Congratulations, you have been sorted into",
        HELP: "This is the Sorting Hat skill, you can answer the hat's questions to find out which Hogwarts house you belong to, to start, you can say 'start'",
        ERROR: "There's an error, the skill will be closed"
    }
};

export const questions = {
    'es-ES': [
        { text: "¿Cuál es tu color favorito? Elige entre rojo, azul, amarillo o verde", options: ["rojo", "azul", "amarillo", "verde"], mapping: { "rojo": "Gryffindor", "azul": "Ravenclaw", "amarillo": "Hufflepuff", "verde": "Slytherin" } },
        { text: "¿Qué cualidad valoras más? Elige entre: valentía, inteligencia, lealtad o ambición", options: ["valentía", "inteligencia", "lealtad", "ambición"], mapping: { "valentía": "Gryffindor", "inteligencia": "Ravenclaw", "lealtad": "Hufflepuff", "ambición": "Slytherin" } },
        { text: "Si tuvieras que enfrentar un desafío, ¿cómo actuarías? Elige entre: con coraje, con astucia, con paciencia o con lógica", options: ["con coraje", "con astucia", "con paciencia", "con lógica"], mapping: { "con coraje": "Gryffindor", "con astucia": "Slytherin", "con paciencia": "Hufflepuff", "con lógica": "Ravenclaw" } },
        { text: "¿Qué actividad te atrae más? Elige entre: deportes extremos, resolver acertijos, ayudar a los demás o liderar un equipo", options: ["deportes extremos", "resolver acertijos", "ayudar a los demás", "liderar un equipo"], mapping: { "deportes extremos": "Gryffindor", "resolver acertijos": "Ravenclaw", "ayudar a los demás": "Hufflepuff", "liderar un equipo": "Slytherin" } },
        { text: "Si pudieras tener una mascota mágica, ¿cuál elegirías? Elige entre: un fénix, un búho, un tejón o una serpiente", options: ["fénix", "búho", "tejón", "serpiente"], mapping: { "fénix": "Gryffindor", "búho": "Ravenclaw", "tejón": "Hufflepuff", "serpiente": "Slytherin" } }
    ],
    'en-US': [
        { text: "What is your favorite color? Choose between red, blue, yellow or green", options: ["red", "blue", "yellow", "green"], mapping: { "red": "Gryffindor", "blue": "Ravenclaw", "yellow": "Hufflepuff", "green": "Slytherin" } },
        { text: "What trait do you value the most? Choose between bravery, intelligence, loyalty or ambition", options: ["bravery", "intelligence", "loyalty", "ambition"], mapping: { "bravery": "Gryffindor", "intelligence": "Ravenclaw", "loyalty": "Hufflepuff", "ambition": "Slytherin" } },
        { text: "If you had to face a challenge, how would you act? Choose between: with courage, with cunning, with patience, or with logic", options: ["with courage", "with cunning", "with patience", "with logic"], mapping: { "with courage": "Gryffindor", "with cunning": "Slytherin", "with patience": "Hufflepuff", "with logic": "Ravenclaw" } },
        { text: "Which activity appeals to you the most? Choose between: extreme sports, solving puzzles, helping others, or leading a team", options: ["extreme sports", "solving puzzles", "helping others", "leading a team"], mapping: { "extreme sports": "Gryffindor", "solving puzzles": "Ravenclaw", "helping others": "Hufflepuff", "leading a team": "Slytherin" } },
        { text: "If you could have a magical pet, which one would you choose? Choose between: a phoenix, an owl, a badger, or a snake", options: ["phoenix", "owl", "badger", "snake"], mapping: { "phoenix": "Gryffindor", "owl": "Ravenclaw", "badger": "Hufflepuff", "snake": "Slytherin" } }
    ]
};

export const getLocalizedText = (handlerInput, key) => {
    const locale = handlerInput.requestEnvelope.request.locale || 'es-ES';
    return languageStrings[locale]?.[key] || languageStrings['es-ES'][key];
};