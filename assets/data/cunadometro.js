// /assets/data/cunadometro.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    {
      text: '¿Opinas sobre agujeros negros con la seguridad de un premio Nobel cuando tu única fuente es un titular que ni abriste porque "ya te lo imaginas"?',
      weight: 8,
    },
    {
      text: '¿Empiezas con "yo no soy experto, pero…" y a los 20 minutos has corregido a una neurocirujana, rediseñado los motores de los cohetes y arreglado el tráfico de toda la ciudad con un palillo en la boca?',
      weight: 7,
    },
    {
      text: '¿Corriges a la gente con aplomo notarial mientras te inventas la mitad de los datos en directo, como un mago que saca estadísticas de la chistera?',
      weight: 8,
    },
    {
      text: '¿En la comida de Navidad encadenas criptomonedas, agujeros negros y el VAR en el mismo sorbo de café, dejando a tu familia con la mirada perdida de los rehenes?',
      weight: 7,
    },
    {
      text: '¿Llamas "investigación propia" a tres audios reenviados de un grupo de WhatsApp que se llama "Los Cracks 2.0" y a un meme con la foto torcida?',
      weight: 7,
    },
    {
      text: '¿Tienes soluciones de servilleta para problemas que llevan 40 años sin resolver, y tu plan siempre empieza por "es muy fácil: lo que hay que hacer es…"?',
      weight: 7,
    },
    {
      text: '¿Sueltas "esto es así y punto" con martillo de juez, sabiendo que tu única bibliografía es tu propia voz interior y un primo que "sabe de esto"?',
      weight: 8,
    },
    {
      text: '¿Decir "no lo sé" te provoca un dolor casi físico, así que prefieres parir una teoría conspiranoica en el acto antes que admitir un hueco en tu sabiduría?',
      weight: 7,
    },
    {
      text: '¿Has reenviado audios apocalípticos de un señor gritando desde un coche que se acaba el aceite de oliva, sin comprobar absolutamente nada, porque verificar es de cobardes?',
      weight: 7,
    },
    {
      text: '¿Interrumpes debates para soltar tu sentencia final y huyes cambiando de tema como un atracador que tira la colilla y arranca la moto?',
      weight: 7,
    },
    {
      text: '¿Te encanta dejar caer un "el problema REAL es…" sin haber escuchado ni 30 segundos, como un águila que se lanza en picado sobre una conversación que no era suya?',
      weight: 7,
    },
    {
      text: '¿Te consideras la voz de la razón aunque a tu alrededor la gente esté haciendo señales de socorro con los ojos y pidiendo la cuenta sin haber pedido el postre?',
      weight: 6,
    },
    {
      text: '¿Confundes hablar alto y con confianza con tener razón, hasta el punto de que si gritaras un poco más creerías tener un doctorado?',
      weight: 7,
    },
    {
      text: '¿Tu deporte de élite es discutir con desconocidos en los comentarios hasta las 3 de la mañana, sudando, en calzoncillos, "porque alguien tiene que decirlo"?',
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
        'Sabes callar cuando toca y escuchas antes de sentenciar. En este país eso te convierte prácticamente en especie protegida: deberían ponerte un chip y soltarte en una reserva.',
    },
    {
      maxRatio: 0.28,
      title: 'Comentarista casual',
      category: 'Cuñadismo leve',
      description:
        'Te vienes arriba a ratos, pero conservas un mínimo de humildad intelectual que te salva de que tu familia organice una intervención con pancartas en la sobremesa.',
    },
    {
      maxRatio: 0.42,
      title: 'Analista de bar',
      category: 'Cuñadismo funcional',
      description:
        'Tienes opinión para todo y datos comprobables para nada. Eres un telediario pirata emitido desde una barra de bar, con la fiabilidad de un horóscopo fotocopiado.',
    },
    {
      maxRatio: 0.58,
      title: 'Oráculo de sobremesa',
      category: 'Cuñadismo serio',
      description:
        'Hablas como quien se ha leído el manual entero cuando solo viste el índice y la contraportada. Tu confianza cotiza más alto que tus fuentes, que son básicamente vibraciones.',
    },
    {
      maxRatio: 0.74,
      title: 'Influencer del cuñado',
      category: 'Cuñadismo alto',
      description:
        'Allá donde vas brota un debate que nadie pidió y que deja cadáveres emocionales. Eres una tertulia con piernas, un boletín de opiniones sin botón de apagado.',
    },
    {
      maxRatio: 0.89,
      title: 'Catedrático del "yo te digo"',
      category: 'Cuñadismo extremo',
      description:
        'Tu verbo no descansa ni sedado. Le explicarías la inflación a un Premio Nobel durante el postre, le corregirías la tesis y te irías a casa pensando "qué majo, ha aprendido mucho hoy".',
    },
    {
      maxRatio: 1,
      title: 'Cuñado Supremo',
      category: 'Jefe final de la opinión gratuita',
      description:
        'Nivel máximo: opinas de absolutamente todo sin tener ni idea de nada y encima lo disfrutas como un depredador en mar abierto. Si un día te quedas callado, los sismógrafos lo registrarán como anomalía y saldrás en el telediario.',
    },
  ],
};
