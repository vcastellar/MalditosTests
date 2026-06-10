// /assets/js/theme.js — conmutador de tema claro/oscuro.
// Guarda la preferencia en localStorage (almacenamiento técnico, sin datos personales).
(function () {
  var KEY = 'mt-theme';
  var root = document.documentElement;

  function stored() {
    try {
      return localStorage.getItem(KEY);
    } catch (e) {
      return null;
    }
  }

  function currentTheme() {
    var saved = stored();
    if (saved === 'light' || saved === 'dark') return saved;
    // Por defecto, tema claro (el usuario puede cambiarlo con el conmutador)
    return 'light';
  }

  function apply(theme, btn) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
    if (btn) {
      btn.textContent = theme === 'light' ? '🌙' : '☀️';
      btn.setAttribute(
        'aria-label',
        theme === 'light' ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro'
      );
      btn.title = btn.getAttribute('aria-label');
    }
  }

  var theme = currentTheme();
  apply(theme, null);

  function init() {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'theme-toggle';
    apply(theme, btn);
    btn.addEventListener('click', function () {
      theme = theme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem(KEY, theme);
      } catch (e) {
        /* sin almacenamiento disponible: el cambio dura la sesión */
      }
      apply(theme, btn);
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
