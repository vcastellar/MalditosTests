// /assets/data/mojigato.js
window.TEST_CONFIG = {
  testUrl: window.location.href,

  questions: [
    {
      text: '¿Posas encantado cuando alguien propone una foto de grupo sin huir como si cada flash te fuera a quitar un año de vida?',
      weight: 5,
    },
    {
      text: '¿Puedes ir al supermercado un sábado por la tarde sin desear que un rayo desintegre a la gente que camina lento?',
      weight: 8,
    },
    {
      text: 'Si un amigo te cuenta un proyecto con ilusión, ¿evitas listarle inmediatamente los 10 motivos por los que va a fracasar?',
      weight: 7,
    },
    {
      text: '¿Aceptas un cumplido sin gruñir ni mirar al suelo como si te estuvieran robando el alma?',
      weight: 4,
    },
    {
      text: 'Alguien te dice "¡Buenos días!" con alegría un lunes a las 8:00 AM. ¿Consigues no desearle una desgracia personal inmediata?',
      weight: 10,
    },
    {
      text: '¿Eres capaz de ver a una pareja de enamorados en el parque sin calcular mentalmente cuánto tardarán en engañarse el uno al otro?',
      weight: 7,
    },
    {
      text: '¿Puedes escuchar el éxito de reggaetón del verano sin dar un discurso no solicitado sobre la muerte de la cultura occidental?',
      weight: 8,
    },
    {
      text: 'Si un niño te sonríe en el transporte público, ¿le devuelves el gesto en lugar de mirar al infinito con cara de "por qué no se callará"?',
      weight: 6,
    },
    {
      text: '¿Ves un vídeo de un cachorro y piensas en su ternura antes que en el olor a perro mojado y las facturas del veterinario?',
      weight: 5,
    },
    {
      text: 'En el supermercado, ¿puedes esperar tu turno sin mirar la nuca del que va delante como si quisieras hacerle explotar la cabeza con la mente?',
      weight: 9,
    },
    {
      text: '¿Eres capaz de felicitar a alguien sin que tu voz suene como un motor gripado?',
      weight: 7,
    },
    {
      text: '¿Crees que es posible que te pase algo bueno hoy sin que sea una trampa del destino para fastidiarte mañana?',
      weight: 9,
    },
    {
      text: 'Cuando alguien suelta un “todo va a salir bien”, ¿evitas responder con un análisis apocalíptico de 5 minutos?',
      weight: 8,
    },
    {
      text: '¿Puedes compartir ascensor con alguien demasiado feliz sin sospechar automáticamente que está ocultando algo turbio?',
      weight: 7,
    },
  ],

  scoreMap: {
    si: 0,
    a_veces: 0.55,
    no: 1,
  },

  resultBands: [
    {
      maxRatio: 0.14,
      title: 'Alérgico a la sonrisa',
      category: 'Amargura leve con esperanza',
      description:
        'Todavía conservas un hilo de humanidad. Te quejas de lo normal, pero sigues siendo el amargado promedio de oficina con margen de rescate.',
    },
    {
      maxRatio: 0.28,
      title: 'Aguafiestas ceñudo',
      category: 'Amargura funcional',
      description:
        'Tienes la acidez de un yogur caducado. Bufas con elegancia y te incomoda la felicidad ajena, aunque aún logras disimular en reuniones familiares.',
    },
    {
      maxRatio: 0.42,
      title: 'Sommelier de la queja',
      category: 'Amargura entrenada',
      description:
        'Tu deporte favorito es el suspiro de desprecio. Si ves un arcoíris, buscas dónde está la mancha de aceite antes de admitir que es bonito.',
    },
    {
      maxRatio: 0.58,
      title: 'Bilis Premium',
      category: 'Amargura seria',
      description:
        'Has hecho de la bilis un arte. No solo estás molesto: diseñas nuevas formas de estarlo y conviertes cualquier comentario alegre en una objeción técnica.',
    },
    {
      maxRatio: 0.74,
      title: 'Sultán de la Mala Leche',
      category: 'Amargura avanzada',
      description:
        'Tu presencia corta la leche a tres metros. Tienes lista negra mental, criterio agrio y una capacidad admirable para arruinar un “qué buen día hace”.',
    },
    {
      maxRatio: 0.89,
      title: 'Agujero negro',
      category: 'Amargura extrema',
      description:
        'Absorbes cualquier rastro de luz o alegría en varios metros a la redonda. El mundo te parece un error de diseño que tú habrías gestionado mejor.',
    },
    {
      maxRatio: 0.99,
      title: 'Heraldo del Vinagre',
      category: 'Prejefe de la amargura',
      description:
        'Eres una tormenta de bilis con piernas: donde pasas, se marchitan las risas.',
    },
    {
      maxRatio: 1,
      title: 'General del Mal Fario',
      category: 'Jefe final de la amargura',
      description:
        'Eres el jefe final de la amargura. No tienes sangre: tienes vinagre de Módena.',
    },
  ],
};
