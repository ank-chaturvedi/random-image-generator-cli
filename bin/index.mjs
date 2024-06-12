#! /usr/bin/env node

import { program } from "commander";
import { generate } from "./generate.mjs";

program.version("1.0.0");

program
  .command("generate")
  .description("Generate a random image")
  .option("-p, --path [path]", "Path to save the image", process.cwd())
  .option("-w, --width [width]", "Width of the image", "200")
  .option("-h, --height [height]", "Height of the image", "300")
  .option("-n, --name [name]", "Name of the image", `rimg_${Date.now()}`)
  .action(async (options) => {
    const path = await generate(options);
    console.log(`Image saved at ${path}`);
  });

program.parse(process.argv);
