// /assets/data/sabelotodometro.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    { text: '¿Arrancas frases con "de hecho..." con tanta frecuencia que tus amigos ya lo oyen en sueños, como un acúfeno con opiniones?', weight: 7 },
    { text: '¿Has corregido una tilde en mitad de una birra con la solemnidad de quien desactiva una bomba nuclear, convencido de que la RAE te debe una medalla?', weight: 7 },
    { text: '¿Has citado "un estudio de Harvard" en un debate sobre macarrones con nata, sabiendo perfectamente que ese estudio vive solo en tu imaginación?', weight: 7 },
    { text: '¿Cuando alguien dice un dato incorrecto, aguantas la corrección como quien aguanta un estornudo: tres segundos, sudando, y al final explota delante de todos?', weight: 7 },
    { text: '¿Interrumpes con "a ver, cómo funciona esto realmente" poniendo voz de documental, como si la otra persona fuera un ñu y tú David Attenborough?', weight: 7 },
    { text: '¿Das masterclasses magistrales sobre temas que descubriste en un reel hace exactamente 11 minutos, con la seguridad de un catedrático emérito?', weight: 7 },
    { text: '¿Soltar "ya lo decía yo" te produce un subidón que ni un aumento de sueldo, ni un sorteo, ni que te devuelva dinero Hacienda?', weight: 7 },
    { text: '¿Has convertido un trayecto de ascensor de dos plantas en una TED Talk con turno de preguntas que nadie pidió y nadie pudo evitar?', weight: 7 },
    { text: '¿Te da urticaria física que alguien diga "creo que..." en vez de sentenciar, porque la duda ajena te parece una enfermedad contagiosa?', weight: 7 },
    { text: '¿Has hecho de VAR de la realidad en un cumpleaños infantil, parando la fiesta para revisar la jugada y anular un dato del abuelo?', weight: 7 },
    { text: '¿Defiendes tus gustos personales con "datos objetivos y contrastados", incluyendo el orden moralmente correcto de los ingredientes de un sándwich?', weight: 7 },
    { text: '¿Antes de pronunciar "no tengo ni idea" preferirías improvisar una conferencia entera en modo experto premium, con gráficas inventadas si hace falta?', weight: 7 },
    { text: '¿En el grupo ya te llaman "Wikipedia", pero una Wikipedia poseída que se abre sola a las 3 de la mañana y no tiene botón de cerrar pestaña?', weight: 8 },
    { text: '¿Has opinado con seguridad absoluta de la Champions, los agujeros negros y las corrientes oceánicas del Pacífico en el mismo almuerzo, entre el primero y el postre?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Aprendiz de enciclopedia', category: 'Sabiduría no solicitada mínima', description: 'Todavía puedes mantener una conversación sin convertirla en un simposio con acreditaciones. Hoy en día eso es casi un superpoder; consérvalo en formol.' },
    { maxRatio: 0.28, title: 'Puntualizador amable', category: 'Sabelotodismo leve', description: 'Corriges cositas de vez en cuando, pero aún eres soportable en comidas familiares de tres horas. Estás en la frontera: un "de hecho" más y cruzas sin retorno.' },
    { maxRatio: 0.42, title: 'Wikipedia con piernas', category: 'Sabelotodismo funcional', description: 'Siempre tienes un dato a mano. A veces es útil. Las otras cuarenta veces es un paquete que nadie pidió y que entregas igualmente, en mano y con firma.' },
    { maxRatio: 0.58, title: 'Comentarista absoluto', category: 'Sabelotodismo serio', description: 'No dejas tema sin diagnosticar, analizar y sentenciar. Tu opinión entra en todas las conversaciones como un okupa con powerpoint: sin invitación y dispuesta a quedarse.' },
    { maxRatio: 0.74, title: 'Doctor del "de hecho"', category: 'Sabelotodismo alto', description: 'Has convertido corregir a los demás en deporte de alto rendimiento: entrenamiento diario, cero días de descanso y lesiones, pero siempre en los demás.' },
    { maxRatio: 0.89, title: 'Cátedra ambulante', category: 'Sabelotodismo extremo', description: 'Tu superioridad argumental se despliega en cualquier contexto, incluido aquel en el que alguien solo preguntaba dónde estaba el baño y recibió la historia del alcantarillado romano.' },
    { maxRatio: 1, title: 'Oráculo no solicitado', category: 'Jefe final del sabelotodo', description: 'Todo lo sabes, todo lo explicas, todo lo corriges y absolutamente nadie te ha pedido nada de eso. Eres una enciclopedia que camina, habla, no tiene botón de silencio y viene con actualizaciones automáticas a la hora de cenar.' },
  ],
};
