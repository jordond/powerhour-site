#!/usr/bin/env node

const { resolve, join } = require("path");
const { copySync } = require("fs-extra");

const root = resolve(__dirname, "..");

const filename = "CNAME";
const cnamePath = join(root, filename);
const distPath = join(root, "dist", filename);

console.log(`Copying [${cnamePath}] => [${distPath}]`);
copySync(cnamePath, distPath);
