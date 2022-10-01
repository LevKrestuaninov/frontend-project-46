import getFilePath from '../src/getFile.js';

test('absolute', () => {
    expect(getFilePath('/Users/molotov_air/development/file.json')).toEqual('/Users/molotov_air/development/file.json');
    expect(getFilePath('/Users/file.json')).toEqual('/Users/file.json');
});
