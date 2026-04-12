// /assets/data/procrastinometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has limpiado la casa entera para evitar hacer una tarea importante?',
      weight: 8,
    },
    {
      text: '¿Tu frase favorita es “empiezo el lunes”?',
      weight: 7,
    },
    {
      text: '¿Abres una pestaña para trabajar y acabas viendo vídeos de recetas que nunca harás?',
      weight: 7,
    },
    {
      text: '¿Has puesto cinco alarmas para “ponerte en serio” y las has ignorado todas?',
      weight: 8,
    },
    {
      text: '¿Cuando algo da pereza dices “lo hago luego” aunque sepas que ese luego no existe?',
      weight: 7,
    },
    {
      text: '¿Te organizas con listas preciosas que jamás vuelves a mirar?',
      weight: 6,
    },
    {
      text: '¿Has entregado algo al límite con la adrenalina de una película de atracos?',
      weight: 8,
    },
    {
      text: '¿Pospones hasta responder mensajes fáciles porque “ahora no estás en mood”?',
      weight: 7,
    },
    {
      text: '¿Te convences de que trabajas mejor bajo presión… porque no te queda otra?',
      weight: 7,
    },
    {
      text: '¿Has movido una fecha en el calendario solo para sentir control, sin avanzar nada?',
      weight: 6,
    },
    {
      text: '¿Empiezas tareas nuevas para no acabar las que ya tenías empezadas?',
      weight: 8,
    },
    {
      text: '¿Te haces promesas productivas por la noche que traicionas al día siguiente?',
      weight: 7,
    },
    {
      text: '¿Si una tarea tarda 20 minutos, la aplazas tres días por puro deporte mental?',
      weight: 7,
    },
    {
      text: '¿Has dicho “mañana sin falta” más veces de las que has cumplido algo a la primera?',
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
      title: 'Motor de arranque inmediato',
      category: 'Procrastinación casi nula',
      description:
        'Tú no pospones: ejecutas. Lo tuyo con la disciplina parece un romance legal y consentido.',
    },
    {
      maxRatio: 0.28,
      title: 'Demora educada',
      category: 'Procrastinación leve',
      description:
        'A veces te entretienes, pero sueles volver al carril antes de que arda todo.',
    },
    {
      maxRatio: 0.42,
      title: 'Especialista en “luego”',
      category: 'Procrastinación funcional',
      description:
        'Te retrasas con estilo y excusas sólidas. Cumples, sí, pero normalmente al borde del infarto.',
    },
    {
      maxRatio: 0.58,
      title: 'Capitán del aplazamiento',
      category: 'Procrastinación seria',
      description:
        'Tu calendario está lleno de buenas intenciones. Si no hay presión, no hay movimiento.',
    },
    {
      maxRatio: 0.74,
      title: 'Ninja del último minuto',
      category: 'Procrastinación alta',
      description:
        'Transformas cada tarea en una misión contrarreloj. Vives al límite de tus propios plazos.',
    },
    {
      maxRatio: 0.89,
      title: 'Arquitecto del “mañana”',
      category: 'Procrastinación extrema',
      description:
        'Tu talento para posponer merece cátedra. Lo urgente te encuentra siempre improvisando.',
    },
    {
      maxRatio: 1,
      title: 'Procrastinador Profesional',
      category: 'Leyenda del aplazamiento',
      description:
        'Has elevado el “ya lo haré” a forma de vida. Tu yo futuro te manda facturas y amenazas.',
    },
  ],
};
