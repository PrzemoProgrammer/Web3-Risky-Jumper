function _0x12bd() {
  const _0x3b14de = [
    "689580VryuZF",
    "accounts",
    "getNetworkId",
    "4936AtPyXt",
    "Contract",
    "3143SMREqf",
    "userWalletAddress",
    "contractABI",
    "9dnRswP",
    "402251xiNiBr",
    "13797820CaaCgK",
    "contract",
    "5hGsYXE",
    "328806uTwPug",
    "ethereum",
    "getId",
    "web3",
    "3533694QBLxdU",
    "contractAddress",
    "eth",
    "4429665ATZeDt",
    "getUserWalletAddress",
    "connect",
  ];
  _0x12bd = function () {
    return _0x3b14de;
  };
  return _0x12bd();
}
const _0xe7a4b6 = _0x4be8;
(function (_0x17d1e9, _0x1b9868) {
  const _0x1cd2ed = _0x4be8,
    _0x390278 = _0x17d1e9();
  while (!![]) {
    try {
      const _0xe780d5 =
        parseInt(_0x1cd2ed(0x1eb)) / 0x1 +
        -parseInt(_0x1cd2ed(0x1d8)) / 0x2 +
        (-parseInt(_0x1cd2ed(0x1ea)) / 0x3) *
          (parseInt(_0x1cd2ed(0x1e2)) / 0x4) +
        (parseInt(_0x1cd2ed(0x1ee)) / 0x5) *
          (-parseInt(_0x1cd2ed(0x1dc)) / 0x6) +
        (parseInt(_0x1cd2ed(0x1e7)) / 0x7) *
          (parseInt(_0x1cd2ed(0x1e5)) / 0x8) +
        -parseInt(_0x1cd2ed(0x1df)) / 0x9 +
        parseInt(_0x1cd2ed(0x1ec)) / 0xa;
      if (_0xe780d5 === _0x1b9868) break;
      else _0x390278["push"](_0x390278["shift"]());
    } catch (_0x2f9e0d) {
      _0x390278["push"](_0x390278["shift"]());
    }
  }
})(_0x12bd, 0x48598);
function _0x4be8(_0x203c47, _0x303591) {
  const _0x12bdad = _0x12bd();
  return (
    (_0x4be8 = function (_0x4be8dd, _0x22398c) {
      _0x4be8dd = _0x4be8dd - 0x1d8;
      let _0x6c4c21 = _0x12bdad[_0x4be8dd];
      return _0x6c4c21;
    }),
    _0x4be8(_0x203c47, _0x303591)
  );
}
class Web3Manager {
  constructor() {
    const _0x597351 = _0x4be8;
    (this[_0x597351(0x1e3)] = null),
      (this["userWalletAddress"] = null),
      (this["contractAddress"] = CONTRACT_ADDRESS),
      (this["contractABI"] = CONTRACT_ABI);
  }
  async [_0xe7a4b6(0x1e1)]() {
    const _0x429c44 = _0xe7a4b6,
      _0x443aa0 = this[_0x429c44(0x1dd)],
      _0x245c6d = this[_0x429c44(0x1e9)];
    (this[_0x429c44(0x1db)] = new Web3(window[_0x429c44(0x1d9)])),
      (this[_0x429c44(0x1ed)] = new this[_0x429c44(0x1db)]["eth"][
        _0x429c44(0x1e6)
      ](_0x245c6d, _0x443aa0));
  }
  async ["assignUserWalletAddress"]() {
    const _0x54f888 = _0xe7a4b6;
    (this[_0x54f888(0x1e3)] = await this[_0x54f888(0x1db)][_0x54f888(0x1de)][
      "getAccounts"
    ]()),
      (this[_0x54f888(0x1e8)] = this[_0x54f888(0x1e3)][0x0]);
  }
  [_0xe7a4b6(0x1e0)]() {
    const _0x37996b = _0xe7a4b6;
    return this[_0x37996b(0x1e8)];
  }
  async [_0xe7a4b6(0x1e4)]() {
    const _0x76fb81 = _0xe7a4b6;
    return await this[_0x76fb81(0x1db)][_0x76fb81(0x1de)]["net"][
      _0x76fb81(0x1da)
    ]();
  }
}
let web3Manager = new Web3Manager();
