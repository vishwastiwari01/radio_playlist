/* ═══════════════════════════════════════════════════════
   AUTOWALA PLAYLIST — Single Unified Audio Engine
   Supports YouTube & Spotify with Identical Liquid Glass Layout,
   Full Timeline Progress Scrubber, Big Play Button, Cover Art,
   and Seamless Source Switching.
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const PLAYLIST = [
    // 🎶 90s / Auto-Bus-Salon Classics
    { title: "Do Dil Mil Rahe Hain — Kumar Sanu", artist: "Kumar Sanu", ytVid: "11bT35Yw1S0", duration: 330, ytThumb: "https://img.youtube.com/vi/11bT35Yw1S0/mqdefault.jpg" },
    { title: "Tujhe Dekha To — Kumar Sanu, Lata Mangeshkar | DDLJ", artist: "Kumar Sanu, Lata Mangeshkar", ytVid: "L6GvFp3S4r8", duration: 350, ytThumb: "https://img.youtube.com/vi/L6GvFp3S4r8/mqdefault.jpg" },
    { title: "Ek Ladki Ko Dekha — Kumar Sanu | 1942 A Love Story", artist: "Kumar Sanu", ytVid: "c9L2YU3VKPM", duration: 345, ytThumb: "https://img.youtube.com/vi/c9L2YU3VKPM/mqdefault.jpg" },
    { title: "Mera Dil Bhi Kitna Pagal Hai — Kumar Sanu, Alka Yagnik | Saajan", artist: "Kumar Sanu, Alka Yagnik", ytVid: "L2mYjWqpDHo", duration: 360, ytThumb: "https://img.youtube.com/vi/L2mYjWqpDHo/mqdefault.jpg" },
    { title: "Chura Ke Dil Mera — Kumar Sanu, Alka Yagnik | Main Khiladi Tu Anari", artist: "Kumar Sanu, Alka Yagnik", ytVid: "aG-Qy262d-U", duration: 330, ytThumb: "https://img.youtube.com/vi/aG-Qy262d-U/mqdefault.jpg" },
    { title: "Yeh Kaali Kaali Aankhen — Kumar Sanu | Baazigar", artist: "Kumar Sanu", ytVid: "Xh0Y92QkS5w", duration: 348, ytThumb: "https://img.youtube.com/vi/Xh0Y92QkS5w/mqdefault.jpg" },
    { title: "Baazigar O Baazigar — Kumar Sanu, Alka Yagnik | Baazigar", artist: "Kumar Sanu, Alka Yagnik", ytVid: "3-M9311_J8E", duration: 312, ytThumb: "https://img.youtube.com/vi/3-M9311_J8E/mqdefault.jpg" },
    { title: "Nazar Ke Saamne — Kumar Sanu, Anuradha Paudwal | Aashiqui", artist: "Kumar Sanu, Anuradha Paudwal", ytVid: "lzBSiNWEWjs", duration: 290, ytThumb: "https://img.youtube.com/vi/lzBSiNWEWjs/mqdefault.jpg" },
    { title: "Jeeta Tha Jiske Liye — Kumar Sanu | Dilwale", artist: "Kumar Sanu", ytVid: "cX8gxZ7FNM8", duration: 340, ytThumb: "https://img.youtube.com/vi/cX8gxZ7FNM8/mqdefault.jpg" },
    { title: "Pardesi Pardesi Jana Nahi — Udit Narayan, Alka Yagnik | Raja Hindustani", artist: "Udit Narayan, Alka Yagnik, Sapna Awasthi", ytVid: "o1Np2e1kBa8", duration: 451, ytThumb: "https://img.youtube.com/vi/o1Np2e1kBa8/mqdefault.jpg" },
    { title: "Dheere Dheere Se Meri Zindagi Mein Aana — Kumar Sanu | Aashiqui", artist: "Kumar Sanu, Anuradha Paudwal", ytVid: "EY5S0yCeT8Y", duration: 310, ytThumb: "https://img.youtube.com/vi/EY5S0yCeT8Y/mqdefault.jpg" },
    { title: "Kitna Haseen Chehra — Kumar Sanu | Dilwale", artist: "Kumar Sanu", ytVid: "l5nKEIHg_yA", duration: 310, ytThumb: "https://img.youtube.com/vi/l5nKEIHg_yA/mqdefault.jpg" },
    // 🥀 Kishore Kumar Evergreens
    { title: "O Mere Dil Ke Chain — Kishore Kumar | Mere Jeevan Saathi", artist: "Kishore Kumar", ytVid: "kYJ4f64mXoI", duration: 272, ytThumb: "https://img.youtube.com/vi/kYJ4f64mXoI/mqdefault.jpg" },
    { title: "Pal Pal Dil Ke Paas — Kishore Kumar | Blackmail", artist: "Kishore Kumar", ytVid: "8-H6q1EOM70", duration: 329, ytThumb: "https://img.youtube.com/vi/8-H6q1EOM70/mqdefault.jpg" },
    { title: "Mere Sapno Ki Rani — Kishore Kumar | Aradhana", artist: "Kishore Kumar", ytVid: "8233P612V4k", duration: 303, ytThumb: "https://img.youtube.com/vi/8233P612V4k/mqdefault.jpg" },
    { title: "Yeh Sham Mastani — Kishore Kumar | Kati Patang", artist: "Kishore Kumar", ytVid: "_sZg4eUB3QM", duration: 276, ytThumb: "https://img.youtube.com/vi/_sZg4eUB3QM/mqdefault.jpg" },
    { title: "Ek Ajnabee Haseena Se — Kishore Kumar | Ajnabee", artist: "Kishore Kumar", ytVid: "wX-yVf8dO6c", duration: 320, ytThumb: "https://img.youtube.com/vi/wX-yVf8dO6c/mqdefault.jpg" },
    { title: "Chookar Mere Man Ko — Kishore Kumar | Yaarana", artist: "Kishore Kumar", ytVid: "Yw9T2u53L-k", duration: 295, ytThumb: "https://img.youtube.com/vi/Yw9T2u53L-k/mqdefault.jpg" },
    { title: "Aane Wala Pal — Kishore Kumar | Golmaal", artist: "Kishore Kumar", ytVid: "h6903h4wB6c", duration: 280, ytThumb: "https://img.youtube.com/vi/h6903h4wB6c/mqdefault.jpg" },
    { title: "Humein Tumse Pyaar Kitna — Kishore Kumar | Kudrat", artist: "Kishore Kumar", ytVid: "6dGrfYrPpVA", duration: 315, ytThumb: "https://img.youtube.com/vi/6dGrfYrPpVA/mqdefault.jpg" },
    { title: "Zindagi Ek Safar Hai Suhana — Kishore Kumar | Andaz", artist: "Kishore Kumar", ytVid: "jLX1APFQ0rU", duration: 300, ytThumb: "https://img.youtube.com/vi/jLX1APFQ0rU/mqdefault.jpg" },
    { title: "Musafir Hoon Yaaron — Kishore Kumar | Parichay", artist: "Kishore Kumar", ytVid: "r1IWXxF4FzI", duration: 288, ytThumb: "https://img.youtube.com/vi/r1IWXxF4FzI/mqdefault.jpg" },
    // 🚕 Auto Mein Baj Raha Hai Energy
    { title: "Pehla Nasha — Udit Narayan, Sadhana Sargam | Jo Jeeta Wohi Sikandar", artist: "Udit Narayan, Sadhana Sargam", ytVid: "F3vX8v4nL4I", duration: 360, ytThumb: "https://img.youtube.com/vi/F3vX8v4nL4I/mqdefault.jpg" },
    { title: "Ghar Se Nikalte Hi — Udit Narayan | Papa Kehte Hain", artist: "Udit Narayan", ytVid: "M3vxVE3tMkk", duration: 295, ytThumb: "https://img.youtube.com/vi/M3vxVE3tMkk/mqdefault.jpg" },
    { title: "Aaye Ho Meri Zindagi Mein — Udit Narayan | Raja Hindustani", artist: "Udit Narayan", ytVid: "cxHi8bX3rpE", duration: 340, ytThumb: "https://img.youtube.com/vi/cxHi8bX3rpE/mqdefault.jpg" },
    { title: "Humko Sirf Tumse Pyaar Hai — Kumar Sanu | Baazigar", artist: "Kumar Sanu", ytVid: "QqH3qVEMb0Y", duration: 330, ytThumb: "https://img.youtube.com/vi/QqH3qVEMb0Y/mqdefault.jpg" },
    { title: "Tu Mile Dil Khile — Kumar Sanu | Criminal", artist: "Kumar Sanu", ytVid: "XgjGBZBKarw", duration: 340, ytThumb: "https://img.youtube.com/vi/XgjGBZBKarw/mqdefault.jpg" },
    { title: "Woh Ladki Jo — Abhijeet | Ghulam", artist: "Abhijeet", ytVid: "IQy6NKQHQO0", duration: 345, ytThumb: "https://img.youtube.com/vi/IQy6NKQHQO0/mqdefault.jpg" },
    // 💔 Heartbroken Uncle in an Auto Section
    { title: "Chitthi Aayi Hai — Pankaj Udhas | Naam", artist: "Pankaj Udhas", ytVid: "cKNLk1FMOBY", duration: 380, ytThumb: "https://img.youtube.com/vi/cKNLk1FMOBY/mqdefault.jpg" },
    { title: "Koi Fariyaad — Jagjit Singh | Tum Bin", artist: "Jagjit Singh", ytVid: "Qh2_9e2o0-4", duration: 350, ytThumb: "https://img.youtube.com/vi/Qh2_9e2o0-4/mqdefault.jpg" },
    { title: "Tum Itna Jo Muskura Rahe Ho — Jagjit Singh", artist: "Jagjit Singh", ytVid: "BNmunMhH6NE", duration: 370, ytThumb: "https://img.youtube.com/vi/BNmunMhH6NE/mqdefault.jpg" },
    { title: "Kya Mujhe Pyaar Hai — KK | Woh Lamhe", artist: "KK", ytVid: "o2-i94t_i40", duration: 345, ytThumb: "https://img.youtube.com/vi/o2-i94t_i40/mqdefault.jpg" },
    { title: "Tadap Tadap Ke — KK | Hum Dil De Chuke Sanam", artist: "KK", ytVid: "o2d6M6GfPsc", duration: 358, ytThumb: "https://img.youtube.com/vi/o2d6M6GfPsc/mqdefault.jpg" },
    { title: "Awarapan Banjarapan — KK | Jism", artist: "KK", ytVid: "a4VXJTfsIDo", duration: 340, ytThumb: "https://img.youtube.com/vi/a4VXJTfsIDo/mqdefault.jpg" },
    { title: "Sach Keh Raha Hai Deewana — KK | Rehna Hai Tere Dil Mein", artist: "KK", ytVid: "x0-lH_7Gfgk", duration: 330, ytThumb: "https://img.youtube.com/vi/x0-lH_7Gfgk/mqdefault.jpg" },
  ];

  let currentTrackIdx = 0;
  let currentSource = "yt"; // 'yt' or 'spotify'
  let isPlaying = false;
  let currentTime = 0;
  let playbackTimer = null;
  let ytPlayer = null;

  const spotifyAudio = document.getElementById("spotify-audio-engine");
  const elClock = document.getElementById("clock");
  const elOnlineCount = document.getElementById("online-count");
  const elDimmer = document.getElementById("bg-dimmer");

  const elTrackThumb = document.getElementById("track-thumb");
  const elTrackTitle = document.getElementById("track-title");
  const elTrackTitleDup = document.getElementById("track-title-dup");
  const elTrackArtist = document.getElementById("track-artist");
  const elProgressFill = document.getElementById("progress-fill");
  const elSeekSlider = document.getElementById("seek-slider");
  const elTimeCurrent = document.getElementById("time-current");
  const elTimeTotal = document.getElementById("time-total");
  const elBtnPlay = document.getElementById("btn-play");
  const elPlayIcon = document.getElementById("play-icon");
  const elBtnPrev = document.getElementById("btn-prev");
  const elBtnNext = document.getElementById("btn-next");
  const elVolSlider = document.getElementById("vol-slider");
  const elVolFill = document.getElementById("vol-fill");
  const elSourceTag = document.getElementById("source-tag");

  const tabYt = document.getElementById("tab-yt");
  const tabSpotify = document.getElementById("tab-spotify");

  // ─── Clock & Listener Counter ─────────────────────────
  function updateClock() {
    const now = new Date();
    let hrs = now.getHours();
    const mins = String(now.getMinutes()).padStart(2, "0");
    const ampm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12 || 12;
    if (elClock) elClock.textContent = `${hrs}:${mins} ${ampm}`;
  }
  updateClock();
  setInterval(updateClock, 10000);

  let baseOnline = 3142;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 15) - 5;
    baseOnline = Math.max(1000, Math.min(5000, baseOnline + delta));
    if (elOnlineCount) elOnlineCount.textContent = `${baseOnline.toLocaleString()} online`;
  }, 4000);

  // ─── Scroll Dimmer ────────────────────────────────────
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroH = window.innerHeight * 0.8;
    const ratio = Math.min(1, scrollY / heroH);
    if (elDimmer) {
      elDimmer.style.background = `linear-gradient(
        180deg,
        rgba(0, 0, 0, ${0.25 + ratio * 0.35}) 0%,
        rgba(0, 0, 0, ${0.08 + ratio * 0.4}) 40%,
        rgba(0, 0, 0, ${0.55 + ratio * 0.3}) 100%
      )`;
    }
  });

  // ─── Track & UI State Updates ─────────────────────────
  function formatTime(sec) {
    const s = Math.floor(sec || 0);
    const m = Math.floor(s / 60);
    const rs = String(s % 60).padStart(2, "0");
    return `${m}:${rs}`;
  }

  function loadTrack(idx) {
    currentTrackIdx = (idx + PLAYLIST.length) % PLAYLIST.length;
    const track = PLAYLIST[currentTrackIdx];
    currentTime = 0;

    if (elTrackTitle) elTrackTitle.textContent = track.title;
    if (elTrackTitleDup) elTrackTitleDup.textContent = track.title;
    if (elTrackArtist) elTrackArtist.textContent = track.artist;

    if (elTrackThumb) {
      elTrackThumb.src = track.ytThumb || `https://img.youtube.com/vi/${track.ytVid}/mqdefault.jpg`;
    }

    if (elTimeTotal) elTimeTotal.textContent = formatTime(track.duration);
    if (elTimeCurrent) elTimeCurrent.textContent = "0:00";
    if (elProgressFill) elProgressFill.style.width = "0%";
    if (elSeekSlider) elSeekSlider.value = 0;

    // If YT player is ready and playing, load the new video immediately
    if (currentSource === "yt" && ytPlayer) {
      if (isPlaying && typeof ytPlayer.loadVideoById === "function") {
        ytPlayer.loadVideoById(track.ytVid);
      } else if (typeof ytPlayer.cueVideoById === "function") {
        ytPlayer.cueVideoById(track.ytVid);
      }
    }
  }

  function updatePlayIcon() {
    if (!elPlayIcon) return;
    if (isPlaying) {
      elPlayIcon.innerHTML = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;
    } else {
      elPlayIcon.innerHTML = `<path d="M8 5v14l11-7z"/>`;
    }
  }

  function startPlaybackTimer() {
    clearInterval(playbackTimer);
    playbackTimer = setInterval(() => {
      if (!isPlaying) return;
      const track = PLAYLIST[currentTrackIdx];

      if (currentSource === "yt" && ytPlayer && typeof ytPlayer.getCurrentTime === "function") {
        const ytTime = ytPlayer.getCurrentTime();
        const ytDur = ytPlayer.getDuration();
        if (ytDur > 0) {
          currentTime = ytTime;
          const pct = (currentTime / ytDur) * 100;
          if (elProgressFill) elProgressFill.style.width = `${pct}%`;
          if (elSeekSlider) elSeekSlider.value = pct;
          if (elTimeCurrent) elTimeCurrent.textContent = formatTime(currentTime);
          if (elTimeTotal) elTimeTotal.textContent = formatTime(ytDur);
          return;
        }
      }

      // Spotify Engine Progress
      if (currentSource === "spotify" && spotifyAudio && !isNaN(spotifyAudio.currentTime) && spotifyAudio.duration > 0) {
        currentTime = spotifyAudio.currentTime;
        const dur = spotifyAudio.duration || track.duration;
        const pct = (currentTime / dur) * 100;
        if (elProgressFill) elProgressFill.style.width = `${pct}%`;
        if (elSeekSlider) elSeekSlider.value = pct;
        if (elTimeCurrent) elTimeCurrent.textContent = formatTime(currentTime);
        if (elTimeTotal) elTimeTotal.textContent = formatTime(dur);
        return;
      }

      // Fallback timer
      currentTime += 1;
      if (currentTime >= track.duration) {
        nextTrack();
        return;
      }
      const pct = (currentTime / track.duration) * 100;
      if (elProgressFill) elProgressFill.style.width = `${pct}%`;
      if (elSeekSlider) elSeekSlider.value = pct;
      if (elTimeCurrent) elTimeCurrent.textContent = formatTime(currentTime);
    }, 500);
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    updatePlayIcon();

    if (currentSource === "yt" && ytPlayer) {
      if (isPlaying && typeof ytPlayer.playVideo === "function") {
        ytPlayer.playVideo();
      } else if (!isPlaying && typeof ytPlayer.pauseVideo === "function") {
        ytPlayer.pauseVideo();
      }
    } else if (currentSource === "spotify" && spotifyAudio) {
      if (isPlaying) {
        spotifyAudio.play().catch(() => {});
      } else {
        spotifyAudio.pause();
      }
    }

    if (isPlaying) {
      startPlaybackTimer();
    } else {
      clearInterval(playbackTimer);
    }
  }

  function prevTrack() {
    loadTrack(currentTrackIdx - 1);
    if (isPlaying) {
      if (currentSource === "yt" && ytPlayer && typeof ytPlayer.playVideo === "function") {
        ytPlayer.playVideo();
      } else if (currentSource === "spotify" && spotifyAudio) {
        spotifyAudio.play().catch(() => {});
      }
      startPlaybackTimer();
    }
  }

  function nextTrack() {
    loadTrack(currentTrackIdx + 1);
    if (isPlaying) {
      if (currentSource === "yt" && ytPlayer && typeof ytPlayer.playVideo === "function") {
        ytPlayer.playVideo();
      } else if (currentSource === "spotify" && spotifyAudio) {
        spotifyAudio.play().catch(() => {});
      }
      startPlaybackTimer();
    }
  }

  function seekToPercent(pct) {
    const track = PLAYLIST[currentTrackIdx];
    if (currentSource === "yt" && ytPlayer && typeof ytPlayer.getDuration === "function" && ytPlayer.getDuration() > 0) {
      const dur = ytPlayer.getDuration();
      currentTime = (pct / 100) * dur;
      ytPlayer.seekTo(currentTime, true);
    } else if (currentSource === "spotify" && spotifyAudio && spotifyAudio.duration > 0) {
      currentTime = (pct / 100) * spotifyAudio.duration;
      spotifyAudio.currentTime = currentTime;
    } else {
      currentTime = (pct / 100) * track.duration;
    }

    if (elProgressFill) elProgressFill.style.width = `${pct}%`;
    if (elTimeCurrent) elTimeCurrent.textContent = formatTime(currentTime);
  }

  // ─── Source Switcher (YT <-> Spotify) ────────────────
  function switchSource(target) {
    if (target === currentSource) return;
    currentSource = target;

    // Pause current audio
    if (ytPlayer && typeof ytPlayer.pauseVideo === "function") {
      try { ytPlayer.pauseVideo(); } catch (_) {}
    }
    if (spotifyAudio) {
      spotifyAudio.pause();
    }

    if (target === "spotify") {
      if (tabYt) tabYt.classList.remove("active-yt");
      if (tabSpotify) tabSpotify.classList.add("active-spotify");
      if (elSourceTag) elSourceTag.textContent = "SPOTIFY";

      // Change Cover Image to Spotify Artwork
      if (elTrackThumb) elTrackThumb.src = PLAYLIST[currentTrackIdx].spotifyThumb;
      if (spotifyAudio) spotifyAudio.src = PLAYLIST[currentTrackIdx].audioUrl;

    } else {
      if (tabSpotify) tabSpotify.classList.remove("active-spotify");
      if (tabYt) tabYt.classList.add("active-yt");
      if (elSourceTag) elSourceTag.textContent = "YOUTUBE";

      // Change Cover Image to YouTube Artwork
      if (elTrackThumb) elTrackThumb.src = PLAYLIST[currentTrackIdx].ytThumb;
    }

    if (isPlaying) {
      togglePlay();
    }
  }

  if (tabSpotify) tabSpotify.addEventListener("click", () => switchSource("spotify"));
  if (tabYt) tabYt.addEventListener("click", () => switchSource("yt"));

  // Event Listeners for Player Controls
  if (elBtnPlay) elBtnPlay.addEventListener("click", togglePlay);
  if (elBtnPrev) elBtnPrev.addEventListener("click", prevTrack);
  if (elBtnNext) elBtnNext.addEventListener("click", nextTrack);

  if (elSeekSlider) {
    elSeekSlider.addEventListener("input", (e) => {
      seekToPercent(parseFloat(e.target.value));
    });
  }

  if (elVolSlider) {
    elVolSlider.addEventListener("input", (e) => {
      const val = parseInt(e.target.value, 10);
      if (elVolFill) elVolFill.style.width = `${val}%`;
      if (ytPlayer && typeof ytPlayer.setVolume === "function") ytPlayer.setVolume(val);
      if (spotifyAudio) spotifyAudio.volume = val / 100;
    });
  }

  // Rotation Items Click Handler
  document.addEventListener("click", (e) => {
    const item = e.target.closest(".rotation-item");
    if (item && item.hasAttribute("data-track-idx")) {
      const idx = parseInt(item.getAttribute("data-track-idx"), 10);
      loadTrack(idx);
      if (!isPlaying) togglePlay();
    }
  });

  // ─── YouTube IFrame API Initialization ────────────────
  window.onYouTubeIframeAPIReady = function () {
    ytPlayer = new YT.Player("yt-api-player", {
      videoId: PLAYLIST[0].ytVid,
      playerVars: { autoplay: 0, controls: 0, modestbranding: 1, rel: 0, playsinline: 1, iv_load_policy: 3 },
      events: {
        onReady: () => {
          ytPlayer.cueVideoById(PLAYLIST[0].ytVid);
        },
        onStateChange: (event) => {
          if (currentSource === "yt") {
            if (event.data === YT.PlayerState.PLAYING) {
              isPlaying = true;
              updatePlayIcon();
              startPlaybackTimer();
            } else if (event.data === YT.PlayerState.PAUSED) {
              isPlaying = false;
              updatePlayIcon();
            } else if (event.data === YT.PlayerState.ENDED) {
              nextTrack();
              togglePlay();
            }
          }
        }
      }
    });
  };

  // ─── On Page Load ─────────────────────────────────────
  window.addEventListener("DOMContentLoaded", () => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(tag);
    }

    loadTrack(0);

    // Auto-load user's custom Spotify playlist on load
    const spotifyEmbedContainer = document.getElementById("spotify-embed-container");
    const spotifyIframe = document.getElementById("spotify-iframe");
    if (spotifyIframe && spotifyEmbedContainer) {
      spotifyIframe.src = `https://open.spotify.com/embed/playlist/37i9dQZF1DWYRTlrhMB12D?utm_source=generator&theme=0`;
      spotifyEmbedContainer.style.display = "block";
    }

    if (typeof liquidGlass === "function") {
      document.querySelectorAll(".lg-component").forEach((el) => {
        liquidGlass(el, {
          scale: -35,
          chroma: 6,
          border: 0.08,
          mapBlur: 6,
          blur: 2,
          saturate: 1.8
        });
      });
    }
    // ─── Customization UI Logic ─────────────────────────
    const btnCustomize = document.getElementById("btn-customize");
    const customizeModal = document.getElementById("customize-modal");
    const closeModal = document.getElementById("close-modal");
    const btnApplyCustom = document.getElementById("btn-apply-custom");
    
    if (btnCustomize && customizeModal && closeModal && btnApplyCustom) {
      btnCustomize.addEventListener("click", () => customizeModal.classList.remove("hidden"));
      closeModal.addEventListener("click", () => customizeModal.classList.add("hidden"));
      customizeModal.addEventListener("click", (e) => {
        if (e.target === customizeModal) customizeModal.classList.add("hidden");
      });

      btnApplyCustom.addEventListener("click", () => {
        // 1. Background Logic
        const bgUrlInput = document.getElementById("bg-url-input").value.trim();
        const bgFileInput = document.getElementById("bg-file-input").files[0];
        const bgImage = document.getElementById("bg-image");

        if (bgFileInput) {
          const reader = new FileReader();
          reader.onload = (e) => { bgImage.src = e.target.result; };
          reader.readAsDataURL(bgFileInput);
        } else if (bgUrlInput) {
          bgImage.src = bgUrlInput;
        }

        // 2. Playlist Logic
        const playlistUrl = document.getElementById("playlist-url-input").value.trim();
        if (playlistUrl) {
          const spotifyEmbedContainer = document.getElementById("spotify-embed-container");
          const defaultPlayer = document.getElementById("player-bar-fixed");
          
          if (playlistUrl.includes("spotify.com/playlist/")) {
            // Extract Spotify Playlist ID
            const match = playlistUrl.match(/playlist\/([a-zA-Z0-9]+)/);
            if (match && match[1]) {
              const spotifyIframe = document.getElementById("spotify-iframe");
              spotifyIframe.src = `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator&theme=0`;
              
              if (spotifyEmbedContainer) spotifyEmbedContainer.style.display = "block";
              
              if (isPlaying) togglePlay(); // Pause internal player so iframe can play
            }
          } else if (playlistUrl.includes("youtube.com") || playlistUrl.includes("youtu.be")) {
            // Extract YouTube Playlist ID
            const match = playlistUrl.match(/[?&]list=([^#\&\?]+)/);
            if (match && match[1] && ytPlayer) {
              ytPlayer.loadPlaylist({ list: match[1], listType: "playlist" });
              
              if (spotifyEmbedContainer) spotifyEmbedContainer.style.display = "none";
              
              // Update title to indicate custom playlist is loaded
              if (elTrackTitle) elTrackTitle.textContent = "Custom YouTube Playlist Loaded";
              if (elTrackTitleDup) elTrackTitleDup.textContent = "Custom YouTube Playlist Loaded";
              if (elTrackArtist) elTrackArtist.textContent = "Use player controls to skip tracks";
            }
          }
        }
        
        customizeModal.classList.add("hidden");
      });
    }

  });

})();
