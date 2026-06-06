// /assets/data/mojigato.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    {
      text: '¿En un funeral, si a alguien se le escapa un pedo sonoro, reverberante y con eco en la capilla, apartas los ojos y estudias la veta del mármol del suelo con intensidad académica?',
      weight: 5,
    },
    {
      text: '¿Si por error llega un vídeo de contenido "picante" al grupo de WhatsApp de la familia, decides no contestar, cierras el teléfono y pasas el resto del día con cara de haber visto algo que no se puede desver?',
      weight: 6,
    },
    {
      text: '¿Ves a una pareja dándose el lote en la calle y algo en tu interior muere un poco, aunque intentes disimularlo mirando el escaparate de una ferretería?',
      weight: 7,
    },
    {
      text: '¿Usas tacos en conversaciones normales solo si te golpeas un dedo con algo y además pides perdón automáticamente a nadie en concreto?',
      weight: 5,
    },
    {
      text: '¿En una cena, si alguien empieza a contar un chiste de los verdes con entusiasmo, ya te has levantado para "ir al baño" antes de que llegue al remate?',
      weight: 7,
    },
    {
      text: '¿Defiendes la libertad de expresión y el "cada uno con lo suyo", pero si alguien no usa servilleta o eructa sin taparse te escandalizas como si hubiera declarado la guerra?',
      weight: 8,
    },
    {
      text: '¿Has bajado el volumen de la tele cuando en una serie empezaban a ponerse cariñosos… aunque estuvieras completamente solo en casa?',
      weight: 6,
    },
    {
      text: '¿Dices que no tienes prejuicios pero en situaciones de presión te brota el "¡Hay un mínimo de decoro!" con una espontaneidad que te delata?',
      weight: 10,
    },
    {
      text: '¿Has pensado "esto se está yendo de madre" en una conversación que en realidad iba sobre si la tortilla tiene cebolla o no?',
      weight: 7,
    },
    {
      text: '¿Si un amigo aparece en una cena formal con una camiseta con un dibujo explícito y sin contexto, evitas presentárselo a cualquier persona que conozcas como si él fuera el problema?',
      weight: 6,
    },
    {
      text: '¿En el vestuario del gimnasio, si hay un señor de 80 años paseándose en pelota picada sin ningún complejo mientras se seca los pies con tranquilidad, piensas que "eso no debería estar permitido"?',
      weight: 9,
    },
    {
      text: '¿Si un amigo te regala un libro de colorear de adultos con temática anatómica explícita, te ríes forzadamente, dices "estás muy loco" y lo guardas en el fondo del cajón más oscuro con la puerta cerrada con llave?',
      weight: 6,
    },
    {
      text: '¿Ver a alguien comer un plátano de forma sugerente en público te produce tal incomodidad que desvías la mirada como si te hubieran pillado mirando?',
      weight: 8,
    },
    {
      text: '¿En algún momento durante este test has pensado "esto es un poco pasado de rosca, ¿no?"?',
      weight: 10,
    },
  ],

  scoreMap: {
    si: 1,
    sí: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    {
      maxRatio: 0.14,
      title: 'Liberal de boquilla',
      category: 'Libertino de sofá',
      description:
        'Dices "el cuerpo es natural" y "cada uno con lo suyo", pero si tu vecino baja la basura en calzoncillos de cuadros te entra un leve mareo. Tienes un pudor residual que sale por los poros en cuanto la situación se pone mínimamente incómoda. En el fondo, preferirías que todo el mundo fuera un poco más discreto. Pero solo un poco.',
    },
    {
      maxRatio: 0.28,
      title: 'Pudoroso asintomático',
      category: 'Casto en diferido',
      description:
        'En el fondo te atraen los contenidos para adultos, pero hay algo en ti que siempre mira por encima del hombro antes de abrirlos, como si el espíritu de tu abuela te vigilara desde el cuadro del pasillo.',
    },
    {
      maxRatio: 0.42,
      title: 'Hipócrita de guante blanco',
      category: 'Doble moral deluxe',
      description:
        'No eres un santo ni de lejos, pero te encanta que los demás piensen que sí lo eres. Te escandalizas en público y en privado buscas cosas en internet que harían temblar al Marqués de Sade. Eres el típico que pone cara de horror mientras se pone las gafas para ver mejor el desastre. Llegarás al juicio final con el historial del navegador sin borrar.',
    },
    {
      maxRatio: 0.58,
      title: 'Mojigato de armario',
      category: 'Guardián del decoro',
      description:
        'Vas de moderno por la vida, usas ropa de marca y dices "tío" cada tres frases, pero cualquier referencia anatómica directa en conversación te provoca una contractura facial involuntaria.',
    },
    {
      maxRatio: 0.74,
      title: 'Fetichista de la moral',
      category: 'Comisario del decoro',
      description:
        'Eres el "bienqueda" oficial de tu grupo, con un censor interno que trabaja turnos extra y cobra en incomodidad ajena.',
    },
    {
      maxRatio: 0.89,
      title: 'Censor del mes',
      category: 'Inspector de la moral',
      description:
        'Estás tan almidonado que si te sientas de golpe podrías partirte. Tu hábitat natural es una junta de vecinos donde se debate el grosor reglamentario de las cortinas. Para ti, el desmadre empieza en cuanto alguien sonríe con demasiados dientes.',
    },
    {
      maxRatio: 1,
      title: 'Fósil viviente',
      category: 'Inquisidor del siglo XV',
      description:
        'Eres tan mojigato que le pides permiso al espejo antes de desnudarte. Tu nivel de puritanismo es capaz de paralizar una fiesta a dos kilómetros de distancia con solo cruzar los brazos. Probablemente pienses que el reggaetón es una invocación al caos y que las rodillas al aire son una provocación moral. Suéltate. Solo un poco. La vida son dos días y ya llevas uno.',
    },
  ],
};
