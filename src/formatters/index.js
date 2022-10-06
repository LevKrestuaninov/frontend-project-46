import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const returnFormatter = (format) => {
  if (!format) {
    return stylish;
  }

  switch ((format.format ?? format)) {
    case ('stylish'):
      return stylish;
    case ('plain'):
      return plain;
    case ('json'):
      return json;
    default:
      console.error('Wrong formatter.\nStylish selected by default.');
      return stylish;
  }
};

export default returnFormatter;
