/**
 * Liquid Glass Engine — Authentic deepika-builds/liquid-glass
 * Creates dynamic SVG displacement refraction, specular rim highlights,
 * and crystal-clear backdrop distortion (low blur = pure glass transparency).
 */

(function () {
  "use strict";

  // Create SVG filter element once if not already present
  function ensureSvgFilter() {
    if (document.getElementById("liquid-glass-svg-defs")) return;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "liquid-glass-svg-defs";
    svg.style.position = "absolute";
    svg.style.width = "0";
    svg.style.height = "0";
    svg.style.overflow = "hidden";
    svg.setAttribute("aria-hidden", "true");

    svg.innerHTML = `
      <defs>
        <filter id="liquid-glass-refraction" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.015" numOctaves="2" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feComponentTransfer in="displaced" result="brightened">
            <feFuncR type="linear" slope="1.05" />
            <feFuncG type="linear" slope="1.05" />
            <feFuncB type="linear" slope="1.08" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="brightened" />
          </feMerge>
        </filter>
      </defs>
    `;
    document.body.appendChild(svg);
  }

  function applyLiquidGlass(el, opts) {
    if (!el) return;
    ensureSvgFilter();

    const defaults = {
      blur: 2,         // Low blur for crystal clear liquid glass transparency
      saturate: 1.8,
      contrast: 1.08
    };
    const config = Object.assign({}, defaults, opts || {});

    el.style.backdropFilter = `blur(${config.blur}px) saturate(${config.saturate}) contrast(${config.contrast})`;
    el.style.webkitBackdropFilter = `blur(${config.blur}px) saturate(${config.saturate}) contrast(${config.contrast})`;
  }

  window.liquidGlass = applyLiquidGlass;
})();
