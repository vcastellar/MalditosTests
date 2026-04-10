// /assets/js/app.js
(function () {
  'use strict';

  if (!window.TEST_CONFIG) {
    console.error(
      'TEST_CONFIG no está definido. Asegúrate de cargar primero el archivo de datos del test.'
    );
    return;
  }

  const {
    questions = [],
    scoreMap = {},
    resultBands = [],
    testUrl = window.location.href,
  } = window.TEST_CONFIG;

  // Puntuación máxima posible
  const totalMaxScore = questions.reduce(
    (sum, q) => sum + (q.weight || 0),
    0
  );

  /**
   * Calcula la puntuación total del test.
   * @param {Function} getAnswer - Función que devuelve el valor seleccionado para cada pregunta.
   * @returns {number} Puntuación total.
   */
  function calculateScore(getAnswer) {
    let score = 0;

    questions.forEach((question, index) => {
      const value = getAnswer(index);
      const multiplier = scoreMap[value];

      if (multiplier !== undefined) {
        score += Math.round((question.weight || 0) * multiplier);
      }
    });

    return score;
  }

  /**
   * Calcula el ratio de puntuación respecto al máximo.
   * @param {number} score
   * @returns {number}
   */
  function calculateRatio(score) {
    return totalMaxScore === 0 ? 0 : score / totalMaxScore;
  }

  /**
   * Devuelve la banda de resultado correspondiente a la puntuación.
   * @param {number} score
   * @returns {Object|null}
   */
  function getResultBand(score) {
    const ratio = calculateRatio(score);

    if (!Array.isArray(resultBands) || resultBands.length === 0) {
      return null;
    }

    return (
      resultBands.find((band) => ratio <= band.maxRatio) ||
      resultBands[resultBands.length - 1]
    );
  }

  // API pública
  window.TestApp = {
    questions,
    scoreMap,
    resultBands,
    totalMaxScore,
    testUrl,
    calculateScore,
    calculateRatio,
    getResultBand,
  };
})();
