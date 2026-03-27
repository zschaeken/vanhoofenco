/* ============================================================
   Van Hoof & Co — main.js
   ============================================================ */

/* ---------- Translations ---------- */
const translations = {
  nl: {
    /* Nav */
    'nav-home':        'Home',
    'nav-services':    'Diensten',
    'nav-about':       'Over Ons',
    'nav-gallery':     'Realisaties',
    'nav-contact':     'Contact',

    /* Hero */
    'hero-title-1':    'Uw specialist in',
    'hero-title-2':    'verwarming,',
    'hero-title-3':    '&',
    'hero-title-4':    'airconditioning',
    'hero-title-5':    'sanitair',
    'hero-desc':       'Meer dan 40 jaar ervaring in installatie, onderhoud en herstelling van centrale verwarmingssystemen en airconditioning. Lokale service, professioneel uitgevoerd.',
    'hero-cta-contact':'Neem contact op',
    'hero-cta-call':   '014\u00a031\u00a071\u00a029',

    /* Services */
    'services-tag':    'Onze diensten',
    'services-title':  'Wat doen wij voor u?',
    'services-sub':    'Van installatie tot onderhoud en spoedherstellingen, wij staan voor u klaar.',
    'srv1-title':      'CV-installatie',
    'srv1-desc':       'Plaatsing van nieuwe cv-ketels en complete verwarmingsinstallaties voor woningen en appartementen.',
    'srv2-title':      'Onderhoud',
    'srv2-desc':       'Jaarlijkse controle en onderhoud van uw verwarmingsinstallatie voor optimale werking en energiebesparing.',
    'srv3-title':      'CV-herstelling',
    'srv3-desc':       'Snelle diagnose en herstelling van storingen aan cv-ketels of verwarmingssystemen. Geen warmte? Wij lossen het op.',
    'srv4-title':      'Airconditioning',
    'srv4-desc':       'Levering en installatie van airconditioningsystemen voor een comfortabel binnenklimaat het hele jaar door.',
    'srv5-title':      'Sanitair',
    'srv5-desc':       'Installatie van sanitaire toestellen en badkamerrenovaties voor een moderne, functionele ruimte.',
    'srv6-title':      'Badkamerrenovatie',
    'srv6-desc':       'Installatie en renovatie van badkamers.',
    'srv7-title':      'Schouwvegen',
    'srv7-desc':       'Veiligheid voorop: professioneel schouwvegen van uw schoorsteen en rookkanalen.',

    /* About */
    'about-tag':       'Over Van Hoof & Co',
    'about-title':     'Uw vertrouwde lokale partner',
    'about-p1':        'Van Hoof & Co is een familiebedrijf, opgericht in 1979 en gevestigd in Mol. Ons kleine, hechte team van vakbekwame technici werkt uitsluitend voor particuliere klanten in de regio.',
    'about-p2':        'Onze kracht: persoonlijk contact, kwaliteitswerk en eerlijke prijzen. Van de eerste offerte tot de laatste schroef, alles met zorg afgewerkt.',
    'badge1-title':    '40+ jaar ervaring',
    'badge1-sub':      'Actief in de sector sinds 1979',
    'badge2-title':    'Erkend installateur',
    'badge2-sub':      'Gecertificeerd voor gas en koeltechniek',
    'badge3-title':    'Lokale specialist',
    'badge3-sub':      'Gevestigd in Mol, voor de regio',

    /* Gallery */
    'gallery1-tag':     'Wie zijn wij',
    'gallery-tag':     'Ons werk',
    'gallery-title':   'Recente realisaties',
    'gallery-sub':     'Een greep uit ons werk.',
    'gallery1-cap':      'Moderne airco-installatie',
    'gallery2-cap':      'Comfortabele badkamer',
    'gallery3-cap':      'Efficiënte cv-ketel',
    'gallery4-cap':      'Boiler en ketel',
    'gallery5-cap':      'Buffer tank',
    'gallery6-cap':      'Airconditioning muurunit',

    /* Contact */
    'contact-tag':     'Contact',
    'contact-title':   'Neem contact op',
    'contact-sub':     'Vragen over een offerte, herstelling of onderhoud? Wij helpen u graag.',
    'lbl-address':     'Adres',
    'lbl-phone':       'Telefoon',
    'lbl-email':       'E-mail',
    'lbl-hours':       'Openingsuren',
    'hours-mon-fri':   'Maandag – vrijdag',
    'hours-sat-sun':   'Zaterdag – zondag',
    'hours-closed':    'telefonisch',
    'cta-call-label':  'Bel ons direct',
    'cta-call-btn':    'Bel 014\u00a031\u00a071\u00a029',

    /* Footer */
    'footer-copy':     '© 2025 Van Hoof & Co bv — Herdersstraat 16, 2400 Mol',
    'footer-privacy':  'Privacy',
    'footer-top':      'Naar boven',
  },

  en: {
    /* Nav */
    'nav-home':        'Home',
    'nav-services':    'Services',
    'nav-about':       'About',
    'nav-gallery':     'Projects',
    'nav-contact':     'Contact',

    /* Hero */
    'hero-tag':        '✦ Certified installer – Mol, Belgium',
    'hero-title-1':    'Your specialist in',
    'hero-title-2':    'heating',
    'hero-title-3':    '&',
    'hero-title-4':    'air conditioning',
    'hero-desc':       'Over 40 years of experience in the installation, maintenance, and repair of central heating systems and air conditioning. Local service, expertly delivered.',
    'hero-cta-contact':'Get in touch',
    'hero-cta-call':   '014\u00a031\u00a071\u00a029',

    /* Services */
    'services-tag':    'Our services',
    'services-title':  'What can we do for you?',
    'services-sub':    'From installation to maintenance and emergency repairs – we are here for you.',
    'srv1-title':      'Boiler installation',
    'srv1-desc':       'Installation of new boilers and complete central heating systems for your home or apartment.',
    'srv2-title':      'Heating maintenance',
    'srv2-desc':       'Annual inspection and service of your heating system for optimal performance and energy savings.',
    'srv3-title':      'Heating repair',
    'srv3-desc':       'Fast diagnosis and repair of faults in your boiler or heating system. No heat? We fix it.',
    'srv4-title':      'Air conditioning',
    'srv4-desc':       'Supply and installation of air conditioning systems for a comfortable indoor climate year-round.',
    'srv5-title':      'Sanitary installations',
    'srv5-desc':       'Installation of sanitary fixtures and bathroom renovations for a modern, functional space.',
    'srv6-title':      'Bathroom renovation',
    'srv6-desc':       'Installation and renovations of bathrooms.',
    'srv7-title':      'Chimney sweeping',
    'srv7-desc':       'Safety first: professional chimney sweeping of your flue and ducts.',

    /* About */
    'about-tag':       'About Van Hoof & Co',
    'about-title':     'Your trusted local partner',
    'about-p1':        'Van Hoof & Co is a familie bedrijf en bv (private limited company) founded in 1979, based in Mol. With a small, dedicated team of skilled technicians, we work exclusively for residential customers in the region.',
    'about-p2':        'Our strength lies in personal contact, quality workmanship, and honest pricing. You call us, we show up. From the first quote to the last bolt – always finished with care.',
    'badge1-title':    '40+ years of experience',
    'badge1-sub':      'Active in the sector since 1979',
    'badge2-title':    'Certified installer',
    'badge2-sub':      'Certified for gas and refrigeration',
    'badge3-title':    'Local specialist',
    'badge3-sub':      'Based in Mol, serving the region',

    /* Gallery */
    'gallery1-tag':     'Who we are',
    'gallery-tag':     'Our work',
    'gallery-title':   'Recent projects',
    'gallery-sub':     'A selection of our work – from heating installations to air conditioning projects.',
    'gallery1-cap':      'Modern air conditioning installation',
    'gallery2-cap':      'Comfortable bathroom',
    'gallery3-cap':      'Efficient boiler',
    'gallery4-cap':      'Boiler and heating system',
    'gallery5-cap':      'Buffer tank',
    'gallery6-cap':      'Air conditioning wall unit',

    /* Contact */
    'contact-tag':     'Contact',
    'contact-title':   'Get in touch',
    'contact-sub':     'Questions about a quote, a repair, or maintenance? We are happy to help.',
    'lbl-address':     'Address',
    'lbl-phone':       'Phone',
    'lbl-email':       'Email',
    'lbl-hours':       'Opening hours',
    'hours-mon-fri':   'Monday – Friday',
    'hours-sat-sun':   'Saturday – Sunday',
    'hours-closed':    'Telephonically',
    'cta-call-label':  'Call us directly',
    'cta-call-btn':    'Call 014\u00a031\u00a071\u00a029',

    /* Footer */
    'footer-copy':     '© 2025 Van Hoof & Co bv — Herdersstraat 16, 2400 Mol',
    'footer-privacy':  'Privacy',
    'footer-top':      'Back to top',
  }
};

/* ---------- Language: auto-detect from browser ---------- */
function detectLang() {
  const lang = (navigator.language || navigator.userLanguage || 'nl').toLowerCase();
  return lang.startsWith('en') ? 'en' : 'nl';
}

function applyLang(lang) {
  const t = translations[lang] || translations.nl;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  document.documentElement.lang = lang;
}

/* ---------- Header: scroll shadow ---------- */
function initHeader() {
  const header = document.getElementById('site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ---------- Active nav link on scroll ---------- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.main-nav a, .mobile-nav a');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ---------- Mobile hamburger ---------- */
function initHamburger() {
  const btn = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const overlay = document.getElementById('mobile-nav-overlay');

  function toggle(open) {
    btn.classList.toggle('open', open);
    mobileNav.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
    btn.setAttribute('aria-expanded', String(open));
  }

  btn.addEventListener('click', () => toggle(!btn.classList.contains('open')));
  overlay.addEventListener('click', () => toggle(false));

  // Close on nav link click
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggle(false));
  });
}

/* ---------- Scroll-reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}

/* ---------- Smooth scroll offset for fixed header ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ---------- Lightbox ---------- */
function initLightbox() {
  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.innerHTML = `<button class="lightbox-close" aria-label="Sluiten">&times;</button><img class="lightbox-img" src="" alt="" />`;
  document.body.appendChild(lb);

  const lbImg = lb.querySelector('.lightbox-img');
  const closeBtn = lb.querySelector('.lightbox-close');

  function open(src, alt) {
    lbImg.src = src;
    lbImg.alt = alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      open(img.src, img.alt);
    });
  });

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', e => { if (e.target === lb) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initActiveNav();
  initHamburger();
  initReveal();
  initSmoothScroll();
  initLightbox();
  applyLang(detectLang());
});
