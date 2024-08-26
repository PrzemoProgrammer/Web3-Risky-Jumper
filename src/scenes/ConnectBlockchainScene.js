const _0x10d98c = _0x44b4;
(function (_0x38e396, _0x4a85f5) {
  const _0x2cc14b = _0x44b4,
    _0x19f99e = _0x38e396();
  while (!![]) {
    try {
      const _0x1ec1ce =
        parseInt(_0x2cc14b(0x172)) / 0x1 +
        (-parseInt(_0x2cc14b(0x16b)) / 0x2) *
          (-parseInt(_0x2cc14b(0x165)) / 0x3) +
        (parseInt(_0x2cc14b(0x189)) / 0x4) *
          (parseInt(_0x2cc14b(0x163)) / 0x5) +
        -parseInt(_0x2cc14b(0x154)) / 0x6 +
        -parseInt(_0x2cc14b(0x184)) / 0x7 +
        (parseInt(_0x2cc14b(0x17c)) / 0x8) *
          (parseInt(_0x2cc14b(0x159)) / 0x9) +
        (parseInt(_0x2cc14b(0x155)) / 0xa) *
          (-parseInt(_0x2cc14b(0x15e)) / 0xb);
      if (_0x1ec1ce === _0x4a85f5) break;
      else _0x19f99e["push"](_0x19f99e["shift"]());
    } catch (_0x8014e5) {
      _0x19f99e["push"](_0x19f99e["shift"]());
    }
  }
})(_0x4bee, 0xadda5);
function _0x44b4(_0xdfc4de, _0x576d8c) {
  const _0x4bee3e = _0x4bee();
  return (
    (_0x44b4 = function (_0x44b479, _0x27c67e) {
      _0x44b479 = _0x44b479 - 0x14f;
      let _0x474ded = _0x4bee3e[_0x44b479];
      return _0x474ded;
    }),
    _0x44b4(_0xdfc4de, _0x576d8c)
  );
}
class ConnectBlockchainScene extends Phaser[_0x10d98c(0x167)] {
  constructor() {
    const _0x2a05d4 = _0x10d98c;
    super(_0x2a05d4(0x17f));
  }
  [_0x10d98c(0x171)]() {
    const _0x25fe88 = _0x10d98c;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this["halfW"] = halfGameWidth),
      (this[_0x25fe88(0x179)] = halfGameHeight),
      (this["cloudsMoveTween"] = null),
      (this[_0x25fe88(0x15b)] = null),
      (this[_0x25fe88(0x174)] = null),
      (this[_0x25fe88(0x156)] = null),
      (this[_0x25fe88(0x178)] = null),
      (this[_0x25fe88(0x15f)] = null),
      (this[_0x25fe88(0x16a)] = this[_0x25fe88(0x185)]()),
      (this[_0x25fe88(0x166)] = this[_0x25fe88(0x15d)]());
    if (document["getElementById"](_0x25fe88(0x182)))
      document["getElementById"](_0x25fe88(0x182))[_0x25fe88(0x175)]();
    this[_0x25fe88(0x188)]();
  }
  [_0x10d98c(0x185)]() {
    const _0x5d3730 = _0x10d98c,
      _0x4a97db = this[_0x5d3730(0x151)]
        [_0x5d3730(0x187)](
          this[_0x5d3730(0x183)],
          gameStartY + 0x64,
          "riskyJumperText"
        )
        [_0x5d3730(0x186)](0.5, 0x0)
        [_0x5d3730(0x177)](0x0);
    return (
      (this["scaleRiskyJumperTextTween"] = this["tweens"]["add"]({
        targets: _0x4a97db,
        ease: _0x5d3730(0x17a),
        duration: 0x3e8,
        scale: 0x1,
      })),
      _0x4a97db
    );
  }
  [_0x10d98c(0x15d)]() {
    const _0x9ab85b = _0x10d98c,
      _0x3345b9 = this[_0x9ab85b(0x151)]
        [_0x9ab85b(0x187)](
          this[_0x9ab85b(0x183)],
          this[_0x9ab85b(0x179)] - 0x64,
          _0x9ab85b(0x15a)
        )
        [_0x9ab85b(0x186)](0.5, 0x0)
        ["setScale"](0x0);
    return (
      (this[_0x9ab85b(0x156)] = this[_0x9ab85b(0x162)][_0x9ab85b(0x151)]({
        targets: _0x3345b9,
        ease: "Back.out",
        duration: 0x258,
        scale: 0x1,
      })),
      _0x3345b9
    );
  }
  ["createMetaMaskConnectText"]() {
    const _0x4d2f47 = _0x10d98c;
    (this[_0x4d2f47(0x15f)] = this[_0x4d2f47(0x151)]
      [_0x4d2f47(0x187)](
        this[_0x4d2f47(0x183)],
        this[_0x4d2f47(0x179)] + 0xc8,
        _0x4d2f47(0x168)
      )
      [_0x4d2f47(0x186)](0.5, 0x0)
      ["setScale"](0x0)),
      (this[_0x4d2f47(0x15b)] = this[_0x4d2f47(0x162)][_0x4d2f47(0x151)]({
        targets: this[_0x4d2f47(0x15f)],
        ease: _0x4d2f47(0x17a),
        duration: 0x4b0,
        scale: 0x1,
      }));
  }
  [_0x10d98c(0x173)]() {
    const _0x2ccf6d = _0x10d98c;
    (this[_0x2ccf6d(0x15f)] = this["add"]
      [_0x2ccf6d(0x187)](
        this[_0x2ccf6d(0x183)],
        this[_0x2ccf6d(0x179)] + 0xc8,
        _0x2ccf6d(0x15c)
      )
      [_0x2ccf6d(0x186)](0.5, 0x0)
      [_0x2ccf6d(0x177)](0x0)),
      (this[_0x2ccf6d(0x15b)] = this["tweens"][_0x2ccf6d(0x151)]({
        targets: this["stateText"],
        ease: "Back.out",
        duration: 0x4b0,
        scale: 0x1,
      }));
  }
  [_0x10d98c(0x161)](_0x52aa87) {
    const _0x3d2c2d = _0x10d98c;
    this[_0x3d2c2d(0x15f)]["setTexture"](_0x52aa87);
    if (this[_0x3d2c2d(0x15b)]["isPlaying"]()) return;
    this[_0x3d2c2d(0x178)] = this[_0x3d2c2d(0x162)][_0x3d2c2d(0x151)]({
      targets: this[_0x3d2c2d(0x15f)],
      ease: "Circ.out",
      duration: 0x190,
      yoyo: !![],
      scale: 1.2,
    });
  }
  async ["handleMetamaskAndWeb3Connect"]() {
    const _0x306ff6 = _0x10d98c;
    try {
      if (metaMaskManager["checkIsAvailable"]()) {
        console[_0x306ff6(0x153)](_0x306ff6(0x152)), this[_0x306ff6(0x180)]();
        const _0x5a28f8 = await metaMaskManager[
          "connectToSepoliaNetworkIfNeeded"
        ]();
        if (_0x5a28f8 === ![]) {
          this[_0x306ff6(0x161)]("false_icon");
          return;
        }
        await metaMaskManager[_0x306ff6(0x176)](),
          await web3Manager["connect"](),
          await web3Manager[_0x306ff6(0x14f)](),
          console["log"]("Connect\x20Complete"),
          this[_0x306ff6(0x161)](_0x306ff6(0x16c)),
          this[_0x306ff6(0x160)][_0x306ff6(0x16e)](0x3e8, () => {
            const _0x909a5e = _0x306ff6;
            this[_0x909a5e(0x157)]();
          });
      } else
        console[_0x306ff6(0x153)](_0x306ff6(0x150)), this[_0x306ff6(0x173)]();
    } catch (_0x33bf5f) {
      console[_0x306ff6(0x181)](_0x306ff6(0x17e), _0x33bf5f[_0x306ff6(0x158)]),
        this[_0x306ff6(0x161)](_0x306ff6(0x17b));
    }
  }
  ["moveAnim"]({
    target: _0x157d41,
    x: _0x330f76,
    y: _0x559f48,
    time: _0x4c6324,
    ease: ease = "Sine.easeInOut",
  }) {
    const _0x43af22 = _0x10d98c;
    return this["tweens"][_0x43af22(0x151)]({
      targets: _0x157d41,
      x: _0x330f76,
      y: _0x559f48,
      ease: ease,
      duration: _0x4c6324,
      yoyo: !![],
      repeat: -0x1,
    });
  }
  [_0x10d98c(0x157)]() {
    const _0x4a065e = _0x10d98c;
    this[_0x4a065e(0x162)][_0x4a065e(0x151)]({
      targets: this[_0x4a065e(0x15f)],
      scale: 0x0,
      duration: 0x2bc,
      ease: _0x4a065e(0x16d),
    }),
      this[_0x4a065e(0x162)][_0x4a065e(0x151)]({
        targets: this["riskyJumperText"],
        scale: 0x0,
        duration: 0x1f4,
        ease: _0x4a065e(0x16d),
      }),
      this[_0x4a065e(0x162)][_0x4a065e(0x151)]({
        targets: this[_0x4a065e(0x166)],
        scale: 0x0,
        duration: 0x3e8,
        ease: "Back.in",
        onComplete: () => {
          const _0x26b246 = _0x4a065e;
          this["scene"][_0x26b246(0x170)](_0x26b246(0x16f)),
            this["clearTweens"](),
            this[_0x26b246(0x164)][_0x26b246(0x175)]("ConnectBlockchainScene");
        },
      });
  }
  [_0x10d98c(0x17d)]() {
    const _0x3619c8 = _0x10d98c;
    (this[_0x3619c8(0x169)] = null),
      (this[_0x3619c8(0x15b)] = null),
      (this[_0x3619c8(0x174)] = null),
      (this[_0x3619c8(0x156)] = null),
      (this[_0x3619c8(0x178)] = null);
  }
}
function _0x4bee() {
  const _0x192854 = [
    "assignUserWalletAddress",
    "Metamask\x20not\x20installed",
    "add",
    "Metamask\x20installed",
    "log",
    "1905348kHJToi",
    "16050190LUZbPM",
    "scaleMetamaskIconTween",
    "handleNextScene",
    "message",
    "63mqQqkC",
    "metamask",
    "scaleStateTextTween",
    "install_metamask_text",
    "createMetamaskImage",
    "11tdzrNe",
    "stateText",
    "time",
    "changeStateTextTexture",
    "tweens",
    "4227610qtfPoU",
    "scene",
    "200622EucYff",
    "metaMaskImage",
    "Scene",
    "connect_metamask_text",
    "cloudsMoveTween",
    "riskyJumperText",
    "6UuJOHU",
    "correct_icon",
    "Back.in",
    "delayedCall",
    "MintNFTScene",
    "start",
    "create",
    "754094bXFKPi",
    "createMetaMaskInstallText",
    "scaleRiskyJumperTextTween",
    "remove",
    "getAccountAccess",
    "setScale",
    "changeStateTextTween",
    "halfH",
    "Back.out",
    "false_icon",
    "1221488IQCDbQ",
    "clearTweens",
    "Error\x20while\x20checking\x20wallet\x20connection:",
    "ConnectBlockchainScene",
    "createMetaMaskConnectText",
    "error",
    "loadingIcon",
    "halfW",
    "1640534NiXqmf",
    "addRiskyJumperText",
    "setOrigin",
    "image",
    "handleMetamaskAndWeb3Connect",
    "4iECREf",
  ];
  _0x4bee = function () {
    return _0x192854;
  };
  return _0x4bee();
}
