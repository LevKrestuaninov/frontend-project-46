import * as fs from 'fs';
import { extname } from 'path';
import getParser from './parsers.js';

const checkAccess = (path) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getFile = (path) => {
  const parser = getParser(extname(path));

  if (parser && checkAccess(path)) {
    return parser(fs.readFileSync(path, 'utf-8'));
  }

  console.error(`Check path and/or file. \nWrong path: ${path}`);
  return null;
};

export default getFile;
