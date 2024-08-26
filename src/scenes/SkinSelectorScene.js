const _0x5e8a83 = _0x273d;
(function (_0x2b2b71, _0x39d51c) {
  const _0x25d38b = _0x273d,
    _0x3542e0 = _0x2b2b71();
  while (!![]) {
    try {
      const _0xe5f344 =
        (-parseInt(_0x25d38b(0x1e3)) / 0x1) *
          (-parseInt(_0x25d38b(0x1f8)) / 0x2) +
        (-parseInt(_0x25d38b(0x1d5)) / 0x3) *
          (-parseInt(_0x25d38b(0x1db)) / 0x4) +
        (parseInt(_0x25d38b(0x1df)) / 0x5) *
          (-parseInt(_0x25d38b(0x1e0)) / 0x6) +
        (-parseInt(_0x25d38b(0x1cf)) / 0x7) *
          (parseInt(_0x25d38b(0x1d3)) / 0x8) +
        parseInt(_0x25d38b(0x1f9)) / 0x9 +
        (parseInt(_0x25d38b(0x1d7)) / 0xa) *
          (-parseInt(_0x25d38b(0x1f3)) / 0xb) +
        (-parseInt(_0x25d38b(0x1cd)) / 0xc) *
          (-parseInt(_0x25d38b(0x1e1)) / 0xd);
      if (_0xe5f344 === _0x39d51c) break;
      else _0x3542e0["push"](_0x3542e0["shift"]());
    } catch (_0x20ae6d) {
      _0x3542e0["push"](_0x3542e0["shift"]());
    }
  }
})(_0x143d, 0x90067);
function _0x273d(_0x519333, _0x472b6b) {
  const _0x143daa = _0x143d();
  return (
    (_0x273d = function (_0x273d72, _0x12a0aa) {
      _0x273d72 = _0x273d72 - 0x1b8;
      let _0x3cfd4f = _0x143daa[_0x273d72];
      return _0x3cfd4f;
    }),
    _0x273d(_0x519333, _0x472b6b)
  );
}
class SkinSelectorScene extends Phaser["Scene"] {
  constructor() {
    super("SkinSelectorScene");
  }
  async [_0x5e8a83(0x1fd)]() {
    const _0x1c7115 = _0x5e8a83;
    (this["gw"] = gameWidth),
      (this["gh"] = gameHeight),
      (this[_0x1c7115(0x1e4)] = halfGameWidth),
      (this[_0x1c7115(0x1f1)] = halfGameHeight),
      (this[_0x1c7115(0x1c7)] = []),
      (this[_0x1c7115(0x1f5)] = []),
      (this["mintNFTTextCreateTween"] = null),
      (this[_0x1c7115(0x1b8)] = 0x0),
      (this[_0x1c7115(0x1ed)] = new LoadingAnimation(
        this,
        this[_0x1c7115(0x1e4)],
        this["halfH"]
      )),
      this[_0x1c7115(0x1ed)][_0x1c7115(0x1e5)]();
    const _0x678fdd = await this[_0x1c7115(0x1d9)]();
    this[_0x1c7115(0x1ed)][_0x1c7115(0x1fe)](),
      (this[_0x1c7115(0x1d2)] = this[_0x1c7115(0x1e8)]()),
      (this[_0x1c7115(0x1dd)] = this[_0x1c7115(0x1d8)]()),
      (this[_0x1c7115(0x1f2)] = this[_0x1c7115(0x1eb)]()),
      this[_0x1c7115(0x1f7)](_0x678fdd);
  }
  [_0x5e8a83(0x1d8)]() {
    const _0xff3706 = _0x5e8a83,
      _0x35ea9c = this[_0xff3706(0x1ce)]
        [_0xff3706(0x1c0)](this[_0xff3706(0x1e4)], -0x64, _0xff3706(0x1ef))
        [_0xff3706(0x1bf)](0.5, 0x0);
    return (
      (this[_0xff3706(0x1c1)] = this[_0xff3706(0x1ca)][_0xff3706(0x1ce)]({
        targets: _0x35ea9c,
        ease: "Back.out",
        duration: 0x3e8,
        y: this[_0xff3706(0x1f1)] - 0x190,
      })),
      _0x35ea9c
    );
  }
  ["createNFTImage"](_0x329fb6, _0x8dd40b, _0x4a2ee4) {
    const _0x26ff80 = _0x5e8a83,
      _0x57a3f3 = this[_0x26ff80(0x1ce)]
        [_0x26ff80(0x1c0)](_0x329fb6, _0x8dd40b, _0x4a2ee4)
        [_0x26ff80(0x1bf)](0.5, 0.5)
        [_0x26ff80(0x1e7)](0x0)
        [_0x26ff80(0x1c4)]();
    return (
      this[_0x26ff80(0x1ca)][_0x26ff80(0x1ce)]({
        targets: _0x57a3f3,
        ease: "Back.out",
        duration: 0x1f4,
        scale: 0x1,
      }),
      _0x57a3f3
    );
  }
  [_0x5e8a83(0x1f7)](_0x2af598) {
    const _0x28bf9c = _0x5e8a83,
      _0x174229 = _0x2af598["map"]((_0x221143) => parseInt(_0x221143) + 0x1);
    _0x174229[_0x28bf9c(0x1c3)](0x0),
      _0x174229[_0x28bf9c(0x1c9)](
        (_0x4b07f7, _0x337469) => _0x4b07f7 - _0x337469
      );
    const _0x278b7b = _0x174229[_0x28bf9c(0x1f0)],
      _0x2f3181 = Math["ceil"](Math[_0x28bf9c(0x1e9)](_0x278b7b + 0x2));
    for (let _0x38a6ca = 0x0; _0x38a6ca < _0x278b7b; _0x38a6ca++) {
      const _0x1b3a19 = _0x174229[_0x38a6ca];
      let _0x34c0d7 = "NFT_" + _0x1b3a19;
      const _0x82d239 = (_0x38a6ca % _0x2f3181) * 0xe6 + this["halfW"] - 0xe6,
        _0xdfefb2 =
          this[_0x28bf9c(0x1f1)] -
          0x64 +
          Math["floor"](_0x38a6ca / _0x2f3181) * 0xe6;
      this["time"][_0x28bf9c(0x1dc)](0x64 * _0x38a6ca, () => {
        const _0x5be588 = _0x28bf9c,
          _0xde8939 = this["createNFTImage"](_0x82d239, _0xdfefb2, _0x34c0d7);
        (_0xde8939["ID"] = _0x1b3a19),
          _0xde8939["on"](_0x5be588(0x1ee), () => {
            const _0x411683 = _0x5be588;
            (this["chooseSkinID"] = _0xde8939["ID"]),
              this[_0x411683(0x1d2)][_0x411683(0x1fa)](_0x82d239, _0xdfefb2);
          }),
          this[_0x5be588(0x1c7)][_0x5be588(0x1c3)](_0xde8939);
      });
      if (_0x38a6ca === 0x0)
        this[_0x28bf9c(0x1d2)][_0x28bf9c(0x1fa)](_0x82d239, _0xdfefb2);
    }
  }
  async ["getUserNFTsFromBLockchain"]() {
    const _0x33e6d3 = _0x5e8a83,
      _0x25e9b5 = web3Manager["getUserWalletAddress"]();
    let _0x894b59 = null;
    return (
      await web3Manager[_0x33e6d3(0x1fb)][_0x33e6d3(0x1e2)]
        [_0x33e6d3(0x1c5)](_0x25e9b5)
        [_0x33e6d3(0x1e6)]()
        ["then"]((_0x531070) => {
          _0x894b59 = _0x531070;
        })
        [_0x33e6d3(0x1de)]((_0x12bad9) => {
          const _0x1f2ecb = _0x33e6d3;
          console["error"](_0x1f2ecb(0x1ea), _0x12bad9), (_0x894b59 = ![]);
        }),
      _0x894b59
    );
  }
  [_0x5e8a83(0x1e8)]() {
    const _0x101b0b = _0x5e8a83,
      _0x16f462 = this[_0x101b0b(0x1ce)]
        [_0x101b0b(0x1c0)](0x0, 0x0, _0x101b0b(0x1cb))
        [_0x101b0b(0x1bf)](0.5, 0.5)
        [_0x101b0b(0x1e7)](0x0);
    return (
      this[_0x101b0b(0x1ca)][_0x101b0b(0x1ce)]({
        targets: _0x16f462,
        ease: _0x101b0b(0x1d0),
        duration: 0x320,
        scale: 0x1,
      }),
      _0x16f462
    );
  }
  [_0x5e8a83(0x1eb)]() {
    const _0x576870 = _0x5e8a83,
      _0x34b315 = new Button(
        this,
        this[_0x576870(0x1e4)],
        gameHeight,
        _0x576870(0x1b9)
      )
        [_0x576870(0x1da)](() => {
          const _0x33bc1b = _0x576870;
          this[_0x33bc1b(0x1ba)][_0x33bc1b(0x1cc)][_0x33bc1b(0x1d4)][
            _0x33bc1b(0x1bc)
          ](),
            localStorage["setItem"](_0x33bc1b(0x1f4), this[_0x33bc1b(0x1b8)]),
            this["handleNextScene"]();
        })
        [_0x576870(0x1f6)](0xb4);
    return (
      this["tweens"]["add"]({
        targets: _0x34b315,
        ease: _0x576870(0x1d0),
        duration: 0x320,
        y: gameHeight - 0x96,
      }),
      _0x34b315
    );
  }
  [_0x5e8a83(0x1c8)]() {
    const _0x313002 = _0x5e8a83;
    this[_0x313002(0x1ca)][_0x313002(0x1ce)]({
      targets: [this["mintNFTTextImage"], this["nextStepButton"]],
      ease: _0x313002(0x1c6),
      duration: 0x258,
      x: gameWidth + 0x12c,
      onComplete: () => {
        const _0x4679d0 = _0x313002;
        localStorage[_0x4679d0(0x1bb)](_0x4679d0(0x1d1))
          ? this[_0x4679d0(0x1d6)]["start"](_0x4679d0(0x1c2))
          : this[_0x4679d0(0x1d6)][_0x4679d0(0x1e5)](_0x4679d0(0x1fc));
        const _0xf2d65a = this[_0x4679d0(0x1d6)][_0x4679d0(0x1bd)]("PlayScene");
        _0xf2d65a["playStartSceneTween"](),
          _0xf2d65a[_0x4679d0(0x1be)](this[_0x4679d0(0x1b8)]),
          _0xf2d65a["playPlayerEntryAnimation"](),
          this[_0x4679d0(0x1d6)][_0x4679d0(0x1ec)]("SkinSelectorScene");
      },
    }),
      this[_0x313002(0x1ca)][_0x313002(0x1ce)]({
        targets: this[_0x313002(0x1c7)],
        ease: "Back.in",
        duration: 0x190,
        x: gameWidth + 0x12c,
      }),
      this[_0x313002(0x1ca)][_0x313002(0x1ce)]({
        targets: this[_0x313002(0x1f5)],
        ease: _0x313002(0x1c6),
        duration: 0x1f4,
        x: gameWidth + 0x12c,
      }),
      this[_0x313002(0x1ca)][_0x313002(0x1ce)]({
        targets: this[_0x313002(0x1d2)],
        ease: _0x313002(0x1c6),
        duration: 0x190,
        x: gameWidth + 0x12c,
      });
  }
}
function _0x143d() {
  const _0x1f4638 = [
    "delayedCall",
    "mintNFTTextImage",
    "catch",
    "125txHKAd",
    "174354OeWLTd",
    "117EHPCop",
    "methods",
    "46YSDWzj",
    "halfW",
    "start",
    "call",
    "setScale",
    "createChooseSkinFrame",
    "sqrt",
    "Błąd:",
    "createNextButton",
    "remove",
    "loadingAnimation",
    "pointerdown",
    "choose_skin_text",
    "length",
    "halfH",
    "nextStepButton",
    "55lLmkuo",
    "skin_ID",
    "mintButtons",
    "setAngle",
    "createNFTImages",
    "35674UDaLEG",
    "8111178Vqmhrf",
    "setPosition",
    "contract",
    "LoginScene",
    "create",
    "stop",
    "chooseSkinID",
    "backButton",
    "game",
    "getItem",
    "play",
    "get",
    "changePlayerSkin",
    "setOrigin",
    "image",
    "mintNFTTextCreateTween",
    "MenuScene",
    "push",
    "setInteractive",
    "getUserTokensId",
    "Back.in",
    "NFTImages",
    "handleNextScene",
    "sort",
    "tweens",
    "choose_NFT_frame",
    "audio",
    "328668keCfZV",
    "add",
    "307979ImfKnn",
    "Back.out",
    "nickname",
    "chooseSkinFrame",
    "168hMgrLZ",
    "click",
    "33QuXDQi",
    "scene",
    "130750InGQVC",
    "createMintNFTTextImage",
    "getUserNFTsFromBLockchain",
    "onClick",
    "122716TSzfsO",
  ];
  _0x143d = function () {
    return _0x1f4638;
  };
  return _0x143d();
}
