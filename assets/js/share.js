// /assets/js/share.js
(function () {
  const { testUrl } = window.TEST_CONFIG;

  let lastResult = null;

  function setResult(result) {
    lastResult = result;
  }

  function buildShareText(totalMaxScore) {
    if (!lastResult) return '';

    return `Mi resultado en el Amargómetro Supremo: ${lastResult.title} (${lastResult.category}) con ${lastResult.score}/${totalMaxScore} puntos. Haz el test aquí: ${testUrl}`;
  }

  async function copyToClipboard(text) {
    if (!navigator.clipboard) return false;
    await navigator.clipboard.writeText(text);
    return true;
  }

  function share(platform, totalMaxScore) {
    const text = buildShareText(totalMaxScore);
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(testUrl);

    const urls = {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === 'instagram') {
      copyToClipboard(text);
      window.open('https://www.instagram.com/', '_blank');
      return;
    }

    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  }

  window.ShareModule = {
    setResult,
    share,
  };
})();
