/* EDIT THIS BLOCK to change names, the date, venue, music, or wording. */
const CONFIG = {
  couple: {
    bride: { en: "Jinali", gu: "જિનાલી" },
    groom: { en: "Pranit", gu: "પ્રણિત" }
  },
  date: {
    iso: "2027-01-26",
    long: { en: "26 January 2027", gu: "૨૬ જાન્યુઆરી ૨૦૨૭" },
    weekday: { en: "TUESDAY", gu: "મંગળવાર" },
    ordinal: { en: "26th", gu: "૨૬મી" },
    monthYear: { en: "JANUARY ’27", gu: "જાન્યુઆરી ’૨૭" }
  },
  venue: {
    en: "Time and venue to follow",
    gu: "સમય અને સ્થળની વિગતો ટૂંક સમયમાં"
  },
  music: {
    src: "./assets/wedding-song.m4a",
    fadeInMs: 1800
  },
  assets: {
    palaceCover: "./assets/palace-layer-1.png",
    palaceGateway: "./assets/palace-layer-2.png",
    palaceCourtyard: "./assets/palace-layer-3.png",
    floralMandap: "./assets/mandap-garden.png",
    monogram: "./assets/jp-monogram.svg"
    // To use your own Ganesh video later, replace the SVG in index.html.
  },
  /* Future events: fill in time and venue to show a line on the event page. */
  events: [
    { name: { en: "Mehndi", gu: "મેહંદી" }, time: "", venue: "" },
    { name: { en: "Sangeet", gu: "સંગીત" }, time: "", venue: "" },
    { name: { en: "Pheras", gu: "ફેરા" }, time: "", venue: "" }
  ],
  translations: {
    en: {
      openingLine: "A celebration is about to begin",
      chooseLanguage: "Choose your language",
      preparing: "Preparing your invitation…",
      ready: "Ready when you are",
      openWithMusic: "Open invitation with music",
      ganeshInvocation: "॥ Shree Ganeshaya Namah ॥",
      blessingLine: "With the blessings of Ganpati Bappa",
      familiesIntro: "Together with their families",
      tagline: "Decided on forever",
      familyRequest: "The Kikani and Malvania families request the pleasure of your presence on the auspicious occasion of the wedding ceremony of",
      doorsEyebrow: "The celebration awaits",
      doorsTitle: "Open the doors to forever",
      dayToRemember: "A day to remember",
      weddingCeremony: "Wedding Ceremony",
      closingEyebrow: "From our families to yours",
      awaiting: "AWAITING YOUR PRESENCE",
      familySignature: "Kikani & Malvania Family",
      closingNote: "Your blessings will make our celebration complete.",
      calendarButton: "Add to Calendar",
      shareButton: "Share on WhatsApp",
      replayButton: "Replay",
      shareMessage: "Jinali & Pranit invite you to celebrate their wedding on 26 January 2027.",
      swipeHints: ["Swipe up to begin", "Swipe up to enter", "Swipe up to continue", "Swipe to open the doors", "Swipe up for details", ""],
      sceneNames: ["Ganesh blessing", "Cover", "Families", "Palace doors", "Wedding details", "Closing"],
      storyLabel: "Jinali and Pranit wedding invitation",
      loadingLabel: "Loading invitation",
      ganeshIllustration: "Line drawing of Ganpati Bappa",
      monogramLabel: "J and P monogram",
      mute: "Mute music",
      unmute: "Play music",
      switchLanguage: "Switch to Gujarati"
    },
    gu: {
      openingLine: "ઉજવણીની શરૂઆત થવાની છે",
      chooseLanguage: "ભાષા પસંદ કરો",
      preparing: "આમંત્રણ તૈયાર થઈ રહ્યું છે…",
      ready: "હવે તૈયાર છે",
      openWithMusic: "સંગીત સાથે આમંત્રણ ખોલો",
      ganeshInvocation: "॥ શ્રી ગણેશાય નમઃ ॥",
      blessingLine: "ગણપતિ બાપાના આશીર્વાદથી",
      familiesIntro: "પરિવારના આશીર્વાદ સાથે",
      tagline: "સદા માટે એક થયા",
      familyRequest: "કિકાણી અને માલવાણિયા પરિવાર આપને શુભ લગ્ન પ્રસંગે ઉપસ્થિત રહી આશીર્વાદ આપવા હાર્દિક આમંત્રણ આપે છે",
      doorsEyebrow: "ઉજવણી આપની રાહ જુએ છે",
      doorsTitle: "સદા માટેના સાથનો શુભ આરંભ",
      dayToRemember: "યાદગાર દિવસ",
      weddingCeremony: "લગ્ન વિધિ",
      closingEyebrow: "અમારા પરિવાર તરફથી આપના પરિવારને",
      awaiting: "આપની ઉપસ્થિતિની આતુરતાથી રાહ જોઈશું",
      familySignature: "કિકાણી અને માલવાણિયા પરિવાર",
      closingNote: "આપના આશીર્વાદથી અમારી ઉજવણી પૂર્ણ થશે.",
      calendarButton: "કૅલેન્ડરમાં ઉમેરો",
      shareButton: "વોટ્સએપ પર શેર કરો",
      replayButton: "ફરી જુઓ",
      shareMessage: "જિનાલી અને પ્રણિતના લગ્ન પ્રસંગે આપને હાર્દિક આમંત્રણ છે. ૨૬ જાન્યુઆરી ૨૦૨૭.",
      swipeHints: ["આગળ જોવા ઉપર સ્વાઇપ કરો", "પ્રવેશ માટે ઉપર સ્વાઇપ કરો", "આગળ જોવા ઉપર સ્વાઇપ કરો", "દરવાજા ખોલવા સ્વાઇપ કરો", "વિગતો માટે ઉપર સ્વાઇપ કરો", ""],
      sceneNames: ["ગણેશ આશીર્વાદ", "આમંત્રણ", "પરિવાર", "મહેલના દરવાજા", "લગ્નની વિગતો", "સમાપન"],
      storyLabel: "જિનાલી અને પ્રણિતનું લગ્ન આમંત્રણ",
      loadingLabel: "આમંત્રણ લોડ થઈ રહ્યું છે",
      ganeshIllustration: "ગણપતિ બાપાનું રેખાચિત્ર",
      monogramLabel: "જિનાલી અને પ્રણિતનું ચિહ્ન",
      mute: "સંગીત બંધ કરો",
      unmute: "સંગીત ચાલુ કરો",
      switchLanguage: "Switch to English"
    }
  }
};

(() => {
  "use strict";
  const app = document.getElementById("app");
  const loader = document.getElementById("loader");
  const enterButton = document.getElementById("enter-button");
  const loaderFill = document.getElementById("loader-fill");
  const loaderStatus = document.getElementById("loader-status");
  const loaderProgress = document.querySelector(".loader-progress");
  const languageToggle = document.getElementById("language-toggle");
  const musicToggle = document.getElementById("music-toggle");
  const song = document.getElementById("song");
  const story = document.getElementById("story");
  const scenes = [...document.querySelectorAll(".scene")];
  const progressNav = document.getElementById("scene-progress");
  const hint = document.getElementById("swipe-hint");
  const hintText = document.getElementById("swipe-hint-text");
  const leftDoor = document.querySelector(".door-left");
  const rightDoor = document.querySelector(".door-right");
  const gateway = document.querySelector(".gateway-palace");
  const gatewayGlow = document.querySelector(".gateway-glow");
  const canvas = document.getElementById("ambient");
  const ctx = canvas.getContext("2d", { alpha: true });
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lowEnd = (navigator.deviceMemory && navigator.deviceMemory <= 2) ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    window.innerWidth < 360;
  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, value));
  const sceneMax = scenes.length - 1;

  let language = "en";
  try { language = localStorage.getItem("wedding-language") || "en"; } catch (_) {}
  if (language !== "gu") language = "en";
  let position = 0;
  let current = 0;
  let entered = false;
  let interacted = false;
  let dragging = false;
  let dragStartY = 0;
  let dragStartPosition = 0;
  let dragLastY = 0;
  let dragLastTime = 0;
  let dragVelocity = 0;
  let snapFrame = 0;
  let fadeFrame = 0;
  let lastWheelTime = 0;
  let lastWheelDirection = 0;
  let ambientFrame = 0;
  let ambientLastTime = 0;
  let fireworkClock = 0;
  let ambientStars = [];
  let ambientPetals = [];
  let fireworks = [];
  let canvasWidth = 0;
  let canvasHeight = 0;

  function textFor(key) {
    if (key === "bride") return CONFIG.couple.bride[language];
    if (key === "groom") return CONFIG.couple.groom[language];
    if (key === "dateLong") return CONFIG.date.long[language];
    if (key === "weekday") return CONFIG.date.weekday[language];
    if (key === "dateOrdinal") return CONFIG.date.ordinal[language];
    if (key === "monthYear") return CONFIG.date.monthYear[language];
    if (key === "venue") return CONFIG.venue[language];
    return CONFIG.translations[language][key] || "";
  }

  function setLanguage(value) {
    language = value === "gu" ? "gu" : "en";
    document.documentElement.lang = language;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = textFor(el.dataset.i18n);
    });
    const title = document.getElementById("loader-title");
    const connector = document.createElement("span");
    connector.textContent = language === "en" ? "&" : "અને";
    title.replaceChildren(
      document.createTextNode(CONFIG.couple.bride[language] + " "),
      connector,
      document.createTextNode(" " + CONFIG.couple.groom[language])
    );
    document.querySelectorAll("[data-choose-language]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.chooseLanguage === language));
    });
    document.querySelectorAll(".name-amp,.family-amp").forEach(el => {
      el.textContent = language === "en" ? "&" : "અને";
    });
    languageToggle.textContent = language === "en" ? "ગુજરાતી" : "English";
    languageToggle.setAttribute("aria-label", CONFIG.translations[language].switchLanguage);
    loaderProgress.setAttribute("aria-label", CONFIG.translations[language].loadingLabel);
    story.setAttribute("aria-label", CONFIG.translations[language].storyLabel);
    scenes.forEach((scene,index)=>scene.setAttribute("aria-label",CONFIG.translations[language].sceneNames[index]));
    document.querySelector(".ganesh-drawing").setAttribute("aria-label",CONFIG.translations[language].ganeshIllustration);
    document.querySelectorAll(".loader-mark,.monogram-wrap img").forEach(image=>image.alt=CONFIG.translations[language].monogramLabel);
    renderExtraEvents();
    updateProgressLabels();
    updateHint();
    updateMusicButton();
    try { localStorage.setItem("wedding-language", language); } catch (_) {}
  }

  function renderExtraEvents() {
    const root = document.getElementById("extra-events");
    root.replaceChildren();
    CONFIG.events.forEach(event => {
      if (!event.time && !event.venue) return;
      const line = document.createElement("p");
      const pieces = [event.name[language], event.time, event.venue].filter(Boolean);
      line.textContent = pieces.join(" · ");
      root.append(line);
    });
  }

  const progressButtons = scenes.map((_, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.addEventListener("click", () => { interacted = true; animateTo(index); });
    progressNav.append(button);
    return button;
  });
  function updateProgressLabels() {
    progressButtons.forEach((button, index) => {
      button.setAttribute("aria-label", CONFIG.translations[language].sceneNames[index]);
    });
  }
  function updateHint() {
    const index = clamp(Math.round(position), 0, sceneMax);
    hintText.textContent = CONFIG.translations[language].swipeHints[index];
    hint.style.opacity = (!interacted || index === 3) && index !== sceneMax ? "1" : "0";
  }
  function updateMusicButton() {
    const active = entered && !song.paused && !song.muted;
    musicToggle.setAttribute("aria-pressed", String(active));
    musicToggle.setAttribute("aria-label", CONFIG.translations[language][active ? "mute" : "unmute"]);
    musicToggle.classList.toggle("is-muted", !active);
  }
  document.querySelectorAll("[data-choose-language]").forEach(button =>
    button.addEventListener("click", () => setLanguage(button.dataset.chooseLanguage))
  );
  languageToggle.addEventListener("click", () => setLanguage(language === "en" ? "gu" : "en"));
  document.querySelector(".cover-palace").src = CONFIG.assets.palaceCover;
  document.querySelector(".families-palace").src = CONFIG.assets.palaceCover;
  document.querySelector(".gateway-palace").src = CONFIG.assets.palaceGateway;
  document.querySelector(".event-palace").src = CONFIG.assets.palaceCourtyard;
  document.querySelector(".closing-palace").src = CONFIG.assets.floralMandap;
  document.querySelectorAll(".loader-mark,.monogram-wrap img").forEach(image=>image.src=CONFIG.assets.monogram);
  setLanguage(language);

  /* Preload the current illustration slots and audio. The button always appears
     after a timeout so a slow network never traps a guest on the loader. */
  const preloadPaths = [...new Set(Object.values(CONFIG.assets))];
  const totalToLoad = preloadPaths.length + 1;
  let loaded = 0;
  let ready = false;
  function markLoaded() {
    loaded += 1;
    const percent = Math.round(loaded / totalToLoad * 100);
    loaderFill.style.width = percent + "%";
    loaderProgress.setAttribute("aria-valuenow", String(percent));
    if (loaded >= totalToLoad) makeReady();
  }
  function makeReady() {
    if (ready) return;
    ready = true;
    loader.classList.add("ready");
    enterButton.disabled = false;
    loaderFill.style.width = "100%";
    loaderProgress.setAttribute("aria-valuenow", "100");
    loaderStatus.textContent = CONFIG.translations[language].ready;
    loaderStatus.dataset.i18n = "ready";
  }
  preloadPaths.forEach(path => {
    const image = new Image();
    image.onload = markLoaded;
    image.onerror = markLoaded;
    image.src = path;
  });
  song.src = CONFIG.music.src;
  song.addEventListener("canplay", markLoaded, { once: true });
  song.addEventListener("error", markLoaded, { once: true });
  song.load();
  setTimeout(makeReady, 12000);

  function fadeInMusic() {
    cancelAnimationFrame(fadeFrame);
    const began = performance.now();
    function step(now) {
      if (song.muted || song.paused) return;
      song.volume = clamp((now - began) / CONFIG.music.fadeInMs);
      if (song.volume < 1) fadeFrame = requestAnimationFrame(step);
    }
    fadeFrame = requestAnimationFrame(step);
  }
  function startMusic() {
    song.muted = false;
    song.volume = 0;
    const attempt = song.play();
    if (attempt && typeof attempt.then === "function") {
      attempt.then(() => { fadeInMusic(); updateMusicButton(); }).catch(updateMusicButton);
    } else {
      fadeInMusic();
      updateMusicButton();
    }
  }
  enterButton.addEventListener("click", () => {
    if (!ready) return;
    /* This play call stays inside the guest's tap for mobile audio permission. */
    startMusic();
    entered = true;
    app.classList.add("entered");
    loader.setAttribute("aria-hidden", "true");
    app.focus({ preventScroll: true });
    render();
    startAmbient();
  });
  musicToggle.addEventListener("click", () => {
    if (song.paused || song.muted) startMusic();
    else { song.muted = true; cancelAnimationFrame(fadeFrame); updateMusicButton(); }
  });
  song.addEventListener("play", updateMusicButton);
  song.addEventListener("pause", updateMusicButton);

  /* Draw only the two scenes around the current position. Scene transforms,
     palace parallax and gate leaves are all direct functions of drag position. */
  function render() {
    const safePosition = clamp(position, 0, sceneMax);
    const base = Math.min(sceneMax, Math.floor(safePosition));
    const fraction = safePosition - base;
    const nearest = Math.round(safePosition);
    scenes.forEach((scene, index) => {
      let visible = false;
      let opacity = 0;
      let translate = 0;
      let scale = 1;
      let zIndex = 1;
      if (reducedMotion) {
        if (index === base) { visible = true; opacity = 1; zIndex = 2; }
        if (index === base + 1 && fraction > 0) { visible = true; opacity = fraction; zIndex = 3; }
      } else if (base === 3 && fraction > 0) {
        if (index === 3) {
          visible = true; opacity = 1 - clamp((fraction - .72) / .28);
          translate = -fraction * 7; scale = 1 + fraction * .14; zIndex = 3;
        }
        if (index === 4) {
          visible = true; opacity = 1; scale = 1.12 - fraction * .12; zIndex = 2;
        }
      } else {
        if (index === base) {
          visible = true; opacity = 1; translate = -fraction * 30; zIndex = 2;
        }
        if (index === base + 1 && fraction > 0) {
          visible = true; opacity = fraction;
          translate = (1 - fraction) * 78; zIndex = 3;
        }
      }
      scene.style.visibility = visible ? "visible" : "hidden";
      scene.style.opacity = String(opacity);
      scene.style.zIndex = String(zIndex);
      scene.style.transform = reducedMotion ? "none" :
        `translate3d(0,${translate.toFixed(2)}%,0) scale(${scale.toFixed(3)})`;
      scene.setAttribute("aria-hidden", index === nearest ? "false" : "true");
      scene.classList.toggle("is-current", entered && index === nearest);
      const palace = scene.querySelector(".palace-layer");
      if (palace && index !== 3) {
        const relative = clamp(safePosition - index, -1, 1);
        const extra = index === 2 ? 13 : 0;
        palace.style.transform = reducedMotion ? "none" :
          `translate3d(0,${(extra - relative * 10).toFixed(2)}%,0) scale(${(1.035 + Math.abs(relative) * .09).toFixed(3)})`;
      }
    });
    const doorProgress = reducedMotion ? (safePosition >= 3.5 ? 1 : 0) : clamp(safePosition - 3);
    leftDoor.style.transform = `translate3d(${(-doorProgress * 93).toFixed(1)}%,0,0) rotateY(${(-doorProgress * 78).toFixed(1)}deg)`;
    rightDoor.style.transform = `translate3d(${(doorProgress * 93).toFixed(1)}%,0,0) rotateY(${(doorProgress * 78).toFixed(1)}deg)`;
    gateway.style.transform = reducedMotion ? "none" :
      `translate3d(0,${(-doorProgress * 7).toFixed(2)}%,0) scale(${(1 + doorProgress * .52).toFixed(3)})`;
    gatewayGlow.style.opacity = String(doorProgress * .9);
    progressButtons.forEach((button, index) => {
      if (index === nearest) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
    });
    updateHint();
  }

  /* A new pointer gesture cancels the snap, so the visual can be grabbed
     mid-transition and scrubbed in either direction. */
  function cancelSnap() {
    if (snapFrame) cancelAnimationFrame(snapFrame);
    snapFrame = 0;
  }
  function animateTo(target, duration = reducedMotion ? 260 : 1050) {
    cancelSnap();
    target = clamp(target, 0, sceneMax);
    const from = position;
    const began = performance.now();
    if (Math.abs(target - from) < .001) {
      position = target; current = target; render(); return;
    }
    function frame(now) {
      const t = clamp((now - began) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      position = from + (target - from) * eased;
      render();
      if (t < 1) snapFrame = requestAnimationFrame(frame);
      else { snapFrame = 0; position = target; current = target; render(); }
    }
    snapFrame = requestAnimationFrame(frame);
  }
  app.addEventListener("pointerdown", event => {
    if (!entered || event.target.closest("button,a") || (event.pointerType === "mouse" && event.button !== 0)) return;
    cancelSnap();
    dragging = true;
    interacted = true;
    dragStartY = event.clientY;
    dragLastY = event.clientY;
    dragLastTime = performance.now();
    dragVelocity = 0;
    dragStartPosition = position;
    story.style.transition = "none";
    app.setPointerCapture(event.pointerId);
    updateHint();
  });
  app.addEventListener("pointermove", event => {
    if (!dragging) return;
    if (event.cancelable) event.preventDefault();
    const height = Math.max(1, app.clientHeight);
    const delta = (dragStartY - event.clientY) / (height * .72);
    const raw = dragStartPosition + delta;
    if (raw < 0) {
      position = 0;
      story.style.transform = `translate3d(0,${Math.min(34,Math.pow(-raw,.7)*28)}px,0)`;
    } else if (raw > sceneMax) {
      position = sceneMax;
      story.style.transform = `translate3d(0,${-Math.min(34,Math.pow(raw-sceneMax,.7)*28)}px,0)`;
    } else {
      position = clamp(raw, Math.floor(dragStartPosition)-1, Math.ceil(dragStartPosition)+1);
      story.style.transform = "translate3d(0,0,0)";
    }
    const now = performance.now();
    const elapsed = Math.max(1, now - dragLastTime);
    dragVelocity = (dragLastY - event.clientY) / elapsed;
    dragLastY = event.clientY;
    dragLastTime = now;
    render();
  });
  function finishPointer(event) {
    if (!dragging) return;
    dragging = false;
    story.style.transition = reducedMotion ? "none" : "transform .4s cubic-bezier(.22,.61,.36,1)";
    story.style.transform = "translate3d(0,0,0)";
    if (app.hasPointerCapture(event.pointerId)) app.releasePointerCapture(event.pointerId);
    const distance = dragStartY - event.clientY;
    const start = Math.round(dragStartPosition);
    let target = Math.round(position);
    if (Math.abs(distance) > 50 || Math.abs(dragVelocity) > .55) {
      target = start + Math.sign(distance || dragVelocity);
    }
    animateTo(target);
  }
  app.addEventListener("pointerup", finishPointer);
  app.addEventListener("pointercancel", finishPointer);
  app.addEventListener("wheel", event => {
    if (!entered) return;
    event.preventDefault();
    if (Math.abs(event.deltaY) < 7) return;
    const direction = Math.sign(event.deltaY);
    const now = performance.now();
    if (direction === lastWheelDirection && now - lastWheelTime < 650) return;
    lastWheelDirection = direction;
    lastWheelTime = now;
    interacted = true;
    animateTo(Math.round(position) + direction);
  }, { passive: false });
  window.addEventListener("keydown", event => {
    if (!entered || (event.target instanceof Element && event.target.closest("button"))) return;
    let target = null;
    if (["ArrowDown","PageDown"," "].includes(event.key)) target = Math.round(position) + 1;
    if (["ArrowUp","PageUp"].includes(event.key)) target = Math.round(position) - 1;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = sceneMax;
    if (target === null) return;
    event.preventDefault();
    interacted = true;
    animateTo(target);
  });

  /* Ambient canvas is one loop for the active scene only. Counts scale down
     on low-end phones. It stops when the tab is hidden. */
  function seeded(index, offset = 0) {
    const value = Math.sin(index * 127.1 + offset * 311.7) * 43758.5453;
    return value - Math.floor(value);
  }
  function resizeCanvas() {
    const rect = app.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, lowEnd ? 1.5 : 2);
    canvas.width = Math.round(rect.width * ratio);
    canvas.height = Math.round(rect.height * ratio);
    canvasWidth = rect.width;
    canvasHeight = rect.height;
    ctx.setTransform(ratio,0,0,ratio,0,0);
    ambientStars = Array.from({ length: lowEnd ? 34 : 70 }, (_, i) => ({
      x: seeded(i,1)*canvasWidth, y: seeded(i,2)*canvasHeight*.8,
      radius: .4 + seeded(i,3)*1.2, phase: seeded(i,4)*6.28
    }));
    ambientPetals = Array.from({ length: lowEnd ? 11 : 23 }, (_, i) => ({
      x: seeded(i,5)*canvasWidth, y: seeded(i,6)*canvasHeight,
      size: 4 + seeded(i,7)*6, speed: 15 + seeded(i,8)*21,
      drift: 8 + seeded(i,9)*15, phase: seeded(i,10)*6.28
    }));
  }
  function drawAmbient(now) {
    const elapsed = Math.min(.06, (now - (ambientLastTime || now))/1000);
    ambientLastTime = now;
    ctx.clearRect(0,0,canvasWidth,canvasHeight);
    const sceneIndex = Math.round(position);
    /* Twinkling stars. */
    for (const star of ambientStars) {
      ctx.globalAlpha = reducedMotion ? .45 : .32 + .28*(1+Math.sin(now*.0016+star.phase))/2;
      ctx.fillStyle = "#f4ead5";
      ctx.beginPath();ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);ctx.fill();
    }
    /* Gold fairy-light curtain along the top edge. */
    if (sceneIndex <= 3) {
      const count = lowEnd ? 26 : 44;
      for (let i=0;i<count;i++) {
        const x=(i+.5)*canvasWidth/count;
        const length=16+seeded(i,11)*95;
        ctx.globalAlpha=.35+seeded(i,12)*.33;
        ctx.strokeStyle="#d4a95a";ctx.lineWidth=.7;
        ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,length);ctx.stroke();
        for(let j=0;j<4;j++){
          const y=length*(j+1)/4;
          const pulse=reducedMotion?1:.72+.28*Math.sin(now*.003+i+j);
          ctx.globalAlpha=.4*pulse;ctx.fillStyle="#ffe1a0";
          ctx.beginPath();ctx.arc(x,y,1.6+seeded(i*j+1,13)*1.8,0,Math.PI*2);ctx.fill();
        }
      }
    }
    /* Fireworks appear occasionally; the inactive scenes do not run loops. */
    if (!reducedMotion && sceneIndex <= 4) {
      fireworkClock += elapsed;
      if(fireworkClock>4.6){
        fireworkClock=0;
        const x=canvasWidth*(.2+seeded(Math.floor(now),14)*.6);
        const y=canvasHeight*(.17+seeded(Math.floor(now),15)*.35);
        fireworks.push({x,y,life:0});
      }
      fireworks=fireworks.filter(burst=>burst.life<1);
      for(const burst of fireworks){
        burst.life+=elapsed*.65;
        for(let i=0;i<(lowEnd?13:22);i++){
          const angle=i*Math.PI*2/(lowEnd?13:22);
          const distance=burst.life*65;
          ctx.globalAlpha=(1-burst.life)*.58;ctx.strokeStyle="#f0cf8a";ctx.lineWidth=1.2;
          ctx.beginPath();
          ctx.moveTo(burst.x+Math.cos(angle)*(distance-9),burst.y+Math.sin(angle)*(distance-9));
          ctx.lineTo(burst.x+Math.cos(angle)*distance,burst.y+Math.sin(angle)*distance);
          ctx.stroke();
        }
      }
    }
    /* Rose petals are drawn only during the family, door, event and closing scenes. */
    if(sceneIndex>=2 && !reducedMotion){
      for(const petal of ambientPetals){
        petal.y+=petal.speed*elapsed;
        if(petal.y>canvasHeight+20)petal.y=-20;
        const x=petal.x+Math.sin(now*.001+petal.phase)*petal.drift;
        ctx.save();ctx.translate(x,petal.y);ctx.rotate(Math.sin(now*.0014+petal.phase));
        ctx.globalAlpha=.45;ctx.fillStyle="#b3122f";
        ctx.beginPath();ctx.ellipse(0,0,petal.size*.6,petal.size,Math.PI/4,0,Math.PI*2);ctx.fill();
        ctx.restore();
      }
    }
    ctx.globalAlpha=1;
    if(!reducedMotion && !document.hidden)ambientFrame=requestAnimationFrame(drawAmbient);
  }
  function startAmbient(){
    if(!ctx || document.hidden)return;
    cancelAnimationFrame(ambientFrame);
    resizeCanvas();
    if (position < .1 && !reducedMotion) fireworkClock = 3.6;
    ambientLastTime=0;
    drawAmbient(performance.now());
  }
  document.addEventListener("visibilitychange",()=>{
    if(document.hidden){cancelAnimationFrame(ambientFrame);ambientFrame=0}
    else if(entered)startAmbient();
  });
  window.addEventListener("resize",()=>{if(entered)startAmbient()});

  document.getElementById("calendar").addEventListener("click",()=>{
    const date=CONFIG.date.iso.replaceAll("-","");
    const next=new Date(CONFIG.date.iso+"T00:00:00Z");
    next.setUTCDate(next.getUTCDate()+1);
    const nextDate=next.toISOString().slice(0,10).replaceAll("-","");
    const lines=[
      "BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Jinali Pranit Wedding//EN",
      "BEGIN:VEVENT","UID:jinali-pranit-20270126@wedding-invitation",
      "DTSTAMP:"+new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),
      "DTSTART;VALUE=DATE:"+date,"DTEND;VALUE=DATE:"+nextDate,
      "SUMMARY:Jinali & Pranit Wedding",
      "DESCRIPTION:Wedding ceremony. Time and venue to follow.",
      "END:VEVENT","END:VCALENDAR"
    ];
    const url=URL.createObjectURL(new Blob([lines.join("\r\n")+"\r\n"],{type:"text/calendar"}));
    const link=document.createElement("a");link.href=url;link.download="Jinali-Pranit-Wedding.ics";
    document.body.append(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  document.getElementById("share").addEventListener("click",()=>{
    const message=CONFIG.translations[language].shareMessage+" "+location.href.split("#")[0];
    window.open("https://wa.me/?text="+encodeURIComponent(message),"_blank","noopener");
  });
  document.getElementById("replay").addEventListener("click",()=>{
    interacted=false;
    scenes[0].classList.remove("is-current");
    animateTo(0);
  });

  render();
})();
