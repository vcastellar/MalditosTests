// /assets/data/haterometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Encuentras el “pero” incluso cuando hay confeti, música y barra libre?', weight: 7 },
    { text: '¿Comentas “tampoco es para tanto” en posts donde todo el mundo celebra?', weight: 7 },
    { text: '¿Detectas errores ajenos más rápido que tu propio nombre?', weight: 7 },
    { text: '¿Sientes que, si tú no te quejas, la civilización colapsa?', weight: 7 },
    { text: '¿Respondes buenas noticias con sarcasmo nivel villano secundario?', weight: 7 },
    { text: '¿Te alimenta el alma demostrar que algo “está mal planteado”?', weight: 7 },
    { text: '¿El entusiasmo ajeno te suena sospechoso, como promo con letra pequeña?', weight: 7 },
    { text: '¿Has tirado abajo planes por deporte antes de que empiecen?', weight: 7 },
    { text: '¿Tu tema favorito siempre es lo que salió mal, mal y mal?', weight: 7 },
    { text: '¿Te cuesta felicitar sin meter un “sí, pero…” de propina?', weight: 7 },
    { text: '¿En internet vas primero a repartir caña y luego, quizá, a aportar?', weight: 7 },
    { text: '¿Llamas “realismo” a tu modo ahorro de esperanza?', weight: 7 },
    { text: '¿Tienes talento para pinchar globos emocionales con una sola frase?', weight: 8 },
    { text: '¿Practicas la queja con disciplina olímpica y cero descansos?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Crítico diplomático', category: 'Bilis digital baja', description: 'Aún distingues entre crítica útil y odio gratuito. Mantén esa luz.' },
    { maxRatio: 0.28, title: 'Gruñón ocasional', category: 'Haterismo leve', description: 'Te quejas por temporadas, sobre todo cuando duermes poco.' },
    { maxRatio: 0.42, title: 'Detector de fallos', category: 'Haterismo funcional', description: 'Tienes radar para errores. El problema es que nunca lo apagas.' },
    { maxRatio: 0.58, title: 'Fiscal del internet', category: 'Haterismo serio', description: 'Tu comentario aparece siempre para recordar que nada es suficiente.' },
    { maxRatio: 0.74, title: 'Influencer de la bilis', category: 'Haterismo alto', description: 'Criticas con constancia, estilo y una dedicación francamente preocupante.' },
    { maxRatio: 0.89, title: 'Señor/a del dislike', category: 'Haterismo extremo', description: 'Vives en modo “esto está mal”. Hasta tus elogios parecen regaños.' },
    { maxRatio: 1, title: 'Emperador del Hate', category: 'Jefe final de la queja', description: 'Nada te convence, todo te irrita y lo comunicas con orgullo profesional.' },
  ],
};
