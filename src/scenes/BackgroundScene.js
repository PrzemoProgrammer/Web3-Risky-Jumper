const _0x1aad9d = _0x5d3c;
(function (_0x4b126d, _0x45ac40) {
  const _0x11596d = _0x5d3c,
    _0x1d0a47 = _0x4b126d();
  while (!![]) {
    try {
      const _0x4fb346 =
        (parseInt(_0x11596d(0xce)) / 0x1) * (parseInt(_0x11596d(0xdb)) / 0x2) +
        -parseInt(_0x11596d(0xda)) / 0x3 +
        -parseInt(_0x11596d(0xc4)) / 0x4 +
        parseInt(_0x11596d(0xc7)) / 0x5 +
        parseInt(_0x11596d(0xd2)) / 0x6 +
        parseInt(_0x11596d(0xe1)) / 0x7 +
        -parseInt(_0x11596d(0xd5)) / 0x8;
      if (_0x4fb346 === _0x45ac40) break;
      else _0x1d0a47["push"](_0x1d0a47["shift"]());
    } catch (_0xf7e7f2) {
      _0x1d0a47["push"](_0x1d0a47["shift"]());
    }
  }
})(_0x29e3, 0x548d6);
function _0x5d3c(_0x31c270, _0x2e1863) {
  const _0x29e35b = _0x29e3();
  return (
    (_0x5d3c = function (_0x5d3ce4, _0x25c251) {
      _0x5d3ce4 = _0x5d3ce4 - 0xc4;
      let _0x1f138d = _0x29e35b[_0x5d3ce4];
      return _0x1f138d;
    }),
    _0x5d3c(_0x31c270, _0x2e1863)
  );
}
class BackgroundScene extends Phaser["Scene"] {
  constructor() {
    const _0x4c08d5 = _0x5d3c;
    super(_0x4c08d5(0xd7));
  }
  [_0x1aad9d(0xd9)]() {
    const _0x115f64 = _0x1aad9d;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this["halfW"] = halfGameWidth),
      (this["halfH"] = halfGameHeight),
      (this[_0x115f64(0xc5)] = null),
      (this[_0x115f64(0xcb)] = null),
      (this[_0x115f64(0xd4)] = null),
      this[_0x115f64(0xc9)](),
      this[_0x115f64(0xe5)]();
  }
  [_0x1aad9d(0xc9)]() {
    const _0x3e29b0 = _0x1aad9d;
    this[_0x3e29b0(0xe0)]
      ["image"](gameStartX, gameStartY, "menuBg")
      [_0x3e29b0(0xd6)](0x0, 0x0)
      ["setDisplaySize"](gameWidth + deltaX, gameHeight + deltaY);
  }
  ["addBackgroundComponents"]() {
    const _0x2d47d4 = _0x1aad9d;
    this["addLayer1"](gameStartX, gameHeight),
      this["addClouds"](this[_0x2d47d4(0xcd)], gameStartY + gameHeight / 0x4),
      this["addGround"](gameStartX, gameHeight);
  }
  [_0x1aad9d(0xd0)](_0x44d1d6, _0x25893f) {
    const _0x269d25 = _0x1aad9d,
      _0x2d5ee1 = this[_0x269d25(0xe0)]
        [_0x269d25(0xdf)](
          _0x44d1d6,
          _0x25893f + 0x3e8,
          gameWidth + deltaX,
          0x4d8,
          _0x269d25(0xe3)
        )
        ["setOrigin"](0x0, 0x1);
    (this[_0x269d25(0xd4)] = _0x2d5ee1),
      this[_0x269d25(0xdd)]["add"]({
        targets: _0x2d5ee1,
        ease: _0x269d25(0xcc),
        duration: 0x258,
        y: _0x25893f,
      });
  }
  [_0x1aad9d(0xd3)](_0x1d225e, _0x531c0f) {
    const _0x179108 = _0x1aad9d,
      _0x5e2af3 = this["add"]
        [_0x179108(0xe4)](_0x1d225e, _0x531c0f, _0x179108(0xc8))
        ["setOrigin"](0.5, 0x0)
        ["setScale"](0x3);
    this[_0x179108(0xcb)] = _0x5e2af3;
    const _0xbe4f3 = {
      target: _0x5e2af3,
      x: _0x5e2af3["x"] - 0x14,
      y: _0x5e2af3["y"] + 0xf,
      time: 0x834,
    };
    this[_0x179108(0xdd)][_0x179108(0xe0)]({
      targets: _0x5e2af3,
      ease: "Back.out",
      duration: 0x3e8,
      scale: 0x1,
      onComplete: () => {
        const _0x246445 = _0x179108;
        this[_0x246445(0xc5)] = this["moveAnim"](_0xbe4f3);
      },
    });
  }
  [_0x1aad9d(0xde)](_0x2a6766, _0x51dc8b) {
    const _0x48c06e = _0x1aad9d,
      _0x100234 = this["add"]
        ["tileSprite"](
          _0x2a6766,
          _0x51dc8b + 0x32,
          gameWidth + deltaX,
          0x37,
          "ground"
        )
        [_0x48c06e(0xd6)](0x0, 0x1);
    this[_0x48c06e(0xdd)][_0x48c06e(0xe0)]({
      targets: _0x100234,
      ease: _0x48c06e(0xc6),
      duration: 0x12c,
      y: _0x51dc8b,
    });
  }
  ["moveAnim"]({
    target: _0x24aa88,
    x: _0x1ba8c8,
    y: _0x39a042,
    time: _0x3b8630,
    ease: ease = _0x1aad9d(0xe2),
  }) {
    const _0x8cc9d0 = _0x1aad9d;
    return this["tweens"][_0x8cc9d0(0xe0)]({
      targets: _0x24aa88,
      x: _0x1ba8c8,
      y: _0x39a042,
      ease: ease,
      duration: _0x3b8630,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x1aad9d(0xd1)]() {
    const _0xb24c71 = _0x1aad9d;
    this[_0xb24c71(0xc5)][_0xb24c71(0xcf)](), (this[_0xb24c71(0xc5)] = null);
  }
  [_0x1aad9d(0xd8)]() {
    const _0x384d94 = _0x1aad9d;
    this[_0x384d94(0xc5)][_0x384d94(0xcf)](),
      this[_0x384d94(0xdd)][_0x384d94(0xe0)]({
        targets: this[_0x384d94(0xd4)],
        ease: _0x384d94(0xdc),
        duration: 0x1f4,
        y: gameHeight + 0x3e8,
      }),
      this[_0x384d94(0xdd)][_0x384d94(0xe0)]({
        targets: this[_0x384d94(0xcb)],
        ease: _0x384d94(0xca),
        duration: 0xc8,
        scale: 0x0,
      });
  }
}
function _0x29e3() {
  const _0x5c59b1 = [
    "Linear",
    "412320nFDSxD",
    "layer2",
    "addBackground",
    "Back.in",
    "clouds",
    "Cubic.out",
    "halfW",
    "34264laxDBQ",
    "remove",
    "addLayer1",
    "clearTweens",
    "3514026phPLnz",
    "addClouds",
    "layer1",
    "2513440WAliwu",
    "setOrigin",
    "BackgroundScene",
    "removeTween",
    "create",
    "1947690lmoulU",
    "24fuvgyt",
    "Cubic.in",
    "tweens",
    "addGround",
    "tileSprite",
    "add",
    "3443482odohMC",
    "Sine.easeInOut",
    "menuLayer1",
    "image",
    "addBackgroundComponents",
    "1045972NBrQej",
    "cloudsMoveTween",
  ];
  _0x29e3 = function () {
    return _0x5c59b1;
  };
  return _0x29e3();
}
