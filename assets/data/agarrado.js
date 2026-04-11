// /assets/data/agarrado.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    {
      text: '¿Has apagado la luz del pasillo a mitad de camino para ahorrar exactamente un céntimo, aunque termines dándote con la puerta?',
      weight: 7,
    },
    {
      text: '¿Reutilizas la misma bolsita de té tantas veces que ya solo da agua caliente con recuerdos de sabor?',
      weight: 8,
    },
    {
      text: '¿Cuando alguien propone pedir comida, abres la nevera y preparas un “picoteo” con sobres sueltos de ketchup y pan duro?',
      weight: 7,
    },
    {
      text: '¿Has llegado a caminar 40 minutos para no pagar 1 euro de bus, aunque estuviera lloviendo en horizontal?',
      weight: 6,
    },
    {
      text: '¿Guardas servilletas, sobres de azúcar y palillos “por si acaso” como si fueras un almacén logístico?',
      weight: 9,
    },
    {
      text: '¿En un bar comparas el precio por mililitro entre caña, jarra y botella antes de decidir qué beber?',
      weight: 8,
    },
    {
      text: '¿Has recortado una esponja en dos para que “dure el doble” y presumido de ello?',
      weight: 7,
    },
    {
      text: '¿Tu calefacción solo se enciende cuando puedes ver tu propio aliento dentro de casa?',
      weight: 6,
    },
    {
      text: '¿Calculas cuántos vasos salen de cada botella cuando invitas gente, para evitar “despilfarros innecesarios”?',
      weight: 8,
    },
    {
      text: '¿Has limpiado papel de aluminio usado para volver a utilizarlo como si fuera un tesoro nacional?',
      weight: 7,
    },
    {
      text: '¿Si hay envío gratis a partir de cierto importe, prefieres pagar el envío antes que comprar algo “no imprescindible”?',
      weight: 6,
    },
    {
      text: '¿Te duele físicamente dejar propina aunque el servicio haya sido impecable?',
      weight: 7,
    },
    {
      text: '¿Revisas el ticket del súper con lupa por si te han cobrado 3 céntimos de más?',
      weight: 7,
    },
    {
      text: '¿Después de este test has pensado que hasta responder preguntas gasta batería y deberíamos ir acabando?',
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
        'Intentas ahorrar, pero te puede la comodidad. Eres más de redondear para arriba que de contar céntimos.',
    },
    {
      maxRatio: 0.28,
      title: 'Ajustado con dignidad',
      category: 'Ahorro moderado',
      description:
        'Controlas gastos sin perder la cabeza. Todavía recuerdas que vivir también incluye pequeños caprichos.',
    },
    {
      maxRatio: 0.42,
      title: 'Contable del céntimo',
      category: 'Ahorro metódico',
      description:
        'Tu relación con el dinero es intensa y organizada. Tienes hojas mentales de cálculo hasta para comprar chicles.',
    },
    {
      maxRatio: 0.58,
      title: 'Inspector del ticket',
      category: 'Ahorro serio',
      description:
        'No se te escapa ni una oferta. Si hubiera olimpiadas de cupones, tendrías medalla.',
    },
    {
      maxRatio: 0.74,
      title: 'Ninja del descuento',
      category: 'Ahorro extremo',
      description:
        'Conoces más promos que la propia tienda. Vives en modo cazador de gangas permanente.',
    },
    {
      maxRatio: 0.89,
      title: 'Señor/a del reciclaje infinito',
      category: 'Ahorro épico',
      description:
        'Reutilizas todo lo reutilizable y lo no reutilizable también. Cada objeto tiene al menos tres vidas contigo.',
    },
    {
      maxRatio: 1,
      title: 'El Agarrado Legendario',
      category: 'Ahorro apocalíptico',
      description:
        'Has llevado el ahorro a una dimensión desconocida. Doblas las bolsas del súper con precisión quirúrgica y podrías negociar el precio del aire.',
    },
  ],
};
