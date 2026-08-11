/**
 * CIOT Express — Interações mínimas
 */

(function () {
  'use strict';

  const WHATSAPP_NUMBER = '554134033080';

  const MESSAGES = {
    default: 'Olá! Vim pelo site da CIOT Express e quero organizar a gestão da minha empresa.',
    'hero-especialista': 'Olá! Gostaria de falar com um especialista da CIOT Express.',
    header: 'Olá! Vim pelo site da CIOT Express e quero falar com um especialista.',
    'cta-final': 'Olá! Quero organizar minha empresa com a CIOT Express.',
    float: 'Olá! Vim pelo site da CIOT Express.',
    footer: 'Olá! Vim pelo site da CIOT Express e quero entrar em contato.',
    desafios: 'Olá! Vi a página de desafios da CIOT Express e quero ajuda com a parte administrativa da minha empresa.',
    solucao: 'Olá! Vi a página de solução da CIOT Express e quero entender quais módulos fazem sentido para mim.',
    diferenciais: 'Olá! Vi a página de diferenciais da CIOT Express e quero falar com um especialista.',
    depoimentos: 'Olá! Vi os depoimentos no site da CIOT Express e quero saber como funciona.',
    contato: 'Olá! Vim pela página de contato da CIOT Express e quero falar com um especialista.',
    'plano-basico': 'Olá! Quero o Plano Básico (Emissão) da CIOT Express.',
    'plano-2': 'Olá! Quero o Plano 2 (Emissão + Contabilidade) da CIOT Express.',
    'pacote-3': 'Olá! Quero o Pacote 3 (Gestão Completa) da CIOT Express.',
    planos: 'Olá! Vi os planos da CIOT Express e quero entender qual faz sentido para a minha operação.'
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

  function initFaq() {
    document.querySelectorAll('.faq__item').forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        document.querySelectorAll('.faq__item').forEach(function (other) {
          if (other !== item) other.removeAttribute('open');
        });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initWhatsApp();
    initHeader();
    initSmoothScroll();
    initFaq();
  });
})();
