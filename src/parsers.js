import getJSONData from './parsers/json.js';
import getYAMLData from './parsers/yaml.js';

const getParser = (ext) => {
  if (!ext) {
    console.error('No extension!');
    return null;
  }

  switch (ext.toLowerCase()) {
    case ('.json'):
      return getJSONData;
    case ('.yml'):
    case ('.yaml'):
      return getYAMLData;
    default:
      console.error('Unknown format');
      return null;
  }
};

export default getParser;
