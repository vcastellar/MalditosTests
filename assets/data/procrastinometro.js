// /assets/data/procrastinometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has limpiado el baño con cepillo de dientes, alfabetizado las especias y revisado el extintor del coche con tal de no enfrentarte a la tarea que tenías que entregar ayer?',
      weight: 8,
    },
    {
      text: '¿Tu mantra es "empiezo el lunes" aunque ya sea miércoles, el plazo sea el jueves y tu jefe haya empezado a escribirte en mayúsculas?',
      weight: 7,
    },
    {
      text: '¿Abres el ordenador "a trabajar" y en 3 minutos estás viendo a un señor de Wisconsin restaurar un hacha oxidada y vídeos de recetas que no cocinarás ni bajo amenaza?',
      weight: 7,
    },
    {
      text: '¿Has puesto cinco alarmas para "ponerte en serio" y las has ejecutado una a una con la frialdad de un francotirador, sin abrir ni un ojo?',
      weight: 8,
    },
    {
      text: '¿Cuando algo requiere esfuerzo dices "lo hago luego", sabiendo perfectamente que ese "luego" es una criatura mitológica que nadie ha visto jamás?',
      weight: 7,
    },
    {
      text: '¿Haces listas de tareas preciosas, con colorines y rotuladores nuevos, que entierras sin funeral y no vuelves a abrir en tu vida?',
      weight: 6,
    },
    {
      text: '¿Has entregado cosas en el segundo exacto del cierre, con taquicardia, sudor frío y el cursor temblando, y lo has bautizado como "trabajar bien bajo presión"?',
      weight: 8,
    },
    {
      text: '¿Pospones contestar un mensaje de dos palabras durante once días porque "ahora mismo no estás para el formato conversación", y luego respondes "jaja sí"?',
      weight: 7,
    },
    {
      text: '¿Te has autoconvencido de que rindes mejor bajo presión cuando la única presión existente la has fabricado tú tirándote tres días mirando al techo?',
      weight: 7,
    },
    {
      text: '¿Has arrastrado una fecha en el calendario solo para sentir "control absoluto de la situación", sin haber movido ni una neurona en la tarea real?',
      weight: 6,
    },
    {
      text: '¿Inauguras proyectos nuevos con ilusión de niño en Reyes para no tener que mirar a los ojos a los siete cadáveres a medias que arrastras desde octubre?',
      weight: 8,
    },
    {
      text: '¿Cada noche te juras ser otra persona mañana y cada mañana niegas esa promesa con la solvencia de un político en comisión de investigación?',
      weight: 7,
    },
    {
      text: '¿Has aplazado cuatro días seguidos una tarea de 20 minutos, sufriendo por ella las 96 horas, para luego hacerla en 20 minutos exactos y quedarte tan ancho?',
      weight: 7,
    },
    {
      text: '¿Has dicho "mañana sin falta" tantas veces que la frase ya ni te sale por la boca: te sale por reflejo, como un estornudo?',
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
        'Tú no pospones: ejecutas. Tu relación con la productividad es un romance sano que da frutos. Eres lo que todo el mundo jura que va a ser el lunes y nunca es. Resultas hasta sospechoso.',
    },
    {
      maxRatio: 0.28,
      title: 'Demora educada',
      category: 'Procrastinación leve',
      description:
        'A veces te hipnotiza algo brillante e irrelevante, pero tienes suficiente criterio para volver al carril antes de que todo arda y haya que llamar a los bomberos.',
    },
    {
      maxRatio: 0.42,
      title: 'Especialista en "luego"',
      category: 'Procrastinación funcional',
      description:
        'Te retrasas con estilo, creatividad y excusas de autor. Cumples, sí, pero siempre al borde del infarto, con las manos sudando y rezando a santos que ni conoces.',
    },
    {
      maxRatio: 0.58,
      title: 'Capitán del aplazamiento',
      category: 'Procrastinación seria',
      description:
        'Tu calendario es un cementerio de buenas intenciones con flores de plástico. Sin una fecha límite respirándote en la nuca, no existe movimiento. Ni señales de vida.',
    },
    {
      maxRatio: 0.74,
      title: 'Ninja del último minuto',
      category: 'Procrastinación alta',
      description:
        'Conviertes cada entrega en una misión de rescate contrarreloj con helicóptero y cuerda. Vives al borde de tus propios plazos y a estas alturas ya ni se te acelera el pulso.',
    },
    {
      maxRatio: 0.89,
      title: 'Arquitecto del "mañana"',
      category: 'Procrastinación extrema',
      description:
        'Tu talento para posponer merece cátedra, aula propia y placa conmemorativa. Lo urgente siempre te pilla en pijama, improvisando con lo que hay y negociando con el pánico.',
    },
    {
      maxRatio: 1,
      title: 'Procrastinador Profesional',
      category: 'Leyenda del aplazamiento',
      description:
        'Has elevado el "ya lo haré" a religión con feligreses. Tu yo futuro te manda facturas, amenazas y cartas certificadas de arrepentimiento que tú también dejas sin abrir, encima del montón, criando polvo con dignidad.',
    },
  ],
};
