import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/getDiff.js';
import getData from '../src/getData.js';
import * as expectedValue from '../__fixtures__/expected.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('plain json', () => {
  const file1 = getData(join(__dirname, '..', '__fixtures__/file1.json'));
  const file2 = getData(join(__dirname, '..', '__fixtures__/file2.json'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.plain);
});

test('empty file', () => {
  const file1 = getData(join(__dirname, '..', '__fixtures__/empty.json'));
  const file2 = getData(join(__dirname, '..', '__fixtures__/empty.json'));
  expect(getDiff(file1, file2)).toEqual(expectedValue.empty);
});
