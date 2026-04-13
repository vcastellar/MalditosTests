// /assets/data/haterometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Encuentras algo negativo incluso cuando todo el mundo está celebrando?', weight: 7 },
    { text: '¿Dejas comentarios críticos en publicaciones claramente positivas?', weight: 7 },
    { text: '¿Te sale automático señalar errores ajenos antes que reconocer aciertos?', weight: 7 },
    { text: '¿Piensas que “si no me quejo yo, nadie pondrá orden”?', weight: 7 },
    { text: '¿Sueles responder con sarcasmo cuando alguien comparte una buena noticia?', weight: 7 },
    { text: '¿Disfrutas debatiendo para demostrar que algo “en realidad está mal”?', weight: 7 },
    { text: '¿Te incomoda ver entusiasmo porque lo interpretas como ingenuidad?', weight: 7 },
    { text: '¿Has desmontado planes ajenos solo por destacar sus posibles fallos?', weight: 7 },
    { text: '¿Prefieres hablar de lo malo antes que de lo bueno casi siempre?', weight: 7 },
    { text: '¿Te cuesta felicitar sin añadir un “pero”?', weight: 7 },
    { text: '¿En internet entras más a criticar que a aportar?', weight: 7 },
    { text: '¿Sientes que tu visión pesimista es simplemente “realismo superior”?', weight: 7 },
    { text: '¿Tienes fama de arruinar el ambiente con una observación afilada?', weight: 8 },
    { text: '¿Tu deporte favorito es la queja constante con precisión quirúrgica?', weight: 8 },
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
