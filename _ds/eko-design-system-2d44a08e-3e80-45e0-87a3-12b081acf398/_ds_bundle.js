/* @ds-bundle: {"format":3,"namespace":"EkoDesignSystem_2d44a0","components":[],"sourceHashes":{"landing_intl/IntlHero.jsx":"db09775f98b1","landing_intl/IntlNav.jsx":"c4684e36874c","landing_intl/Sections.jsx":"8433ffc6aa43","landing_intl/copy.js":"b69a856074dc","ui_kits/website/CTASection.jsx":"edc7ee6d448c","ui_kits/website/EnableModule.jsx":"c964a22625c4","ui_kits/website/Footer.jsx":"d92cb580eaec","ui_kits/website/Hero.jsx":"f15da2786c75","ui_kits/website/InvestorsBand.jsx":"e94b627b9ed7","ui_kits/website/Nav.jsx":"f049f01340a2","ui_kits/website/PressGrid.jsx":"6f3c755c8b5a","ui_kits/website/ProductShowcase.jsx":"7cad47ad6021"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EkoDesignSystem_2d44a0 = window.EkoDesignSystem_2d44a0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// landing_intl/IntlHero.jsx
try { (() => {
// Hero.jsx — Two visual variants: 'light' (conservative typographic) and 'bold' (dark plum, map-led)
function Hero({
  copy,
  variant,
  dir,
  headlineFont
}) {
  const lines = copy.headline.split('\n');
  const displayFamily = headlineFont === 'sans' ? 'var(--font-sans)' : 'var(--font-display)';
  const displayWeight = headlineFont === 'sans' ? 500 : 400;
  if (variant === 'bold') return /*#__PURE__*/React.createElement(HeroBold, {
    copy: copy,
    lines: lines,
    dir: dir,
    displayFamily: displayFamily,
    displayWeight: displayWeight
  });
  return /*#__PURE__*/React.createElement(HeroLight, {
    copy: copy,
    lines: lines,
    dir: dir,
    displayFamily: displayFamily,
    displayWeight: displayWeight
  });
}

/* ── Conservative: typographic, light background, Eko File + swirl ───── */
function HeroLight({
  copy,
  lines,
  dir,
  displayFamily,
  displayWeight
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 780,
      padding: '180px 100px 80px',
      background: 'linear-gradient(180deg,#F6F6F6 0%,#FFFFFF 70%)',
      overflow: 'hidden',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-swirl-hero.png",
    alt: "",
    style: {
      position: 'absolute',
      right: dir === 'rtl' ? 'auto' : -120,
      left: dir === 'rtl' ? -120 : 'auto',
      top: -60,
      width: 780,
      opacity: .5,
      mixBlendMode: 'multiply',
      pointerEvents: 'none',
      transform: dir === 'rtl' ? 'scaleX(-1)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-file-3d.png",
    alt: "",
    style: {
      position: 'absolute',
      right: dir === 'rtl' ? 'auto' : 160,
      left: dir === 'rtl' ? 160 : 'auto',
      top: 220,
      width: 360,
      filter: 'drop-shadow(0 12px 44px rgba(65,45,230,0.55))',
      transform: 'rotate(-4deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      border: '1px solid rgba(0,0,0,.12)',
      borderRadius: 70,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#111',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(GlobeDot, null), /*#__PURE__*/React.createElement("span", null, copy.eyebrow)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: displayFamily,
      fontWeight: displayWeight,
      fontSize: 92,
      lineHeight: .97,
      letterSpacing: '-0.015em',
      color: '#111',
      margin: 0,
      maxWidth: 820
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block'
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'rgba(17,17,17,.75)',
      maxWidth: 540,
      margin: '32px 0 40px'
    }
  }, copy.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    style: {
      background: '#111',
      color: '#fff',
      borderRadius: 70,
      padding: '16px 30px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-0.01em',
      textDecoration: 'none'
    }
  }, copy.cta), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    style: {
      color: '#111',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '-0.01em'
    }
  }, copy.secondary, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: '#111',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14
    }
  }, dir === 'rtl' ? '←' : '→')))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 100,
      right: 100,
      display: 'flex',
      gap: 40,
      fontFamily: 'var(--font-sans)',
      color: 'rgba(17,17,17,.7)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "40+",
    l: "Markets live"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "12",
    l: "Capture studios"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4.2M",
    l: "Items captured"
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "120+",
    l: "Attributes / item"
  })));
}

/* ── Bolder: dark plum, map-led, constellation feel ──────────────────── */
function HeroBold({
  copy,
  lines,
  dir,
  displayFamily,
  displayWeight
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 820,
      padding: '180px 100px 100px',
      background: 'radial-gradient(1200px 800px at 70% 20%, #3B1282 0%, #170034 45%, #0D0123 100%)',
      color: '#fff',
      overflow: 'hidden',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement(MapConstellation, null), /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-file-3d.png",
    alt: "",
    style: {
      position: 'absolute',
      right: dir === 'rtl' ? 'auto' : 120,
      left: dir === 'rtl' ? 120 : 'auto',
      top: 200,
      width: 340,
      filter: 'drop-shadow(0 20px 60px rgba(107,83,255,.8))',
      transform: 'rotate(-5deg)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 14px',
      border: '1px solid rgba(255,255,255,.2)',
      borderRadius: 70,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: '#fff',
      marginBottom: 32,
      background: 'rgba(255,255,255,.04)',
      backdropFilter: 'blur(10px)'
    }
  }, /*#__PURE__*/React.createElement(GlobeDot, {
    glow: true
  }), /*#__PURE__*/React.createElement("span", null, copy.eyebrow)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: displayFamily,
      fontWeight: displayWeight,
      fontSize: 100,
      lineHeight: .95,
      letterSpacing: '-0.02em',
      color: '#fff',
      margin: 0,
      maxWidth: 820
    }
  }, lines.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'block',
      color: i === lines.length - 1 ? '#C7B8FF' : '#fff'
    }
  }, l))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      color: 'rgba(255,255,255,.75)',
      maxWidth: 540,
      margin: '32px 0 40px'
    }
  }, copy.lede), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    style: {
      background: '#fff',
      color: '#111',
      borderRadius: 70,
      padding: '16px 30px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-0.01em',
      textDecoration: 'none'
    }
  }, copy.cta), /*#__PURE__*/React.createElement("a", {
    href: "#why",
    style: {
      color: '#fff',
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: '-0.01em',
      border: '1px solid rgba(255,255,255,.3)',
      borderRadius: 70,
      padding: '15px 22px'
    }
  }, copy.secondary, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .8
    }
  }, dir === 'rtl' ? '←' : '→')))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 40,
      left: 100,
      right: 100,
      display: 'flex',
      gap: 40,
      fontFamily: 'var(--font-sans)',
      color: 'rgba(255,255,255,.75)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.01em'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "40+",
    l: "Markets live",
    dark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "12",
    l: "Capture studios",
    dark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "4.2M",
    l: "Items captured",
    dark: true
  }), /*#__PURE__*/React.createElement(Stat, {
    n: "120+",
    l: "Attributes / item",
    dark: true
  })));
}
function Stat({
  n,
  l,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 26,
      color: dark ? '#fff' : '#111',
      letterSpacing: '-0.02em',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      opacity: .7
    }
  }, l));
}
function GlobeDot({
  glow
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 10,
      height: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      background: '#6B53FF'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -5,
      borderRadius: '50%',
      background: 'rgba(107,83,255,.25)',
      animation: 'pulse 2s ease-out infinite'
    }
  }), glow && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: -10,
      borderRadius: '50%',
      background: 'rgba(107,83,255,.15)',
      filter: 'blur(4px)'
    }
  }));
}

/* Constellation of capture-studio "cities" on a subtle map */
function MapConstellation() {
  // Stylised lat/lng mapped into viewbox coords
  const cities = [['NYC', 180, 210], ['London', 430, 170], ['Paris', 455, 195], ['Tel Aviv', 560, 260], ['Dubai', 620, 280], ['Mumbai', 720, 290], ['Shanghai', 860, 240], ['Tokyo', 920, 230], ['Seoul', 895, 215], ['Sydney', 960, 440], ['São Paulo', 330, 440], ['Mexico City', 150, 290]];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 560",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      opacity: .7,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "310",
    x2: "1200",
    y2: "310",
    stroke: "rgba(255,255,255,.04)",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "230",
    x2: "1200",
    y2: "230",
    stroke: "rgba(255,255,255,.03)",
    strokeDasharray: "2 6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "390",
    x2: "1200",
    y2: "390",
    stroke: "rgba(255,255,255,.03)",
    strokeDasharray: "2 6"
  }), [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 8], [6, 7], [7, 8], [0, 10], [0, 11], [9, 6]].map(([a, b], i) => {
    const [, ax, ay] = cities[a],
      [, bx, by] = cities[b];
    const cx = (ax + bx) / 2,
      cy = Math.min(ay, by) - 40;
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: `M${ax},${ay} Q${cx},${cy} ${bx},${by}`,
      fill: "none",
      stroke: "rgba(138,56,245,.25)",
      strokeWidth: "1"
    });
  }), cities.map(([n, x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "8",
    fill: "rgba(107,83,255,.15)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "3",
    fill: "#8A38F5"
  }), /*#__PURE__*/React.createElement("text", {
    x: x + 10,
    y: y + 4,
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    fill: "rgba(255,255,255,.5)",
    letterSpacing: ".1em"
  }, n.toUpperCase()))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing_intl/IntlHero.jsx", error: String((e && e.message) || e) }); }

// landing_intl/IntlNav.jsx
try { (() => {
// Nav.jsx — Floating pill nav with language switcher
const {
  useState
} = React;
function IntlNav({
  lang,
  setLang,
  langs,
  variant,
  setVariant,
  dir
}) {
  const [openLang, setOpenLang] = useState(false);
  const dark = variant === 'bold';
  const chrome = dark ? 'rgba(23,0,52,.7)' : 'rgba(255,255,255,0.9)';
  const fg = dark ? '#fff' : '#111';
  const shadow = dark ? '0 0 0 1px rgba(255,255,255,.12), 0 6px 24px rgba(0,0,0,.4)' : '0 0 3px rgba(0,0,0,0.3)';
  const pill = {
    background: chrome,
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    boxShadow: shadow,
    borderRadius: 70,
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 22,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '-0.01em',
    color: fg
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 50,
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pill,
      padding: '12px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-eko.svg",
    alt: "eko",
    style: {
      height: 16,
      filter: dark ? 'invert(1) brightness(2)' : 'invert(1) brightness(.05)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      opacity: .6,
      padding: '2px 8px',
      border: `1px solid ${dark ? 'rgba(255,255,255,.22)' : 'rgba(0,0,0,.14)'}`,
      borderRadius: 4,
      letterSpacing: '.04em',
      textTransform: 'uppercase'
    }
  }, "Intl")), /*#__PURE__*/React.createElement("div", {
    style: pill
  }, /*#__PURE__*/React.createElement("a", {
    href: "#why",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Why eko"), /*#__PURE__*/React.createElement("a", {
    href: "#localization",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Localization"), /*#__PURE__*/React.createElement("a", {
    href: "#cases",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "Markets")), /*#__PURE__*/React.createElement("button", {
    onClick: () => setVariant(dark ? 'light' : 'bold'),
    style: {
      ...pill,
      cursor: 'pointer',
      border: 0,
      padding: '12px 16px',
      gap: 8
    },
    "aria-label": "Switch visual variant"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: dark ? '#fff' : '#170034'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, dark ? 'Light' : 'Bolder')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenLang(v => !v),
    style: {
      ...pill,
      cursor: 'pointer',
      border: 0,
      padding: '12px 18px',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,.12)' : 'rgba(0,0,0,.08)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10,
      fontWeight: 700
    }
  }, "\u2316"), /*#__PURE__*/React.createElement("span", null, langs[lang].label), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      fontSize: 10
    }
  }, "\u25BE")), openLang && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 'calc(100% + 8px)',
      right: 0,
      background: dark ? 'rgba(23,0,52,.95)' : '#fff',
      color: fg,
      borderRadius: 16,
      padding: 8,
      minWidth: 180,
      boxShadow: dark ? '0 12px 44px rgba(0,0,0,.5)' : '0 12px 44px rgba(0,0,0,.12)',
      border: dark ? '1px solid rgba(255,255,255,.08)' : '1px solid rgba(0,0,0,.06)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500
    }
  }, Object.keys(langs).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => {
      setLang(k);
      setOpenLang(false);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      width: '100%',
      border: 0,
      background: k === lang ? dark ? 'rgba(107,83,255,.3)' : '#EFEDFF' : 'transparent',
      color: 'inherit',
      padding: '10px 12px',
      borderRadius: 10,
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      opacity: .5,
      width: 22
    }
  }, k.toUpperCase()), /*#__PURE__*/React.createElement("span", null, langs[k].label), langs[k].dir === 'rtl' && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontSize: 10,
      opacity: .5,
      fontFamily: 'var(--font-mono)'
    }
  }, "RTL"))))), /*#__PURE__*/React.createElement("a", {
    href: "#waitlist",
    style: {
      background: dark ? '#fff' : '#6B53FF',
      color: dark ? '#111' : '#fff',
      borderRadius: 70,
      padding: '13px 22px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--w-cta,600)',
      fontSize: 14,
      letterSpacing: '-0.01em',
      textDecoration: 'none',
      boxShadow: shadow
    }
  }, "Join waitlist"));
}
window.IntlNav = IntlNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing_intl/IntlNav.jsx", error: String((e && e.message) || e) }); }

// landing_intl/Sections.jsx
try { (() => {
// Sections.jsx — value props, localization, showcase, cases, CTA/footer
const {
  useState: _useState2
} = React;
function ValueProps({
  copy,
  variant,
  dir
}) {
  const dark = variant === 'bold';
  const props = [copy.prop1, copy.prop2, copy.prop3];
  const meta = [{
    kicker: '01 — Capture',
    tint: '#6B53FF',
    art: /*#__PURE__*/React.createElement(PropArtCapture, null)
  }, {
    kicker: '02 — Verify',
    tint: '#8A38F5',
    art: /*#__PURE__*/React.createElement(PropArtVerify, null)
  }, {
    kicker: '03 — Deliver',
    tint: '#4731FD',
    art: /*#__PURE__*/React.createElement(PropArtDeliver, null)
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    style: {
      padding: '140px 100px 120px',
      background: dark ? '#0B001E' : '#fff',
      color: dark ? '#fff' : '#111',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 64,
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: dark
  }, "Why eko"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-0.01em',
      margin: '12px 0 0'
    }
  }, "One file. Every market.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 17,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      color: dark ? 'rgba(255,255,255,.7)' : 'rgba(17,17,17,.7)',
      maxWidth: 380,
      margin: 0
    }
  }, "Every Eko File is captured once in physical space, then rendered into every language, unit system and shopping surface you need.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 24
    }
  }, props.map((p, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: dark ? 'rgba(255,255,255,.04)' : '#F6F6F6',
      border: dark ? '1px solid rgba(255,255,255,.08)' : 'none',
      borderRadius: 24,
      padding: 32,
      minHeight: 440,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 24
    }
  }, meta[i].art), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.1em',
      color: meta[i].tint,
      marginBottom: 14
    }
  }, meta[i].kicker), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-0.015em',
      lineHeight: 1.15,
      margin: '0 0 12px',
      color: dark ? '#fff' : '#111'
    }
  }, p.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 14,
      lineHeight: 1.45,
      letterSpacing: '-0.005em',
      color: dark ? 'rgba(255,255,255,.65)' : 'rgba(17,17,17,.65)',
      margin: 0
    }
  }, p.b))))));
}
function PropArtCapture() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    style: {
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cap",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6B53FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#8A38F5"
  }))), /*#__PURE__*/React.createElement("polygon", {
    points: "100,20 155,50 170,105 145,160 85,175 35,150 25,90 55,40",
    fill: "none",
    stroke: "url(#cap)",
    strokeWidth: "1.2",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "100,40 140,65 152,105 132,145 88,155 50,135 42,92 65,55",
    fill: "none",
    stroke: "#6B53FF",
    strokeWidth: "1",
    opacity: ".8"
  }), [[100, 40], [140, 65], [152, 105], [132, 145], [88, 155], [50, 135], [42, 92], [65, 55]].map(([x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("circle", {
    cx: x,
    cy: y,
    r: "4",
    fill: "#6B53FF"
  }), /*#__PURE__*/React.createElement("line", {
    x1: x,
    y1: y,
    x2: "100",
    y2: "100",
    stroke: "#6B53FF",
    strokeWidth: ".5",
    opacity: ".3"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "82",
    y: "82",
    width: "36",
    height: "36",
    rx: "6",
    fill: "#170034"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "86",
    y: "86",
    width: "28",
    height: "28",
    rx: "3",
    fill: "url(#cap)"
  }));
}
function PropArtVerify() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    style: {
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "72",
    fill: "none",
    stroke: "#8A38F5",
    strokeWidth: ".6",
    opacity: ".35"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "52",
    fill: "none",
    stroke: "#8A38F5",
    strokeWidth: ".6",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "100",
    cy: "100",
    r: "32",
    fill: "none",
    stroke: "#8A38F5",
    strokeWidth: ".6",
    opacity: ".7"
  }), Array.from({
    length: 24
  }).map((_, i) => {
    const a = i / 24 * Math.PI * 2;
    const r = i % 3 === 0 ? 72 : i % 2 === 0 ? 52 : 32;
    const x = 100 + Math.cos(a) * r,
      y = 100 + Math.sin(a) * r;
    const on = i % 4 === 0;
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: x,
      cy: y,
      r: on ? 3.5 : 2,
      fill: on ? '#8A38F5' : '#C7B8FF'
    });
  }), /*#__PURE__*/React.createElement("g", {
    transform: "translate(100,100)"
  }, /*#__PURE__*/React.createElement("circle", {
    r: "18",
    fill: "#170034"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-7,1 L-2,6 L8,-5",
    stroke: "#fff",
    strokeWidth: "2.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("text", {
    x: "100",
    y: "195",
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    letterSpacing: ".15em",
    fill: "#6B53FF"
  }, "120+ ATTRIBUTES"));
}
function PropArtDeliver() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 200 200",
    style: {
      width: 180,
      height: 180
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "del",
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#4731FD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#6B53FF"
  }))), /*#__PURE__*/React.createElement("rect", {
    x: "80",
    y: "82",
    width: "40",
    height: "50",
    rx: "6",
    fill: "url(#del)"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "85",
    y: "90",
    width: "30",
    height: "2",
    fill: "#fff",
    opacity: ".5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "85",
    y: "96",
    width: "22",
    height: "2",
    fill: "#fff",
    opacity: ".4"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "85",
    y: "102",
    width: "26",
    height: "2",
    fill: "#fff",
    opacity: ".4"
  }), [['PDP', 30, 50], ['API', 170, 50], ['AGENT', 30, 150], ['FEED', 170, 150]].map(([l, x, y], i) => /*#__PURE__*/React.createElement("g", {
    key: i
  }, /*#__PURE__*/React.createElement("line", {
    x1: "100",
    y1: "107",
    x2: x,
    y2: y,
    stroke: "#6B53FF",
    strokeWidth: ".8",
    opacity: ".4",
    strokeDasharray: "2 3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: x - 22,
    y: y - 12,
    width: "44",
    height: "24",
    rx: "12",
    fill: "#170034"
  }), /*#__PURE__*/React.createElement("text", {
    x: x,
    y: y + 4,
    textAnchor: "middle",
    fontFamily: "var(--font-mono)",
    fontSize: "9",
    letterSpacing: ".12em",
    fill: "#C7B8FF"
  }, l))));
}

/* ── Localization module ─────────────────────────────────────────── */
function Localization({
  langs,
  currentLang,
  setLang,
  variant,
  dir
}) {
  const dark = variant === 'bold';
  const copy = langs[currentLang];

  // Sample product-page rendering in the current language
  const sample = {
    en: {
      t: 'Merino Runner',
      p: '$148',
      size: 'US 10.5',
      weight: '260 g / 9.2 oz',
      note: 'Ships from 3 warehouses'
    },
    fr: {
      t: 'Baskets Mérinos',
      p: '148 €',
      size: 'EU 44',
      weight: '260 g',
      note: 'Expédié de 3 entrepôts'
    },
    es: {
      t: 'Zapatilla Merino',
      p: '148 €',
      size: 'EU 44',
      weight: '260 g',
      note: 'Envío desde 3 almacenes'
    },
    ja: {
      t: 'メリノ ランナー',
      p: '¥22,800',
      size: 'JP 28.5',
      weight: '260 g',
      note: '3つの倉庫から発送'
    },
    ko: {
      t: '메리노 러너',
      p: '₩198,000',
      size: 'KR 275',
      weight: '260 g',
      note: '3개 창고에서 배송'
    },
    zh: {
      t: '美利奴跑鞋',
      p: '¥1,080',
      size: 'CN 44',
      weight: '260 g',
      note: '从 3 个仓库发货'
    },
    ar: {
      t: 'حذاء ميرينو',
      p: '٥٤٠ ر.س',
      size: 'EU 44',
      weight: '260 غ',
      note: 'يُشحن من 3 مستودعات'
    },
    he: {
      t: 'נעלי מרינו',
      p: '₪540',
      size: 'EU 44',
      weight: '260 ג׳',
      note: 'נשלח מ-3 מחסנים'
    }
  }[currentLang];
  return /*#__PURE__*/React.createElement("section", {
    id: "localization",
    style: {
      padding: '140px 100px',
      background: dark ? '#170034' : '#EFEDFF',
      color: dark ? '#fff' : '#111',
      direction: dir,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 80,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: dark
  }, "Localization"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: .98,
      letterSpacing: '-0.015em',
      margin: '12px 0 28px',
      whiteSpace: 'pre-line'
    }
  }, copy.locHeadline), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.4,
      letterSpacing: '-0.01em',
      color: dark ? 'rgba(255,255,255,.7)' : 'rgba(17,17,17,.7)',
      maxWidth: 460,
      margin: '0 0 32px'
    }
  }, copy.locBody), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      direction: 'ltr'
    }
  }, Object.keys(langs).map(k => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setLang(k),
    style: {
      padding: '10px 16px',
      borderRadius: 70,
      border: 0,
      cursor: 'pointer',
      background: k === currentLang ? '#6B53FF' : dark ? 'rgba(255,255,255,.08)' : 'rgba(17,17,17,.06)',
      color: k === currentLang ? '#fff' : dark ? 'rgba(255,255,255,.8)' : '#111',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.01em',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      opacity: .6
    }
  }, k.toUpperCase()), langs[k].label, langs[k].dir === 'rtl' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 9,
      opacity: .7,
      border: '1px solid currentColor',
      borderRadius: 3,
      padding: '1px 4px'
    }
  }, "RTL"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: dark ? 'rgba(255,255,255,.04)' : '#fff',
      border: dark ? '1px solid rgba(255,255,255,.1)' : 'none',
      borderRadius: 28,
      padding: 32,
      direction: langs[currentLang].dir,
      boxShadow: dark ? '0 40px 80px rgba(0,0,0,.5)' : '0 24px 64px rgba(23,0,52,.15)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.15)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.15)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: dark ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.15)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: dark ? 'rgba(255,255,255,.5)' : 'rgba(17,17,17,.5)'
    }
  }, "EKO-FILE \xB7 ", currentLang.toUpperCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      borderRadius: 18,
      overflow: 'hidden',
      background: dark ? '#0B001E' : '#F3F3F3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-file-3d.png",
    alt: "",
    style: {
      width: '72%',
      filter: 'drop-shadow(0 12px 32px rgba(65,45,230,.5))'
    }
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: '-0.015em',
      margin: '0 0 6px',
      color: dark ? '#fff' : '#111'
    }
  }, sample.t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 32,
      letterSpacing: '-0.02em',
      marginBottom: 18,
      color: dark ? '#fff' : '#111'
    }
  }, sample.p), /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: '10px 20px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.005em'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      opacity: .5,
      textTransform: 'uppercase',
      alignSelf: 'center'
    }
  }, "SIZE"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: dark ? 'rgba(255,255,255,.85)' : '#111'
    }
  }, sample.size), /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      opacity: .5,
      textTransform: 'uppercase',
      alignSelf: 'center'
    }
  }, "WT"), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      color: dark ? 'rgba(255,255,255,.85)' : '#111'
    }
  }, sample.weight)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      paddingTop: 16,
      borderTop: dark ? '1px solid rgba(255,255,255,.1)' : '1px solid rgba(0,0,0,.08)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      color: dark ? 'rgba(255,255,255,.6)' : 'rgba(17,17,17,.6)'
    }
  }, sample.note))));
}

/* ── Showcase (simplified version of main site's product inspector) ─── */
function Showcase({
  copy,
  variant,
  dir
}) {
  const [view, setView] = _useState2('front');
  const dark = variant === 'bold';
  const views = [{
    id: 'front',
    l: 'Front'
  }, {
    id: 'back',
    l: 'Back'
  }, {
    id: 'detail',
    l: 'Detail'
  }, {
    id: 'scale',
    l: 'Scale'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '140px 100px',
      background: dark ? '#0B001E' : '#111',
      color: '#fff',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 48,
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, copy.show), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 56,
      lineHeight: 1,
      letterSpacing: '-0.015em',
      margin: '12px 0 0'
    }
  }, copy.showSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      background: 'rgba(255,255,255,.06)',
      padding: 4,
      borderRadius: 70,
      direction: 'ltr'
    }
  }, views.map(v => /*#__PURE__*/React.createElement("button", {
    key: v.id,
    onClick: () => setView(v.id),
    style: {
      border: 0,
      padding: '10px 18px',
      borderRadius: 70,
      cursor: 'pointer',
      background: view === v.id ? '#fff' : 'transparent',
      color: view === v.id ? '#111' : 'rgba(255,255,255,.7)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      letterSpacing: '-0.01em'
    }
  }, v.l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      overflow: 'hidden',
      height: 560,
      position: 'relative',
      background: 'radial-gradient(800px 500px at 50% 40%, #3B1282 0%, #170034 60%, #0B001E 100%)',
      border: '1px solid rgba(255,255,255,.06)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 1200 560",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "600",
    cy: "440",
    rx: "360",
    ry: "50",
    fill: "none",
    stroke: "rgba(138,56,245,.25)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "600",
    cy: "440",
    rx: "240",
    ry: "34",
    fill: "none",
    stroke: "rgba(138,56,245,.4)",
    strokeWidth: "1"
  }), Array.from({
    length: 36
  }).map((_, i) => {
    const a = i / 36 * Math.PI * 2;
    const x1 = 600 + Math.cos(a) * 360,
      y1 = 440 + Math.sin(a) * 50;
    const x2 = 600 + Math.cos(a) * 350,
      y2 = 440 + Math.sin(a) * 48;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x1,
      y1: y1,
      x2: x2,
      y2: y2,
      stroke: "rgba(255,255,255,.3)",
      strokeWidth: "1"
    });
  })), /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-file-3d.png",
    alt: "",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: `translate(-50%,-60%) rotate(${view === 'back' ? '185' : view === 'detail' ? '90' : view === 'scale' ? '0' : '-4'}deg) scale(${view === 'detail' ? 1.5 : view === 'scale' ? .7 : 1})`,
      width: 360,
      filter: 'drop-shadow(0 20px 80px rgba(107,83,255,.7))',
      transition: 'transform .6s cubic-bezier(.2,.8,.2,1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 60,
      bottom: 40,
      right: 60,
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      color: 'rgba(255,255,255,.6)',
      direction: 'ltr'
    }
  }, /*#__PURE__*/React.createElement("span", null, "VIEW: ", view.toUpperCase()), /*#__PURE__*/React.createElement("span", null, "H 31.2 CM \xB7 W 19.8 CM \xB7 D 11.4 CM"), /*#__PURE__*/React.createElement("span", null, "260 G"))));
}

/* ── Regional case studies ──────────────────────────────────────── */
function Cases({
  copy,
  variant,
  dir
}) {
  const dark = variant === 'bold';
  const cases = [{
    region: 'Europe',
    market: 'DE · FR · IT',
    brand: 'Apparel marketplace',
    stat: '+38%',
    statLabel: 'CVR on localized PDPs',
    art: 'linear-gradient(135deg,#6B53FF 0%,#8A38F5 100%)'
  }, {
    region: 'APAC',
    market: 'JP · KR · SG',
    brand: 'Consumer electronics',
    stat: '−62%',
    statLabel: 'Returns after attribute verify',
    art: 'linear-gradient(135deg,#4731FD 0%,#170034 100%)'
  }, {
    region: 'MEA',
    market: 'AE · SA',
    brand: 'Beauty & personal care',
    stat: '4.1×',
    statLabel: 'Agent-led conversions',
    art: 'linear-gradient(135deg,#170034 0%,#6B53FF 100%)'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "cases",
    style: {
      padding: '140px 100px',
      background: dark ? '#170034' : '#fff',
      color: dark ? '#fff' : '#111',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56,
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: dark
  }, "Markets"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 64,
      lineHeight: .98,
      letterSpacing: '-0.015em',
      margin: '12px 0 0',
      whiteSpace: 'pre-line'
    }
  }, copy.casesHead)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 20
    }
  }, cases.map((c, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      background: dark ? 'rgba(255,255,255,.04)' : '#F6F6F6',
      borderRadius: 24,
      overflow: 'hidden',
      border: dark ? '1px solid rgba(255,255,255,.08)' : 'none',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/3',
      background: c.art,
      padding: 24,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em'
    }
  }, /*#__PURE__*/React.createElement("span", null, c.region.toUpperCase()), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, c.market)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 72,
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, c.stat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 13,
      letterSpacing: '-0.005em',
      opacity: .85,
      marginTop: 6,
      maxWidth: 220
    }
  }, c.statLabel))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.1em',
      opacity: .5,
      marginBottom: 6
    }
  }, "CATEGORY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 17,
      letterSpacing: '-0.01em',
      color: dark ? '#fff' : '#111'
    }
  }, c.brand))))));
}

/* ── CTA / waitlist + footer ─────────────────────────────────────── */
function Waitlist({
  copy,
  variant,
  dir
}) {
  const dark = variant === 'bold';
  const [email, setEmail] = _useState2('');
  const [region, setRegion] = _useState2('');
  const [sent, setSent] = _useState2(false);
  const regions = ['Europe', 'APAC', 'MEA', 'LATAM', 'North America', 'Other'];
  return /*#__PURE__*/React.createElement("section", {
    id: "waitlist",
    style: {
      padding: '140px 100px 100px',
      background: dark ? '#0B001E' : '#111',
      color: '#fff',
      direction: dir
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    dark: true
  }, "Waitlist"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 88,
      lineHeight: .95,
      letterSpacing: '-0.02em',
      margin: '12px 0 20px'
    }
  }, copy.waitlist), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 20,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
      color: 'rgba(255,255,255,.7)',
      maxWidth: 560,
      margin: '0 0 48px'
    }
  }, copy.waitSub), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 32px',
      background: 'rgba(107,83,255,.18)',
      border: '1px solid rgba(107,83,255,.4)',
      borderRadius: 20,
      maxWidth: 560,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-0.005em'
    }
  }, "Thanks \u2014 we'll reach out as access opens in ", /*#__PURE__*/React.createElement("b", null, region || 'your market'), ".") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      maxWidth: 720,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true,
    placeholder: "you@company.com",
    style: {
      flex: '2 1 280px',
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 70,
      padding: '18px 26px',
      color: '#fff',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-0.005em'
    }
  }), /*#__PURE__*/React.createElement("select", {
    value: region,
    onChange: e => setRegion(e.target.value),
    required: true,
    style: {
      flex: '1 1 180px',
      background: 'rgba(255,255,255,.06)',
      border: '1px solid rgba(255,255,255,.14)',
      borderRadius: 70,
      padding: '18px 24px',
      color: '#fff',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      appearance: 'none',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    style: {
      color: '#111'
    }
  }, "Your region\u2026"), regions.map(r => /*#__PURE__*/React.createElement("option", {
    key: r,
    value: r,
    style: {
      color: '#111'
    }
  }, r))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      flex: '0 0 auto',
      background: '#fff',
      color: '#111',
      border: 0,
      borderRadius: 70,
      padding: '18px 36px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 16,
      letterSpacing: '-0.01em'
    }
  }, copy.cta)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      paddingTop: 48,
      borderTop: '1px solid rgba(255,255,255,.1)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-eko.svg",
    alt: "eko",
    style: {
      height: 22,
      filter: 'invert(1) brightness(2)',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      color: 'rgba(255,255,255,.55)',
      margin: 0,
      lineHeight: 1.4,
      maxWidth: 220
    }
  }, "Building the future of commerce, item by item.")), [['Product', 'Eko File', 'Capture studios', 'Attribute library', 'API'], ['Company', 'About', 'Careers', 'Press', 'Investors'], ['Regions', 'Europe', 'APAC', 'MEA', 'LATAM']].map(([head, ...items], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.4)',
      marginBottom: 16
    }
  }, head), items.map(x => /*#__PURE__*/React.createElement("a", {
    key: x,
    href: "#",
    style: {
      display: 'block',
      color: 'rgba(255,255,255,.8)',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '-0.005em',
      marginBottom: 10
    }
  }, x))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      borderTop: '1px solid rgba(255,255,255,.08)',
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-mono)',
      fontSize: 10,
      letterSpacing: '.08em',
      color: 'rgba(255,255,255,.4)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 EKO INC. \xB7 AVAILABLE IN 40+ MARKETS"), /*#__PURE__*/React.createElement("span", null, "HQ \xB7 NYC \xB7 TEL AVIV \xB7 TOKYO"))));
}
function Eyebrow({
  children,
  dark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: dark ? 'rgba(255,255,255,.55)' : 'rgba(17,17,17,.55)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 1,
      background: 'currentColor',
      opacity: .6
    }
  }), children);
}
window.ValueProps = ValueProps;
window.Localization = Localization;
window.Showcase = Showcase;
window.Cases = Cases;
window.Waitlist = Waitlist;
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing_intl/Sections.jsx", error: String((e && e.message) || e) }); }

// landing_intl/copy.js
try { (() => {
// Copy.js — localized copy samples for the language switcher
window.EkoCopy = {
  en: {
    label: 'English',
    dir: 'ltr',
    eyebrow: 'Now available in 40+ markets',
    headline: 'Real products.\nReal people.\nEverywhere.',
    lede: 'The data layer for the agentic shopping future — hand-captured, verified, and ready for every market you ship to.',
    cta: 'Join the waitlist',
    secondary: 'See how it works',
    prop1: {
      t: 'One capture. Every market.',
      b: 'Every Eko File ships localized metadata, regional sizing, and translated attributes the moment we capture it.'
    },
    prop2: {
      t: 'Ground-truth, translated.',
      b: 'Our studios verify 120+ attributes per item, then localize them across languages so agents never guess.'
    },
    prop3: {
      t: 'Built for the way the world shops.',
      b: 'From PDP embed to API, Eko Files plug into whatever powers commerce in your market.'
    },
    locHeadline: 'Commerce sounds different\neverywhere it lives.',
    locBody: 'Eko Files render with native typography, localized units, and correct reading direction — out of the box, across 40+ markets.',
    show: 'Showcase',
    showSub: 'Inside an Eko File',
    casesHead: 'Real-world results,\nreal-world markets.',
    waitlist: 'Join the waitlist',
    waitSub: 'We\u2019ll reach out as we open access in your market.'
  },
  fr: {
    label: 'Français',
    dir: 'ltr',
    eyebrow: 'Disponible dans plus de 40 marchés',
    headline: 'Vrais produits.\nVraies personnes.\nPartout.',
    lede: 'La couche de données pour le commerce agentique — capturée à la main, vérifiée, prête pour chaque marché que vous livrez.',
    cta: 'Rejoindre la liste d\u2019attente',
    secondary: 'Voir comment ça marche',
    prop1: {
      t: 'Une capture. Chaque marché.',
      b: 'Chaque Eko File est livré avec des métadonnées localisées, des tailles régionales et des attributs traduits dès la capture.'
    },
    prop2: {
      t: 'La vérité du terrain, traduite.',
      b: 'Nos studios vérifient plus de 120 attributs par produit, puis les localisent dans toutes les langues.'
    },
    prop3: {
      t: 'Conçu pour la façon dont le monde achète.',
      b: 'De l\u2019intégration PDP à l\u2019API, les Eko Files s\u2019adaptent à votre commerce.'
    },
    locHeadline: 'Le commerce sonne différemment\npartout où il vit.',
    locBody: 'Les Eko Files s\u2019affichent avec la typographie native, les unités localisées et la bonne direction de lecture — dès le départ.',
    show: 'Vitrine',
    showSub: 'À l\u2019intérieur d\u2019un Eko File',
    casesHead: 'Résultats réels,\nmarchés réels.',
    waitlist: 'Rejoindre la liste',
    waitSub: 'Nous vous contacterons à l\u2019ouverture de votre marché.'
  },
  es: {
    label: 'Español',
    dir: 'ltr',
    eyebrow: 'Disponible en más de 40 mercados',
    headline: 'Productos reales.\nPersonas reales.\nEn todas partes.',
    lede: 'La capa de datos para el comercio agéntico — capturado a mano, verificado y listo para cada mercado.',
    cta: 'Unirse a la lista',
    secondary: 'Ver cómo funciona',
    prop1: {
      t: 'Una captura. Cada mercado.',
      b: 'Cada Eko File incluye metadatos localizados, tallas regionales y atributos traducidos.'
    },
    prop2: {
      t: 'Verdad verificada, traducida.',
      b: 'Nuestros estudios verifican más de 120 atributos por producto y los localizan a cada idioma.'
    },
    prop3: {
      t: 'Hecho para cómo compra el mundo.',
      b: 'Desde PDP hasta API, los Eko Files se integran a tu comercio.'
    },
    locHeadline: 'El comercio suena distinto\nen cada lugar donde vive.',
    locBody: 'Los Eko Files se muestran con tipografía nativa, unidades localizadas y dirección correcta — sin configuración.',
    show: 'Muestrario',
    showSub: 'Dentro de un Eko File',
    casesHead: 'Resultados reales,\nmercados reales.',
    waitlist: 'Unirse a la lista',
    waitSub: 'Te contactaremos cuando abramos tu mercado.'
  },
  ja: {
    label: '日本語',
    dir: 'ltr',
    eyebrow: '40以上の市場で利用可能',
    headline: 'リアルな商品。\nリアルな人々。\n世界中どこでも。',
    lede: 'エージェント型ショッピングの未来のためのデータレイヤー。手作業で撮影し、検証し、あらゆる市場に対応します。',
    cta: 'ウェイトリストに参加',
    secondary: '仕組みを見る',
    prop1: {
      t: '一度の撮影で全市場へ。',
      b: '各Eko Fileには、ローカライズされたメタデータ、地域別サイズ、翻訳済み属性が含まれます。'
    },
    prop2: {
      t: '検証された真実、翻訳済み。',
      b: '当スタジオは商品ごとに120以上の属性を検証し、すべての言語に対応させます。'
    },
    prop3: {
      t: '世界の買い物の形に合わせて。',
      b: 'PDP埋め込みからAPIまで、Eko Fileはあらゆる市場の商取引に接続します。'
    },
    locHeadline: '商取引は、暮らす場所ごとに\n違う響きを持つ。',
    locBody: 'Eko Fileは、母語のタイポグラフィ、現地の単位、正しい読み方向でそのまま表示されます。',
    show: 'ショーケース',
    showSub: 'Eko Fileの中身',
    casesHead: 'リアルな成果、\nリアルな市場。',
    waitlist: 'ウェイトリストに参加',
    waitSub: '市場が開かれ次第ご連絡します。'
  },
  ko: {
    label: '한국어',
    dir: 'ltr',
    eyebrow: '40개 이상의 시장에서 이용 가능',
    headline: '진짜 제품.\n진짜 사람.\n어디서나.',
    lede: '에이전트 쇼핑 시대를 위한 데이터 레이어 — 손으로 촬영하고, 검증하고, 모든 시장에 대응합니다.',
    cta: '대기 목록 참여',
    secondary: '작동 방식 보기',
    prop1: {
      t: '한 번의 촬영, 모든 시장.',
      b: '모든 Eko 파일에는 지역화된 메타데이터, 지역 사이즈, 번역된 속성이 포함됩니다.'
    },
    prop2: {
      t: '검증된 진실, 번역됨.',
      b: '저희 스튜디오는 제품당 120개 이상의 속성을 검증하고 모든 언어로 지역화합니다.'
    },
    prop3: {
      t: '세계가 쇼핑하는 방식에 맞게.',
      b: 'PDP 임베드에서 API까지, Eko 파일은 어디에나 연결됩니다.'
    },
    locHeadline: '상거래는 머무는 곳마다\n다른 소리를 낸다.',
    locBody: 'Eko 파일은 모국어 타이포그래피, 현지 단위, 올바른 읽기 방향으로 기본 제공됩니다.',
    show: '쇼케이스',
    showSub: 'Eko 파일 내부',
    casesHead: '실제 결과,\n실제 시장.',
    waitlist: '대기 목록 참여',
    waitSub: '시장이 열리면 연락드리겠습니다.'
  },
  zh: {
    label: '简体中文',
    dir: 'ltr',
    eyebrow: '已覆盖 40+ 个市场',
    headline: '真实的产品。\n真实的人。\n无处不在。',
    lede: '为代理式购物未来而生的数据层——手工采集、经过验证、面向每一个市场。',
    cta: '加入候补名单',
    secondary: '了解运作方式',
    prop1: {
      t: '一次采集,通达全球。',
      b: '每一份 Eko File 都自带本地化元数据、地区尺码和已翻译属性。'
    },
    prop2: {
      t: '经过核验的真相,已本地化。',
      b: '我们的工作室为每件商品核验 120+ 属性,并翻译为多语言。'
    },
    prop3: {
      t: '契合全球购物方式。',
      b: '从 PDP 嵌入到 API,Eko File 与您所在市场的商业系统无缝衔接。'
    },
    locHeadline: '商业在每个地方,\n都有不同的声音。',
    locBody: 'Eko File 开箱即用:原生字体、本地化单位、正确的阅读方向。',
    show: '展示',
    showSub: 'Eko File 内部',
    casesHead: '真实成果,\n真实市场。',
    waitlist: '加入候补名单',
    waitSub: '您的市场开放后我们将联系您。'
  },
  ar: {
    label: 'العربية',
    dir: 'rtl',
    eyebrow: 'متاح الآن في أكثر من 40 سوقًا',
    headline: 'منتجات حقيقية.\nأشخاص حقيقيون.\nفي كل مكان.',
    lede: 'طبقة البيانات لمستقبل التسوق الذكي — مُلتقطة يدويًا، موثّقة، وجاهزة لكل سوق تشحن إليه.',
    cta: 'انضم إلى قائمة الانتظار',
    secondary: 'شاهد كيف يعمل',
    prop1: {
      t: 'التقاط واحد. كل الأسواق.',
      b: 'يأتي كل ملف Eko ببيانات محلية، ومقاسات إقليمية، وسمات مترجمة فور التقاطه.'
    },
    prop2: {
      t: 'حقيقة موثّقة، مترجمة.',
      b: 'تتحقق استوديوهاتنا من أكثر من 120 سمة لكل منتج، ثم تُحلّيها بكل اللغات.'
    },
    prop3: {
      t: 'مصمّم للطريقة التي يتسوّق بها العالم.',
      b: 'من تضمين صفحة المنتج إلى الواجهة البرمجية، تندمج ملفات Eko أينما كنت.'
    },
    locHeadline: 'التجارة تبدو مختلفة\nفي كل مكان تعيش فيه.',
    locBody: 'تُعرض ملفات Eko بخطوط أصلية، ووحدات محلية، واتجاه قراءة صحيح — جاهزة فورًا.',
    show: 'معرض',
    showSub: 'داخل ملف Eko',
    casesHead: 'نتائج حقيقية،\nأسواق حقيقية.',
    waitlist: 'انضم إلى قائمة الانتظار',
    waitSub: 'سنتواصل معك عند فتح سوقك.'
  },
  he: {
    label: 'עברית',
    dir: 'rtl',
    eyebrow: 'זמין כעת ביותר מ-40 שווקים',
    headline: 'מוצרים אמיתיים.\nאנשים אמיתיים.\nבכל מקום.',
    lede: 'שכבת הנתונים לעתיד הקניות הסוכנותי — מצולם ידנית, מאומת, ומוכן לכל שוק אליו אתם שולחים.',
    cta: 'הצטרפו לרשימת ההמתנה',
    secondary: 'ראו איך זה עובד',
    prop1: {
      t: 'צילום אחד. כל שוק.',
      b: 'כל Eko File מגיע עם מטא-דאטה מתורגם, מידות אזוריות ותכונות מלוקאליזציה.'
    },
    prop2: {
      t: 'אמת מאומתת, מתורגמת.',
      b: 'הסטודיו שלנו מאמת יותר מ-120 תכונות למוצר ומתאים אותן לכל שפה.'
    },
    prop3: {
      t: 'בנוי לדרך שבה העולם קונה.',
      b: 'מהטמעת PDP ועד ל-API, קבצי Eko מתחברים לכל מערכת מסחר.'
    },
    locHeadline: 'מסחר נשמע אחרת\nבכל מקום בו הוא חי.',
    locBody: 'קבצי Eko מוצגים בטיפוגרפיה מקומית, יחידות מדידה מותאמות וכיוון קריאה נכון — מחוץ לקופסה.',
    show: 'תצוגה',
    showSub: 'בתוך Eko File',
    casesHead: 'תוצאות אמיתיות,\nשווקים אמיתיים.',
    waitlist: 'הצטרפו לרשימה',
    waitSub: 'ניצור קשר כשנפתח את השוק שלכם.'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "landing_intl/copy.js", error: String((e && e.message) || e) }); }

// ui_kits/website/CTASection.jsx
try { (() => {
// CTASection.jsx — Big purple call-to-action band
function CTASection() {
  return /*#__PURE__*/React.createElement("section", {
    style: ctaStyles.wrap,
    id: "contact"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-swirl-hero.png",
    alt: "",
    style: ctaStyles.swirl
  }), /*#__PURE__*/React.createElement("div", {
    style: ctaStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: ctaStyles.eyebrow
  }, "Build with eko"), /*#__PURE__*/React.createElement("h2", {
    style: ctaStyles.h2
  }, "Real products.", /*#__PURE__*/React.createElement("br", null), "Real people.", /*#__PURE__*/React.createElement("br", null), "Really futuristic commerce."), /*#__PURE__*/React.createElement("div", {
    style: ctaStyles.ctas
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ctaStyles.primary
  }, "Contact Us"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: ctaStyles.ghost
  }, "Download the asset kit", /*#__PURE__*/React.createElement("img", {
    src: "assets/icons/download.svg",
    alt: "",
    style: {
      width: 16,
      height: 16,
      marginLeft: 10,
      filter: 'invert(1)'
    }
  })))));
}
const ctaStyles = {
  wrap: {
    position: 'relative',
    padding: '140px 100px',
    background: '#6B53FF',
    overflow: 'hidden',
    color: '#fff'
  },
  swirl: {
    position: 'absolute',
    right: -200,
    top: -150,
    width: 1100,
    opacity: .18,
    mixBlendMode: 'screen',
    pointerEvents: 'none'
  },
  inner: {
    position: 'relative',
    maxWidth: 1000
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: 'rgba(255,255,255,.85)',
    marginBottom: 28
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 88,
    lineHeight: .98,
    letterSpacing: '-0.01em',
    color: '#fff',
    margin: 0
  },
  ctas: {
    display: 'flex',
    gap: 14,
    alignItems: 'center',
    marginTop: 48
  },
  primary: {
    background: '#fff',
    color: '#111',
    borderRadius: 70,
    padding: '16px 30px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: '-0.01em',
    textDecoration: 'none'
  },
  ghost: {
    background: 'transparent',
    color: '#fff',
    borderRadius: 70,
    padding: '16px 30px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: '-0.01em',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    border: '1px solid rgba(255,255,255,.4)'
  }
};
window.CTASection = CTASection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTASection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EnableModule.jsx
try { (() => {
// EnableModule.jsx — "What We Enable" section with 2-up cards
function EnableModule() {
  const cards = [{
    eyebrow: 'Engineered for today',
    title: 'Hand-captured product visuals',
    body: 'Real people, real studios, real products. We capture every angle, every detail, every variation — at scale.',
    bg: '#F3F3F3',
    meta: '4.2M items · 47 categories'
  }, {
    eyebrow: 'Optimized for tomorrow',
    title: 'Structured truth for agents',
    body: 'Every Eko File ships with verified attributes, dimensions, materials and motion — the data layer your agents need.',
    bg: '#6B53FF',
    meta: '120+ attributes per item',
    dark: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: enableStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: enableStyles.head
  }, /*#__PURE__*/React.createElement("div", {
    style: enableStyles.eyebrow
  }, "What We Enable"), /*#__PURE__*/React.createElement("h2", {
    style: enableStyles.h2
  }, "Engineered for ecommerce today,", /*#__PURE__*/React.createElement("br", null), "optimized for the agentic future.")), /*#__PURE__*/React.createElement("div", {
    style: enableStyles.grid
  }, cards.map((c, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      ...enableStyles.card,
      background: c.bg,
      color: c.dark ? '#fff' : '#111'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...enableStyles.cardEyebrow,
      color: c.dark ? 'rgba(255,255,255,.7)' : 'rgba(17,17,17,.6)'
    }
  }, c.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: enableStyles.cardTitle
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      ...enableStyles.cardBody,
      color: c.dark ? 'rgba(255,255,255,.85)' : 'rgba(17,17,17,.8)'
    }
  }, c.body), /*#__PURE__*/React.createElement("div", {
    style: {
      ...enableStyles.cardMeta,
      color: c.dark ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.5)'
    }
  }, c.meta)))));
}
const enableStyles = {
  wrap: {
    padding: '160px 100px 100px',
    background: '#FFFFFF'
  },
  head: {
    marginBottom: 60
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: '#111',
    marginBottom: 24
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 60,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    color: '#111',
    margin: 0,
    maxWidth: 900
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 20
  },
  card: {
    borderRadius: 32,
    padding: '40px 36px',
    minHeight: 420,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform .2s cubic-bezier(.22,1,.36,1)'
  },
  cardEyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.01em'
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 44,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    margin: '14px 0 18px'
  },
  cardBody: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
    maxWidth: 420,
    margin: '0 0 auto'
  },
  cardMeta: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    marginTop: 30
  }
};
window.EnableModule = EnableModule;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EnableModule.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx
function Footer() {
  const cols = [{
    title: 'Solutions',
    items: ['Eko File', 'Capture Studios', 'Agentic Data Layer', 'PDP Embed']
  }, {
    title: 'Company',
    items: ['About Us', 'Careers', 'Press', 'Contact']
  }, {
    title: 'Resources',
    items: ['Documentation', 'Asset Library', 'Changelog', 'Status']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: ftStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: ftStyles.top
  }, /*#__PURE__*/React.createElement("div", {
    style: ftStyles.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-eko.svg",
    alt: "eko",
    style: {
      height: 28,
      filter: 'invert(1)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: ftStyles.tagline
  }, "Building the future of commerce, item by item.")), /*#__PURE__*/React.createElement("div", {
    style: ftStyles.cols
  }, cols.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: ftStyles.col
  }, /*#__PURE__*/React.createElement("div", {
    style: ftStyles.colTitle
  }, c.title), c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: ftStyles.link
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: ftStyles.bot
  }, /*#__PURE__*/React.createElement("span", {
    style: ftStyles.legal
  }, "\xA9 2026 eko Holdings, Inc."), /*#__PURE__*/React.createElement("span", {
    style: ftStyles.legal
  }, "Made by real people in NYC and Tel Aviv.")));
}
const ftStyles = {
  wrap: {
    background: '#111',
    color: '#fff',
    padding: '80px 100px 40px'
  },
  top: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 2fr',
    gap: 60,
    paddingBottom: 60,
    borderBottom: '1px solid rgba(255,255,255,.12)'
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  tagline: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    color: '#fff',
    margin: 0,
    maxWidth: 380
  },
  cols: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 30
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  colTitle: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'rgba(255,255,255,.5)',
    marginBottom: 8
  },
  link: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    color: 'rgba(255,255,255,.85)',
    textDecoration: 'none',
    letterSpacing: '-0.01em'
  },
  bot: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30
  },
  legal: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'rgba(255,255,255,.5)',
    letterSpacing: '0.02em'
  }
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Top hero module: Eko File + headline
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.bg
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-swirl-hero.png",
    alt: "",
    style: heroStyles.swirl
  }), /*#__PURE__*/React.createElement("img", {
    src: "assets/eko-file-3d.png",
    alt: "",
    style: heroStyles.file
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.copy
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.eyebrow
  }, "Our Purpose"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.h1
  }, "Building the future of commerce, item by item"), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.lede
  }, "Real products. Real people. Really futuristic commerce."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.ctas
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: heroStyles.primary
  }, "Contact Us"), /*#__PURE__*/React.createElement("a", {
    href: "#about",
    style: heroStyles.text
  }, "See what we enable", /*#__PURE__*/React.createElement("span", {
    style: heroStyles.arrow
  }, "\u2192")))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.foot
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.footChip
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.dot
  }), /*#__PURE__*/React.createElement("span", null, "Live \xB7 4.2M items captured")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.footMeta
  }, "Hand-captured \xB7 Verified \xB7 Cinematic")));
}
const heroStyles = {
  wrap: {
    position: 'relative',
    height: 810,
    width: '100%',
    overflow: 'hidden',
    paddingTop: 160,
    boxSizing: 'border-box'
  },
  bg: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, #F0F0F0 0%, #FFFFFF 80%)'
  },
  swirl: {
    position: 'absolute',
    right: -100,
    top: -50,
    width: 780,
    opacity: .55,
    mixBlendMode: 'multiply',
    pointerEvents: 'none'
  },
  file: {
    position: 'absolute',
    right: 160,
    top: 200,
    width: 380,
    filter: 'drop-shadow(0 12px 44px rgba(65,45,230,0.6))',
    transform: 'rotate(-4deg)'
  },
  copy: {
    position: 'relative',
    maxWidth: 720,
    marginLeft: 100,
    marginTop: 40
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: '#111',
    marginBottom: 24
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 88,
    lineHeight: .98,
    letterSpacing: '-0.01em',
    color: '#111',
    margin: 0,
    maxWidth: 720
  },
  lede: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 1.25,
    letterSpacing: '-0.02em',
    color: 'rgba(17,17,17,.8)',
    maxWidth: 520,
    margin: '28px 0 36px'
  },
  ctas: {
    display: 'flex',
    gap: 14,
    alignItems: 'center'
  },
  primary: {
    background: '#111',
    color: '#fff',
    borderRadius: 70,
    padding: '16px 30px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 18,
    letterSpacing: '-0.01em',
    textDecoration: 'none'
  },
  text: {
    color: '#111',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: '-0.01em'
  },
  arrow: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    background: '#111',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  foot: {
    position: 'absolute',
    bottom: 40,
    left: 100,
    right: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footChip: {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    borderRadius: 70,
    padding: '10px 18px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: '-0.01em',
    color: '#111'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#6B53FF',
    boxShadow: '0 0 0 4px rgba(107,83,255,.2)'
  },
  footMeta: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'rgba(0,0,0,.6)',
    letterSpacing: '0.02em',
    textTransform: 'uppercase'
  }
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/InvestorsBand.jsx
try { (() => {
// InvestorsBand.jsx — Logo band of investors / partners
function InvestorsBand() {
  // Wordmarks rendered as serif type — placeholder until real logos come in.
  const marks = ['Walmart', 'Sam\u2019s Club', 'Greycroft', 'Sequoia', 'NEA', 'Lerer Hippeau'];
  return /*#__PURE__*/React.createElement("section", {
    style: ibStyles.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: ibStyles.eyebrow
  }, "Meet the investors"), /*#__PURE__*/React.createElement("div", {
    style: ibStyles.row
  }, marks.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: ibStyles.mark
  }, m))));
}
const ibStyles = {
  wrap: {
    padding: '80px 100px',
    background: '#FFFFFF',
    borderTop: '1px solid #ebebeb',
    borderBottom: '1px solid #ebebeb'
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 14,
    letterSpacing: '-0.01em',
    color: 'rgba(17,17,17,.65)',
    marginBottom: 30,
    textAlign: 'center'
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
    flexWrap: 'wrap'
  },
  mark: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 30,
    letterSpacing: '-0.02em',
    color: 'rgba(17,17,17,.75)'
  }
};
window.InvestorsBand = InvestorsBand;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/InvestorsBand.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Floating pill navigation cluster
const {
  useState
} = React;
function Nav() {
  const [hover, setHover] = useState(null);
  const items = ['Solutions', 'About Us', 'Resources'];
  return /*#__PURE__*/React.createElement("nav", {
    style: navStyles.wrap
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      ...navStyles.pill,
      ...navStyles.logoPill
    },
    "aria-label": "eko home"
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo-eko.svg",
    alt: "eko",
    style: {
      height: 18,
      display: 'block',
      filter: 'invert(1) brightness(.05)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: navStyles.pill
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      ...navStyles.link,
      opacity: hover === null || hover === i ? 1 : .55
    },
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null)
  }, it))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: navStyles.cta
  }, "Contact Us"), /*#__PURE__*/React.createElement("button", {
    style: navStyles.toggle,
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)));
}
const navStyles = {
  wrap: {
    position: 'fixed',
    top: 24,
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: 10,
    zIndex: 50,
    alignItems: 'center'
  },
  pill: {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    borderRadius: 70,
    padding: '14px 20px',
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '-0.01em',
    color: '#111'
  },
  logoPill: {
    padding: '14px 18px'
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'opacity .18s cubic-bezier(.22,1,.36,1)'
  },
  cta: {
    background: '#6B53FF',
    color: '#fff',
    borderRadius: 70,
    padding: '14px 22px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 15,
    letterSpacing: '-0.01em',
    textDecoration: 'none',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    transition: 'background .18s cubic-bezier(.22,1,.36,1)'
  },
  toggle: {
    background: 'rgba(255,255,255,0.9)',
    backdropFilter: 'blur(12px)',
    boxShadow: '0 0 3px rgba(0,0,0,0.3)',
    borderRadius: 70,
    padding: '14px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    border: 0,
    cursor: 'pointer'
  }
};
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/PressGrid.jsx
try { (() => {
// PressGrid.jsx — "Eko in the press" 3-up tile grid
function PressGrid() {
  const press = [{
    outlet: 'Fortune',
    date: 'Mar 2026',
    headline: 'eko\u2019s "real world" pivot lands $40M from Walmart and Sam\u2019s Club.'
  }, {
    outlet: 'Variety',
    date: 'Feb 2026',
    headline: 'From Hollywood storytelling to e-commerce: the studio rebuilt as a data layer.'
  }, {
    outlet: 'Adweek',
    date: 'Jan 2026',
    headline: 'Why "Bad AI" became the brand position of the year.'
  }, {
    outlet: 'Forbes',
    date: 'Dec 2025',
    headline: 'Inside the operation digitizing 4M physical products by hand.'
  }, {
    outlet: 'Digiday',
    date: 'Nov 2025',
    headline: 'The agentic shopping future needs a real-world ground truth.'
  }, {
    outlet: 'TechCrunch',
    date: 'Oct 2025',
    headline: 'eko\u2019s capture studios are quietly powering the next-gen PDP.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: prStyles.wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: prStyles.head
  }, /*#__PURE__*/React.createElement("div", {
    style: prStyles.eyebrow
  }, "Eko in the press"), /*#__PURE__*/React.createElement("h2", {
    style: prStyles.h2
  }, "What people are saying")), /*#__PURE__*/React.createElement("div", {
    style: prStyles.grid
  }, press.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: prStyles.tile
  }, /*#__PURE__*/React.createElement("div", {
    style: prStyles.outlet
  }, p.outlet), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: prStyles.headline
  }, p.headline), /*#__PURE__*/React.createElement("div", {
    style: prStyles.date
  }, p.date))))));
}
const prStyles = {
  wrap: {
    padding: '100px 100px',
    background: '#FFFFFF'
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 40
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: '#111'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 44,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    color: '#111',
    margin: 0
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gap: 14
  },
  tile: {
    background: '#F3F3F3',
    borderRadius: 12,
    padding: '28px 26px',
    minHeight: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textDecoration: 'none',
    color: '#111',
    transition: 'background .18s cubic-bezier(.22,1,.36,1)'
  },
  outlet: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 36,
    lineHeight: 1,
    letterSpacing: '-0.02em',
    color: '#111'
  },
  headline: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
    color: 'rgba(17,17,17,.85)'
  },
  date: {
    fontFamily: 'var(--font-mono)',
    fontSize: 12,
    color: 'rgba(0,0,0,.5)',
    marginTop: 12
  }
};
window.PressGrid = PressGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/PressGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProductShowcase.jsx
try { (() => {
// ProductShowcase.jsx — "Eko File" product card grid with UPC chips
function ProductShowcase() {
  const items = [{
    sku: '0 12345 67890 4',
    cat: 'Footwear',
    name: 'Trail Runner',
    tone: '#7C6DF6'
  }, {
    sku: '0 87241 19908 2',
    cat: 'Beverage',
    name: 'Cold-Pressed Citrus',
    tone: '#170034'
  }, {
    sku: '0 33912 88240 7',
    cat: 'Apparel',
    name: 'Linen Overshirt',
    tone: '#F3F3F3',
    dark: false
  }, {
    sku: '0 90112 47830 9',
    cat: 'Home',
    name: 'Ceramic Vessel',
    tone: '#4731FD'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: pgStyles.wrap
  }, /*#__PURE__*/React.createElement("header", {
    style: pgStyles.head
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: pgStyles.eyebrow
  }, "Inside an Eko File"), /*#__PURE__*/React.createElement("h2", {
    style: pgStyles.h2
  }, "Hand-captured.", /*#__PURE__*/React.createElement("br", null), "Verified. Cinematic.")), /*#__PURE__*/React.createElement("a", {
    href: "#explore",
    style: pgStyles.see
  }, "Explore the catalogue", /*#__PURE__*/React.createElement("span", {
    style: pgStyles.arrow
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: pgStyles.grid
  }, items.map((it, i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: pgStyles.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...pgStyles.media,
      background: it.tone,
      color: it.tone === '#F3F3F3' ? '#111' : '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: pgStyles.upc
  }, it.sku), /*#__PURE__*/React.createElement("span", {
    style: pgStyles.year
  }, "1973"), /*#__PURE__*/React.createElement("div", {
    style: pgStyles.iconCluster
  }, /*#__PURE__*/React.createElement("span", {
    style: pgStyles.iconChip
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/icons/scan360.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'invert(1)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: pgStyles.iconChip
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/icons/zoom-in.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'invert(1)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: pgStyles.iconChip
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/icons/view.svg",
    alt: "",
    style: {
      width: 14,
      height: 14,
      filter: 'invert(1)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: pgStyles.placeholder
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 46,
      lineHeight: 1,
      opacity: .85
    }
  }, it.name))), /*#__PURE__*/React.createElement("div", {
    style: pgStyles.body
  }, /*#__PURE__*/React.createElement("span", {
    style: pgStyles.cat
  }, it.cat), /*#__PURE__*/React.createElement("h3", {
    style: pgStyles.title
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: pgStyles.spec
  }, "360\xB0 spin \xB7 12 stills \xB7 38 attributes"))))));
}
const pgStyles = {
  wrap: {
    padding: '100px 100px 160px',
    background: '#F6F6F6'
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 50
  },
  eyebrow: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: '#111',
    marginBottom: 20
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 60,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    color: '#111',
    margin: 0
  },
  see: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: '-0.01em',
    color: '#111',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10
  },
  arrow: {
    width: 26,
    height: 26,
    borderRadius: '50%',
    background: '#111',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
    gap: 20
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14,
    cursor: 'pointer',
    transition: 'transform .2s cubic-bezier(.22,1,.36,1)'
  },
  media: {
    aspectRatio: '3/4',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    padding: 18
  },
  placeholder: {
    width: '100%',
    textAlign: 'center',
    padding: '12px 4px',
    boxSizing: 'border-box'
  },
  upc: {
    position: 'absolute',
    top: 14,
    left: 14,
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    borderRadius: 6,
    padding: '4px 8px',
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    backdropFilter: 'blur(4px)'
  },
  year: {
    position: 'absolute',
    top: 14,
    right: 14,
    background: '#fff',
    color: '#111',
    borderRadius: 4,
    padding: '4px 8px',
    fontFamily: 'var(--font-mono)',
    fontSize: 11
  },
  iconCluster: {
    position: 'absolute',
    bottom: 18,
    right: 18,
    display: 'flex',
    gap: 6
  },
  iconChip: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    background: 'rgba(0,0,0,.55)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    padding: '4px 4px 0'
  },
  cat: {
    fontFamily: 'var(--font-mono)',
    fontSize: 11,
    color: 'rgba(0,0,0,.55)',
    textTransform: 'uppercase',
    letterSpacing: '0.04em'
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 24,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    color: '#111',
    margin: '8px 0 4px'
  },
  spec: {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: 13,
    color: 'rgba(17,17,17,.7)',
    letterSpacing: '-0.01em',
    margin: 0
  }
};
window.ProductShowcase = ProductShowcase;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProductShowcase.jsx", error: String((e && e.message) || e) }); }

})();
