// /assets/js/ui.js
document.addEventListener('DOMContentLoaded', () => {
  const { questions, totalMaxScore, calculateScore, getResultBand } =
    window.TestApp;

  const { setResult, share } = window.ShareModule;

  // --- Elementos del DOM ---
  const form = document.getElementById('amargometro-form');
  const template = document.getElementById('question-template');
  const startButton = document.getElementById('start-test');
  const submitButton = document.getElementById('submit-test');
  const resetButton = document.getElementById('reset-test');
  const meterBar = document.getElementById('meter-bar');
  const meterMax = document.getElementById('meter-max');
  const scoreValue = document.getElementById('score-value');
  const scoreline = document.querySelector('.scoreline');
  const resultSection = document.querySelector('.result');
  const resultTitle = document.getElementById('result-title');
  const resultDescription = document.getElementById('result-description');
  const resultCategoryName = document.getElementById(
    'result-category-name'
  );
  const shareStatus = document.getElementById('share-status');
  const quizStatus = document.getElementById('quiz-status');
  const deviceHint = document.getElementById('device-hint');
  const root = document.documentElement;
  const mainLayout = document.querySelector('main.layout');

  meterMax.textContent = totalMaxScore;

  // --- Estado por defecto ---
  const defaultResultState = {
    category: 'Pendiente de diagnóstico',
    title: 'Responde el test, criatura.',
    description:
      'Cuando termines, te diremos si eres un rayo de sol o una auditoría con piernas.',
  };

  let currentDeviceProfile = 'desktop';
  let questionCards = [];
  let lastCalculatedResult = null;

  const smoothBehavior = {
    mobile: 'auto',
    desktop: 'smooth',
  };

  const relatedTestsCatalog = [
    { slug: 'amargado', name: 'Amargómetro Supremo', href: '../../tests/amargado/' },
    { slug: 'agarrado', name: 'Test del Agarrado', href: '../../tests/agarrado/' },
    { slug: 'intensito', name: 'Test del Intensito', href: '../../tests/intensito/' },
    { slug: 'procrastinometro', name: 'Procrastinómetro', href: '../../tests/procrastinometro/' },
    { slug: 'cunadometro', name: 'Cuñadómetro', href: '../../tests/cunadometro/' },
    { slug: 'mojigato', name: 'Test Mojigato', href: '../../tests/mojigato/' },
    { slug: 'sabelotodometro', name: 'Sabelotodómetro', href: '../../tests/sabelotodometro/' },
    { slug: 'haterometro', name: 'Haterómetro', href: '../../tests/haterometro/' },
    { slug: 'cotillometro', name: 'Cotillómetro', href: '../../tests/cotillometro/' },
  ];

  // --- Utilidades ---
  function updateShareStatus(message) {
    if (shareStatus) shareStatus.textContent = message;
  }

  function detectDeviceProfile() {
    const hasTouch =
      window.matchMedia('(pointer: coarse)').matches ||
      navigator.maxTouchPoints > 0;
    const isNarrowViewport =
      window.matchMedia('(max-width: 760px)').matches;
    return hasTouch || isNarrowViewport ? 'mobile' : 'desktop';
  }

  function applyDeviceProfile() {
    currentDeviceProfile = detectDeviceProfile();
    root.dataset.device = currentDeviceProfile;

    if (deviceHint) {
      deviceHint.textContent =
        currentDeviceProfile === 'mobile'
          ? 'Modo smartphone: botones más grandes y menos animaciones para responder con el pulgar.'
          : 'Modo PC: vista optimizada para leer rápido y calcular tu drama sin estorbar.';
    }

    if (submitButton) {
      submitButton.textContent =
        currentDeviceProfile === 'mobile'
          ? 'Calcular puntuación'
          : 'Calcular mi puntuación';
    }
  }

  // --- Renderizado de preguntas ---
  function renderQuestions() {
    questions.forEach((question, index) => {
      const clone = template.content.cloneNode(true);
      const article = clone.querySelector('.question-card');
      const name = `question-${index}`;

      article.dataset.index = String(index);
      article.hidden = false;

      article.querySelector('.question-tag').textContent =
        `Pregunta ${index + 1}`;
      article.querySelector('.question-text').textContent =
        question.text;

      clone.querySelectorAll('input').forEach((input) => {
        input.name = name;
        input.setAttribute(
          'aria-label',
          `${question.text} - ${input.value}`
        );
      });

      form.appendChild(clone);
    });

    questionCards = [...form.querySelectorAll('.question-card')];
  }

  function getSelectedValue(index) {
    const selectedInput = form.querySelector(
      `input[name="question-${index}"]:checked`
    );
    return selectedInput ? selectedInput.value : undefined;
  }

  // --- Estados de las preguntas ---
  function updateQuestionStates() {
    const firstUnansweredIndex = questionCards.findIndex(
      (_, index) => !getSelectedValue(index)
    );
    const answeredCount = questionCards.filter((_, index) =>
      Boolean(getSelectedValue(index))
    ).length;
    const isComplete = firstUnansweredIndex === -1;

    questionCards.forEach((card, index) => {
      const answered = Boolean(getSelectedValue(index));
      const isCurrent = !isComplete && index === firstUnansweredIndex;

      card.classList.toggle('is-answered', answered);
      card.classList.toggle('is-current', isCurrent);
    });

    submitButton.disabled = !isComplete;

    if (quizStatus) {
      quizStatus.hidden = false;
      quizStatus.innerHTML = isComplete
        ? '<strong>Listo.</strong> Ya puedes pulsar el botón para calcular tu puntuación y ver tu categoría de amargura.'
        : `<strong>Progreso:</strong> llevas ${answeredCount} de ${questions.length} respuestas.`;
    }
  }

  // --- Scroll y animaciones ---
  function scrollToQuestion(index) {
    const nextCard = questionCards[index];
    if (!nextCard) return;

    nextCard.scrollIntoView({
      behavior: smoothBehavior[currentDeviceProfile],
      block: 'start',
    });
  }

  function focusResultArea() {
    const target = resultSection || scoreline;

    if (target) {
      target.scrollIntoView({
        behavior: smoothBehavior[currentDeviceProfile],
        block: 'start',
      });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }

  function animateValue(targetScore) {
    const duration =
      currentDeviceProfile === 'mobile' ? 900 : 1400;
    const start = performance.now();
    const initialValue = Number(scoreValue.textContent) || 0;

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(
        initialValue + (targetScore - initialValue) * eased
      );
      scoreValue.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }

  // --- Cálculo del resultado ---
  function calculateResult() {
    const unanswered = questions.findIndex(
      (_, index) => !getSelectedValue(index)
    );

    if (unanswered !== -1) {
      updateQuestionStates();
      resultCategoryName.textContent = 'Diagnóstico bloqueado';
      resultTitle.textContent =
        'Te has dejado preguntas sin responder, alma de cántaro.';
      resultDescription.textContent = `Completa la pregunta ${
        unanswered + 1
      } para que podamos juzgarte con datos.`;
      scrollToQuestion(unanswered);
      return;
    }

    const score = calculateScore(getSelectedValue);
    const band = getResultBand(score);
    const ratio = score / totalMaxScore;

    lastCalculatedResult = {
      score,
      title: band.title,
      category: band.category,
    };

    meterBar.style.width = `${ratio * 100}%`;
    animateValue(score);

    resultCategoryName.textContent = band.category;
    resultTitle.textContent = band.title;
    resultDescription.textContent = band.description;

    updateShareStatus('');
    focusResultArea();

    setResult(lastCalculatedResult);
  }

  // --- Reinicio ---
  function resetTest() {
    form.reset();
    lastCalculatedResult = null;
    meterBar.style.width = '0%';
    scoreValue.textContent = '0';

    resultCategoryName.textContent =
      defaultResultState.category;
    resultTitle.textContent = defaultResultState.title;
    resultDescription.textContent =
      defaultResultState.description;

    updateShareStatus('');
    updateQuestionStates();

    window.scrollTo({
      top: 0,
      behavior: smoothBehavior[currentDeviceProfile],
    });

  }

  function injectRelatedTestsSection() {
    if (!mainLayout || document.querySelector('[data-related-tests]')) return;

    const pathChunks = window.location.pathname.split('/').filter(Boolean);
    const currentSlug = pathChunks[pathChunks.length - 1] || pathChunks[pathChunks.length - 2];
    const relatedTests = relatedTestsCatalog.filter((test) => test.slug !== currentSlug).slice(0, 3);

    if (relatedTests.length === 0) return;

    const section = document.createElement('section');
    section.className = 'extra-tests card related-tests';
    section.setAttribute('aria-label', 'Tests relacionados');
    section.dataset.relatedTests = 'true';

    const relatedLinksMarkup = relatedTests
      .map(
        (test) =>
          `<li><a class="related-test-link" href="${test.href}">${test.name}</a></li>`
      )
      .join('');

    section.innerHTML = `
      <p class="eyebrow">Tests relacionados</p>
      <h2>Si te ha gustado este test, prueba también:</h2>
      <ul class="related-tests-list">${relatedLinksMarkup}</ul>
    `;

    const extraTestsCard = mainLayout.querySelector('.extra-tests');
    if (extraTestsCard) {
      extraTestsCard.insertAdjacentElement('beforebegin', section);
    } else {
      mainLayout.appendChild(section);
    }
  }

  // --- Eventos ---
  form.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const card = target.closest('.question-card');
    const currentIndex = Number(card?.dataset.index);
    const wasCurrent = card?.classList.contains('is-current');

    updateQuestionStates();

    if (wasCurrent && currentIndex >= 0) {
      scrollToQuestion(currentIndex + 1);
    }
  });

  if (startButton) {
    startButton.addEventListener('click', () => {
      scrollToQuestion(0);
      const firstInput = form.querySelector('input');
      if (firstInput) {
        firstInput.focus({ preventScroll: true });
      }
    });
  }

  submitButton.addEventListener('click', calculateResult);
  resetButton.addEventListener('click', resetTest);

  document.querySelectorAll('.share-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const platform = button.dataset.platform;
      if (!platform) return;

      if (!lastCalculatedResult) {
        updateShareStatus(
          'Primero calcula tu resultado antes de compartirlo.'
        );
        return;
      }

      share(platform, totalMaxScore);
      updateShareStatus(
        'Ventana de compartir abierta con tu resultado.'
      );
    });
  });

  // --- Inicialización ---
  renderQuestions();
  applyDeviceProfile();
  updateQuestionStates();
  injectRelatedTestsSection();
  window.addEventListener('resize', applyDeviceProfile, {
    passive: true,
  });
});
