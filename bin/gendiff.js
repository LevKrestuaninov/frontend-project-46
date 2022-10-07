#!/usr/bin/env node

import { Command } from 'commander';
import getDifference from '../index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.2')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <string>', 'output format', 'stylish')
  .parse(process.argv);

const options = program.opts();
const [arg1, arg2] = program.args;

console.log(getDifference(arg1, arg2, options.format));

export default getDifference;
