// /assets/data/mojigato.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    {
      text: '¿En una sala de espera en silencio absoluto, si a alguien se le escapa un pedo con reverberación de auditorio sinfónico, tú te pones a estudiar la veta del suelo con tal intensidad que parece que vas a doctorarte en geología?',
      weight: 5,
    },
    {
      text: '¿Si llega un vídeo "picante" por error al grupo de la familia, apagas el móvil, lo metes en un cajón como si fuera radiactivo y pasas el resto del día con cara de testigo protegido?',
      weight: 6,
    },
    {
      text: '¿Ves a una pareja dándose el lote en plena calle y algo dentro de ti fallece con dignidad, mientras finges un interés repentino y desesperado por el escaparate de una ferretería?',
      weight: 7,
    },
    {
      text: '¿Solo dices tacos si te machacas un dedo con la puerta, e incluso entonces pides perdón al aire, al universo y a tu abuela por si estaba escuchando?',
      weight: 5,
    },
    {
      text: '¿En una cena, cuando alguien arranca un chiste verde, ya estás levantándote "al baño" con la agilidad de quien evacúa un edificio en llamas, antes de que llegue el remate?',
      weight: 7,
    },
    {
      text: '¿Defiendes el "cada uno con lo suyo" hasta que alguien eructa sin taparse, momento en que te transformas en un tribunal militar con servilleta de tela?',
      weight: 8,
    },
    {
      text: '¿Has bajado el volumen de la tele cuando en una serie se ponían cariñosos… estando completamente solo en casa, con las persianas bajadas y la puerta cerrada con dos vueltas?',
      weight: 6,
    },
    {
      text: '¿Dices que no tienes prejuicios pero bajo presión te brota un "¡Hay un MÍNIMO de decoro!" tan espontáneo que parece que llevas un mayordomo victoriano de bolsillo instalado de fábrica?',
      weight: 10,
    },
    {
      text: '¿Has pensado "esto se está yendo de madre" en una conversación que iba, literalmente, sobre si la tortilla lleva cebolla, como si estuvieran desvalijando un banco encima de la mesa?',
      weight: 7,
    },
    {
      text: '¿Si un amigo aparece en una cena formal con una camiseta con un dibujo explícito, lo gestionas como un escolta gestiona una amenaza: aislándolo de cualquier persona que conozcas?',
      weight: 6,
    },
    {
      text: '¿En el vestuario del gimnasio, ante un señor de 80 años paseándose en pelota picada con la serenidad de un emperador romano, piensas que "eso debería estar tipificado en el Código Penal"?',
      weight: 9,
    },
    {
      text: '¿Si te regalan un libro de colorear de adultos con anatomía explícita, sueltas un "jajaja estás fatal" de circunstancias y lo entierras en el cajón más profundo, debajo de las facturas de 2014, con llave?',
      weight: 6,
    },
    {
      text: '¿Ver a alguien comerse un plátano de forma sugerente en público te genera tal cortocircuito que desvías la mirada como si la pillada fuera tuya y vinieras de robar?',
      weight: 8,
    },
    {
      text: '¿En algún momento de este test has pensado "esto está un poco pasado de rosca" y te has planteado denunciarnos a alguna autoridad competente?',
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
        'Dices "el cuerpo es natural" y "cada uno con lo suyo", pero si tu vecino baja la basura en calzoncillos de cuadros te entra un mareo diplomático. Tienes un pudor residual que se te escapa por los poros en cuanto la cosa se pone incómoda. En el fondo querrías que todos fueran un poco más discretos. Pero solo un poco, no te vayamos a llamar carca.',
    },
    {
      maxRatio: 0.28,
      title: 'Pudoroso asintomático',
      category: 'Casto en diferido',
      description:
        'En el fondo te atraen los contenidos para adultos, pero algo en ti mira por encima del hombro antes de abrirlos, como si el espíritu de tu abuela te vigilara desde el cuadro del pasillo con prismáticos y libreta.',
    },
    {
      maxRatio: 0.42,
      title: 'Hipócrita de guante blanco',
      category: 'Doble moral deluxe',
      description:
        'No eres un santo ni de lejos, pero te encanta que lo parezca. Te escandalizas en público y en privado buscas cosas que harían sonrojar al Marqués de Sade. Eres el típico que pone cara de horror mientras se pone las gafas para ver mejor el desastre. Llegarás al juicio final con el historial sin borrar y pidiendo modo incógnito.',
    },
    {
      maxRatio: 0.58,
      title: 'Mojigato de armario',
      category: 'Guardián del decoro',
      description:
        'Vas de moderno, llevas ropa de marca y dices "tío" cada tres frases, pero una referencia anatómica directa te provoca una contractura facial que requiere fisioterapia.',
    },
    {
      maxRatio: 0.74,
      title: 'Fetichista de la moral',
      category: 'Comisario del decoro',
      description:
        'Eres el "bienqueda" oficial de tu grupo: un censor interno que hace turnos dobles, cobra en incomodidad ajena y no se coge vacaciones ni en agosto.',
    },
    {
      maxRatio: 0.89,
      title: 'Censor del mes',
      category: 'Inspector de la moral',
      description:
        'Estás tan almidonado que si te sientas de golpe te partes por la mitad con un crujido seco. Tu hábitat natural es una junta de vecinos debatiendo el grosor reglamentario de las cortinas. Para ti el desmadre empieza cuando alguien sonríe enseñando demasiados dientes.',
    },
    {
      maxRatio: 1,
      title: 'Fósil viviente',
      category: 'Inquisidor del siglo XV',
      description:
        'Eres tan mojigato que le pides permiso al espejo antes de desnudarte y aun así te tapa los ojos. Tu puritanismo paraliza fiestas a dos kilómetros con solo cruzar los brazos. Probablemente creas que el reggaetón es una invocación al caos y que unas rodillas al aire son una provocación moral. Suéltate. Solo un poco. La vida son dos días y ya llevas uno y medio.',
    },
  ],
};
