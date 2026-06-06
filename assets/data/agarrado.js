// /assets/data/agarrado.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has apagado la luz del pasillo a mitad del trayecto para ahorrar exactamente un céntimo, aunque luego te hayas pegado contra la puerta del baño?',
      weight: 7,
    },
    {
      text: '¿Reutilizas la misma bolsita de té tantas veces que ya solo da agua caliente con nostalgia de infusión?',
      weight: 8,
    },
    {
      text: '¿Cuando alguien propone pedir a domicilio, tú ya estás en la cocina abriendo la nevera para "tirar de lo que hay" y montarte un festín con dos cuartos de caldo y un poco de arroz del martes?',
      weight: 7,
    },
    {
      text: '¿Has caminado 45 minutos bajo lluvia torrencial para no pagar 1,50€ de autobús y además lo has contado con orgullo en la cena?',
      weight: 6,
    },
    {
      text: '¿Acumulas servilletas de papel, sobrecitos de azúcar, palillos y salsas de ketchup como si prepararas una reserva para el apocalipsis?',
      weight: 9,
    },
    {
      text: '¿Antes de pedir en el bar calculas mentalmente el precio por mililitro de la caña, la jarra y la botella, y luego ordenas el más rentable con cara de CEO?',
      weight: 8,
    },
    {
      text: '¿Has cortado una esponja de cocina por la mitad "para que dure el doble" y te has sentido un genio del ahorro doméstico?',
      weight: 7,
    },
    {
      text: '¿Tu calefacción solo se activa cuando puedes ver tu propio aliento dentro de casa y empiezas a notar los dedos de los pies?',
      weight: 6,
    },
    {
      text: '¿Cuando tienes invitados, calculas mentalmente cuántos vasos salen de cada botella para controlar que nadie "se pase de la raya"?',
      weight: 8,
    },
    {
      text: '¿Has lavado, doblado y guardado papel de aluminio usado como si fuera un bien escaso a proteger para generaciones futuras?',
      weight: 7,
    },
    {
      text: '¿Prefieres pagar el envío antes que comprar algo "no estrictamente necesario" para llegar al mínimo, aunque el artículo cueste 2€?',
      weight: 6,
    },
    {
      text: '¿Dejar propina te provoca una contractura emocional aunque el camarero te haya tratado como si fueras de la familia?',
      weight: 7,
    },
    {
      text: '¿Revisas el ticket del supermercado con lupa y ansiedad antes de salir por si hay una diferencia de 4 céntimos en tu contra?',
      weight: 7,
    },
    {
      text: '¿En algún momento de este test has pensado "cuánta batería está gastando esto" y te ha dado algo por dentro?',
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
