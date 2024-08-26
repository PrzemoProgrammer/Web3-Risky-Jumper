const _0x47be67 = _0x2f1f;
(function (_0x4a044a, _0x1e69e1) {
  const _0x4baeaf = _0x2f1f,
    _0x299b39 = _0x4a044a();
  while (!![]) {
    try {
      const _0x350810 =
        (parseInt(_0x4baeaf(0x138)) / 0x1) *
          (-parseInt(_0x4baeaf(0x140)) / 0x2) +
        (-parseInt(_0x4baeaf(0x128)) / 0x3) *
          (parseInt(_0x4baeaf(0x135)) / 0x4) +
        (-parseInt(_0x4baeaf(0x13e)) / 0x5) *
          (parseInt(_0x4baeaf(0x12a)) / 0x6) +
        parseInt(_0x4baeaf(0x13a)) / 0x7 +
        parseInt(_0x4baeaf(0x141)) / 0x8 +
        (-parseInt(_0x4baeaf(0x12c)) / 0x9) *
          (-parseInt(_0x4baeaf(0x13f)) / 0xa) +
        (-parseInt(_0x4baeaf(0x124)) / 0xb) *
          (parseInt(_0x4baeaf(0x126)) / 0xc);
      if (_0x350810 === _0x1e69e1) break;
      else _0x299b39["push"](_0x299b39["shift"]());
    } catch (_0x18fa07) {
      _0x299b39["push"](_0x299b39["shift"]());
    }
  }
})(_0x3221, 0x96f85);
const GAME_SAFE_WIDTH = 0x2d0,
  GAME_SAFE_HEIGHT = 0x500,
  statusbarHeight = 0x1e,
  deltaX =
    (window[_0x47be67(0x12d)] / calculateVerticalScaleFactor() -
      window[_0x47be67(0x12d)]) /
    0x2,
  deltaY =
    (window[_0x47be67(0x13b)] / calculateVerticalScaleFactor() -
      window["innerHeight"]) /
    0x2,
  gameStartX = -deltaX,
  gameStartY = -deltaY,
  gameWidth = window["innerWidth"] + deltaX,
  gameHeight = window[_0x47be67(0x13b)] + deltaY,
  halfGameWidth = window[_0x47be67(0x12d)] / 0x2,
  halfGameHeight = window["innerHeight"] / 0x2,
  config = {
    type: Phaser[_0x47be67(0x136)],
    parent: _0x47be67(0x137),
    pixelArt: !![],
    antialias: ![],
    roundPixels: ![],
    backgroundColor: _0x47be67(0x12f),
    physics: {
      default: _0x47be67(0x12e),
      arcade: { debug: ![], gravity: { y: 0x3e8 } },
    },
    scale: {
      parent: _0x47be67(0x131),
      mode: Phaser["Scale"][_0x47be67(0x125)][_0x47be67(0x130)],
      width: GAME_SAFE_WIDTH,
      height: GAME_SAFE_HEIGHT,
    },
    dom: { createContainer: !![] },
    scene: [
      PreloadScene,
      BackgroundScene,
      ConnectBlockchainScene,
      MintNFTScene,
      SkinSelectorScene,
      LoginScene,
      MenuScene,
      PlayScene,
      RankScene,
      PauseScene,
      SettingsScene,
      RankingScene,
    ],
  },
  game = new Phaser["Game"](config);
function calculateVerticalScaleFactor() {
  const _0x2c478b = _0x47be67;
  return Math[_0x2c478b(0x132)](
    window["innerHeight"] / GAME_SAFE_HEIGHT,
    window[_0x2c478b(0x12d)] / GAME_SAFE_WIDTH
  );
}
function _0x2f1f(_0x897316, _0x5464ab) {
  const _0x3221f9 = _0x3221();
  return (
    (_0x2f1f = function (_0x2f1f99, _0xd0ddff) {
      _0x2f1f99 = _0x2f1f99 - 0x124;
      let _0x350fcd = _0x3221f9[_0x2f1f99];
      return _0x350fcd;
    }),
    _0x2f1f(_0x897316, _0x5464ab)
  );
}
function checkIsPortraitOrientation() {
  const _0x77cb03 = _0x47be67;
  return window[_0x77cb03(0x12d)] / window[_0x77cb03(0x13b)] <= 0x1;
}
function onresize() {
  const _0x32ce0e = _0x47be67,
    _0x1861fc = calculateVerticalScaleFactor();
  game[_0x32ce0e(0x133)][_0x32ce0e(0x139)][_0x32ce0e(0x12b)](
    (_0x55bbef, _0x30696b) => {
      const _0x334749 = _0x32ce0e;
      if (_0x30696b === 0x0) return;
      _0x55bbef[_0x334749(0x13c)][_0x334749(0x13d)][_0x334749(0x127)](
        _0x1861fc
      );
    }
  );
}
window["addEventListener"](_0x47be67(0x129), onresize),
  game[_0x47be67(0x134)]["on"]("ready", () => {
    onresize();
  }),
  (globalThis["__PHASER_GAME__"] = game);
function _0x3221() {
  const _0x24e6a8 = [
    "RESIZE",
    "game-container",
    "min",
    "scene",
    "events",
    "4oOCFcp",
    "AUTO",
    "div",
    "1RyTAMF",
    "scenes",
    "6638688pTuZaM",
    "innerHeight",
    "cameras",
    "main",
    "2162200vwGMok",
    "30ZIouTT",
    "998996VBVRRP",
    "1335464TjZNhr",
    "27599cTIQDA",
    "ScaleModes",
    "948auOWsI",
    "setZoom",
    "716028dsqFyR",
    "resize",
    "6TDVZGI",
    "forEach",
    "2615643ZRZqaA",
    "innerWidth",
    "arcade",
    "#0195b7",
  ];
  _0x3221 = function () {
    return _0x24e6a8;
  };
  return _0x3221();
}
