import { defineChain } from "../utils.js";

/**
 * @chain
 */
export const ethereum = /* @__PURE__ */ defineChain({
  id: 1,
  name: "Ethereum",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: [
    {
      name: "Etherscan",
      url: "https://etherscan.io",
    },
  ],
});

/**
 * @alias ethereum
 * @chain
 */
export const mainnet = ethereum;
