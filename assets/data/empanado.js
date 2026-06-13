// /assets/data/empanado.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    { text: '¿Compruebas el móvil antes de levantarte de la cama, durante el tiempo que tardas en levantarte de la cama y mientras te levantas de la cama?', weight: 7 },
    { text: '¿Has sentido una vibración en el bolsillo, sacado el móvil con urgencia cardíaca y descubierto que no tenías el móvil en el bolsillo?', weight: 7 },
    { text: '¿Te produces una ansiedad leve pero real cuando el wifi tarda más de diez segundos en conectar, como si el edificio estuviera ardiendo?', weight: 7 },
    { text: '¿Duermes con el móvil en la mesita, lo miras nada más despertar y lo tienes en la mano antes de recordar tu propio nombre?', weight: 7 },
    { text: '¿Has recargado el móvil al 40% porque "no sabes lo que puede pasar" y llevar un cable de repuesto te parece solo sentido común?', weight: 7 },
    { text: '¿Cuando entras a un bar o restaurante lo primero que preguntas es la contraseña del wifi, antes del menú, antes del baño y antes de saber si hay sitio?', weight: 7 },
    { text: '¿Has tenido que repetir una conversación presencial porque ibas mirando el móvil y no procesaste nada de lo que te dijeron?', weight: 7 },
    { text: '¿Abres una aplicación, no recuerdas para qué la abriste, la cierras, y dos minutos después la vuelves a abrir con exactamente el mismo resultado?', weight: 7 },
    { text: '¿Usas el móvil en el baño como norma general, no como excepción, y lo consideras un uso perfectamente razonable de tu tiempo libre?', weight: 7 },
    { text: '¿Has pausado una conversación real con una persona real delante tuyo para responder a alguien en el móvil sin percibir ninguna contradicción?', weight: 7 },
    { text: '¿Si te quitan el móvil 24 horas sin previo aviso sientes que pierdes acceso a tu personalidad, tu agenda, tu memoria y tu razón de existir?', weight: 7 },
    { text: '¿Fotografías la comida antes de comerla por si acaso, aunque no la vayas a publicar, porque el instinto ya es más fuerte que la voluntad?', weight: 8 },
    { text: '¿Has buscado en Google algo que ya sabías para confirmarlo, y mientras buscabas ya habías olvidado lo que buscabas y abierto tres pestañas más?', weight: 8 },
    { text: '¿Eres incapaz de esperar en cualquier fila, sala de espera o semáforo sin sacar el móvil aunque no tengas notificaciones, mensajes ni motivo alguno?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Analógico con Dignidad', category: 'Independencia digital alta', description: 'Usas el móvil como herramienta, no como órgano vital. Eres una rareza estadística en peligro de extinción. La gente te mira en los restaurantes con una mezcla de respeto y sospecha.' },
    { maxRatio: 0.28, title: 'Usuario Moderado', category: 'Dependencia digital baja', description: 'Lo usas bastante pero aún recuerdas cómo era la vida sin él. Tienes el síndrome de la vibración fantasma de vez en cuando pero todavía puedes cenar sin fotografiar el plato.' },
    { maxRatio: 0.42, title: 'Enganchado Funcional', category: 'Dependencia digital media', description: 'El móvil ya forma parte de tu rutina como los dientes o el café. Lo usas demasiado pero al menos eres consciente de ello, que es el primer paso hacia ningún lado porque lo sigues usando igual.' },
    { maxRatio: 0.58, title: 'Empanado Digital Certificado', category: 'Dependencia digital alta', description: 'Vives en un estado semiconsciente donde el mundo real es solo el fondo de pantalla del mundo digital. Tienes notificaciones de apps que ni recuerdas haber instalado y las atiendes todas.' },
    { maxRatio: 0.74, title: 'Adicto con Coartada', category: 'Dependencia digital severa', description: 'Llamas "estar informado" a lo que en realidad es mirar el móvil 94 veces al día. Tu tiempo de pantalla es una cifra que prefieres no enseñar a nadie, ni a ti mismo.' },
    { maxRatio: 0.89, title: 'Cyborg en Construcción', category: 'Fusión digital avanzada', description: 'La diferencia entre tú y tu móvil es filosófica y cada vez más discutible. Sin batería eres técnicamente otro ser. Con batería, eres tú: ansioso, conectado y ligeramente ausente.' },
    { maxRatio: 1, title: 'Cyborg Fundido', category: 'Integración digital total', description: 'Ya no usas el móvil: eres el móvil. Tu pulgar tiene callos, tu cuello está permanentemente inclinado y tu cerebro funciona en modo notificación continua. La cabaña del antisocial al menos tenía vistas; tú solo tienes feed.' },
  ],
};
