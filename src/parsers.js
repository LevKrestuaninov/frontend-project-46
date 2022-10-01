import * as fs from 'fs';
import { extname } from 'path';
import { load } from 'js-yaml';

const checkAccess = (path) => {
  try {
    fs.accessSync(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getJSONData = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const getYAMLData = (path) => load(fs.readFileSync(path, 'utf-8'));

const parsers = (path) => {
  if (checkAccess(path)) {
    const format = extname(path).toLowerCase();
    if (!['.json', '.yml', '.yaml'].includes(format)) {
      console.log('This format is not acceptable');
      return null;
    }
    const data = format === '.json' ? getJSONData(path) : getYAMLData(path);
    return data;
  }
  console.log(`Check path and/or file. \nWrong path: ${path}`);
  return null;
};

export default parsers;
