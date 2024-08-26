function _0xaa2e() {
  const _0x31c7a4 = [
    "remove",
    "2705oFGMxL",
    "log",
    "catch",
    "image",
    "27wlRpqx",
    "54oSnkFx",
    "click",
    "isPlaying",
    "Back.in",
    "correct_icon",
    "handleNextScene",
    "7824pVxqUp",
    "NFT_",
    "loadingAnimation",
    "add",
    "NFTImages",
    "userMintToken",
    "time",
    "setScale",
    "then",
    "onClick",
    "2951793TKrHCZ",
    "514ktpwoK",
    "setOrigin",
    "loadingTween",
    "setVisible",
    "createMintNFTTextImage",
    "stop",
    "delayedCall",
    "methods",
    "send",
    "774408qZLQVA",
    "131930sIVzQj",
    "audio",
    "mintNFTTextImage",
    "tweens",
    "createMintButton",
    "mint_nft_text",
    "629298qLhdwT",
    "createNFTImages",
    "21xSaNtp",
    "handleRequestToBlockchain",
    "scene",
    "mintNFTTextCreateTween",
    "createNFTImage",
    "setAngle",
    "createNextButton",
    "halfW",
    "play",
    "mint_button",
    "mintButtons",
    "getUserWalletAddress",
    "clearTweens",
    "false_icon",
    "halfH",
    "Back.out",
    "MintNFTScene",
    "5257912YAduWn",
    "start",
    "create",
    "game",
    "push",
    "nextStepButton",
  ];
  _0xaa2e = function () {
    return _0x31c7a4;
  };
  return _0xaa2e();
}
const _0x41c536 = _0x1c67;
(function (_0x498c52, _0x4bdd15) {
  const _0x42ff66 = _0x1c67,
    _0xd0870c = _0x498c52();
  while (!![]) {
    try {
      const _0x48f77e =
        (parseInt(_0x42ff66(0x133)) / 0x1) *
          (parseInt(_0x42ff66(0x145)) / 0x2) +
        parseInt(_0x42ff66(0x144)) / 0x3 +
        (-parseInt(_0x42ff66(0x13a)) / 0x4) *
          (parseInt(_0x42ff66(0x12f)) / 0x5) +
        (-parseInt(_0x42ff66(0x155)) / 0x6) *
          (parseInt(_0x42ff66(0x157)) / 0x7) +
        (-parseInt(_0x42ff66(0x14e)) / 0x8) *
          (-parseInt(_0x42ff66(0x134)) / 0x9) +
        -parseInt(_0x42ff66(0x14f)) / 0xa +
        parseInt(_0x42ff66(0x128)) / 0xb;
      if (_0x48f77e === _0x4bdd15) break;
      else _0xd0870c["push"](_0xd0870c["shift"]());
    } catch (_0x13721d) {
      _0xd0870c["push"](_0xd0870c["shift"]());
    }
  }
})(_0xaa2e, 0xa204e);
function _0x1c67(_0x2ea1c1, _0xac446d) {
  const _0xaa2eab = _0xaa2e();
  return (
    (_0x1c67 = function (_0x1c67f1, _0x43e7ef) {
      _0x1c67f1 = _0x1c67f1 - 0x11d;
      let _0x48826a = _0xaa2eab[_0x1c67f1];
      return _0x48826a;
    }),
    _0x1c67(_0x2ea1c1, _0xac446d)
  );
}
class MintNFTScene extends Phaser["Scene"] {
  constructor() {
    const _0x5eab63 = _0x1c67;
    super(_0x5eab63(0x127));
  }
  [_0x41c536(0x12a)]() {
    const _0x36aefc = _0x41c536;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x36aefc(0x11e)] = halfGameWidth),
      (this[_0x36aefc(0x125)] = halfGameHeight),
      (this[_0x36aefc(0x13e)] = []),
      (this[_0x36aefc(0x121)] = []),
      (this[_0x36aefc(0x15a)] = null),
      (this[_0x36aefc(0x151)] = this[_0x36aefc(0x149)]()),
      (this[_0x36aefc(0x12d)] = this[_0x36aefc(0x11d)]()),
      this[_0x36aefc(0x156)](),
      (this[_0x36aefc(0x13c)] = new LoadingAnimation(
        this,
        this[_0x36aefc(0x11e)],
        this[_0x36aefc(0x125)] + 0x12c
      ));
  }
  ["createMintNFTTextImage"]() {
    const _0x5b1630 = _0x41c536,
      _0x2f5018 = this[_0x5b1630(0x13d)]
        ["image"](this[_0x5b1630(0x11e)], -0x64, _0x5b1630(0x154))
        ["setOrigin"](0.5, 0x0);
    return (
      (this[_0x5b1630(0x15a)] = this[_0x5b1630(0x152)][_0x5b1630(0x13d)]({
        targets: _0x2f5018,
        ease: "Back.out",
        duration: 0x3e8,
        y: this["halfH"] - 0x15e,
      })),
      _0x2f5018
    );
  }
  [_0x41c536(0x153)](_0x353e68) {
    const _0x1dd5b2 = _0x41c536,
      _0x16a9a0 = new Button(
        this,
        0xe6 * _0x353e68 + this[_0x1dd5b2(0x11e)] - 0xe6,
        this[_0x1dd5b2(0x125)] + 0x50,
        _0x1dd5b2(0x120)
      )["setScale"](0x0);
    return (
      this["tweens"][_0x1dd5b2(0x13d)]({
        targets: _0x16a9a0,
        ease: _0x1dd5b2(0x126),
        duration: 0x384,
        scale: 0x1,
        onComplete: () => {
          const _0x5f11bb = _0x1dd5b2;
          _0x16a9a0[_0x5f11bb(0x143)](async () => {
            const _0x5dd55c = _0x5f11bb;
            if (
              this[_0x5dd55c(0x13c)]["loadingTween"] &&
              this["loadingAnimation"][_0x5dd55c(0x147)][_0x5dd55c(0x136)]()
            )
              return;
            _0x16a9a0[_0x5dd55c(0x148)](![]),
              this[_0x5dd55c(0x12b)]["audio"][_0x5dd55c(0x135)][
                _0x5dd55c(0x11f)
              ](),
              this[_0x5dd55c(0x13c)][_0x5dd55c(0x129)](
                _0x16a9a0["x"],
                _0x16a9a0["y"] + 0xa
              ),
              this[_0x5dd55c(0x158)](_0x353e68);
          });
        },
      }),
      _0x16a9a0
    );
  }
  async [_0x41c536(0x158)](_0x4771c6) {
    const _0x1b140f = _0x41c536,
      _0x4b6212 = _0x4771c6,
      _0x312c1c = web3Manager[_0x1b140f(0x122)]();
    await web3Manager["contract"][_0x1b140f(0x14c)]
      [_0x1b140f(0x13f)](_0x4b6212)
      [_0x1b140f(0x14d)]({ from: _0x312c1c })
      [_0x1b140f(0x142)]((_0xb8a85c) => {
        const _0x244aa2 = _0x1b140f;
        console[_0x244aa2(0x130)](_0xb8a85c),
          _0xb8a85c["status"] === !![]
            ? new RequestStateInformation(
                this,
                this["loadingAnimation"]["x"],
                this[_0x244aa2(0x13c)]["y"],
                _0x244aa2(0x138)
              )
            : new RequestStateInformation(
                this,
                this["loadingAnimation"]["x"],
                this[_0x244aa2(0x13c)]["y"],
                _0x244aa2(0x124)
              );
      })
      [_0x1b140f(0x131)]((_0x336295) => {
        const _0x14690b = _0x1b140f;
        new RequestStateInformation(
          this,
          this[_0x14690b(0x13c)]["x"],
          this[_0x14690b(0x13c)]["y"],
          _0x14690b(0x124)
        ),
          this[_0x14690b(0x13c)][_0x14690b(0x14a)]();
      }),
      this["loadingAnimation"]["stop"]();
  }
  [_0x41c536(0x15b)](_0xc0f278) {
    const _0x58d7cc = _0x41c536,
      _0x14331b = _0x58d7cc(0x13b) + (_0xc0f278 + 0x1),
      _0xcc766c = this["add"]
        [_0x58d7cc(0x132)](
          0xe6 * _0xc0f278 + this[_0x58d7cc(0x11e)] - 0xe6,
          this[_0x58d7cc(0x125)] - 0xc8,
          _0x14331b
        )
        [_0x58d7cc(0x146)](0.5, 0x0)
        [_0x58d7cc(0x141)](0x0);
    return (
      this["tweens"][_0x58d7cc(0x13d)]({
        targets: _0xcc766c,
        ease: _0x58d7cc(0x126),
        duration: 0x258,
        scale: 0x1,
      }),
      _0xcc766c
    );
  }
  [_0x41c536(0x156)]() {
    const _0x1f7603 = _0x41c536;
    for (let _0x257e1d = 0x0; _0x257e1d < 0x3; _0x257e1d++) {
      this[_0x1f7603(0x140)][_0x1f7603(0x14b)](0xc8 * _0x257e1d, () => {
        const _0x215762 = _0x1f7603,
          _0x509fab = this["createNFTImage"](_0x257e1d),
          _0x20ef7d = this[_0x215762(0x153)](_0x257e1d);
        this[_0x215762(0x13e)][_0x215762(0x12c)](_0x509fab),
          this[_0x215762(0x121)][_0x215762(0x12c)](_0x20ef7d);
      });
    }
  }
  [_0x41c536(0x11d)]() {
    const _0x536bad = _0x41c536,
      _0x590643 = new Button(
        this,
        this[_0x536bad(0x11e)],
        gameHeight,
        "backButton"
      )
        ["onClick"](() => {
          const _0x40d6fc = _0x536bad;
          if (
            this["loadingAnimation"]["loadingTween"] &&
            this["loadingAnimation"][_0x40d6fc(0x147)]["isPlaying"]()
          )
            return;
          this[_0x40d6fc(0x12b)][_0x40d6fc(0x150)][_0x40d6fc(0x135)]["play"](),
            this[_0x40d6fc(0x139)]();
        })
        [_0x536bad(0x15c)](0xb4);
    return (
      this[_0x536bad(0x152)][_0x536bad(0x13d)]({
        targets: _0x590643,
        ease: _0x536bad(0x126),
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x590643
    );
  }
  [_0x41c536(0x139)]() {
    const _0x5536aa = _0x41c536;
    this["tweens"][_0x5536aa(0x13d)]({
      targets: [this["mintNFTTextImage"], this[_0x5536aa(0x12d)]],
      ease: _0x5536aa(0x137),
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x2d0fa8 = _0x5536aa;
        this[_0x2d0fa8(0x159)]["start"]("SkinSelectorScene"),
          this[_0x2d0fa8(0x123)](),
          this["scene"][_0x2d0fa8(0x12e)](_0x2d0fa8(0x127));
      },
    }),
      this[_0x5536aa(0x152)][_0x5536aa(0x13d)]({
        targets: this[_0x5536aa(0x13e)],
        ease: _0x5536aa(0x137),
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this["tweens"][_0x5536aa(0x13d)]({
        targets: this[_0x5536aa(0x121)],
        ease: _0x5536aa(0x137),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      });
  }
  [_0x41c536(0x123)]() {}
}
