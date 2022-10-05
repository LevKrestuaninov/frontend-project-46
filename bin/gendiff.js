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
  .option('-f, --format <formatter>', 'output format', 'stylish')
  .action((filepath1, filepath2, formatter) => {
    console.log(getDifference(filepath1, filepath2, formatter));
  })
  .parse(process.argv);

export default getDifference;
