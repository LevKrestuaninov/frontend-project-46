import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import parsers from '../src/parsers.js';
import stylish from '../src/stylish.js';
import * as expectedValue from '../__fixtures__/expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (name) => join(__dirname, '..', '__fixtures__/', name);

test('plain JSON', () => {
  const plainJSON1 = parsers(getFixturePath('plain1.json'));
  const plainJSON2 = parsers(getFixturePath('plain2.json'));
  expect(stylish(getDiff(plainJSON1, plainJSON2))).toEqual(expectedValue.plain);
});

test('plain YAML', () => {
  const plainYAML1 = parsers(getFixturePath('plain1.yml'));
  const plainYAML2 = parsers(getFixturePath('plain2.yaml'));
  expect(stylish(getDiff(plainYAML1, plainYAML2))).toEqual(expectedValue.plain);
});

test('plain JSON with YAML', () => {
  const plainJSON = parsers(getFixturePath('plain1.json'));
  const plainYAML = parsers(getFixturePath('plain2.yaml'));
  expect(stylish(getDiff(plainJSON, plainYAML))).toEqual(expectedValue.plain);
});

test('nested JSON with nested JSON', () => {
  const nestedJSON1 = parsers(getFixturePath('nested1.json'));
  const nestedJSON2 = parsers(getFixturePath('nested2.json'));
  expect(stylish(getDiff(nestedJSON1, nestedJSON2))).toEqual(expectedValue.nested);
});

test('nested YML with nested YAML', () => {
  const nestedYML = parsers(getFixturePath('nested1.yml'));
  const nestedYAML = parsers(getFixturePath('nested2.yaml'));
  expect(stylish(getDiff(nestedYML, nestedYAML))).toEqual(expectedValue.nested);
});
