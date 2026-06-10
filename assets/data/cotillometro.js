// /assets/data/cotillometro.js
window.TEST_CONFIG = {
  testUrl: 'https://elamargometro.com',

  questions: [
    { text: '¿Te enteras de los divorcios antes que los abogados, los suegros y, en dos ocasiones documentadas, los propios cónyuges?', weight: 7 },
    { text: '¿Has cruzado la casa entera "a por agua" sin sed, guiado únicamente por el sonar de una conversación en voz baja, como un delfín del salseo?', weight: 7 },
    { text: '¿Arrancas con "no es por criticar, pero..." y a continuación estrenas una docuserie de ocho episodios sobre la vida de tu vecina?', weight: 7 },
    { text: '¿Haces preguntas tan personales que la gente sale de tu casa sintiendo que le han hecho una colonoscopia emocional con sonrisa?', weight: 7 },
    { text: '¿Has ido a planes que te aburrían soberanamente solo por presenciar en directo el drama que tú mismo habías pronosticado en el grupo?', weight: 7 },
    { text: '¿Has reenviado rumores con la velocidad de una agencia internacional y el rigor de un horóscopo de revista de peluquería?', weight: 7 },
    { text: '¿Cuando estalla movida en el grupo, te autoproclamas corresponsal de guerra y empiezas a emitir partes cada quince minutos?', weight: 7 },
    { text: '¿Recuerdas quién dijo qué, a qué hora, con qué tono y qué ceja levantó, pero el cumpleaños de tu madre lo llevas en una alarma?', weight: 7 },
    { text: '¿Analizas parejas ajenas con rigor de forense, incluyendo informe pericial, móvil del crimen y reconstrucción de los hechos con muñecos?', weight: 7 },
    { text: '¿Si hay "tema" y aún no tienes el expediente completo, te sube una ansiedad que solo se cura con dos audios de siete minutos cada uno?', weight: 7 },
    { text: '¿Sueltas "yo no quería decir nada, peeero..." con la misma sinceridad con la que un tiburón asegura que solo venía a saludar?', weight: 7 },
    { text: '¿Tu radar detecta el conflicto antes del primer mensaje, como esos perros que predicen terremotos, pero especializado en rupturas?', weight: 7 },
    { text: '¿Te han dicho que sabes tanto de vidas ajenas que deberías cobrar derechos de autor, o como mínimo salir en los créditos finales?', weight: 8 },
    { text: '¿Gestionas información social como la CIA, pero filtrándolo todo a las tres horas porque "es que esto no me lo puedo quedar dentro"?', weight: 8 },
  ],

  scoreMap: {
    si: 1,
    a_veces: 0.55,
    no: 0,
  },

  resultBands: [
    { maxRatio: 0.14, title: 'Curioso discreto', category: 'Cotilleo bajo control', description: 'Te interesa la gente, pero respetas límites. En este test eres prácticamente un unicornio: nadie te creerá cuando enseñes el resultado.' },
    { maxRatio: 0.28, title: 'Antena social', category: 'Cotilleo leve', description: 'Captas señales, comentas con moderación y aún no vives para ello. Pero la antena ya está instalada y orientada; solo te falta contratar la tarifa premium.' },
    { maxRatio: 0.42, title: 'Cronista del barrio', category: 'Cotilleo funcional', description: 'Sabes bastante más de la cuenta sobre vidas ajenas y lo cuentas con un brillo en los ojos que ya ni intentas disimular. El portal te debe una placa.' },
    { maxRatio: 0.58, title: 'Reportero de pasillo', category: 'Cotilleo serio', description: 'Tu archivo mental de dramas ajenos está mejor organizado que tu nómina, tu nevera y tu vida entera. Las vidas ajenas tienen carpeta con pestañas; la tuya, polvo.' },
    { maxRatio: 0.74, title: 'Agencia de rumores', category: 'Cotilleo alto', description: 'No se mueve un chisme en tu código postal sin pasar por tu redacción. Eres infraestructura crítica del drama local: si caes tú, cae el barrio.' },
    { maxRatio: 0.89, title: 'Editor de la vida ajena', category: 'Cotilleo extremo', description: 'Filtras, interpretas, redistribuyes y editorializas vidas ajenas con una eficiencia que haría llorar a Reuters. Sin contrastar nada, eso sí: la verificación mata el ritmo.' },
    { maxRatio: 1, title: 'Cotilla Profesional', category: 'Jefe final de la curiosidad social', description: 'Eres la hemeroteca viviente del drama colectivo: todo pasa por ti, todo lo procesas, todo lo archivas con fecha, hora y captura. El día que te jubiles del cotilleo, tu grupo de WhatsApp tendrá que cerrar por falta de contenido.' },
  ],
};
