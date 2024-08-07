import type { Chain } from "../src/types";
export default {
  "chain": "Core",
  "chainId": 1116,
  "explorers": [
    {
      "name": "Core Scan",
      "url": "https://scan.coredao.org",
      "standard": "EIP3091",
      "icon": {
        "url": "ipfs://QmdUgiGaD6fGjhb9x1NvfccvEBBFq2YHSm9yb8FNhpwHkW",
        "width": 512,
        "height": 512,
        "format": "png"
      }
    }
  ],
  "faucets": [],
  "icon": {
    "url": "ipfs://QmdUgiGaD6fGjhb9x1NvfccvEBBFq2YHSm9yb8FNhpwHkW",
    "width": 512,
    "height": 512,
    "format": "png"
  },
  "infoURL": "https://www.coredao.org",
  "name": "Core Blockchain Mainnet",
  "nativeCurrency": {
    "name": "Core Blockchain Native Token",
    "symbol": "CORE",
    "decimals": 18
  },
  "networkId": 1116,
  "rpc": [
    "https://1116.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.coredao.org/",
    "https://rpc-core.icecreamswap.com",
    "https://core.drpc.org",
    "wss://core.drpc.org"
  ],
  "shortName": "core",
  "slug": "core-blockchain",
  "testnet": false
} as const satisfies Chain;