// /assets/data/haterometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Encuentras el "pero" incluso cuando hay confeti, barra libre, música en directo y todo el mundo está encantado?', weight: 7 },
    { text: '¿Comentas "tampoco es para tanto" en posts donde la gente celebra algo con genuina ilusión?', weight: 7 },
    { text: '¿Detectas los errores de los demás más rápido de lo que reconoces tu propio nombre?', weight: 7 },
    { text: '¿Sientes que si tú no te quejas, la civilización tal y como la conocemos colapsa en cuestión de horas?', weight: 7 },
    { text: '¿Respondes buenas noticias ajenas con sarcasmo de villano de película de segunda categoría?', weight: 7 },
    { text: '¿Te alimenta el alma demostrar que algo "está mal planteado desde la base" aunque sea una tortilla?', weight: 7 },
    { text: '¿El entusiasmo ajeno genuino te suena sospechoso, como esos anuncios con letra pequeña imposible de leer?', weight: 7 },
    { text: '¿Has dinamitado planes antes de que empezaran por puro deporte intelectual?', weight: 7 },
    { text: '¿Tu tema de conversación favorito es, invariablemente, todo lo que ha salido mal, sale mal y saldrá mal?', weight: 7 },
    { text: '¿Te cuesta felicitar a alguien sin meter un "sí, pero…" de regalo envenenado?', weight: 7 },
    { text: '¿En internet tu primer impulso es repartir crítica y luego, si sobra tiempo, quizás aportar algo?', weight: 7 },
    { text: '¿Llamas "ser realista" a tu modo de ahorro extremo de esperanza y optimismo?', weight: 7 },
    { text: '¿Tienes un talento natural para pinchar globos emocionales ajenos con una sola frase quirúrgica?', weight: 8 },
    { text: '¿Practicas la queja con una disciplina y constancia que ojalá aplicaras a cualquier otra cosa?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Crítico diplomático', category: 'Bilis digital baja', description: 'Aún distingues entre crítica constructiva y odio gratuito. Mantén esa pequeña lucecita encendida.' },
    { maxRatio: 0.28, title: 'Gruñón de temporada', category: 'Haterismo leve', description: 'Te quejas por rachas, sobre todo cuando el sueño escasea y el café no alcanza.' },
    { maxRatio: 0.42, title: 'Detector de fallos', category: 'Haterismo funcional', description: 'Tienes un radar de errores que funciona 24 horas. El problema es que no tiene botón de apagado.' },
    { maxRatio: 0.58, title: 'Fiscal del internet', category: 'Haterismo serio', description: 'Tu comentario aparece puntualmente para recordar que nada es suficiente, nadie lo ha hecho bien y siempre hay algo que objetar.' },
    { maxRatio: 0.74, title: 'Influencer de la bilis', category: 'Haterismo alto', description: 'Criticas con constancia, con estilo propio y con una dedicación que, redirigida, podría construir cosas admirables.' },
    { maxRatio: 0.89, title: 'Señor/a del dislike', category: 'Haterismo extremo', description: 'Vives instalado en el modo "esto está mal". Hasta tus elogios tienen un regusto a regañina de profesor de secundaria.' },
    { maxRatio: 1, title: 'Emperador del Hate', category: 'Jefe final de la queja', description: 'Nada te convence, casi todo te irrita y lo comunicás con un orgullo que francamente ya parece profesional. Has llegado adonde muy pocos llegan: la queja como identidad.' },
  ],
};
