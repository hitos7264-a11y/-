/* ===========================================
   モンスターエナジーの危険性 2026年4月19日
   サイト共通スクリプト
   =========================================== */

(function () {
  'use strict';

  // ---------- ドロワーメニュー ----------
  const menuToggle = document.querySelector('.menu-toggle');
  const drawer = document.querySelector('.drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerClose = document.querySelector('.drawer-close');

  function openDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.add('open');
    drawerBackdrop.classList.add('visible');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (!drawer || !drawerBackdrop) return;
    drawer.classList.remove('open');
    drawerBackdrop.classList.remove('visible');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      if (expanded) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // ---------- トップへ戻るボタン ----------
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          if (window.scrollY > 400) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ---------- 現在のページをドロワー内でハイライト ----------
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.drawer-link').forEach(function (link) {
    const href = link.getAttribute('href') || '';
    const hrefFile = href.split('/').pop();
    if (hrefFile === currentPath && href !== '') {
      link.classList.add('current');
    }
  });

  // ---------- 内部リンクのスムーススクロール ----------
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const yOffset = -70;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  // ---------- 読み進むカードのタップフィードバック ----------
  // (視覚的なフィードバックはCSSで担当)
})();
