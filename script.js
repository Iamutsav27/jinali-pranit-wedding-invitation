(() => {
  const $ = selector => document.querySelector(selector);
  const $$ = selector => [...document.querySelectorAll(selector)];
  const scenes = $$('.scene');
  const dots = $$('.dots a');
  const intro = $('.intro-video');
  const song = $('#song');
  const musicButton = $('#music');
  const languageButton = $('#language');
  const loading = $('#loading-screen');
  const loadingStatus = $('#loading-status');
  const enterButton = $('#enter-button');
  const door = $('#doors');
  const stage = $('.door-stage');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowEnd = (navigator.deviceMemory && navigator.deviceMemory <= 4) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    (navigator.connection && navigator.connection.saveData);
  let language = 'en';
  let activeScene = scenes[0];
  let scrollTicking = false;
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
    try { localStorage.setItem('wedding-language', language); } catch (_) {}
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
    try { intro.currentTime = 0; await intro.play(); } catch (_) {}
    updateScrollState();
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
  function updateScrollState() {
    scrollTicking = false;
    const center = innerHeight * .5;
    activeScene = scenes.reduce((nearest, scene) => {
      const rect = scene.getBoundingClientRect();
      const distance = rect.top <= center && rect.bottom >= center
        ? 0 : Math.min(Math.abs(rect.top - center), Math.abs(rect.bottom - center));
      return distance < nearest.distance ? {scene, distance} : nearest;
    }, {scene: scenes[0], distance: Infinity}).scene;
    scenes.forEach((scene, index) => {
      const active = scene === activeScene;
      scene.classList.toggle('active', active);
      dots[index].classList.toggle('current', active);
      if (active) dots[index].setAttribute('aria-current', 'true');
      else dots[index].removeAttribute('aria-current');
      const rect = scene.getBoundingClientRect();
      const progress = clamp((innerHeight - rect.top) / (2 * innerHeight), 0, 1);
      scene.querySelectorAll('.layer').forEach(layer => {
        const depth = layer.classList.contains('layer-far') ? 16 :
          layer.classList.contains('layer-front') ? 48 : 30;
        layer.style.setProperty('--parallax-y', ((progress - .5) * depth).toFixed(1) + 'px');
      });
    });
    const distance = Math.max(1, door.offsetHeight - innerHeight);
    const gate = clamp((scrollY - door.offsetTop) / distance, 0, 1);
    stage.style.setProperty('--gate', gate.toFixed(4));
    const fade = clamp((gate - .78) / .22, 0, 1);
    stage.style.setProperty('--gate-fade', fade.toFixed(4));
    stage.style.setProperty('--gate-scale', (1 + gate * 1.5).toFixed(4));
    stage.style.setProperty('--gate-left', (-gate * 125).toFixed(1) + '%');
    stage.style.setProperty('--gate-right', (gate * 125).toFixed(1) + '%');
    stage.style.setProperty('--gate-left-angle', (-gate * 30).toFixed(1) + 'deg');
    stage.style.setProperty('--gate-right-angle', (gate * 30).toFixed(1) + 'deg');
    stage.style.setProperty('--gate-opacity', (1 - fade).toFixed(4));
    stage.style.setProperty('--content-opacity', (1 - clamp(gate * 1.65, 0, 1)).toFixed(4));
    stage.style.setProperty('--hint-opacity', (1 - clamp(gate * 2, 0, 1)).toFixed(4));
  }
  addEventListener('scroll', () => {
    if (!scrollTicking) { scrollTicking = true; requestAnimationFrame(updateScrollState); }
  }, {passive:true});
  addEventListener('resize', () => { resizeCanvases(); updateScrollState(); }, {passive:true});
  updateScrollState();

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
    const data = {title:'Jinali & Pranit Wedding Invitation',text:'Celebrate with us on 26 January 2027.',url:location.href};
    if (navigator.share) {
      try { await navigator.share(data); } catch (_) {}
    } else if (navigator.clipboard && isSecureContext) {
      try {
        await navigator.clipboard.writeText(location.href);
        showToast(language === 'en' ? 'Invitation link copied' : 'આમંત્રણની લિંક કૉપી થઈ');
      } catch (_) { showToast(location.href); }
    } else showToast(location.href);
  });
  $('#replay').addEventListener('click', () => {
    scrollTo({top:0,behavior:reduceMotion?'auto':'smooth'});
    try { intro.currentTime = 0; intro.play().catch(() => {}); } catch (_) {}
  });
})();
