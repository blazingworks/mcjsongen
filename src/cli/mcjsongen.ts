#!/usr/bin/env node

import { program } from "commander";
import * as fs from "fs";
import * as path from "path";
import gen from "./gen";
import create from "./create";
import templateLoader from "./templateLoader";

const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "..", "package.json"), "utf-8"));

program
    .name("mcjsongen")
    .version(packageJson.version || "0.0.0")
    .description(packageJson.description)
    .option("-h, --help", "show this help message");

program
    .command("gen")
    .description("Output result of an individual generator")
    .argument("<category>", "The category of what to generate (models/blockstates)")
    .argument("<type>", "The type of the element to generate")
    .argument("<id>", "The ID of the element to generate")
    .argument("[mod]", 'The mod ID to use (defaults to "minecraft")')
    .action(gen);

program
    .command("create")
    .description("Write result of an individual generator to assets directory")
    .argument("<category>", "The category of what to generate (models/blockstates)")
    .argument("<type>", "The type of the element to generate")
    .argument("<id>", "The ID of the element to generate")
    .argument("[mod]", 'The mod ID to use (defaults to "minecraft")')
    .action(create);

program
    .command("new")
    .description("Generate a block/item from a template and write to assets directory")
    .argument("<template>", "The template to use")
    .argument("<id>", "The ID of the element to generate")
    .argument("[mod]", 'The mod ID to use (defaults to "minecraft")')
    .action(templateLoader);

program.parse();
