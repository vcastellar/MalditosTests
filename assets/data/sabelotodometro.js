// /assets/data/sabelotodometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Arrancas frases con "de hecho…" como si fueras un hilo de X con traje y corbata?', weight: 7 },
    { text: '¿Corriges a tus amigos una coma mal puesta en mitad de una birra como si de ello dependiera la democracia?', weight: 7 },
    { text: '¿Sacas "un estudio de Harvard" aunque estéis debatiendo si los macarrones quedan mejor con o sin nata?', weight: 7 },
    { text: '¿Cuando alguien dice algo incorrecto, te pica todo el cuerpo hasta que puedes corregirlo delante de todos?', weight: 7 },
    { text: '¿Interrumpes para explicar "cómo funciona realmente eso" con voz grave de narrador de documental de naturaleza?', weight: 7 },
    { text: '¿Das masterclasses sobre temas que descubriste en un reel hace exactamente 11 minutos?', weight: 7 },
    { text: '¿Decir "ya lo sabía yo" te produce más satisfacción que un aumento de sueldo?', weight: 7 },
    { text: '¿Conviertes una conversación de ascensor en una TED Talk sin que nadie te lo haya pedido ni remotamente?', weight: 7 },
    { text: '¿Te da urticaria física que alguien diga "creo que…" en vez de sentenciar directamente como persona segura?', weight: 7 },
    { text: '¿Has corregido datos en una fiesta de cumpleaños como si fuera el VAR de la realidad objetiva?', weight: 7 },
    { text: '¿Invocas "datos objetivos y contrastados" para defender preferencias personales como el orden correcto de los ingredientes en un sándwich?', weight: 7 },
    { text: '¿Eres incapaz de decir "no tengo ni idea" y prefieres improvisar en modo experto premium antes de reconocer ignorancia?', weight: 7 },
    { text: '¿Ya te llaman "Wikipedia" en el grupo, pero una Wikipedia que no tiene botón de cerrar pestaña?', weight: 8 },
    { text: '¿Opinas con total seguridad de la Champions League, los agujeros negros y la política monetaria del BCE en el mismo almuerzo?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Aprendiz de enciclopedia', category: 'Sabiduría no solicitada mínima', description: 'Todavía eres capaz de tener una conversación sin convertirla en un simposio. Eso, hoy en día, es casi un superpoder.' },
    { maxRatio: 0.28, title: 'Puntualizador amable', category: 'Sabelotodismo leve', description: 'Corriges cositas de vez en cuando, pero aún eres soportable en comidas familiares largas. Casi agradable, incluso.' },
    { maxRatio: 0.42, title: 'Wikipedia con piernas', category: 'Sabelotodismo funcional', description: 'Siempre tienes un dato a mano. A veces es útil. Muchas otras veces es perfectamente innecesario y nadie te lo ha pedido.' },
    { maxRatio: 0.58, title: 'Comentarista absoluto', category: 'Sabelotodismo serio', description: 'No dejas un tema sin diagnosticar, analizar y sentenciar. Tu opinión entra siempre en la conversación, invitada o no, con zapatos de calle.' },
    { maxRatio: 0.74, title: 'Doctor del "de hecho"', category: 'Sabelotodismo alto', description: 'Has convertido corregir a los demás en una disciplina de alto rendimiento con entrenamiento diario y cero días de descanso.' },
    { maxRatio: 0.89, title: 'Cátedra ambulante', category: 'Sabelotodismo extremo', description: 'Tu superioridad argumental aparece en cualquier contexto, incluido uno en el que alguien solo preguntaba dónde está el baño.' },
    { maxRatio: 1, title: 'Oráculo no solicitado', category: 'Jefe final del sabelotodo', description: 'Todo lo sabes, todo lo explicas, todo lo corriges y nadie te ha pedido nada de eso. Eres una enciclopedia que camina, habla y no tiene botón de silencio.' },
  ],
};
