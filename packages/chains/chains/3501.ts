import type { Chain } from "../src/types";
export default {
  "chain": "JFIN",
  "chainId": 3501,
  "explorers": [
    {
      "name": "JFIN Chain Explorer",
      "url": "https://exp.jfinchain.com",
      "standard": "EIP3091"
    }
  ],
  "faucets": [],
  "features": [],
  "infoURL": "https://jfinchain.com",
  "name": "JFIN Chain",
  "nativeCurrency": {
    "name": "JFIN Coin",
    "symbol": "jfin",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [
    "https://jfin-chain.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc.jfinchain.com"
  ],
  "shortName": "jfin",
  "slug": "jfin-chain",
  "testnet": false
} as const satisfies Chain;