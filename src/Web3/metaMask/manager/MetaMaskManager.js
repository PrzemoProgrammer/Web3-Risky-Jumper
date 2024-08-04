function _0x24aa() {
  const _0x2160a4 = [
    "connectToSepoliaNetworkIfNeeded",
    "2543590yxmiRy",
    "2420376raumcQ",
    "bind",
    "detect",
    "eth_requestAccounts",
    "ethereum",
    "1165640SfhDBh",
    "234PqSyjq",
    "checkIsAvailable",
    "132JzylRY",
    "1942068duzBoo",
    "message",
    "https://eth-sepolia.public.blastapi.io",
    "undefined",
    "personal_sign",
    "Błąd\x20podczas\x20zmiany\x20na\x20sieć\x20testową\x20Sepolia:",
    "location",
    "254404GNDOTd",
    "9wRqjDC",
    "Error\x20while\x20checking\x20or\x20switching\x20to\x20Sepolia\x20network:",
    "5hrIUah",
    "switchNetworkToSepolia",
    "isMetaMask",
    "ETH",
    "eth_chainId",
    "isConnectedToSepoliaNetwork",
    "Sepolia\x20Testnet",
    "Zmieniono\x20na\x20sieć\x20testową\x20Sepolia.",
    "handleNetworkChange",
    "request",
    "reload",
    "https://sepolia.etherscan.io/",
    "39lCSTgT",
    "Error\x20while\x20checking\x20connection\x20to\x20Polygon\x20network:",
    "2024040JKuilZ",
    "checkMetaMaskAvailable",
    "error",
    "0xaa36a7",
    "\x20To\x20try\x20signing\x20again,\x20please\x20refresh\x20the\x20page",
    "signMessage",
    "5921uLYvCR",
    "log",
  ];
  _0x24aa = function () {
    return _0x2160a4;
  };
  return _0x24aa();
}
const _0x4084d4 = _0x7cac;
(function (_0x514d1f, _0x50cac4) {
  const _0x57b9a5 = _0x7cac,
    _0x4bf482 = _0x514d1f();
  while (!![]) {
    try {
      const _0x47d8d7 =
        (-parseInt(_0x57b9a5(0x13e)) / 0x1) *
          (parseInt(_0x57b9a5(0x11d)) / 0x2) +
        (-parseInt(_0x57b9a5(0x136)) / 0x3) *
          (parseInt(_0x57b9a5(0x127)) / 0x4) +
        (-parseInt(_0x57b9a5(0x12a)) / 0x5) *
          (parseInt(_0x57b9a5(0x120)) / 0x6) +
        parseInt(_0x57b9a5(0x117)) / 0x7 +
        (parseInt(_0x57b9a5(0x11c)) / 0x8) *
          (-parseInt(_0x57b9a5(0x128)) / 0x9) +
        parseInt(_0x57b9a5(0x116)) / 0xa +
        (parseInt(_0x57b9a5(0x11f)) / 0xb) * (parseInt(_0x57b9a5(0x138)) / 0xc);
      if (_0x47d8d7 === _0x50cac4) break;
      else _0x4bf482["push"](_0x4bf482["shift"]());
    } catch (_0x317736) {
      _0x4bf482["push"](_0x4bf482["shift"]());
    }
  }
})(_0x24aa, 0x9b14e);
function _0x7cac(_0x17f15e, _0x57c99d) {
  const _0x24aa26 = _0x24aa();
  return (
    (_0x7cac = function (_0x7cac40, _0x21fa42) {
      _0x7cac40 = _0x7cac40 - 0x115;
      let _0xf9c125 = _0x24aa26[_0x7cac40];
      return _0xf9c125;
    }),
    _0x7cac(_0x17f15e, _0x57c99d)
  );
}
class MetaMaskManager {
  constructor() {
    const _0x97bbbf = _0x7cac;
    (this["confirmMessage"] = METAMASK_CONFIRM_MESSAGE),
      (this[_0x97bbbf(0x132)] = this[_0x97bbbf(0x132)][_0x97bbbf(0x118)](this)),
      window[_0x97bbbf(0x11b)] &&
        window[_0x97bbbf(0x11b)]["on"](
          "networkChanged",
          this["handleNetworkChange"]
        );
  }
  [_0x4084d4(0x119)]() {
    const _0x294551 = _0x4084d4;
    return (
      typeof window["ethereum"] !== _0x294551(0x123) &&
      window[_0x294551(0x11b)][_0x294551(0x12c)]
    );
  }
  async ["getAccountAccess"]() {
    const _0x55f30f = _0x4084d4;
    await window[_0x55f30f(0x11b)][_0x55f30f(0x133)]({
      method: _0x55f30f(0x11a),
    });
  }
  async [_0x4084d4(0x13d)](_0x46caab) {
    const _0x6075ee = _0x4084d4,
      _0x4eed48 = this["confirmMessage"];
    try {
      const _0x151252 = await window[_0x6075ee(0x11b)][_0x6075ee(0x133)]({
        method: _0x6075ee(0x124),
        params: [_0x4eed48, _0x46caab],
      });
      return _0x151252;
    } catch (_0x3e04f9) {
      alert(_0x3e04f9[_0x6075ee(0x121)] + _0x6075ee(0x13c));
      throw _0x3e04f9;
    }
  }
  [_0x4084d4(0x139)]() {
    const _0xdc738b = _0x4084d4;
    return window[_0xdc738b(0x11b)] && window["ethereum"][_0xdc738b(0x12c)];
  }
  async [_0x4084d4(0x12f)]() {
    const _0x4a048f = _0x4084d4;
    try {
      const _0x2fd74c = _0x4a048f(0x13b),
        _0xd5fd3c = await window[_0x4a048f(0x11b)][_0x4a048f(0x133)]({
          method: _0x4a048f(0x12e),
        });
      return _0xd5fd3c === _0x2fd74c;
    } catch (_0x562948) {
      return console["error"](_0x4a048f(0x137), _0x562948), ![];
    }
  }
  async [_0x4084d4(0x12b)]() {
    const _0x388007 = _0x4084d4;
    try {
      await window[_0x388007(0x11b)][_0x388007(0x133)]({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: _0x388007(0x13b),
            chainName: _0x388007(0x130),
            rpcUrls: [_0x388007(0x122)],
            nativeCurrency: {
              name: _0x388007(0x12d),
              symbol: _0x388007(0x12d),
              decimals: 0x12,
            },
            blockExplorerUrls: [_0x388007(0x135)],
          },
        ],
      }),
        console[_0x388007(0x13f)](_0x388007(0x131));
    } catch (_0x498bf2) {
      return console[_0x388007(0x13a)](_0x388007(0x125), _0x498bf2), ![];
    }
  }
  async [_0x4084d4(0x115)]() {
    const _0x4ffd40 = _0x4084d4;
    let _0x1feeda = null;
    try {
      const _0x369ca0 = await this[_0x4ffd40(0x12f)]();
      if (!_0x369ca0) {
        const _0x12c01a = await this[_0x4ffd40(0x12b)]();
        _0x1feeda = _0x12c01a;
      }
    } catch (_0x353d2f) {
      (_0x1feeda = ![]), console[_0x4ffd40(0x13a)](_0x4ffd40(0x129), _0x353d2f);
    }
    return _0x1feeda;
  }
  async [_0x4084d4(0x11e)]() {
    const _0x40558f = _0x4084d4;
    return !this[_0x40558f(0x119)]() ? ![] : !![];
  }
  [_0x4084d4(0x132)]() {
    const _0x33c628 = _0x4084d4;
    window[_0x33c628(0x126)][_0x33c628(0x134)]();
  }
}
const metaMaskManager = new MetaMaskManager();
