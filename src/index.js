import getPath from './makePath.js';
import parsers from './parsers.js';
import getDiff from './getDiff.js';
import getFormatter from './formatters/index.js';

const getDifference = (path1, path2, formatter) => {
  const [pathTo1, pathTo2] = [getPath(path1), getPath(path2)];
  const [file1, file2] = [parsers(pathTo1), parsers(pathTo2)];
  const diff = getDiff(file1, file2);
  const toFormat = getFormatter(formatter);

  return toFormat(diff);
};

export default getDifference;
