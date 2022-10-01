import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import parsers from '../src/parsers.js';
import * as expectedValue from '../__fixtures__/expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('plain JSON', () => {
  const file1 = parsers(join(__dirname, '..', '__fixtures__/file1.json'));
  const file2 = parsers(join(__dirname, '..', '__fixtures__/file2.json'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.plain);
});

test('plain YAML', () => {
  const file1 = parsers(join(__dirname, '..', '__fixtures__/file1.yml'));
  const file2 = parsers(join(__dirname, '..', '__fixtures__/file2.yaml'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.plain);
});

test('plain JSON with YAML', () => {
  const file1 = parsers(join(__dirname, '..', '__fixtures__/file1.json'));
  const file2 = parsers(join(__dirname, '..', '__fixtures__/file2.yaml'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.plain);
});

test('empty file', () => {
  const file1 = parsers(join(__dirname, '..', '__fixtures__/empty.json'));
  const file2 = parsers(join(__dirname, '..', '__fixtures__/empty.json'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.empty);
});
