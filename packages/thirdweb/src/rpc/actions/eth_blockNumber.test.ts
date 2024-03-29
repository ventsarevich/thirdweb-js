import { describe, it, expect } from "vitest";
import { eth_blockNumber } from "./eth_blockNumber.js";
import { getRpcClient } from "../rpc.js";
import { FORKED_ETHEREUM_CHAIN } from "~test/chains.js";
import { TEST_CLIENT } from "~test/test-clients.js";

const rpcClient = getRpcClient({
  chain: FORKED_ETHEREUM_CHAIN,
  client: TEST_CLIENT,
});

describe("eth_blockNumber", () => {
  it("should return the block number", async () => {
    const blockNumber = await eth_blockNumber(rpcClient);
    expect(blockNumber).toEqual(19139495n);
  });

  it("should dedupe requests", async () => {
    const [blockNumber1, blockNumber2, blockNumber3] = await Promise.all([
      eth_blockNumber(rpcClient),
      eth_blockNumber(rpcClient),
      eth_blockNumber(rpcClient),
    ]);
    // obviously these should all be correct
    expect(blockNumber1).toEqual(19139495n);
    expect(blockNumber2).toEqual(19139495n);
    expect(blockNumber3).toEqual(19139495n);
  });
});