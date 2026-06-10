// /assets/data/agarrado.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has apagado la luz del pasillo a mitad de trayecto para ahorrar un céntimo, te has abierto la ceja contra el marco de la puerta y aun así has pensado "ha merecido la pena"?',
      weight: 7,
    },
    {
      text: '¿Tu bolsita de té lleva tantas reutilizaciones que ya no es una infusión, es agua caliente con trauma generacional y un vago recuerdo de Sri Lanka?',
      weight: 8,
    },
    {
      text: 'Alguien propone pedir comida a domicilio y tú ya estás exhumando de la nevera medio caldo del martes, tres aceitunas huérfanas y un yogur caducado "de fecha, no de espíritu". ¿Te suena?',
      weight: 7,
    },
    {
      text: '¿Has cruzado la ciudad andando 45 minutos bajo un diluvio bíblico para no pagar 1,50€ de bus, has pillado una pulmonía y aun así lo has contado en la cena como una gesta militar?',
      weight: 6,
    },
    {
      text: '¿Tu cajón de la cocina es un búnker de servilletas, sobres de azúcar, palillos y ketchups robados con el que podrías abastecer a un país pequeño durante una guerra nuclear?',
      weight: 9,
    },
    {
      text: '¿Antes de pedir en el bar haces una auditoría mental del precio por mililitro de caña, jarra y botella, y anuncias el resultado con la solemnidad de un CEO presentando resultados trimestrales?',
      weight: 8,
    },
    {
      text: '¿Has partido una esponja por la mitad "para que dure el doble", luego has partido las mitades, y ahora friegas con un confeti amarillo mientras te sientes Warren Buffett?',
      weight: 7,
    },
    {
      text: '¿Tu calefacción solo se enciende cuando ves tu propio aliento dentro del salón, los pingüinos piden asilo en tu cocina y tu familia firma documentos con manoplas?',
      weight: 6,
    },
    {
      text: 'Cuando tienes invitados, ¿vigilas la botella como un halcón con Excel mental, contando vasos servidos y fichando al que repite como si fuera un atraco a mano armada?',
      weight: 8,
    },
    {
      text: '¿Has lavado, secado, planchado y archivado papel de aluminio usado como si fuera un pergamino del Mar Muerto que debes legar a tus nietos en testamento notarial?',
      weight: 7,
    },
    {
      text: '¿Has pasado 40 minutos buscando qué meter en el carrito para librarte de 2,99€ de gastos de envío, valorando tu hora de vida exactamente en cero euros?',
      weight: 6,
    },
    {
      text: '¿Dejar propina te provoca un microinfarto espiritual aunque el camarero te haya tratado mejor que tu propia madre y te haya reído los chistes malos?',
      weight: 7,
    },
    {
      text: '¿Repasas el ticket del súper ahí mismo, bloqueando la salida, con la intensidad de un perito judicial, por si te han metido 4 céntimos de más en las zanahorias?',
      weight: 7,
    },
    {
      text: 'Sé sincero: ¿en algún momento de este test has pensado "cuánta batería y cuántos datos me está fundiendo esto" y has notado un pinchazo en el alma?',
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
      title: 'Manirroto accidental',
      category: 'Ahorro simbólico',
      description:
        'Intentas ahorrar, pero te puede la comodidad y el capricho. Eres más de redondear para arriba que de auditar el ticket. Que aproveche.',
    },
    {
      maxRatio: 0.28,
      title: 'Ajustado con dignidad',
      category: 'Ahorro moderado',
      description:
        'Controlas gastos sin perder la cabeza del todo. Todavía recuerdas que vivir también implica pagar algo de vez en cuando sin llorar.',
    },
    {
      maxRatio: 0.42,
      title: 'Contable del céntimo',
      category: 'Ahorro metódico',
      description:
        'Tu relación con el dinero es íntima, intensa y a veces inquietante. Tienes hojas mentales de cálculo hasta para comprar chicles en el quiosco.',
    },
    {
      maxRatio: 0.58,
      title: 'Inspector del ticket',
      category: 'Ahorro serio',
      description:
        'No se te escapa ni una oferta ni un cargo de más. Si hubiera unas olimpiadas del cupón y el descuento, ya estarías en el podio con la medalla de los 3€ ahorrados.',
    },
    {
      maxRatio: 0.74,
      title: 'Ninja del descuento',
      category: 'Ahorro extremo',
      description:
        'Conoces las promociones mejor que los propios empleados de la tienda. Vives en modo caza-gangas permanente y lo disfrutas con un placer que no compartes con nadie.',
    },
    {
      maxRatio: 0.89,
      title: 'Señor/a del reciclaje infinito',
      category: 'Ahorro épico',
      description:
        'Reutilizas todo lo reutilizable y también lo que no lo es. Cada objeto tiene contigo al menos tres vidas y un plan de jubilación. La esponja en dos trozos es solo el comienzo.',
    },
    {
      maxRatio: 1,
      title: 'El Agarrado Legendario',
      category: 'Ahorro apocalíptico',
      description:
        'Has llevado el ahorro a una dimensión donde ya no hay retorno. Doblas las bolsas del súper con precisión de origami, negocias el precio del aire y encuentras un truco para ahorrar hasta cuando duermes. Eres una leyenda. Una leyenda que nadie invita a pagar la ronda.',
    },
  ],
};
