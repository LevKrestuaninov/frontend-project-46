import _ from 'lodash';

const getDiff = (file1, file2) => {
  const [keys1, keys2] = [Object.keys(file1), Object.keys(file2)];
  const sortedKeys = _.union(keys1, keys2).sort();
  const diff = { };

  sortedKeys.forEach((key) => {
    const [value1, value2] = [file1[key], file2[key]];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      diff[key] = getDiff(value1, value2);
      return diff;
    }

    switch (`${value1}${value2}`) {
      case (`${value1}${value1}`):
        diff[key] = { value: value1, diff_status: 'equal' };
        break;
      case (`${undefined}${value2}`):
        diff[key] = { value: value2, diff_status: 'added' };
        break;
      case (`${value1}${undefined}`):
        diff[key] = { value: value1, diff_status: 'deleted' };
        break;
      case (`${value1}${value2}`):
        diff[key] = { value: value1, value2, diff_status: 'changed' };
        break;
      default:
        return (console.error('Unexpected values'));
    }

    return diff;
  });
  return diff;
};

export default getDiff;
