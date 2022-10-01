import * as fs from 'fs';

const checkAccess = (path) => {
  // add extension check
  try {
    fs.accessSync(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getJSONData = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

const getYMLData = (path) => fs.readFileSync(path, 'utf-8');

const getData = (path, format = 'JSON') => {
  if (checkAccess(path)) {
    const data = format === 'JSON' ? getJSONData(path) : getYMLData(path);
    return data;
  }
  console.log(`Check path and/or file. \nWrong path: ${path}`);
  return null;
};

export default getData;
