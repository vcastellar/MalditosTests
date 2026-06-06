// /assets/data/cunadometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Opinas de cualquier tema con total convicción aunque tu única fuente sea el titular de un artículo que tampoco llegaste a abrir?',
      weight: 8,
    },
    {
      text: '¿Empiezas frases con "yo no soy experto, pero…" y luego sueltas una charla de 20 minutos que deja en ridículo a gente con máster?',
      weight: 7,
    },
    {
      text: '¿Corriges a los demás con absoluta seguridad incluso en los momentos en que te estás inventando la mitad de lo que dices?',
      weight: 8,
    },
    {
      text: '¿En reuniones familiares acabas pontificando sobre política económica, salud pública y el reglamento de la Liga en el mismo café con leche?',
      weight: 7,
    },
    {
      text: '¿Te informas principalmente en grupos de WhatsApp y redes sociales y a eso lo llamas "investigación propia"?',
      weight: 7,
    },
    {
      text: '¿Tienes soluciones simples, contundentes y no solicitadas para problemas que llevan décadas sin resolverse porque son extremadamente complejos?',
      weight: 7,
    },
    {
      text: '¿Dices "esto es así y punto" con tono de árbitro final aunque no puedas citar una sola fuente que no sea tu propio instinto?',
      weight: 8,
    },
    {
      text: '¿Decir "no lo sé" te produce una incomodidad física que solo puedes aliviar improvisando una teoría en el acto?',
      weight: 7,
    },
    {
      text: '¿Has compartido audios de indignación y cadenas de WhatsApp sin comprobar en ningún momento si eran verdad o mentira?',
      weight: 7,
    },
    {
      text: '¿Interrumpes debates para soltar tu sentencia definitiva y luego cambias de tema antes de que nadie pueda rebatirte?',
      weight: 7,
    },
    {
      text: '¿Te encanta dejar caer un "el problema real es…" sin haber escuchado al resto ni los primeros 30 segundos?',
      weight: 7,
    },
    {
      text: '¿Te consideras la voz de la razón en cualquier conversación, incluso cuando todo el mundo pone cara de "Dios mío, que pare"?',
      weight: 6,
    },
    {
      text: '¿Confundes hablar con mucha confianza con tener razón? Porque no es lo mismo, pero tú no lo sabes.',
      weight: 7,
    },
    {
      text: '¿Uno de tus hobbies favoritos es discutir en comentarios de redes con completos desconocidos durante más de una hora?',
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
        'Sabes callar cuando toca. Tu criterio no va por libre y todavía escuchas antes de sentenciar. Eres casi admirable en este ecosistema.',
    },
    {
      maxRatio: 0.28,
      title: 'Comentarista casual',
      category: 'Cuñadismo leve',
      description:
        'Te vienes arriba a ratos, pero aún mantienes un mínimo de humildad intelectual que te salva de las miradas asesinas en la sobremesa.',
    },
    {
      maxRatio: 0.42,
      title: 'Analista de bar',
      category: 'Cuñadismo funcional',
      description:
        'Tienes opinión para casi todo y datos comprobables para casi nada. Sobrevives, pero el nivel de exactitud de tus afirmaciones es inquietante.',
    },
    {
      maxRatio: 0.58,
      title: 'Oráculo de sobremesa',
      category: 'Cuñadismo serio',
      description:
        'Hablas con la seguridad de alguien que ha leído el manual completo cuando en realidad solo has visto el índice. Tu confianza vale más que tus fuentes.',
    },
    {
      maxRatio: 0.74,
      title: 'Influencer del cuñado',
      category: 'Cuñadismo alto',
      description:
        'Allí donde vas, aparece un debate que nadie había pedido y que deja a todos agotados. Eres un clásico del género y ni lo sabes.',
    },
    {
      maxRatio: 0.89,
      title: 'Catedrático del "yo te digo"',
      category: 'Cuñadismo extremo',
      description:
        'Tu verbo no descansa ni en vacaciones. Serías capaz de explicarle la inflación a un Premio Nobel durante el postre y creerte que le has aportado algo.',
    },
    {
      maxRatio: 1,
      title: 'Cuñado Supremo',
      category: 'Jefe final de la opinión gratuita',
      description:
        'Has alcanzado el nivel máximo: opinas de absolutamente todo sin tener ni idea de nada y encima lo disfrutas. Si un día te quedas sin opiniones, el silencio va a parecer un fenómeno atmosférico.',
    },
  ],
};
