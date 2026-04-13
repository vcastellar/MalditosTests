// /assets/data/sabelotodometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Empiezas frases con “de hecho…” aunque nadie haya pedido precisión académica?', weight: 7 },
    { text: '¿Corriges a tus amistades por detalles mínimos que no cambian nada de la conversación?', weight: 7 },
    { text: '¿Sueles citar “un estudio” sin que nadie te haya preguntado por fuentes?', weight: 7 },
    { text: '¿Te cuesta dejar pasar un error ajeno, aunque sea una tontería total?', weight: 7 },
    { text: '¿Interrumpes para explicar “cómo son realmente las cosas” con tono de documental?', weight: 7 },
    { text: '¿Das consejos técnicos sobre temas que acabas de descubrir hace diez minutos?', weight: 7 },
    { text: '¿Sientes un placer especial cuando dices “ya lo sabía”?', weight: 7 },
    { text: '¿Conviertes una charla informal en una clase magistral sin darte cuenta?', weight: 7 },
    { text: '¿Te molesta cuando alguien opina con dudas en vez de afirmar con contundencia?', weight: 7 },
    { text: '¿Has corregido pronunciaciones o datos en reuniones donde solo se quería pasar un buen rato?', weight: 7 },
    { text: '¿Hablas de “datos objetivos” incluso cuando estás defendiendo una preferencia personal?', weight: 7 },
    { text: '¿Te cuesta decir “no lo sé” y prefieres improvisar una explicación convincente?', weight: 7 },
    { text: '¿Te consideran la persona que siempre “tiene algo que puntualizar”?', weight: 8 },
    { text: '¿Tiendes a dar tu opinión experta sobre cualquier tema, desde fútbol hasta astrofísica?', weight: 8 },
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
