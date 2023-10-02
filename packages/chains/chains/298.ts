import type { Chain } from "../src/types";
export default {
  "chain": "Hedera",
  "chainId": 298,
  "explorers": [],
  "faucets": [],
  "features": [
    {
      "name": "EIP155"
    },
    {
      "name": "EIP1559"
    }
  ],
  "icon": {
    "url": "ipfs://QmQikzhvZKyMmbZJd7BVLZb2YTBDMgNDnaMCAErsVjsfuz",
    "width": 1500,
    "height": 1500,
    "format": "png"
  },
  "infoURL": "https://hedera.com",
  "name": "Hedera Localnet",
  "nativeCurrency": {
    "name": "hbar",
    "symbol": "HBAR",
    "decimals": 18
  },
  "redFlags": [],
  "rpc": [],
  "shortName": "hedera-localnet",
  "slug": "hedera-localnet",
  "testnet": false
} as const satisfies Chain;