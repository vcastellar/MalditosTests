// /assets/data/sabelotodometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Arrancas frases con “de hecho…” como si fueras un hilo de X con patas?', weight: 7 },
    { text: '¿Corriges a tus amistades por una coma mal puesta en plena birra?', weight: 7 },
    { text: '¿Sacas “un estudio de Harvard” aunque estéis hablando de croquetas?', weight: 7 },
    { text: '¿Te pica el cuerpo si alguien se equivoca y no puedes corregirlo al instante?', weight: 7 },
    { text: '¿Interrumpes para explicar “cómo funciona realmente” con voz de narrador de documental?', weight: 7 },
    { text: '¿Das masterclass de temas que descubriste en un reel hace 12 minutos?', weight: 7 },
    { text: '¿Decir “ya lo sabía” te da más dopamina que ganar dinero?', weight: 7 },
    { text: '¿Conviertes una charla casual en una TED Talk sin pedir perdón?', weight: 7 },
    { text: '¿Te da urticaria que alguien diga “creo que…” en vez de sentenciar?', weight: 7 },
    { text: '¿Has corregido datos en una fiesta como si fueras VAR humano?', weight: 7 },
    { text: '¿Invocas “datos objetivos” para defender gustos personales tipo pizza con piña?', weight: 7 },
    { text: '¿Te cuesta decir “ni idea” y prefieres improvisar modo experto premium?', weight: 7 },
    { text: '¿Ya te llaman “Wikipedia” pero sin opción de cerrar pestaña?', weight: 8 },
    { text: '¿Opinas con seguridad nuclear de todo, de la Champions a los agujeros negros?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Aprendiz de enciclopedia', category: 'Sabiduría no solicitada mínima', description: 'Todavía puedes tener una conversación sin montar un TED Talk. Vas bien.' },
    { maxRatio: 0.28, title: 'Puntualizador amable', category: 'Sabelotodismo leve', description: 'Corriges cositas, pero aún eres soportable en comidas familiares.' },
    { maxRatio: 0.42, title: 'Wikipedia con piernas', category: 'Sabelotodismo funcional', description: 'Siempre tienes un dato listo. A veces útil, a veces perfectamente innecesario.' },
    { maxRatio: 0.58, title: 'Comentarista absoluto', category: 'Sabelotodismo serio', description: 'No dejas un tema sin diagnosticar. Tu opinión entra siempre, invitada o no.' },
    { maxRatio: 0.74, title: 'Doctor del “de hecho”', category: 'Sabelotodismo alto', description: 'Has convertido la corrección ajena en una disciplina de alto rendimiento.' },
    { maxRatio: 0.89, title: 'Cátedra ambulante', category: 'Sabelotodismo extremo', description: 'Tu superioridad argumental aparece hasta en debates sobre croquetas.' },
    { maxRatio: 1, title: 'Oráculo no solicitado', category: 'Jefe final del sabelotodo', description: 'Todo lo sabes, todo lo explicas y nadie te lo pidió. Nivel legendario.' },
  ],
};
