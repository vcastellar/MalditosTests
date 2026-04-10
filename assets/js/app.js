// /assets/js/app.js
(function () {
  const { questions, scoreMap, resultBands } = window.TEST_CONFIG;

  const totalMaxScore = questions.reduce(
    (sum, q) => sum + q.weight,
    0
  );

  function calculateScore(getAnswer) {
    let score = 0;

    questions.forEach((question, index) => {
      const value = getAnswer(index);
      if (value !== undefined) {
        score += Math.round(question.weight * scoreMap[value]);
      }
    });

    return score;
  }

  function getResultBand(score) {
    const ratio = score / totalMaxScore;
    return (
      resultBands.find((band) => ratio <= band.maxRatio) ||
      resultBands[resultBands.length - 1]
    );
  }

  window.TestApp = {
    questions,
    totalMaxScore,
    calculateScore,
    getResultBand,
  };
})();
