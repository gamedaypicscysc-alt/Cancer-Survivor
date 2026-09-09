// Google Translate Initialization Callback
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,sw',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}

// Client-side Form Helper
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      const consent = form.querySelector('input[name="privacy_consent"]');
      if (consent && !consent.checked) {
        e.preventDefault();
        alert('Please review and check the agreement box before submitting.');
      }
    });
  });
});
