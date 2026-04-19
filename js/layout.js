/* ===========================================
   モンスターエナジーの危険性 2026年4月19日
   共通レイアウト(ヘッダー/ドロワー/フッター)の注入
   =========================================== */

(function () {
  'use strict';

  // 各ページで data-base-path を指定 (例: "" または "../")
  const basePath = document.documentElement.getAttribute('data-base') || '';
  const B = basePath;

  // === ヘッダー ===
  const headerHTML = `
<header class="site-header">
  <a class="brand" href="${B}index.html" aria-label="トップへ">
    <span class="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <g fill="#00ff41">
          <path d="M5 6 C 10 10, 14 14, 10 28 L 13 28 C 17 14, 13 10, 8 4 Z" />
          <path d="M13 4 C 18 9, 20 14, 17 28 L 20 28 C 23 14, 21 9, 16 2 Z" />
          <path d="M21 6 C 26 11, 27 15, 24 28 L 27 28 C 30 15, 29 11, 24 4 Z" />
        </g>
      </svg>
    </span>
    <span class="brand-text">
      <span class="brand-title">${document.documentElement.getAttribute('data-page-title') || 'モンスターエナジーの危険性'}</span>
      <span class="brand-sub">${document.documentElement.getAttribute('data-page-sub') || '2026.04.19'}</span>
    </span>
  </a>
  <button class="menu-toggle" aria-label="メニューを開く" aria-expanded="false" aria-controls="site-drawer">
    <span class="bars" aria-hidden="true"><span></span><span></span><span></span></span>
  </button>
</header>`;

  // === ドロワー ===
  const drawerHTML = `
<div class="drawer-backdrop" aria-hidden="true"></div>
<nav class="drawer" id="site-drawer" aria-label="目次">
  <div class="drawer-head">
    <span class="drawer-title">TABLE OF CONTENTS</span>
    <button class="drawer-close" aria-label="メニューを閉じる">×</button>
  </div>
  <div class="drawer-section">
    <div class="drawer-section-title">序</div>
    <a class="drawer-link" href="${B}index.html"><span class="num">00</span>トップ / 序章</a>
    <a class="drawer-link" href="${B}reference/corrections.html"><span class="num">✎</span>誤りの訂正レポート</a>
  </div>
  <div class="drawer-section">
    <div class="drawer-section-title">本編 14章</div>
    <a class="drawer-link" href="${B}chapters/01-ingredients.html"><span class="num">01</span>成分を解剖する</a>
    <a class="drawer-link" href="${B}chapters/02-heart.html"><span class="num">02</span>心臓を揺さぶる</a>
    <a class="drawer-link" href="${B}chapters/03-victims.html"><span class="num">03</span>名前を持つ犠牲者</a>
    <a class="drawer-link" href="${B}chapters/04-brain.html"><span class="num">04</span>脳・神経・精神</a>
    <a class="drawer-link" href="${B}chapters/05-organs.html"><span class="num">05</span>腎・肝・膵・胃</a>
    <a class="drawer-link" href="${B}chapters/06-sugar.html"><span class="num">06</span>砂糖の洪水</a>
    <a class="drawer-link" href="${B}chapters/07-taurine.html"><span class="num">07</span>タウリンと白血病</a>
    <a class="drawer-link" href="${B}chapters/08-teeth.html"><span class="num">08</span>歯を溶かす</a>
    <a class="drawer-link" href="${B}chapters/09-pregnancy.html"><span class="num">09</span>妊娠と胎児</a>
    <a class="drawer-link" href="${B}chapters/10-alcohol.html"><span class="num">10</span>アルコール混合</a>
    <a class="drawer-link" href="${B}chapters/11-addiction.html"><span class="num">11</span>依存と離脱</a>
    <a class="drawer-link" href="${B}chapters/12-youth.html"><span class="num">12</span>子どもと若者</a>
    <a class="drawer-link" href="${B}chapters/13-regulation.html"><span class="num">13</span>世界の規制</a>
    <a class="drawer-link" href="${B}chapters/14-verdict.html"><span class="num">14</span>総合的評価</a>
  </div>
  <div class="drawer-section">
    <div class="drawer-section-title">追記 15章</div>
    <a class="drawer-link" href="${B}addendum/01-cyp1a2.html"><span class="num">A1</span>CYP1A2遺伝子多型</a>
    <a class="drawer-link" href="${B}addendum/02-brain-flow.html"><span class="num">A2</span>脳血流が26%消える</a>
    <a class="drawer-link" href="${B}addendum/03-taurine-map.html"><span class="num">A3</span>タウリン白血病の分子地図</a>
    <a class="drawer-link" href="${B}addendum/04-bone.html"><span class="num">A4</span>骨が静かに崩れる</a>
    <a class="drawer-link" href="${B}addendum/05-thyroid.html"><span class="num">A5</span>甲状腺と精巣</a>
    <a class="drawer-link" href="${B}addendum/06-eye-skin.html"><span class="num">A6</span>眼圧・片頭痛・ニキビ</a>
    <a class="drawer-link" href="${B}addendum/07-kidney.html"><span class="num">A7</span>腎臓を殺した2L</a>
    <a class="drawer-link" href="${B}addendum/08-katie.html"><span class="num">A8</span>ケイティ・ドネル</a>
    <a class="drawer-link" href="${B}addendum/09-esports.html"><span class="num">A9</span>eスポーツ広告</a>
    <a class="drawer-link" href="${B}addendum/10-black-market.html"><span class="num">A10</span>ブラックマーケット化</a>
    <a class="drawer-link" href="${B}addendum/11-japan.html"><span class="num">A11</span>日本版とマイルド化</a>
    <a class="drawer-link" href="${B}addendum/12-market.html"><span class="num">A12</span>248億ドルの市場</a>
    <a class="drawer-link" href="${B}addendum/13-tobacco.html"><span class="num">A13</span>カフェインのタバコ化</a>
    <a class="drawer-link" href="${B}addendum/14-er.html"><span class="num">A14</span>救急外来と毒物センター</a>
    <a class="drawer-link" href="${B}addendum/15-alternatives.html"><span class="num">A15</span>飲まない覚醒の科学</a>
  </div>
  <div class="drawer-section">
    <div class="drawer-section-title">資料</div>
    <a class="drawer-link" href="${B}reference/corrections.html"><span class="num">R1</span>誤り訂正レポート</a>
    <a class="drawer-link" href="${B}reference/victims.html"><span class="num">R2</span>死亡・重症例まとめ</a>
    <a class="drawer-link" href="${B}reference/regulation-map.html"><span class="num">R3</span>各国規制マップ</a>
    <a class="drawer-link" href="${B}reference/glossary.html"><span class="num">R4</span>医学用語集</a>
    <a class="drawer-link" href="${B}reference/sources.html"><span class="num">R5</span>参考文献・完全ソース</a>
  </div>
</nav>`;

  // === フッター ===
  const footerHTML = `
<footer class="site-footer">
  <div class="footer-title">モンスターエナジーの危険性</div>
  <div class="footer-sub">2026.04.19 REPORT EDITION</div>
  <div class="footer-links">
    <a href="${B}index.html">トップ</a>
    <a href="${B}reference/corrections.html">訂正</a>
    <a href="${B}reference/sources.html">ソース</a>
    <a href="${B}reference/glossary.html">用語集</a>
  </div>
  <p class="footer-note">本サイトは教育・公衆衛生情報を目的とした二次的まとめ資料です。個別の診断・治療の判断は、必ず医師・薬剤師・管理栄養士にご相談ください。固有名詞は一次報道・訴状・検視報告に基づきます。</p>
</footer>
<button class="back-to-top" aria-label="トップへ戻る">↑</button>`;

  // === 注入 ===
  const headerSlot = document.getElementById('slot-header');
  if (headerSlot) headerSlot.outerHTML = headerHTML;

  const drawerSlot = document.getElementById('slot-drawer');
  if (drawerSlot) drawerSlot.outerHTML = drawerHTML;

  const footerSlot = document.getElementById('slot-footer');
  if (footerSlot) footerSlot.outerHTML = footerHTML;
})();
