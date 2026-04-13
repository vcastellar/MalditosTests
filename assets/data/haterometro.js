// /assets/data/haterometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Encuentras el “pero” incluso cuando hay confeti, música y barra libre?', weight: 7 },
    { text: '¿Comentas “tampoco es para tanto” justo cuando todo el mundo está celebrando algo bonito?', weight: 7 },
    { text: '¿Detectas errores ajenos más rápido que tu propio nombre?', weight: 7 },
    { text: '¿Sientes que, si tú no te quejas, la civilización colapsa?', weight: 7 },
    { text: '¿Respondes buenas noticias con sarcasmo nivel villano secundario?', weight: 7 },
    { text: '¿Te alimenta el alma demostrar que algo “está mal planteado”?', weight: 7 },
    { text: '¿El entusiasmo ajeno te suena sospechoso, como promo con letra pequeña?', weight: 7 },
    { text: '¿Has tirado abajo planes por deporte antes de que empiecen?', weight: 7 },
    { text: '¿Tu tema favorito siempre es lo que salió mal, mal y mal?', weight: 7 },
    { text: '¿Te cuesta felicitar sin meter un “sí, pero…” de propina?', weight: 7 },
    { text: '¿En internet vas primero a repartir caña y, si sobra tiempo, quizá a aportar?', weight: 7 },
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
    { maxRatio: 0.14, title: 'Crítico diplomático', category: 'Bilis digital baja', description: 'Aún distingues entre crítica útil y odio gratuito. Te queda humanidad: protégela.' },
    { maxRatio: 0.28, title: 'Gruñón ocasional', category: 'Haterismo leve', description: 'Te quejas por temporadas, sobre todo con sueño y hambre. Recuperable.' },
    { maxRatio: 0.42, title: 'Detector de fallos', category: 'Haterismo funcional', description: 'Tienes radar para errores premium. El problema es que jamás lo apagas ni en cumpleaños.' },
    { maxRatio: 0.58, title: 'Fiscal del internet', category: 'Haterismo serio', description: 'Tu comentario aparece siempre para recordar que nada es suficiente, ni con esfuerzo real.' },
    { maxRatio: 0.74, title: 'Influencer de la bilis', category: 'Haterismo alto', description: 'Criticas con constancia, estilo y una dedicación que ya parece jornada completa.' },
    { maxRatio: 0.89, title: 'Señor/a del dislike', category: 'Haterismo extremo', description: 'Vives en modo “esto está mal”. Hasta tus elogios suenan a advertencia.' },
    { maxRatio: 1, title: 'Emperador del Hate', category: 'Jefe final de la queja', description: 'Nada te convence, todo te irrita y lo comunicas con orgullo profesional y puntualidad suiza.' },
  ],
};
