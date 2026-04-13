// /assets/data/cotillometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Te enteras de rupturas y reconciliaciones antes que los protagonistas?', weight: 7 },
    { text: '¿Te acercas “por agua” justo cuando alguien baja la voz en la cocina?', weight: 7 },
    { text: '¿Dices “no es por criticar, pero…” y luego sacas temporada completa?', weight: 7 },
    { text: '¿Haces preguntas privadas con sonrisa de entrevistador de late night?', weight: 7 },
    { text: '¿Te importa más el salseo del plan que el plan en sí mismo?', weight: 7 },
    { text: '¿Has reenviado un rumor con fe ciega y cero fact-check?', weight: 7 },
    { text: '¿Cuando pasa algo, te nombran portavoz oficial del grupo sin votar?', weight: 7 },
    { text: '¿Recuerdas quién dijo qué, a qué hora y con qué cara exacta?', weight: 7 },
    { text: '¿Analizas parejas ajenas como jurado de reality en prime time?', weight: 7 },
    { text: '¿Te da miedo perderte algo si hay “tema” y tú aún no tienes el resumen?', weight: 7 },
    { text: '¿Abres conversaciones con “yo no quería decir nada, peeero…”?', weight: 7 },
    { text: '¿Tu radar de drama pita antes de que llegue el primer mensaje?', weight: 7 },
    { text: '¿Te dicen que sabes demasiado de vidas que ni cotizan en tu nómina?', weight: 8 },
    { text: '¿Gestionas info social como agencia EFE, pero sin verificar fuentes?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Curioso discreto', category: 'Cotilleo bajo control', description: 'Te interesa la gente, pero respetas límites. Casi ejemplar.' },
    { maxRatio: 0.28, title: 'Antena social', category: 'Cotilleo leve', description: 'Te enteras de cositas, aunque todavía no vives para ello.' },
    { maxRatio: 0.42, title: 'Cronista del barrio', category: 'Cotilleo funcional', description: 'Sabes más de la cuenta y lo cuentas con entusiasmo moderado.' },
    { maxRatio: 0.58, title: 'Reportero de pasillo', category: 'Cotilleo serio', description: 'Tu agenda mental de dramas ajenos está mejor organizada que la del trabajo.' },
    { maxRatio: 0.74, title: 'Agencia de rumores', category: 'Cotilleo alto', description: 'No se mueve un chisme sin que te llegue en menos de 5 minutos.' },
    { maxRatio: 0.89, title: 'Editor de la vida ajena', category: 'Cotilleo extremo', description: 'Filtras, interpretas y redistribuyes información social como servicio público.' },
    { maxRatio: 1, title: 'Cotilla Profesional', category: 'Jefe final de la curiosidad social', description: 'Eres la hemeroteca viviente del drama colectivo. Todo pasa por ti.' },
  ],
};
