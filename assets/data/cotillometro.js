// /assets/data/cotillometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Sueles enterarte de noticias personales antes que las personas implicadas te las cuenten?', weight: 7 },
    { text: '¿Te acercas “casualmente” a conversaciones ajenas cuando escuchas algo jugoso?', weight: 7 },
    { text: '¿Usas frases como “no es por criticar, pero…” con frecuencia sospechosa?', weight: 7 },
    { text: '¿Preguntas detalles privados con habilidad de interrogatorio amable?', weight: 7 },
    { text: '¿Disfrutas más del contexto social que del plan en sí?', weight: 7 },
    { text: '¿Has reenviado un rumor interesante sin comprobar si era verdad?', weight: 7 },
    { text: '¿Te conviertes en corresponsal oficial del grupo cuando pasa algo?', weight: 7 },
    { text: '¿Recuerdas perfectamente quién dijo qué, cuándo y delante de quién?', weight: 7 },
    { text: '¿Te encanta analizar relaciones ajenas como si fueras comité de expertos?', weight: 7 },
    { text: '¿Sientes ansiedad si notas que hay “tema” y no sabes de qué va?', weight: 7 },
    { text: '¿Has empezado una charla con “yo no quería decir nada, pero…”?', weight: 7 },
    { text: '¿Tu radar social detecta dramas a kilómetros de distancia?', weight: 7 },
    { text: '¿Te han dicho alguna vez que sabes demasiado sobre la vida de los demás?', weight: 8 },
    { text: '¿Manejas información social con precisión de periodista… sin contrastar fuentes?', weight: 8 },
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
