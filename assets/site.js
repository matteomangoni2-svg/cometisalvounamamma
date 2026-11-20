/* Come ti salvo una mamma · script del sito */

/* ===== Link da completare =====
   Scrivi qui gli indirizzi quando li hai, tra gli apici. Finché un valore è vuoto, il link resta com'è. */
var SITO = {
  amazon: '',     // pagina Amazon del libro, es. 'https://www.amazon.it/dp/XXXXXXXXXX'
  privacy: '',    // informativa privacy
  contatti: '',   // es. 'mailto:nome@esempio.it'
  instagram: '',
  facebook: '',
  youtube: ''
};

(function () {
  // 1. Collega i link segnaposto (#amazon, #privacy, ...) agli indirizzi veri
  Object.keys(SITO).forEach(function (chiave) {
    var url = SITO[chiave];
    if (!url) return;
    document.querySelectorAll('a[href="#' + chiave + '"]').forEach(function (a) {
      a.href = url;
      if (/^https?:/.test(url)) { a.target = '_blank'; a.rel = 'noopener'; }
    });
  });

  // 2. Modulo del gioco gratis (landing page)
  var modulo = document.getElementById('modulo-gioco');
  if (modulo) {
    var email = modulo.querySelector('#email');
    var errore = document.getElementById('email-errore');
    var mostra = function (msg) {
      errore.textContent = msg;
      errore.hidden = !msg;
      email.setAttribute('aria-invalid', msg ? 'true' : 'false');
    };
    email.addEventListener('input', function () { if (!errore.hidden) mostra(''); });
    modulo.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = email.value.trim();
      if (v === '') { mostra("Ci serve un'email per mandarti il gioco."); email.focus(); return; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) { mostra("Controlla l'indirizzo: manca qualcosa?"); email.focus(); return; }
      mostra('');
      // DA FARE: collegare il servizio di email (per esempio MailerLite o Brevo).
      // Finché non è collegato, l'indirizzo NON viene salvato: si passa solo alla pagina di ringraziamento.
      window.location.href = 'grazie.html';
    });
  }

  // 3. Passaparola (pagina di ringraziamento)
  var pagina = new URL('./', window.location.href).href; // indirizzo della landing page
  var wa = document.querySelector('a[href="#whatsapp"]');
  if (wa) {
    wa.href = 'https://wa.me/?text=' + encodeURIComponent('Ti giro questo: un gioco gratis per stasera, da «Come ti salvo una mamma». ' + pagina);
    wa.target = '_blank';
    wa.rel = 'noopener';
  }
  var copia = document.querySelector('a[href="#copia-link"]');
  if (copia) {
    var testo = copia.lastChild;
    var originale = testo.textContent;
    copia.addEventListener('click', function (e) {
      e.preventDefault();
      var fatto = function () {
        testo.textContent = 'Link copiato';
        setTimeout(function () { testo.textContent = originale; }, 2000);
      };
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(pagina).then(fatto, function () { window.prompt('Copia il link:', pagina); });
      } else {
        window.prompt('Copia il link:', pagina);
      }
    });
  }
})();
