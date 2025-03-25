(function () {
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')
  
  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.h1-large, .is-header', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })

    sr.reveal('.bubble-3, .bubble-4, .hero-browser-inner, .bubble-1, .bubble-2', {
      duration: 1000,
      scale: 0.95,
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 150
    })

    sr.reveal('.feature', {
      duration: 600,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      interval: 100,
      origin: 'bottom',
      viewFactor: 0.5
    })
  }
}())

var btn_text_default = "Email";
var btn_text_hover = "Copy email";
var btn_text_copied = "Copied email!";
var is_copied = false;

function hoverEmail(btn) {
  btn.innerHTML = btn.innerHTML.replace(btn_text_default, btn_text_hover).replace(btn_text_copied, btn_text_default);
}

function leaveEmail(btn) {
  if (is_copied) {
    setTimeout(function() {
      btn.innerHTML = btn.innerHTML.replace(btn_text_hover, btn_text_default).replace(btn_text_copied, btn_text_default);
      btn.classList.remove("copied");
      btn.classList.add("notcopied");
      is_copied = false;
    }, 100);
  } else {
    btn.innerHTML = btn.innerHTML.replace(btn_text_hover, btn_text_default).replace(btn_text_copied, btn_text_default);
  }
}

function copyEmail(btn) {
    const email_addr = "yclee@umd.edu";
    btn.innerHTML = btn.innerHTML.replace(btn_text_default, btn_text_copied).replace(btn_text_hover, btn_text_copied);
    btn.classList.add("copied");
    btn.classList.remove("notcopied");
    navigator.clipboard.writeText(email_addr);
    is_copied = true;
}
