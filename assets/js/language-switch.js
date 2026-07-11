(function () {
  function applyLanguage(lang) {
    var normalized = lang === 'zh' ? 'zh' : 'en';
    document.documentElement.setAttribute('data-language', normalized);
    document.documentElement.lang = normalized === 'zh' ? 'zh-CN' : 'en';
    document.title = normalized === 'zh' ? '向鹏睿 | 个人学术主页' : 'Pengrui Xiang | Academic Homepage';
    var toggle = document.getElementById('language-toggle');
    if (toggle) {
      toggle.textContent = normalized === 'zh' ? 'English' : '简体中文';
      toggle.setAttribute('aria-label', normalized === 'zh' ? 'Switch to English' : '切换至简体中文');
    }
    window.dispatchEvent(new Event('resize'));
  }

  function initLanguageSwitch() {
    applyLanguage('en');
    var toggle = document.getElementById('language-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = document.documentElement.getAttribute('data-language') === 'zh' ? 'en' : 'zh';
        applyLanguage(next);
      });
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initLanguageSwitch);
  else initLanguageSwitch();
})();
