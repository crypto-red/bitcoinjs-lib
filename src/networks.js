'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.bitcoin = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bc',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x00,
  scriptHash: 0x05,
  wif: 0x80,
  bytes: 21,
  versionBytes: 1
};
exports.regtest = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'bcrt',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
  bytes: 21,
  versionBytes: 1
};
exports.testnet = {
  messagePrefix: '\x18Bitcoin Signed Message:\n',
  bech32: 'tb',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0xc4,
  wif: 0xef,
  bytes: 21,
  versionBytes: 1
};
exports.zcash = {
  messagePrefix: '\x19Zcash Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4
  },
  pubkeyHash: 0x1cb8,
  scriptHash: 0x1cbd,
  wif: 0x80,//0x50
  bytes: 22,
  versionBytes: 2,
  versionBase: 16
};
exports.zcashtestnet = {
  messagePrefix: '\x19Zcash Signed Message:\n',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394
  },
  pubkeyHash: 0x1d25,
  scriptHash: 0x1cba,
  wif: 0xef,
  bytes: 22,
  versionBytes: 2,
  versionBase: 16
};
exports.litecoin = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'ltc',
  bip32: {
    public: 0x019da462,
    private: 0x019d9cfe,
  },
  pubKeyHash: 0x30,
  scriptHash: 0x32,
  wif: 0xb0,
  bytes: 21,
  versionBytes: 1
};
exports.litecointestnet = {
  messagePrefix: '\x19Litecoin Signed Message:\n',
  bech32: 'tltc',
  bip32: {
    public: 0x0436f6e1,
    private: 0x0436ef7d,
  },
  pubKeyHash: 0x6f,
  scriptHash: 0x3a,
  wif: 0xef,
  bytes: 21,
  versionBytes: 1
};
exports.dogecoin = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bip32: {
    public: 0x02facafd,
    private: 0x02fac398,
  },
  pubKeyHash: 0x1e,
  scriptHash: 0x16,
  wif: 0x9e,
  bytes: 21,
  versionBytes: 1
};
exports.dogecointestnet = {
  messagePrefix: '\x19Dogecoin Signed Message:\n',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x71,
  scriptHash: 0xc4,
  wif: 0xf1,
  bytes: 21,
  versionBytes: 1
};
exports.dash = {
  messagePrefix: '\x19DarkCoin Signed Message:\n',
  bip32: {
    public: 0x0488b21e,
    private: 0x0488ade4,
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0xcc,
  bytes: 21,
  versionBytes: 1
};
exports.dashtestnet = {
  messagePrefix: '\x19DarkCoin Signed Message:\n',
  bip32: {
    public: 0x043587cf,
    private: 0x04358394,
  },
  pubKeyHash: 0x8c,
  scriptHash: 0x13,
  wif: 0xef,
  bytes: 21,
  versionBytes: 1
};

