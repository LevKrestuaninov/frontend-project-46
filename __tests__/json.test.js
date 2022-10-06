import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import json from '../src/formatters/json.js';
import getFile from '../src/getFile.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (name) => join(__dirname, '..', '__fixtures__/', name);

const nestedJSON1 = getFile(getFixturePath('nested1.json'));
const nestedJSON2 = getFile(getFixturePath('nested2.json'));
const nestedYML = getFile(getFixturePath('nested1.yml'));
const nestedYAML = getFile(getFixturePath('nested2.yaml'));

const fixtures = [
  {
    first: nestedJSON1, second: nestedJSON2, title: 'nested JSON',
  },
  {
    first: nestedYML, second: nestedYAML, title: 'nested YAML',
  },
];

test.each(fixtures)(('$title'), ({ first, second }) => {
  expect(json(getDiff(first, second))).toEqual(JSON.stringify(getDiff(first, second)));
});
