// /assets/data/antisocial.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    { text: '¿Cruzas la calle para no tener que saludar a un conocido, aunque tengas que dar una vuelta de 400 metros por zonas de obras?', weight: 7 },
    { text: '¿Cuando te cancelan los planes sientes un alivio tan físico que casi te emocionas, como si te hubieran perdonado una deuda?', weight: 7 },
    { text: '¿Prefieres tener una conversación profunda con tu perro —o con la pared— antes que con la mayoría de personas que conoces?', weight: 7 },
    { text: '¿Has llegado a fingir que no oyes el timbre de casa porque simplemente no tenías ganas de explicar quién era y por qué no abrías?', weight: 7 },
    { text: '¿Lees los mensajes del grupo de WhatsApp familiar con la misma energía con la que revisas un extracto bancario: resignación pura?', weight: 7 },
    { text: '¿Cuando alguien te dice «quedamos pronto» rezas mentalmente para que ese «pronto» sea en otra vida y en otro continente?', weight: 7 },
    { text: '¿Has calculado cuánto tardarías en salir del supermercado si te pones en la cola más larga solo para evitar saludar a alguien que viste en la corta?', weight: 7 },
    { text: '¿Consideras que una noche perfecta es estar en casa, en silencio, con el móvil boca abajo y sin responder a nadie durante al menos cuatro horas?', weight: 7 },
    { text: '¿Antes de ir a cualquier evento social haces un análisis de riesgo interno que incluye cuántas personas habrá, rutas de escape y excusas para irte pronto?', weight: 7 },
    { text: '¿Has rechazado una oferta de trabajo, una cita o una invitación simplemente porque implicaba hablar con más gente de la que considerabas razonable?', weight: 7 },
    { text: '¿Te produces más energía de la que gastas cuando estás solo, y el efecto contrario cuando estás rodeado de gente aunque te caigan bien?', weight: 7 },
    { text: '¿Has tenido que hacer como que contestas una llamada urgente para escapar de una conversación que no querías tener en ningún universo paralelo?', weight: 8 },
    { text: '¿Cuando te dicen «¿puedo pasar un momento?» ya sabes que ese «momento» tiene entre 45 minutos y la eternidad, y empiezas a lamentarlo antes de abrir la puerta?', weight: 8 },
    { text: '¿Describes tu ideal de vida como «una cabaña en el monte con wifi decente y sin vecinos en un radio de tres kilómetros»?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Sociable de Guardia', category: 'Sociabilidad funcional', description: 'Tienes amigos, sales, charlas y no sufres en exceso. Eres estadísticamente normal y eso, en este test, es lo más raro que hay. Enhorabuena por tu aburrida salud social.' },
    { maxRatio: 0.28, title: 'Introvertido Amateur', category: 'Introversión leve', description: 'Necesitas tus ratos de silencio y algún que otro plan cancelado para recargar pilas, pero de momento aguantas la sociedad sin demandar a nadie. En prácticas.' },
    { maxRatio: 0.42, title: 'Selectivo Social', category: 'Introversión moderada', description: 'Has optimizado tu círculo social al mínimo viable. Tus amigos son pocos pero elegidos con la precisión de un sommelier de la humanidad. El resto: que se busquen la vida.' },
    { maxRatio: 0.58, title: 'Reservado Avanzado', category: 'Antisocialidad emergente', description: 'Tienes un sistema de filtros sociales que haría llorar a un algorítmo de LinkedIn. Sales, sí, pero con contrato firmado: hora de llegada, hora de salida y cláusula de escape.' },
    { maxRatio: 0.74, title: 'Antisocial Funcional', category: 'Antisocialidad consolidada', description: 'Vives en sociedad porque no queda más remedio, pero tus estrategias de evasión son dignas de manual. El mundo es un open space que nadie te pidió y llevas años pidiendo el despacho.' },
    { maxRatio: 0.89, title: 'Ermitaño en Prácticas', category: 'Antisocialidad avanzada', description: 'Ya tienes la cabaña mental construida. Solo te falta el terreno. Tus relaciones sociales se cuentan con los dedos de una mano y sobran dedos. Y estás perfectamente bien con eso.' },
    { maxRatio: 1, title: 'Ermitaño Certificado', category: 'Maestro del aislamiento voluntario', description: 'Eres una leyenda entre tus escasos conocidos porque nadie sabe muy bien si sigues vivo. Tu cabaña imaginaria ya tiene calefacción, huerto y política de no-visitas. Diploma enviado por correo, sin acto de entrega.' },
  ],
};
