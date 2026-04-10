// /assets/js/ui.js
document.addEventListener('DOMContentLoaded', () => {
  const {
    questions,
    totalMaxScore,
    calculateScore,
    getResultBand,
  } = window.TestApp;

  const form = document.getElementById('amargometro-form');
  const template = document.getElementById('question-template');
  const submitButton = document.getElementById('submit-test');
  const meterBar = document.getElementById('meter-bar');
  const meterMax = document.getElementById('meter-max');
  const scoreValue = document.getElementById('score-value');
  const resultTitle = document.getElementById('result-title');
  const resultDescription = document.getElementById('result-description');
  const resultCategoryName = document.getElementById(
    'result-category-name'
  );

  meterMax.textContent = totalMaxScore;

  // Renderizar preguntas
  questions.forEach((question, index) => {
    const clone = template.content.cloneNode(true);
    const article = clone.querySelector('.question-card');
    const name = `question-${index}`;

    article.querySelector('.question-tag').textContent =
      `Pregunta ${index + 1}`;
    article.querySelector('.question-text').textContent =
      question.text;

    clone.querySelectorAll('input').forEach((input) => {
      input.name = name;
    });

    form.appendChild(clone);
  });

  function getSelectedValue(index) {
    const selected = form.querySelector(
      `input[name="question-${index}"]:checked`
    );
    return selected ? selected.value : undefined;
  }

  submitButton.addEventListener('click', () => {
    const score = calculateScore(getSelectedValue);
    const band = getResultBand(score);

    const ratio = score / totalMaxScore;
    meterBar.style.width = `${ratio * 100}%`;
    scoreValue.textContent = score;
    resultTitle.textContent = band.title;
    resultCategoryName.textContent = band.category;
    resultDescription.textContent = band.description;

    window.ShareModule.setResult({
      score,
      title: band.title,
      category: band.category,
    });
  });

  document.querySelectorAll('.share-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const platform = button.dataset.platform;
      window.ShareModule.share(platform, totalMaxScore);
    });
  });
});
