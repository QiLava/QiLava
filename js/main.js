/* ============================================================
   MAIN.JS — SLZ Server · Minecraft Survival
   ============================================================ */

"use strict";

// ==================== I18N DATA ====================
const i18n = {
  zh: {
    loading: 'Loading...',
    navHome: '首页',
    navAbout: '关于',
    navFeatures: '特色',
    navJoin: '加入',
    online: 'Online',
    heroBadge: '✦ SLZ Server ✦',
    heroSub: 'Minecraft',
    heroAccent: '生存 · 创造 · 社交',
    heroDesc: '在像素世界中，开启属于你的冒险物语',
    serverIP: 'Server IP',
    version: 'Version',
    joinBtn: '加入QQ群',
    learnBtn: '了解更多',
    scroll: 'SCROLL',
    aboutTag: '✦ Story',
    aboutTitle1: '你好，这里是',
    aboutDesc: '一个充满活力的 Minecraft 生存服务器，每一位冒险者都能在这里找到属于自己的故事。',
    aboutCard1Title: '温馨社区',
    aboutCard1Desc: '友善和谐的玩家社区，不论萌新还是大佬，都能找到志同道合的伙伴。',
    aboutCard2Title: '特色玩法',
    aboutCard2Desc: '丰富有趣的特色系统与活动，为你的生存之旅增添无限可能。',
    aboutCard3Title: '纯净生存',
    aboutCard3Desc: '原版核心体验，适度辅助插件，保留 MC 最纯粹的探索与建造乐趣。',
    founded: 'Founded',
    members: 'Members',
    uptime: '/ 24 Online',
    featuresTag: '✦ Features',
    featuresTitle1: '为什么选择',
    featuresTitle2: '？',
    featuresDesc: '我们致力于打造最好的 Minecraft 生存体验',
    feat1Title: '活力社区',
    feat1Desc: '活跃友善的玩家群体，定期举办建筑大赛、趣味活动，欢乐不断。',
    feat2Title: '流畅稳定',
    feat2Desc: '优质硬件与低延迟网络，告别卡顿掉线，畅快游戏每一刻。',
    feat3Title: '定期活动',
    feat3Desc: '建筑大赛、趣味小游戏、节日庆典……总有新玩法等你来体验！',
    feat4Title: '持续更新',
    feat4Desc: '紧跟版本迭代，不断优化玩法，每周都有新内容上线。',
    feat5Title: '友好氛围',
    feat5Desc: '尊重、友善、包容——这是我们社区的基石。',
    feat6Title: '纯粹体验',
    feat6Desc: '不氪金、不逼肝，回归游戏最本真的快乐，自由探索。',
    joinTag: '✦ Join Us',
    joinTitle1: '准备好开始你的',
    joinTitle2: '了吗？',
    joinDesc: '加入 QQ 群，和众多冒险者一起开启 SLZ Server 之旅！',
    qqGroup: 'QQ Group',
    copyBtn: '复制群号',
    step1Title: '打开 QQ',
    step1Desc: '启动你的 QQ 客户端',
    step2Title: '搜索群号',
    step2Desc: '1060568494',
    step3Title: '加入群聊',
    step3Desc: '一起来玩吧！',
    joinNote: '进群后记得打招呼哦～',
    footerDesc: 'Minecraft 生存服务器 · 在像素世界中相遇',
    nav: 'Navigation',
    contact: 'Contact',
    online247: '24/7 全天开放',
    copied: '已复制 ✨',
    copiedQQ: 'QQ群号已复制！快来玩吧 🎉',
    copiedIP: '服务器地址已复制 ✨',
  },
  en: {
    loading: 'Loading...',
    navHome: 'Home',
    navAbout: 'About',
    navFeatures: 'Features',
    navJoin: 'Join',
    online: 'Online',
    heroBadge: '✦ SLZ Server ✦',
    heroSub: 'Minecraft',
    heroAccent: 'Survival · Build · Social',
    heroDesc: 'Start your adventure story in the pixel world',
    serverIP: 'Server IP',
    version: 'Version',
    joinBtn: 'Join QQ Group',
    learnBtn: 'Learn More',
    scroll: 'SCROLL',
    aboutTag: '✦ Story',
    aboutTitle1: 'Hello, this is',
    aboutDesc: 'A vibrant Minecraft survival server where every adventurer can find their own story.',
    aboutCard1Title: 'Warm Community',
    aboutCard1Desc: 'A friendly community where both newcomers and veterans can find like-minded friends.',
    aboutCard2Title: 'Unique Features',
    aboutCard2Desc: 'Rich and fun custom systems & events that add endless possibilities to your survival journey.',
    aboutCard3Title: 'Pure Survival',
    aboutCard3Desc: 'Core vanilla experience with minimal plugins, preserving the pure joy of MC exploration.',
    founded: 'Founded',
    members: 'Members',
    uptime: '/ 24 Online',
    featuresTag: '✦ Features',
    featuresTitle1: 'Why choose',
    featuresTitle2: '?',
    featuresDesc: 'We are dedicated to the best Minecraft survival experience',
    feat1Title: 'Active Community',
    feat1Desc: 'Friendly players, regular build contests & fun events — endless fun awaits!',
    feat2Title: 'Smooth & Stable',
    feat2Desc: 'Premium hardware & low-latency network for lag-free gaming.',
    feat3Title: 'Regular Events',
    feat3Desc: 'Build contests, mini-games, festivals — new things to try every week!',
    feat4Title: 'Always Updated',
    feat4Desc: 'Following the latest versions, continuously improving with new content weekly.',
    feat5Title: 'Friendly Vibes',
    feat5Desc: 'Respect, kindness, inclusion — the foundation of our community.',
    feat6Title: 'Pure Experience',
    feat6Desc: 'No pay-to-win, no grind pressure. Just pure Minecraft fun.',
    joinTag: '✦ Join Us',
    joinTitle1: 'Ready for your',
    joinTitle2: '?',
    joinDesc: 'Join our QQ group and start your SLZ Server adventure with fellow players!',
    qqGroup: 'QQ Group',
    copyBtn: 'Copy',
    step1Title: 'Open QQ',
    step1Desc: 'Launch the QQ app',
    step2Title: 'Search Group',
    step2Desc: '1060568494',
    step3Title: 'Join Chat',
    step3Desc: "Let's play together!",
    joinNote: 'Say hi when you join! Everyone is welcome ♡',
    footerDesc: 'Minecraft Survival Server · Meet in the pixel world',
    nav: 'Navigation',
    contact: 'Contact',
    online247: '24/7 Online',
    copied: 'Copied ✨',
    copiedQQ: 'QQ group copied! Join us 🎉',
    copiedIP: 'Server IP copied ✨',
  }
};

// ==================== LANGUAGE ====================
let currentLang = localStorage.getItem('slz-lang') || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('slz-lang', lang);

  // Update HTML lang attribute
  document.documentElement.setAttribute('data-lang', lang);

  // Update all i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const text = i18n[lang][key];
    if (text) {
      // Preserve HTML inside the element (e.g. <span> tags)
      el.innerHTML = text;
    }
  });

  // Update language toggle button text
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    const current = langToggle.querySelector('.lang-current');
    const other = langToggle.querySelector('.lang-other');
    if (current && other) {
      if (lang === 'zh') {
        current.textContent = '中';
        other.textContent = 'EN';
      } else {
        current.textContent = 'EN';
        other.textContent = '中';
      }
    }
  }

  // Update page title based on language
  const titleEl = document.getElementById('pageTitle');
  if (titleEl) {
    titleEl.textContent = lang === 'zh' ? 'SLZ Server — Minecraft 生存服务器' : 'SLZ Server — Minecraft Survival Server';
  }
}

function toggleLang() {
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  setLang(newLang);
}

// ==================== THEME ====================
let currentTheme = localStorage.getItem('slz-theme') || 'dark';

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('slz-theme', theme);

  // Add transition class to prevent flash
  document.documentElement.classList.add('theme-transitioning');
  document.documentElement.setAttribute('data-theme', theme);

  // Update icon
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fa-regular fa-moon' : 'fa-regular fa-sun';
  }

  setTimeout(() => {
    document.documentElement.classList.remove('theme-transitioning');
  }, 400);
}

function toggleTheme() {
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
}

// Init theme and lang on load
document.addEventListener('DOMContentLoaded', () => {
  setTheme(currentTheme);
  setLang(currentLang);
});

// ==================== LOADING ====================
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  if (!loader) return;
  loader.classList.add('hidden');
  setTimeout(() => { loader.style.display = 'none'; }, 500);
});

// ==================== NAVBAR ====================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navLinkItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNavLink();
});

navToggle?.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  navLinks?.classList.toggle('open');
});

navLinkItems.forEach(link => {
  link.addEventListener('click', () => {
    navToggle?.classList.remove('open');
    navLinks?.classList.remove('open');
  });
});

function updateActiveNavLink() {
  const scrollPos = window.scrollY + 120;
  const sections = document.querySelectorAll('section[id]');
  navLinkItems.forEach(link => link.classList.remove('active'));

  sections.forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (scrollPos >= top && scrollPos < bottom) {
      const id = section.getAttribute('id');
      document.querySelector(`.nav-links a[href="#${id}"]`)?.classList.add('active');
    }
  });
}

// ==================== HERO CANVAS ====================
(function initHeroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let W, H;
  let particles = [];
  const COUNT = 50;

  const COLORS = [
    { r: 0,   g: 212, b: 255, a: 0.6 },  // diamond
    { r: 68,  g: 189, b: 50,  a: 0.4 },  // green
    { r: 255, g: 215, b: 0,   a: 0.3 },  // gold
    { r: 255, g: 255, b: 255, a: 0.12 }, // white
  ];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticle() {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    return {
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 6 + 2,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.01,
      color,
      life: Math.random() * 1 + 0.5,
      maxLife: Math.random() * 1 + 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    };
  }

  function init() {
    particles = Array.from({ length: COUNT }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;
      p.rot += p.rotSpeed;
      p.life -= 0.003;

      if (p.x < -50) p.x = W + 50;
      if (p.x > W + 50) p.x = -50;
      if (p.y < -50) p.y = H + 50;
      if (p.y > H + 50) p.y = -50;

      if (p.life <= 0) Object.assign(p, createParticle());

      const lifeRatio = p.life / p.maxLife;
      const alpha = p.opacity * lifeRatio;
      const s = p.size * (0.6 + 0.4 * lifeRatio);

      // Simple diamond/square shape
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = alpha;

      ctx.fillStyle = `rgba(${p.color.r},${p.color.g},${p.color.b},${p.color.a})`;
      ctx.strokeStyle = `rgba(${Math.min(p.color.r+60,255)},${Math.min(p.color.g+60,255)},${Math.min(p.color.b+60,255)},${p.color.a*0.3})`;
      ctx.lineWidth = 1;

      // Draw small diamond
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.lineTo(s * 0.7, 0);
      ctx.lineTo(0, s);
      ctx.lineTo(-s * 0.7, 0);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();
    });

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  init();
  draw();
})();

// ==================== SCROLL ANIMATIONS ====================
(function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-aos]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const siblings = Array.from(el.parentElement?.children || [])
          .filter(child => child.hasAttribute('data-aos'));
        const idx = siblings.indexOf(el);
        if (idx > 0) el.classList.add(`aos-delay-${Math.min(idx, 6)}`);
        el.classList.add('aos-animate');
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
})();

// ==================== STAT COUNTERS ====================
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const start = performance.now();
        const duration = 1800;

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();

// ==================== COPY ====================
function copyIP() {
  const ip = document.getElementById('serverIp')?.textContent || 'slzserver.top';
  copyToClipboard(ip, currentLang === 'zh' ? '服务器地址已复制 ✨' : 'Server IP copied ✨');
}

function copyQQ() {
  copyToClipboard('1060568494', currentLang === 'zh' ? 'QQ群号已复制！快来玩吧 🎉' : 'QQ group copied! Join us 🎉');
}

function copyToClipboard(text, msg) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(() => showToast(msg)).catch(() => fallbackCopy(text, msg));
  } else {
    fallbackCopy(text, msg);
  }
}

function fallbackCopy(text, msg) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast(msg); } catch { showToast('Copy failed'); }
  document.body.removeChild(ta);
}

// ==================== TOAST ====================
let toastTimer = null;

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ==================== BACK TO TOP ====================
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop?.classList.toggle('visible', window.scrollY > 500);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ==================== TOGGLE EVENTS ====================
document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
document.getElementById('langToggle')?.addEventListener('click', toggleLang);

// ==================== MOUSE PARALLAX ====================
(function() {
  const hero = document.getElementById('hero');
  const bg = hero?.querySelector('.hero-bg');
  if (!bg) return;

  hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 6;
    const y = (e.clientY / window.innerHeight - 0.5) * 6;
    bg.style.transform = `scale(1.05) translate(${x}px, ${y}px)`;
    bg.style.transition = 'transform 0.15s ease-out';
  });

  hero.addEventListener('mouseleave', () => {
    bg.style.transform = 'scale(1) translate(0, 0)';
    bg.style.transition = 'transform 0.8s ease';
  });
})();

// ==================== CONSOLE EASTER EGG ====================
console.log(
  '%c ⛏ SLZ Server %c',
  'background: linear-gradient(135deg, #00d4ff, #0099dd); color: #000; font-size: 18px; font-weight: 900; padding: 10px 20px; border-radius: 8px;',
  'background: #0a0a1a; color: #8888a0; font-size: 13px; padding: 10px 20px; border-radius: 8px;'
);
console.log('%cQQ: 1060568494 | Welcome!', 'color: #00d4ff; font-size: 12px;');
