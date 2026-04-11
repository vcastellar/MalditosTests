// /assets/data/mojigato.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    {
      text: '¿En un funeral, si de repente a alguien se le escapa un pedo sonoro y con eco, miras al suelo fingiendo que analizas la veta del mármol?',
      weight: 5,
    },
    {
      text: '¿Si te pasan un vídeo de contenido “picante” por error en el grupo de WhatsApp de la familia, decides no contestar, indignado?',
      weight: 6,
    },
    {
      text: '¿Vas por la calle, ves a una pareja dándose el lote y llegas a pensar que igual es un intento de reanimación y te planteas llamar a una ambulancia?',
      weight: 7,
    },
    {
      text: '¿Recurres al uso de tacos y palabrotas en una conversación normal solo si te martilleas un dedo, y además pides perdón después?',
      weight: 5,
    },
    {
      text: '¿En una cena, si alguien empieza a contar un chiste verde de los que harían sonrojar a una estatua, te levantas para ir al baño hasta que acabe?',
      weight: 7,
    },
    {
      text: '¿Defiendes la libertad total pero te escandalizas si alguien no usa servilleta?',
      weight: 8,
    },
    {
      text: '¿Has sentido la necesidad de bajar el volumen cuando en una serie empiezan a gemir… aunque estés solo en casa?',
      weight: 6,
    },
    {
      text: '¿Crees que no tienes prejuicios, pero en situaciones de presión te brota el “¡Por favor, un poco de respeto!”?',
      weight: 10,
    },
    {
      text: '¿Has pensado “esto se está yendo de madre” en una conversación que en realidad iba sobre croquetas?',
      weight: 7,
    },
    {
      text: '¿Si un amigo tuyo aparece en una cena formal con una camiseta con una imagen hiperrealista de una colonoscopia, sientes vergüenza ajena y evitas presentárselo a nadie?',
      weight: 6,
    },
    {
      text: '¿En el gimnasio, si en las duchas hay un señor de 80 años paseándose totalmente desnudo mientras se seca los pies con el secador de manos común, piensas que “un poco de pudor y decoro no vendrían mal en este centro”?',
      weight: 9,
    },
    {
      text: '¿Si un amigo “graciosillo” te regala un libro de colorear titulado “Mandala-Potorros: Encuentra tu paz interior pintando genitales”, te ríes forzadamente, dices “qué loco estás” y lo guardas en el cajón de los calcetines “por si acaso” (pero con la puerta cerrada con llave)?',
      weight: 6,
    },
    {
      text: '¿Te incomoda tanto ver a alguien comiendo un plátano de forma sugerente que apartas la mirada automáticamente?',
      weight: 8,
    },
    {
      text: '¿Después de hacer este test has pensado “Esto es un poco vulgar, ¿no?”?',
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
        'Dices que "el cuerpo es natural" y que "hay que ser libre", pero si ves a tu vecino en calzoncillos bajando la basura, llamas al administrador. Tienes un pudor residual que te sale por los poros en cuanto la situación se pone mínimamente "marrana"',
    },
    {
      maxRatio: 0.28,
      title: 'Pudoroso asintomático',
      category: 'Casto en diferido',
      description:
        'En el fondo te gustaría pintar mandalas para adultos, pero te preocupa que el espíritu de tu abuela te vigile desde el cuadro del pasillo.',
    },
    {
      maxRatio: 0.42,
      title: 'Hipócrita de guante blanco',
      category: 'Doble moral deluxe',
      description:
        'No eres un santo, pero te encanta que los demás piensen que sí. Te escandalizas en público pero en privado buscas en Google cosas que harían temblar al mismísimo Marqués de Sade. Eres el típico que dice "¡Qué horror!" mientras se pone las gafas para ver mejor el desastre. Tu mojigatería es de postureo, pero el juicio final te pillará con el historial del navegador sin borrar.',
    },
    {
      maxRatio: 0.58,
      title: 'Mojigato de closet',
      category: 'Guardián del decoro',
      description:
        'Vas de moderno por la vida, usas zapatillas de marca y dices "tío" cada tres frases, pero el libro de los potorros te ha provocado un microinfarto.',
    },
    {
      maxRatio: 0.74,
      title: 'Fetichista de la moral',
      category: 'Comisario del decoro',
      description:
        'Eres un "bienqueda" con un censor interno que trabaja horas extra.',
    },
    {
      maxRatio: 0.89,
      title: 'Censor del mes',
      category: 'Inspector de la moral',
      description:
        '“Eres tan almidonado que si te sientas rápido, te rompes. Tu hábitat natural es una junta de vecinos donde se discute el grosor permitido de las cortinas. Para ti, el desmadre empieza en cuanto alguien sonríe con demasiados dientes.”',
    },
    {
      maxRatio: 1,
      title: 'Fósil viviente',
      category: 'Inquisidor sel siglo XV',
      description:
        'Eres tan mojigato que pides permiso para desnudarte delante del espejo. Tu nivel de puritanismo es capaz de detener una orgía a tres kilómetros de distancia solo con tu mirada de reprobación. Probablemente creas que el reggaetón es una invocación satánica y que las rodillas descubiertas son pecado. ¡Suéltate un poco, que la vida son dos días y ya llevas uno!',
    },
  ],
};
