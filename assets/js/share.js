// /assets/js/share.js
(function () {
  'use strict';

  if (!window.TestApp) {
    console.error(
      'TestApp no está definido. Asegúrate de cargar app.js antes que share.js.'
    );
    return;
  }

  const { testUrl, totalMaxScore } = window.TestApp;

  let lastResult = null;

  /**
   * Guarda el último resultado calculado.
   * @param {Object} result
   */
  function setResult(result) {
    lastResult = result;
  }

  /**
   * Devuelve el último resultado.
   * @returns {Object|null}
   */
  function getResult() {
    return lastResult;
  }

  /**
   * Construye el texto para compartir.
   * @returns {string}
   */
  function buildShareText() {
    if (!lastResult) return '';

    return `Mi resultado en el Amargómetro Supremo: ${lastResult.title} (${lastResult.category}) con ${lastResult.score}/${totalMaxScore} puntos. Haz el test aquí: ${testUrl}`;
  }

  /**
   * Copia texto al portapapeles.
   * @param {string} text
   * @returns {Promise<boolean>}
   */
  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }

      // Fallback para navegadores antiguos
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      return true;
    } catch (error) {
      console.error('Error al copiar al portapapeles:', error);
      return false;
    }
  }

  /**
   * Comparte el resultado en una plataforma específica.
   * @param {string} platform - whatsapp | facebook | twitter | instagram
   * @returns {Promise<{success: boolean, message: string}>}
   */
  async function share(platform) {
    const text = buildShareText();
    if (!text) {
      return {
        success: false,
        message: 'Primero debes calcular tu resultado.',
      };
    }

    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(testUrl);

    const shareUrls = {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    };

    if (platform === 'instagram') {
      const copied = await copyToClipboard(text);
      window.open('https://www.instagram.com/', '_blank', 'noopener,noreferrer');

      return {
        success: copied,
        message: copied
          ? 'Texto copiado. Pégalo en tu publicación o historia de Instagram.'
          : 'No se pudo copiar automáticamente. Copia el texto manualmente.',
      };
    }

    const targetUrl = shareUrls[platform];
    if (!targetUrl) {
      return {
        success: false,
        message: 'Plataforma de compartición no soportada.',
      };
    }

    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    return {
      success: true,
      message: 'Ventana de compartir abierta correctamente.',
    };
  }

  // API pública
  window.ShareModule = {
    setResult,
    getResult,
    buildShareText,
    copyToClipboard,
    share,
  };
})();
