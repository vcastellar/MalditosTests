// /assets/data/cotillometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Te enteras de rupturas, reconciliaciones y engaños antes que los propios protagonistas de la historia?', weight: 7 },
    { text: '¿Te acercas "a por agua" justo cuando alguien baja la voz en la cocina y la conversación se pone interesante?', weight: 7 },
    { text: '¿Empiezas con "no es por criticar, pero…" y acto seguido despliegas una temporada completa de drama ajeno?', weight: 7 },
    { text: '¿Haces preguntas muy personales con sonrisa de presentador de late night que sabe exactamente lo que está haciendo?', weight: 7 },
    { text: '¿Te importa más el salseo de lo que está pasando que el plan en sí mismo?', weight: 7 },
    { text: '¿Has reenviado rumores con absoluta convicción y cero verificación previa de ningún tipo?', weight: 7 },
    { text: '¿Cuando hay movida en el grupo, te nombran portavoz oficial y cronista aunque nadie haya votado?', weight: 7 },
    { text: '¿Recuerdas con exactitud quién dijo qué, a qué hora, con qué tono y qué cara puso exactamente?', weight: 7 },
    { text: '¿Analizas las relaciones sentimentales ajenas con la seriedad de un jurado de reality en prime time?', weight: 7 },
    { text: '¿Si hay "tema" y tú aún no tienes el resumen completo, te entra una ansiedad difícil de gestionar?', weight: 7 },
    { text: '¿Abres conversaciones con "yo no quería decir nada, peeero…" sabiendo perfectamente que querías y mucho?', weight: 7 },
    { text: '¿Tu radar de drama detecta el conflicto antes de que llegue el primer mensaje al grupo?', weight: 7 },
    { text: '¿Te dicen con regularidad que sabes demasiado de vidas que no pagan tu nómina ni te dan las gracias?', weight: 8 },
    { text: '¿Gestionas información social como una agencia de noticias, pero sin filtros editoriales ni verificación de fuentes?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Curioso discreto', category: 'Cotilleo bajo control', description: 'Te interesa la gente, pero respetas límites razonables. Eres casi un ejemplo a seguir en este genre, lo cual es raro.' },
    { maxRatio: 0.28, title: 'Antena social', category: 'Cotilleo leve', description: 'Te enteras de cositas y las comentas con moderación. Aún no vives para ello, aunque lo consideras.' },
    { maxRatio: 0.42, title: 'Cronista del barrio', category: 'Cotilleo funcional', description: 'Sabes bastante más de la cuenta sobre vidas ajenas y lo cuentas con un entusiasmo que no intenta disimularse.' },
    { maxRatio: 0.58, title: 'Reportero de pasillo', category: 'Cotilleo serio', description: 'Tu agenda mental de dramas ajenos está mejor organizada y actualizada que cualquier cosa relacionada con tu trabajo.' },
    { maxRatio: 0.74, title: 'Agencia de rumores', category: 'Cotilleo alto', description: 'No se mueve un chisme en tu entorno sin que te llegue antes de cinco minutos. Eres el punto de paso obligatorio.' },
    { maxRatio: 0.89, title: 'Editor de la vida ajena', category: 'Cotilleo extremo', description: 'Filtras, interpretas, redistribuyes y comentas información social con una eficiencia que el periodismo profesional envidiaría.' },
    { maxRatio: 1, title: 'Cotilla Profesional', category: 'Jefe final de la curiosidad social', description: 'Eres la hemeroteca viviente del drama colectivo. Todo pasa por ti, todo lo procesas, todo lo archivas. Si algún día dejas de cotillear, tu grupo perderá el 80% de su actividad.' },
  ],
};
