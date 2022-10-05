import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const returnFormatter = (format) => {
  switch ((format.format ?? format)) {
    case ('plain'):
      return plain;
    case ('json'):
      return json;
    default:
      return stylish;
  }
};

export default returnFormatter;
