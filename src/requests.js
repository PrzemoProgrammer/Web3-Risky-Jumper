const _0x38dd90 = _0x4154;
(function (_0x19dfc4, _0xaad1a3) {
  const _0x10e151 = _0x4154,
    _0x2aee83 = _0x19dfc4();
  while (!![]) {
    try {
      const _0x4a81c0 =
        (parseInt(_0x10e151(0xd5)) / 0x1) * (-parseInt(_0x10e151(0xcd)) / 0x2) +
        (parseInt(_0x10e151(0xd1)) / 0x3) * (parseInt(_0x10e151(0xc9)) / 0x4) +
        -parseInt(_0x10e151(0xd3)) / 0x5 +
        parseInt(_0x10e151(0xcf)) / 0x6 +
        (parseInt(_0x10e151(0xce)) / 0x7) * (parseInt(_0x10e151(0xc7)) / 0x8) +
        -parseInt(_0x10e151(0xd4)) / 0x9 +
        parseInt(_0x10e151(0xd2)) / 0xa;
      if (_0x4a81c0 === _0xaad1a3) break;
      else _0x2aee83["push"](_0x2aee83["shift"]());
    } catch (_0x49651d) {
      _0x2aee83["push"](_0x2aee83["shift"]());
    }
  }
})(_0x52fd, 0x617ee);
function _0x4154(_0x329b6c, _0x5ef4bd) {
  const _0x52fd6d = _0x52fd();
  return (
    (_0x4154 = function (_0x4154e5, _0x58c178) {
      _0x4154e5 = _0x4154e5 - 0xc7;
      let _0x3a012e = _0x52fd6d[_0x4154e5];
      return _0x3a012e;
    }),
    _0x4154(_0x329b6c, _0x5ef4bd)
  );
}
const SERVER_URL = "https://personalserver-c0422f9a9869.herokuapp.com",
  PREFX_WEB = _0x38dd90(0xc8),
  headers = { "Content-Type": _0x38dd90(0xd0), Accept: _0x38dd90(0xd0) },
  requestPost = (_0x351ed5, _0x29c2a7) => {
    return fetch(SERVER_URL + "/" + _0x29c2a7, {
      method: "post",
      headers: headers,
      body: JSON["stringify"](_0x351ed5),
    });
  },
  requestGet = (_0x1b52bf) => {
    return fetch(SERVER_URL + "/" + _0x1b52bf, { headers: headers });
  },
  CREATE_ACCOUNT = (_0x4d0759) => {
    const _0x5ceef9 = _0x38dd90;
    return requestPost(_0x4d0759, PREFX_WEB + _0x5ceef9(0xcc));
  },
  GET_PLAYERS = () => {
    const _0x321a81 = _0x38dd90;
    return requestGet(PREFX_WEB + _0x321a81(0xca));
  },
  UPDATE_SCORE = (_0x10f29c) => {
    const _0xdfd5b = _0x38dd90;
    return requestPost(_0x10f29c, PREFX_WEB + _0xdfd5b(0xcb));
  };
function _0x52fd() {
  const _0x109419 = [
    "4AXDqMh",
    "/playersStatus",
    "/updateScore",
    "/createAccount",
    "4aRZvFP",
    "273bYxLpz",
    "668532wmIZTM",
    "application/json",
    "1855527voIdUZ",
    "9016180XMNQXL",
    "961155iZlbOO",
    "5500359eKOSsu",
    "316573moFYZm",
    "41912WHmCzI",
    "riskyJumperWeb",
  ];
  _0x52fd = function () {
    return _0x109419;
  };
  return _0x52fd();
}
