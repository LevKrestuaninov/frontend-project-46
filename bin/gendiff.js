#!/usr/bin/env node

import { Command } from 'commander';
import getDifference from '../src/index.js';

const program = new Command();

program
	.name('gendiff')
	.description('Compares two configuration files and shows a difference.')
	.version('1.0.0')
	.argument('<filepath1>')
	.argument('<filepath2>')
	.option('-f, --format <type>', 'output format')
	.action((filepath1, filepath2) => {
		console.log(getDifference(filepath1, filepath2));
	})
	.parse(process.argv);

export default getDifference;