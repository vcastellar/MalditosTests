// /assets/data/procrastinometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has limpiado el baño, reorganizado el armario y revisado el extintor del coche para evitar hacer la tarea que tenías que entregar ayer?',
      weight: 8,
    },
    {
      text: '¿Tu mantra es "empiezo el lunes" aunque ya sea miércoles y el plazo sea el jueves?',
      weight: 7,
    },
    {
      text: '¿Abres el ordenador con intención de trabajar y en 3 minutos ya estás viendo vídeos de recetas que nunca jamás vas a cocinar en tu vida?',
      weight: 7,
    },
    {
      text: '¿Has puesto cinco alarmas distintas para "ponerte en serio" y las has silenciado todas con la misma inercia con que respiras?',
      weight: 8,
    },
    {
      text: '¿Cuando algo requiere esfuerzo dices "lo hago luego" siendo perfectamente consciente de que ese luego es una ficción que nunca llega?',
      weight: 7,
    },
    {
      text: '¿Haces listas de tareas preciosas, coloridas y bien estructuradas que no vuelves a abrir nunca más?',
      weight: 6,
    },
    {
      text: '¿Has entregado cosas literalmente al segundo, con la adrenalina en el pecho y el cursor temblando, y lo has llamado "trabajar bien bajo presión"?',
      weight: 8,
    },
    {
      text: '¿Pospones incluso contestar mensajes de dos palabras porque "ahora mismo no te apetece el formato conversación"?',
      weight: 7,
    },
    {
      text: '¿Te has convencido de que rindes mejor bajo presión cuando la única razón de que haya presión es que llevas tres días sin hacer nada?',
      weight: 7,
    },
    {
      text: '¿Has arrastrado una fecha en el calendario solo para sentir que "tienes el control", sin haber movido ni un dedo en la tarea real?',
      weight: 6,
    },
    {
      text: '¿Empiezas proyectos nuevos con entusiasmo renovado para no tener que terminar los que ya llevas a medias desde octubre?',
      weight: 8,
    },
    {
      text: '¿Cada noche te prometes ser otra persona mañana y cada mañana niegas haber hecho esa promesa?',
      weight: 7,
    },
    {
      text: '¿Una tarea de 20 minutos la has aplazado cuatro días seguidos y luego la has hecho en 20 minutos exactos?',
      weight: 7,
    },
    {
      text: '¿Has dicho "mañana sin falta" más veces de las que has cumplido algo a tiempo en los últimos seis meses?',
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
        'Tú no pospones: ejecutas. Tu relación con la productividad es un romance legal, consentido y que da frutos. Eres lo que todos dicen que van a ser el lunes y nunca son.',
    },
    {
      maxRatio: 0.28,
      title: 'Demora educada',
      category: 'Procrastinación leve',
      description:
        'A veces te entretienes con algo brillante e irrelevante, pero tienes suficiente criterio para volver al carril antes de que todo arda.',
    },
    {
      maxRatio: 0.42,
      title: 'Especialista en "luego"',
      category: 'Procrastinación funcional',
      description:
        'Te retrasas con estilo, creatividad y excusas de primera. Cumples, sí, pero siempre al borde del infarto y con las manos sudando.',
    },
    {
      maxRatio: 0.58,
      title: 'Capitán del aplazamiento',
      category: 'Procrastinación seria',
      description:
        'Tu calendario es un monumento a las buenas intenciones. Sin fecha límite urgente y real, no existe movimiento. Punto.',
    },
    {
      maxRatio: 0.74,
      title: 'Ninja del último minuto',
      category: 'Procrastinación alta',
      description:
        'Conviertes cada entrega en una misión de rescate contrarreloj. Vives al borde de tus propios plazos y a estas alturas ya ni te alteran.',
    },
    {
      maxRatio: 0.89,
      title: 'Arquitecto del "mañana"',
      category: 'Procrastinación extrema',
      description:
        'Tu talento para posponer merece cátedra universitaria. Lo urgente siempre te encuentra en pijama improvisando con lo que hay.',
    },
    {
      maxRatio: 1,
      title: 'Procrastinador Profesional',
      category: 'Leyenda del aplazamiento',
      description:
        'Has elevado el "ya lo haré" a filosofía de vida. Tu yo futuro te manda facturas, amenazas y cartas certificadas de arrepentimiento que tú también dejas sin abrir.',
    },
  ],
};
