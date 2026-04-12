// /assets/data/cunadometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Opinas de cualquier tema aunque no hayas leído más que el titular?',
      weight: 8,
    },
    {
      text: '¿Empiezas frases con “yo no soy experto, pero…” y luego das una charla de 15 minutos?',
      weight: 7,
    },
    {
      text: '¿Corriges a la gente con seguridad incluso cuando te inventas la mitad de los datos?',
      weight: 8,
    },
    {
      text: '¿En reuniones familiares acabas pontificando sobre política, economía y medicina en el mismo café?',
      weight: 7,
    },
    {
      text: '¿Te informas en redes sociales y lo llamas “investigación propia”?',
      weight: 7,
    },
    {
      text: '¿Crees que tienes soluciones sencillas para problemas complejos que nadie te ha pedido?',
      weight: 7,
    },
    {
      text: '¿Dices “esto es así” con tono absoluto aunque no puedas citar una fuente decente?',
      weight: 8,
    },
    {
      text: '¿Te cuesta admitir un “no lo sé” sin añadir una teoría improvisada?',
      weight: 7,
    },
    {
      text: '¿Has compartido audios o posts indignados sin comprobar si eran verdad?',
      weight: 7,
    },
    {
      text: '¿Interrumpes debates para soltar una opinión contundente y luego cambiar de tema?',
      weight: 7,
    },
    {
      text: '¿Te encanta dejar sentencias tipo “el problema real es…” sin escuchar al resto?',
      weight: 7,
    },
    {
      text: '¿Te ves como voz de la razón incluso cuando todo el mundo pone cara de “madre mía”?',
      weight: 6,
    },
    {
      text: '¿Confundes confianza al hablar con tener razón?',
      weight: 7,
    },
    {
      text: '¿Tu deporte favorito es discutir en comentarios con desconocidos?',
      weight: 7,
    },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    {
      maxRatio: 0.14,
      title: 'Opinador prudente',
      category: 'Cuñadismo bajo control',
      description:
        'Sabes callar cuando toca. Tu criterio no va por libre y aún escuchas antes de sentenciar.',
    },
    {
      maxRatio: 0.28,
      title: 'Comentarista casual',
      category: 'Cuñadismo leve',
      description:
        'Te vienes arriba a ratos, pero mantienes un mínimo de humildad intelectual.',
    },
    {
      maxRatio: 0.42,
      title: 'Analista de bar',
      category: 'Cuñadismo funcional',
      description:
        'Tienes opinión para casi todo y datos para casi nada. Aun así, sobrevives sin demasiado daño.',
    },
    {
      maxRatio: 0.58,
      title: 'Oráculo de sobremesa',
      category: 'Cuñadismo serio',
      description:
        'Hablas con seguridad de manual. Tu confianza en ti mismo cotiza más alto que tus fuentes.',
    },
    {
      maxRatio: 0.74,
      title: 'Influencer del cuñado',
      category: 'Cuñadismo alto',
      description:
        'Eres altamente identificable y compartible. Allí donde vas, nace un debate que nadie pidió.',
    },
    {
      maxRatio: 0.89,
      title: 'Catedrático del “yo te digo”',
      category: 'Cuñadismo extremo',
      description:
        'Tu verbo no descansa. Podrías opinar sobre física cuántica entre el postre y el café.',
    },
    {
      maxRatio: 1,
      title: 'Cuñado Supremo',
      category: 'Jefe final de la opinión gratuita',
      description:
        'Has alcanzado el máximo nivel: opinas de todo sin tener ni idea y además lo disfrutas.',
    },
  ],
};
