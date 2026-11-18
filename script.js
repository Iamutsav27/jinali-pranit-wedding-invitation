(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const story = $('.story');
  const scenes = $$('.scene');
  const dots = $$('.dots a');
  const sceneIds = scenes.map(scene => scene.id);
  const intro = $('.intro-video');
  const song = $('#song');
  const musicButton = $('#music');
  const languageButton = $('#language');
  const loading = $('#loading-screen');
  const loadingStatus = $('#loading-status');
  const enterButton = $('#enter-button');
  const rsvpButton = $('#rsvp-yes');
  const rsvpNumber = '918735912707';
  const stage = $('.door-stage');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowEnd = (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    (navigator.connection && navigator.connection.saveData);
  let language = 'en';
  let currentIndex = Math.max(0, sceneIds.indexOf(location.hash.slice(1)));
  let activeScene = scenes[currentIndex];
  let navigationLocked = false;
  let gateProgress = 0;
  let queuedHashIndex = null;
  try { language = localStorage.getItem('wedding-language') || 'en'; } catch (_) {}

  function setLanguage(value) {
    language = value === 'gu' ? 'gu' : 'en';
    document.documentElement.lang = language;
    document.body.lang = language;
    $$('[data-en]').forEach(element => { element.innerHTML = element.dataset[language]; });
    $$('.language-options button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    languageButton.textContent = language === 'en' ? 'ગુજરાતી' : 'English';
    updateMusicButton();
    updateRsvpLink();
    try { localStorage.setItem('wedding-language', language); } catch (_) {}
  }
  function updateRsvpLink() {
    const message = language === 'gu'
      ? 'નમસ્તે! હું ૨૬ જાન્યુઆરી ૨૦૨૭ના રોજ જિનાલી અને પ્રણિતના લગ્નમાં હાજર રહીશ. આપ સૌ સાથે ઉજવણી કરવાની આતુરતા છે!'
      : "Hello! I'll be there to celebrate Jinali and Pranit's wedding on 26 January 2027. Looking forward to celebrating with you!";
    rsvpButton.href = 'https://wa.me/' + rsvpNumber + '?text=' + encodeURIComponent(message);
    rsvpButton.setAttribute('aria-label', language === 'gu' ? 'WhatsApp દ્વારા હાજરીની પુષ્ટિ કરો' : 'Confirm attendance on WhatsApp');
  }
  function updateMusicButton() {
    const playing = !song.paused;
    musicButton.textContent = playing
      ? (language === 'en' ? '♫ MUSIC ON' : '♫ સંગીત ચાલુ')
      : (language === 'en' ? '♫ PLAY MUSIC' : '♫ સંગીત ચાલુ કરો');
    musicButton.setAttribute('aria-pressed', String(playing));
    musicButton.setAttribute('aria-label', playing ? 'Pause music' : 'Play music');
  }
  $$('.language-options button').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  languageButton.addEventListener('click', () => setLanguage(language === 'en' ? 'gu' : 'en'));
  musicButton.addEventListener('click', async () => {
    if (song.paused) {
      try { await song.play(); } catch (_) { showToast(language === 'en' ? 'Tap again to play music' : 'સંગીત માટે ફરીથી ટેપ કરો'); }
    } else song.pause();
    updateMusicButton();
  });
  song.addEventListener('play', updateMusicButton);
  song.addEventListener('pause', updateMusicButton);
  setLanguage(language);

  intro.addEventListener('ended', () => {
    try { intro.currentTime = Math.min(4.7, intro.duration || 4.7); } catch (_) {}
    intro.pause();
  });
  function mediaReady(element, event) {
    return new Promise(resolve => {
      if (element.readyState >= 2) return resolve();
      element.addEventListener(event, resolve, {once:true});
      element.addEventListener('error', resolve, {once:true});
    });
  }
  const preload = ['ganpati-poster.png','assets/palace-far.png','assets/palace-main.png','assets/palace-front.png'];
  const images = preload.map(file => new Promise(resolve => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = './' + file;
  }));
  intro.load();
  song.load();
  Promise.race([
    Promise.allSettled([...images, mediaReady(intro, 'loadeddata'), mediaReady(song, 'canplay')]),
    new Promise(resolve => setTimeout(resolve, 9000))
  ]).then(() => {
    loading.classList.add('ready');
    loadingStatus.dataset.en = 'Ready when you are';
    loadingStatus.dataset.gu = 'હવે તૈયાર છે';
    enterButton.disabled = false;
    setLanguage(language);
  });
  enterButton.addEventListener('click', async () => {
    document.body.classList.add('entered');
    loading.setAttribute('aria-hidden', 'true');
    enterButton.disabled = true;
    try { await song.play(); } catch (_) {}
    updateMusicButton();
    if (currentIndex === 0) {
      try { intro.currentTime = 0; await intro.play(); } catch (_) {}
    } else intro.pause();
    if (!reduceMotion) requestAnimationFrame(animateFireworks);
  });

  // Missing layers fall back to the existing painted palace art beneath them.
  $$('img[data-slot]').forEach(image => {
    image.addEventListener('error', () => { image.hidden = true; });
    if (image.complete && image.naturalWidth === 0) image.hidden = true;
  });

  if (!reduceMotion) {
    const petalCount = lowEnd ? 12 : 36;
    $$('.petals').forEach(field => {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('i');
        petal.className = 'petal';
        petal.style.left = (Math.random() * 100).toFixed(2) + '%';
        const size = 7 + Math.random() * 13;
        const wind = Math.random() * 160 - 80;
        petal.style.setProperty('--size', size.toFixed(1) + 'px');
        petal.style.setProperty('--petal-height', (size * 1.5).toFixed(1) + 'px');
        petal.style.setProperty('--opacity', (.45 + Math.random() * .5).toFixed(2));
        petal.style.setProperty('--blur', (Math.random() > .8 ? 1.5 : 0) + 'px');
        petal.style.setProperty('--dur', (9 + Math.random() * 13).toFixed(1) + 's');
        petal.style.setProperty('--delay', (-Math.random() * 20).toFixed(1) + 's');
        petal.style.setProperty('--wind', wind.toFixed(1) + 'px');
        petal.style.setProperty('--wind-one', (wind * .4).toFixed(1) + 'px');
        petal.style.setProperty('--wind-two', (wind * -.5).toFixed(1) + 'px');
        fragment.append(petal);
      }
      field.append(fragment);
    });
  }

  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  const transitionMs = 820;
  const doorIndex = sceneIds.indexOf('doors');
  const weddingIndex = sceneIds.indexOf('wedding');
  function pageTransform(index) {
    return 'translate3d(0,' + (-index * 100) + 'dvh,0)';
  }
  function syncPage(index) {
    activeScene = scenes[index];
    scenes.forEach((scene, position) => scene.classList.toggle('active', position === index));
    dots.forEach((dot, position) => {
      const current = position === index;
      dot.classList.toggle('current', current);
      if (current) dot.setAttribute('aria-current', 'page');
      else dot.removeAttribute('aria-current');
    });
  }
  function setGate(value) {
    gateProgress = clamp(value, 0, 1);
    const fade = clamp((gateProgress - .78) / .22, 0, 1);
    stage.style.setProperty('--gate', gateProgress.toFixed(4));
    stage.style.setProperty('--gate-fade', fade.toFixed(4));
    stage.style.setProperty('--gate-scale', (1 + gateProgress * 1.5).toFixed(4));
    stage.style.setProperty('--gate-left', (-gateProgress * 125).toFixed(1) + '%');
    stage.style.setProperty('--gate-right', (gateProgress * 125).toFixed(1) + '%');
    stage.style.setProperty('--gate-left-angle', (-gateProgress * 30).toFixed(1) + 'deg');
    stage.style.setProperty('--gate-right-angle', (gateProgress * 30).toFixed(1) + 'deg');
    stage.style.setProperty('--gate-opacity', (1 - fade).toFixed(4));
    stage.style.setProperty('--content-opacity', (1 - clamp(gateProgress * 1.65, 0, 1)).toFixed(4));
    stage.style.setProperty('--hint-opacity', (1 - clamp(gateProgress * 2, 0, 1)).toFixed(4));
  }
  function setParallax(index, fraction) {
    scenes[index].querySelectorAll('.layer').forEach(layer => {
      const depth = layer.classList.contains('layer-far') ? 16 :
        layer.classList.contains('layer-front') ? 48 : 30;
      layer.style.setProperty('--parallax-y', (fraction * depth).toFixed(1) + 'px');
    });
  }
  function waitForTransition(property, duration) {
    return new Promise(resolve => {
      let finished = false;
      const timer = setTimeout(done, duration + 100);
      function done() {
        if (finished) return;
        finished = true;
        clearTimeout(timer);
        story.removeEventListener('transitionend', onEnd);
        document.removeEventListener('visibilitychange', onVisibility);
        resolve();
      }
      function onEnd(event) {
        if (event.target === story && event.propertyName === property) done();
      }
      function onVisibility() {
        if (document.hidden) done();
      }
      story.addEventListener('transitionend', onEnd);
      document.addEventListener('visibilitychange', onVisibility);
      if (document.hidden) queueMicrotask(done);
    });
  }
  async function fadePage(target) {
    const duration = reduceMotion ? 160 : 190;
    story.style.transition = 'opacity ' + duration + 'ms ease-in';
    story.offsetHeight;
    story.style.opacity = '0';
    await waitForTransition('opacity', duration);
    story.style.transition = 'none';
    story.style.transform = pageTransform(target);
    setGate(0);
    story.offsetHeight;
    story.style.transition = 'opacity ' + duration + 'ms ease-out';
    story.style.opacity = '1';
    await waitForTransition('opacity', duration);
    story.style.transition = '';
  }
  async function slidePage(from, target) {
    const gateStart = gateProgress;
    const gateEnd = from === doorIndex && target === weddingIndex ? 1 :
      from === weddingIndex && target === doorIndex ? 0 :
      target === doorIndex ? 0 : gateProgress;
    const doorMoving = from === doorIndex || target === doorIndex;
    const start = performance.now();
    function animate(now) {
      if (!navigationLocked) return;
      const progress = clamp((now - start) / transitionMs, 0, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setParallax(from, -eased * .5);
      setParallax(target, (1 - eased) * .5);
      if (doorMoving) setGate(gateStart + (gateEnd - gateStart) * eased);
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    story.style.transform = pageTransform(target);
    await waitForTransition('transform', transitionMs);
    setParallax(from, 0);
    setParallax(target, 0);
    if (doorMoving) setGate(gateEnd);
    else if (target !== weddingIndex) setGate(0);
  }
  function resumeIntro(restart) {
    if (restart || intro.ended || intro.currentTime >= 4.7) {
      try { intro.currentTime = 0; } catch (_) {}
    }
    intro.play().catch(() => {});
  }
  async function goTo(target, options = {}) {
    if (!document.body.classList.contains('entered') || navigationLocked ||
        target < 0 || target >= scenes.length || target === currentIndex) return false;
    const from = currentIndex;
    navigationLocked = true;
    currentIndex = target;
    if (from === 0) intro.pause();
    syncPage(target);
    try {
      if (reduceMotion || Math.abs(target - from) > 1) await fadePage(target);
      else await slidePage(from, target);
    } finally {
      story.style.opacity = '1';
      story.style.transition = '';
      story.style.transform = pageTransform(target);
      if (target === 0) resumeIntro(Boolean(options.restartIntro));
      if (options.updateHash !== false && queuedHashIndex === null) {
        try { history.replaceState(null, '', '#' + sceneIds[target]); } catch (_) {}
      }
      navigationLocked = false;
      if (queuedHashIndex !== null) {
        const queued = queuedHashIndex;
        queuedHashIndex = null;
        if (queued !== currentIndex) goTo(queued, {updateHash:false});
      }
    }
    return true;
  }
  function setInitialPage(index) {
    currentIndex = index;
    story.style.transition = 'none';
    story.style.transform = pageTransform(index);
    syncPage(index);
    setGate(0);
    if (scrollY) scrollTo(0, 0);
    requestAnimationFrame(() => {
      if (!navigationLocked) story.style.transition = '';
    });
  }
  setInitialPage(currentIndex);
  dots.forEach((dot, index) => dot.addEventListener('click', event => {
    event.preventDefault();
    goTo(index);
  }));
  let touchStart = null;
  addEventListener('touchstart', event => {
    if (!document.body.classList.contains('entered') || navigationLocked || event.touches.length !== 1) {
      touchStart = null;
      return;
    }
    touchStart = {x:event.touches[0].clientX,y:event.touches[0].clientY};
  }, {passive:true});
  addEventListener('touchmove', event => {
    if (document.body.classList.contains('entered') && event.cancelable) event.preventDefault();
  }, {passive:false});
  addEventListener('touchend', event => {
    if (!touchStart || navigationLocked || !document.body.classList.contains('entered')) {
      touchStart = null;
      return;
    }
    const end = event.changedTouches[0];
    const dx = end.clientX - touchStart.x;
    const dy = end.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dy) > 50 && Math.abs(dy) > Math.abs(dx)) {
      goTo(currentIndex + (dy < 0 ? 1 : -1));
    }
  }, {passive:true});
  addEventListener('touchcancel', () => { touchStart = null; }, {passive:true});
  let wheelAccum = 0;
  let wheelLatched = false;
  let wheelIdleTimer;
  addEventListener('wheel', event => {
    if (!document.body.classList.contains('entered')) return;
    if (event.cancelable) event.preventDefault();
    clearTimeout(wheelIdleTimer);
    wheelIdleTimer = setTimeout(() => { wheelAccum = 0; wheelLatched = false; }, 260);
    if (navigationLocked || wheelLatched || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
    const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
    if (Math.sign(delta) !== Math.sign(wheelAccum)) wheelAccum = 0;
    wheelAccum += delta;
    if (Math.abs(wheelAccum) < 32) return;
    wheelLatched = true;
    goTo(currentIndex + Math.sign(wheelAccum));
  }, {passive:false});
  addEventListener('keydown', event => {
    if (!document.body.classList.contains('entered') || event.repeat || event.altKey ||
        event.ctrlKey || event.metaKey) return;
    const direction = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 :
      event.key === 'ArrowUp' || event.key === 'PageUp' ? -1 : 0;
    if (!direction) return;
    event.preventDefault();
    goTo(currentIndex + direction);
  });
  function handleHashChange() {
    const index = sceneIds.indexOf(location.hash.slice(1));
    if (index < 0 || index === currentIndex) return;
    if (!document.body.classList.contains('entered')) setInitialPage(index);
    else if (navigationLocked) queuedHashIndex = index;
    else goTo(index, {updateHash:false});
  }
  addEventListener('hashchange', handleHashChange);
  addEventListener('popstate', handleHashChange);
  addEventListener('scroll', () => { if (scrollY) scrollTo(0, 0); }, {passive:true});
  addEventListener('resize', resizeCanvases, {passive:true});

  const canvases = $$('.fireworks').map(canvas => ({canvas, ctx: canvas.getContext('2d'), particles:[], lastBurst:0}));
  function resizeCanvases() {
    const dpr = Math.min(devicePixelRatio || 1, lowEnd ? 1 : 2);
    canvases.forEach(item => {
      const rect = item.canvas.getBoundingClientRect();
      item.canvas.width = Math.max(1, Math.round(rect.width * dpr));
      item.canvas.height = Math.max(1, Math.round(rect.height * dpr));
      item.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      item.width = rect.width;
      item.height = rect.height;
    });
  }
  resizeCanvases();
  function burst(item, now) {
    const palette = ['#f8d793','#f6b0ad','#b6d7d0','#ffffff','#d9b8f2'];
    const x = item.width * (.16 + Math.random() * .68);
    const y = item.height * (.16 + Math.random() * .36);
    const count = lowEnd ? 11 : 22;
    const color = palette[Math.floor(Math.random() * palette.length)];
    for (let i = 0; i < count; i++) {
      const angle = Math.PI * 2 * i / count + Math.random() * .15;
      const speed = .5 + Math.random() * 1.45;
      item.particles.push({x,y,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,life:1,color,size:.8+Math.random()*1.5});
    }
    item.lastBurst = now;
  }
  function animateFireworks(now) {
    if (!document.body.classList.contains('entered')) return;
    canvases.forEach(item => {
      const scene = item.canvas.closest('.scene');
      const ctx = item.ctx;
      if (scene !== activeScene || document.hidden) {
        if (item.particles.length) { item.particles.length = 0; ctx.clearRect(0,0,item.width,item.height); }
        return;
      }
      ctx.clearRect(0,0,item.width,item.height);
      if (now - item.lastBurst > (lowEnd ? 1900 : 1250)) burst(item, now);
      ctx.globalCompositeOperation = 'lighter';
      item.particles = item.particles.filter(particle => particle.life > 0);
      item.particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += .018;
        particle.life -= lowEnd ? .021 : .014;
        ctx.globalAlpha = Math.max(0, particle.life) * .78;
        ctx.fillStyle = particle.color;
        if (!lowEnd) { ctx.shadowColor = particle.color; ctx.shadowBlur = 7; }
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    });
    requestAnimationFrame(animateFireworks);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.setAttribute('role', 'status');
  document.body.append(toast);
  let toastTimer;
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  }
  $('#save-date').addEventListener('click', () => {
    const ics = [
      'BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Jinali and Pranit//Wedding Invitation//EN',
      'BEGIN:VEVENT','UID:jinali-pranit-wedding-20270126@example.com',
      'DTSTAMP:20261113T000000Z','DTSTART;VALUE=DATE:20270126',
      'DTEND;VALUE=DATE:20270127','SUMMARY:Jinali and Pranit Wedding',
      'DESCRIPTION:Time and venue to follow.','END:VEVENT','END:VCALENDAR'
    ].join('\r\n');
    const url = URL.createObjectURL(new Blob([ics], {type:'text/calendar'}));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Jinali-Pranit-Wedding.ics';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  $('#share-invite').addEventListener('click', async () => {
    const shareUrl = location.href.split('#')[0];
    const data = {title:'Jinali & Pranit Wedding Invitation',text:'Celebrate with us on 26 January 2027.',url:shareUrl};
    if (navigator.share) {
      try { await navigator.share(data); } catch (_) {}
    } else if (navigator.clipboard && isSecureContext) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        showToast(language === 'en' ? 'Invitation link copied' : 'આમંત્રણની લિંક કૉપી થઈ');
      } catch (_) { showToast(shareUrl); }
    } else showToast(shareUrl);
  });
  $('#replay').addEventListener('click', () => {
    goTo(0, {restartIntro:true});
  });
})();
