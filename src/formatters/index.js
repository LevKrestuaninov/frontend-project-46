import stylish from './stylish.js';
import plain from './plain.js';

const returnFormatter = (format) => {
  switch (format.format) {
    case ('plain'):
      return plain;
    default:
      return stylish;
  }
};

export default returnFormatter;
