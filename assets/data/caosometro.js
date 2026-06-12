// /assets/data/caosometro.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    { text: '¿Tienes un sistema de organización mental que solo tú entiendes y que en realidad no entiendes del todo pero defiendes con fervor ante cualquier crítica?', weight: 7 },
    { text: '¿Sabes exactamente dónde está algo importante siempre y cuando "exactamente" signifique "en algún lugar de este piso en un radio de diez metros"?', weight: 7 },
    { text: '¿Tus llaves tienen un lugar fijo que varía cada día según factores que ni tú mismo podrías explicar con coherencia?', weight: 7 },
    { text: '¿Tienes pilas de cosas que "ya organizarás este fin de semana" que llevan ahí desde antes de que existiera ese modelo de mueble?', weight: 7 },
    { text: '¿Usas los correos sin abrir como lista de tareas pendientes y tu bandeja de entrada tiene más de 400 mensajes no leídos en este momento?', weight: 7 },
    { text: '¿Has buscado un documento importante durante 25 minutos, lo has encontrado dentro de una funda de gafas, dentro de una bolsa, dentro de un cajón que no abres desde 2021?', weight: 7 },
    { text: '¿Tienes al menos una silla, sillón o esquina del dormitorio que ejerce como cajón de todo lo que no sabes dónde poner, que ya no sirve de asiento desde hace meses?', weight: 7 },
    { text: '¿Cuando alguien te pregunta si eres organizado respondes que sí con una convicción que te sorprende incluso a ti mismo?', weight: 7 },
    { text: '¿La superficie de tu escritorio o mesa de trabajo tiene más capas estratigráficas que un yacimiento arqueológico y tú conoces la cronología aproximada de cada una?', weight: 7 },
    { text: '¿Has llegado tarde a algo importante porque no encontrabas algo imprescindible que estaba exactamente donde lo dejaste pero no donde lo buscabas?', weight: 7 },
    { text: '¿Tus listas de tareas tienen su propia lista de tareas y ninguna de las dos se actualiza con la frecuencia que merecería?', weight: 7 },
    { text: '¿Describes tu método de organización como "caótico pero funcional" sabiendo perfectamente que la segunda parte de esa frase es optimista?', weight: 8 },
    { text: '¿Has comprado algo que ya tenías porque no lo encontrabas, y lo has encontrado dos días después justo donde lo habías dejado la primera vez?', weight: 8 },
    { text: '¿Si alguien ordenara tu caos sin avisarte serías incapaz de encontrar nada durante semanas porque el desorden era parte del sistema?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Ordenado Funcional', category: 'Entropía vital baja', description: 'Tienes un lugar para cada cosa y cada cosa en su lugar. Eres una anomalía estadística y probablemente insoportable en casa compartida. Enhorabuena por tu irreprochable y ligeramente alarmante organización.' },
    { maxRatio: 0.28, title: 'Caótico Ocasional', category: 'Entropía vital leve', description: 'Tienes rachas de orden y rachas de desastre. En los buenos momentos eres organizado; en los malos, eres humano. La silla de la ropa existe pero no domina todavía la habitación.' },
    { maxRatio: 0.42, title: 'Desorganizado con Conciencia', category: 'Entropía vital moderada', description: 'Sabes que deberías ordenar más. Incluso tienes planes concretos para hacerlo. El problema es que llevas pensando en esos planes desde que era razonable hacerlos y ya no lo es tanto.' },
    { maxRatio: 0.58, title: 'Maestro del Caos Funcional', category: 'Entropía vital alta', description: 'Tu desorden tiene su propia lógica interna que no está documentada en ningún sitio excepto en tu cabeza, y ahí tampoco del todo. Tardas 20 minutos en encontrar algo pero siempre lo encuentras. Más o menos.' },
    { maxRatio: 0.74, title: 'Artista del Desorden', category: 'Entropía vital severa', description: 'Tu entorno es una instalación artística que solo tú puedes interpretar. Las visitas lo llaman "caos"; tú lo llamas "sistema vivo". Las llaves aparecen solas cuando dejas de buscarlas. Siempre.' },
    { maxRatio: 0.89, title: 'Señor/a del Caos', category: 'Entropía vital avanzada', description: 'El desorden ya no te afecta emocionalmente: lo has integrado como rasgo de personalidad. Tus documentos importantes tienen vida propia y tu escritorio ha sido declarado zona de interés arqueológico.' },
    { maxRatio: 1, title: 'Dios del Caos Primordial', category: 'Entropía vital absoluta', description: 'Eres una fuerza de la naturaleza. El orden no te aplica. Tienes cosas de hace diez años cuya función ya no recuerdas pero que conservas "por si acaso". El universo se expande; tu caos también. Y van a la par.' },
  ],
};
