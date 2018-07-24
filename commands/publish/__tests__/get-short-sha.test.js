"use strict";

const initFixture = require("@0x-lerna-fork/init-fixture")(__dirname);
const getShortSHA = require("../lib/get-short-sha");

test("getShortSHA", async () => {
  const cwd = await initFixture("root-manifest-only");

  expect(getShortSHA({ cwd })).toMatch(/^[0-9a-f]{7,8}$/);
});
