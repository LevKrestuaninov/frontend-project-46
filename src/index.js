import getPath from './makePath.js';
import getFile from './getFile.js';
import getDiff from './getDiff.js';
import getFormatter from './formatters/index.js';

const getDifference = (path1, path2, format) => {
  const file1 = getFile(getPath(path1));
  const file2 = getFile(getPath(path2));

  const diff = getDiff(file1, file2);
  const toFormat = getFormatter(format);

  return toFormat(diff);
};

export default getDifference;
