import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import parsers from '../src/parsers.js';
import json from '../src/formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (name) => join(__dirname, '..', '__fixtures__/', name);

test('nested JSON with nested JSON', () => {
  const nestedJSON1 = parsers(getFixturePath('nested1.json'));
  const nestedJSON2 = parsers(getFixturePath('nested2.json'));
  const diff = getDiff(nestedJSON1, nestedJSON2);
  expect(json(diff)).toEqual(JSON.stringify(diff));
});

test('nested YML with nested YAML', () => {
  const nestedYML = parsers(getFixturePath('nested1.yml'));
  const nestedYAML = parsers(getFixturePath('nested2.yaml'));
  const diff = getDiff(nestedYML, nestedYAML);
  expect(json(diff)).toEqual(JSON.stringify(diff));
});
