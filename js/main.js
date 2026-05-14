/* ============================================================
   PANACHE ACADEMY — Site Scripts
   Shared across all pages. Vanilla JS, no dependencies.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- 1. Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 12) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 2. Mobile nav toggle ---------- */
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('primaryNav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // close when a link is clicked
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          toggle.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ---------- 3. Animated counters on scroll ---------- */
  const counters = document.querySelectorAll('.counter');
  if (counters.length && 'IntersectionObserver' in window) {
    const fmt = n => n.toLocaleString('en-IN');
    const animate = (el) => {
      const to = parseInt(el.dataset.to, 10) || 0;
      const duration = 1600;
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(to * eased));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => io.observe(c));
  } else {
    counters.forEach(c => { c.textContent = c.dataset.to; });
  }

  /* ---------- 4. Testimonial carousel ---------- */
  const track = document.getElementById('testimonialTrack');
  const dotsBox = document.getElementById('testimonialDots');
  if (track && dotsBox) {
    const slides = track.querySelectorAll('.testimonial');
    const dots   = dotsBox.querySelectorAll('button');
    let i = 0;
    let timer;

    const show = (n) => {
      slides[i].classList.remove('active');
      dots[i].classList.remove('active');
      i = (n + slides.length) % slides.length;
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    };
    const next = () => show(i + 1);
    const start = () => { stop(); timer = setInterval(next, 6000); };
    const stop  = () => { if (timer) clearInterval(timer); };

    dots.forEach((d) => {
      d.addEventListener('click', () => {
        show(parseInt(d.dataset.i, 10));
        start();
      });
    });

    track.addEventListener('mouseenter', stop);
    track.addEventListener('mouseleave', start);
    start();
  }

  /* ---------- 5. Reveal on scroll ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(r => io.observe(r));
  } else {
    reveals.forEach(r => r.classList.add('in'));
  }

  /* ---------- 6. Course filter (used on courses.html) ---------- */
  const filterBar = document.getElementById('courseFilter');
  const searchIn  = document.getElementById('courseSearch');
  const courseList= document.getElementById('coursesList');
  const emptyMsg  = document.getElementById('coursesEmpty');

  if (filterBar && courseList) {
    let activeCat = 'all';
    let query = '';

    const applyFilter = () => {
      const cards = courseList.querySelectorAll('.course-card-full, .course-card');
      let shown = 0;
      cards.forEach(card => {
        const cat   = card.dataset.cat || '';
        const text  = (card.dataset.text || card.textContent).toLowerCase();
        const matchCat = (activeCat === 'all') || cat === activeCat;
        const matchQ   = !query || text.includes(query);
        const visible  = matchCat && matchQ;
        card.style.display = visible ? '' : 'none';
        if (visible) shown++;
      });
      if (emptyMsg) emptyMsg.style.display = shown === 0 ? 'block' : 'none';
    };

    filterBar.querySelectorAll('[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.cat;
        applyFilter();
      });
    });

    if (searchIn) {
      searchIn.addEventListener('input', (e) => {
        query = e.target.value.trim().toLowerCase();
        applyFilter();
      });
    }
  }

  /* ---------- 7. Contact form validation ---------- */
  const form = document.getElementById('contactForm');
  if (form) {
    const showError = (field, msg) => {
      const wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.add('error');
      const err = wrap.querySelector('.field-error');
      if (err) err.textContent = msg;
    };
    const clearError = (field) => {
      const wrap = field.closest('.field');
      if (!wrap) return;
      wrap.classList.remove('error');
      const err = wrap.querySelector('.field-error');
      if (err) err.textContent = '';
    };

    form.querySelectorAll('input, textarea, select').forEach(f => {
      f.addEventListener('input', () => clearError(f));
      f.addEventListener('change', () => clearError(f));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      const name  = form.querySelector('[name="name"]');
      const email = form.querySelector('[name="email"]');
      const phone = form.querySelector('[name="phone"]');
      const course= form.querySelector('[name="course"]');
      const city  = form.querySelector('[name="city"]');
      const msg   = form.querySelector('[name="message"]');

      if (!name.value.trim()) { showError(name, 'Please enter your name'); valid = false; }
      if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) { showError(email, 'Enter a valid email'); valid = false; }
      if (!/^[\d\s+\-()]{8,}$/.test(phone.value.trim())) { showError(phone, 'Enter a valid phone number'); valid = false; }
      if (course && !course.value) { showError(course, 'Choose a course'); valid = false; }
      if (city && !city.value) { showError(city, 'Choose a campus city'); valid = false; }

      if (!valid) return;

      const success = form.querySelector('.form-success');
      const submit  = form.querySelector('button[type="submit"]');

      submit.disabled = true;
      submit.textContent = 'Sending...';

      // mailto fallback so the form actually does something without a backend
      const body = encodeURIComponent(
        `Name: ${name.value}\nEmail: ${email.value}\nPhone: ${phone.value}` +
        (course ? `\nCourse: ${course.value}` : '') +
        (city ? `\nCity: ${city.value}` : '') +
        (msg ? `\n\nMessage:\n${msg.value}` : '')
      );
      const subject = encodeURIComponent('New enquiry from panacheacademy.com');
      const mailto = `mailto:ahmedabad@panacheacademy.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        if (success) success.classList.add('show');
        form.reset();
        submit.disabled = false;
        submit.textContent = 'Send Enquiry →';
        window.location.href = mailto;
      }, 700);
    });
  }

  /* ---------- 8. Set active nav link based on current page ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path) link.classList.add('active');
    else link.classList.remove('active');
  });

  /* ---------- 9. Custom animated cursor — instant dot + trailing ring ---------- */
  function initCustomCursor() {
    if (document.querySelector('.cursor-dot')) return; // already initialised
    if (!document.body) return;
    // Skip on touch / reduced-motion (CSS also hides via media query as safety)
    try {
      if (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) return;
      if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) { /* matchMedia may not exist — proceed */ }

    const dot  = document.createElement('div');
    const ring = document.createElement('div');
    dot.className  = 'cursor cursor-dot';
    ring.className = 'cursor cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.body.classList.add('has-custom-cursor');

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let visible = false;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      if (!visible) {
        visible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '';
      }
    };

    const tick = () => {
      // Higher ease = tighter trail, snappier ring follow
      const ease = 0.32;
      rx += (mx - rx) * ease;
      ry += (my - ry) * ease;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    requestAnimationFrame(tick);

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '';
    });

    const hoverables = 'a, button, [role="button"], input, select, textarea, [contenteditable], label, .filter-chip, .course-card, .course-card-full, .story-card, .accred-card, .why-card, .mv-card, .location-card, .process-step, .testimonial-dots button, .nav-toggle, .brand-chip';
    const onEnter = () => document.body.classList.add('cursor-hover');
    const onLeave = () => document.body.classList.remove('cursor-hover');
    document.querySelectorAll(hoverables).forEach(el => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });
  }

  // Run when DOM is ready (may already be ready since script is at end of body)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCustomCursor);
  } else {
    initCustomCursor();
  }

  /* ---------- 10. Click-spark effect — radial sparks on every click ---------- */
  function initClickSpark(opts) {
    if (!document.body) return;
    if (document.querySelector('.click-spark-canvas')) return; // already initialised
    // Respect reduced-motion
    try {
      if (window.matchMedia &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    } catch (e) { /* proceed */ }

    const cfg = Object.assign({
      sparkColor:  '#FDC900',
      sparkSize:   12,
      sparkRadius: 20,
      sparkCount:  10,
      duration:    500,
      easing:      'ease-out',
      extraScale:  1.0,
      lineWidth:   2
    }, opts || {});

    const canvas = document.createElement('canvas');
    canvas.className = 'click-spark-canvas';
    canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:10000;user-select:none;';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width  = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width  = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    }
    resize();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 80);
    }, { passive: true });

    function ease(t) {
      switch (cfg.easing) {
        case 'linear':      return t;
        case 'ease-in':     return t * t;
        case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:            return t * (2 - t); // ease-out
      }
    }

    const sparks = [];

    document.addEventListener('click', (e) => {
      const now = performance.now();
      for (let i = 0; i < cfg.sparkCount; i++) {
        sparks.push({
          x: e.clientX,
          y: e.clientY,
          angle: (2 * Math.PI * i) / cfg.sparkCount,
          startTime: now
        });
      }
    }, { passive: true });

    const cssW = () => parseInt(canvas.style.width, 10);
    const cssH = () => parseInt(canvas.style.height, 10);

    function draw(ts) {
      ctx.clearRect(0, 0, cssW(), cssH());

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        const elapsed = ts - s.startTime;
        if (elapsed >= cfg.duration) {
          sparks.splice(i, 1);
          continue;
        }
        const p = elapsed / cfg.duration;
        const eased = ease(p);
        const distance   = eased * cfg.sparkRadius * cfg.extraScale;
        const lineLength = cfg.sparkSize * (1 - eased);

        const cos = Math.cos(s.angle);
        const sin = Math.sin(s.angle);
        const x1 = s.x + distance * cos;
        const y1 = s.y + distance * sin;
        const x2 = s.x + (distance + lineLength) * cos;
        const y2 = s.y + (distance + lineLength) * sin;

        ctx.globalAlpha = 1 - eased * 0.4; // gentle fade
        ctx.strokeStyle = cfg.sparkColor;
        ctx.lineWidth   = cfg.lineWidth;
        ctx.lineCap     = 'round';
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);

    // Expose config so the developer can tweak from console: window.__clickSpark.cfg.sparkColor = '#fff'
    window.__clickSpark = { cfg, sparks, canvas };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initClickSpark());
  } else {
    initClickSpark();
  }
})();
