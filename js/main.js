/**
 * CIOT Express — Interações mínimas
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '5541988845124';

  const MESSAGES = {
    default: 'Olá! Vim pelo site da CIOT Express e quero organizar a gestão da minha empresa.',
    'hero-especialista': 'Olá! Gostaria de falar com um especialista da CIOT Express.',
    header: 'Olá! Vim pelo site da CIOT Express e quero falar com um especialista.',
    'cta-final': 'Olá! Quero organizar minha empresa com a CIOT Express.',
    float: 'Olá! Vim pelo site da CIOT Express.',
    footer: 'Olá! Vim pelo site da CIOT Express e quero entrar em contato.'
  };

  function whatsappUrl(source) {
    const msg = encodeURIComponent(MESSAGES[source] || MESSAGES.default);
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + msg;
  }

  function initWhatsApp() {
    document.querySelectorAll('[data-whatsapp]').forEach(function (el) {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        window.open(whatsappUrl(el.getAttribute('data-whatsapp')), '_blank', 'noopener,noreferrer');
      });
    });
  }

  function initHeader() {
    var header = document.getElementById('header');
    var menuBtn = document.getElementById('menuBtn');
    var nav = document.getElementById('nav');

    function updateHeader() {
      header.classList.toggle('header--solid', window.scrollY > 60);
    }

    window.addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();

    if (menuBtn && nav) {
      menuBtn.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        menuBtn.setAttribute('aria-expanded', open);
      });

      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          nav.classList.remove('open');
          menuBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id === '#') return;
        var target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initWhatsApp();
    initHeader();
    initSmoothScroll();
  });
})();
