/* ═══════════════════════════════════════════════════════
   AUTOWALA PLAYLIST — Single Unified Audio Engine
   Supports YouTube & Spotify with Identical Liquid Glass Layout,
   Full Timeline Progress Scrubber, Big Play Button, Cover Art,
   and Seamless Source Switching.
   ═══════════════════════════════════════════════════════ */

(function () {
  "use strict";

  const PLAYLIST = [
    {
      title: "Ek Sanam Chahiye Aashiqui Ke Liye — Kumar Sanu | Aashiqui (1990)",
      artist: "Kumar Sanu • Super Cassettes Industries",
      ytThumb: "https://img.youtube.com/vi/665bcdJ2hQs/mqdefault.jpg",
      spotifyThumb: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&auto=format&fit=crop&q=80",
      duration: 252, // 4:12
      ytVid: "665bcdJ2hQs",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=bollywood-ambient-112199.mp3"
    },
    {
      title: "Jo Bhi Kasmein Khai Thi Humne — Udit Narayan & Alka Yagnik | Raaz (2002)",
      artist: "Udit Narayan, Alka Yagnik • Tips Music",
      ytThumb: "https://img.youtube.com/vi/665bcdJ2hQs/mqdefault.jpg",
      spotifyThumb: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&auto=format&fit=crop&q=80",
      duration: 340, // 5:40
      ytVid: "665bcdJ2hQs",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=indian-flute-melody-14282.mp3"
    },
    {
      title: "Jhanjharia Meri Chhanak Gayi — Abhijeet Bhattacharya | Krishna (1996)",
      artist: "Abhijeet • Time Magnetics",
      ytThumb: "https://img.youtube.com/vi/665bcdJ2hQs/mqdefault.jpg",
      spotifyThumb: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&auto=format&fit=crop&q=80",
      duration: 315, // 5:15
      ytVid: "665bcdJ2hQs",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7350b.mp3?filename=retro-street-beats-18231.mp3"
    },
    {
      title: "Main Agar Saamne — Abhijeet & Alka Yagnik | Raaz (2002)",
      artist: "Abhijeet, Alka Yagnik • Tips Music",
      ytThumb: "https://img.youtube.com/vi/665bcdJ2hQs/mqdefault.jpg",
      spotifyThumb: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&auto=format&fit=crop&q=80",
      duration: 346, // 5:46
      ytVid: "665bcdJ2hQs",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=bollywood-ambient-112199.mp3"
    },
    {
      title: "Pardesi Pardesi Jana Nahi — Udit Narayan & Alka Yagnik | Raja Hindustani (1996)",
      artist: "Udit Narayan, Alka Yagnik • Tips Music",
      ytThumb: "https://img.youtube.com/vi/665bcdJ2hQs/mqdefault.jpg",
      spotifyThumb: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=300&auto=format&fit=crop&q=80",
      duration: 451, // 7:31
      ytVid: "665bcdJ2hQs",
      audioUrl: "https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=indian-flute-melody-14282.mp3"
    }
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

  let baseOnline = 28430;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 15) - 5;
    baseOnline = Math.max(25000, Math.min(32000, baseOnline + delta));
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
    
    // Switch Cover Art Image
    if (elTrackThumb) {
      elTrackThumb.src = currentSource === "spotify" ? track.spotifyThumb : track.ytThumb;
    }

    if (elTimeTotal) elTimeTotal.textContent = formatTime(track.duration);
    if (elTimeCurrent) elTimeCurrent.textContent = "0:00";
    if (elProgressFill) elProgressFill.style.width = "0%";
    if (elSeekSlider) elSeekSlider.value = 0;

    if (currentSource === "spotify" && spotifyAudio) {
      spotifyAudio.src = track.audioUrl;
    } else if (currentSource === "yt" && ytPlayer && typeof ytPlayer.loadVideoById === "function") {
      ytPlayer.loadVideoById(track.ytVid);
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
      playerVars: { autoplay: 0, controls: 0, modestbranding: 1, rel: 0, playsinline: 1 },
      events: {
        onStateChange: (event) => {
          if (currentSource === "yt") {
            if (event.data === YT.PlayerState.PLAYING) {
              isPlaying = true;
              updatePlayIcon();
              startPlaybackTimer();
            } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
              isPlaying = false;
              updatePlayIcon();
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
          if (playlistUrl.includes("spotify.com/playlist/")) {
            // Extract Spotify Playlist ID
            const match = playlistUrl.match(/playlist\/([a-zA-Z0-9]+)/);
            if (match && match[1]) {
              const spotifyEmbedContainer = document.getElementById("spotify-embed-container");
              const spotifyIframe = document.getElementById("spotify-iframe");
              spotifyIframe.src = `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator&theme=0`;
              spotifyEmbedContainer.style.display = "block";
              switchSource("spotify");
              if (isPlaying) togglePlay(); // Pause internal player so iframe can play
            }
          } else if (playlistUrl.includes("youtube.com") || playlistUrl.includes("youtu.be")) {
            // Extract YouTube Playlist ID
            const match = playlistUrl.match(/[?&]list=([^#\&\?]+)/);
            if (match && match[1] && ytPlayer) {
              ytPlayer.loadPlaylist({ list: match[1], listType: "playlist" });
              switchSource("yt");
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
