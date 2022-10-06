import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import getFile from '../src/getFile.js';
import stylish from '../src/formatters/stylish.js';
import * as expectedValue from '../__fixtures__/stylish.expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (name) => join(__dirname, '..', '__fixtures__/', name);

const plainJSON1 = getFile(getFixturePath('plain1.json'));
const plainJSON2 = getFile(getFixturePath('plain2.json'));
const plainYML = getFile(getFixturePath('plain1.yml'));
const plainYAML = getFile(getFixturePath('plain2.yaml'));
const nestedJSON1 = getFile(getFixturePath('nested1.json'));
const nestedJSON2 = getFile(getFixturePath('nested2.json'));
const nestedYML = getFile(getFixturePath('nested1.yml'));
const nestedYAML = getFile(getFixturePath('nested2.yaml'));

const fixtures = [
  {
    first: plainJSON1, second: plainJSON2, expected: expectedValue.plain, title: 'plain JSON',
  },
  {
    first: plainYML, second: plainYAML, expected: expectedValue.plain, title: 'plain YAML',
  },
  {
    first: nestedJSON1, second: nestedJSON2, expected: expectedValue.nested, title: 'nested JSON',
  },
  {
    first: nestedYML, second: nestedYAML, expected: expectedValue.nested, title: 'nested YAML',
  },
];

test.each(fixtures)(('$title'), ({ first, second, expected }) => {
  expect(stylish(getDiff(first, second))).toEqual(expected);
});
