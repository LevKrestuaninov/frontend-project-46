import _ from 'lodash';

const getDiff = (file1, file2) => {
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sorted = _.sortBy(keys);
  const diff = sorted.reduce((acc, key) => {
    const [value1, value2] = [file1[key], file2[key]];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { ...acc, [key]: getDiff(value1, value2) };
    }

    switch (`${value1}${value2}`) {
      case (`${value1}${value1}`):
        return { ...acc, [key]: { value: value1, diff_status: 'equal' } };
      case (`${undefined}${value2}`):
        return { ...acc, [key]: { value: value2, diff_status: 'added' } };
      case (`${value1}${undefined}`):
        return { ...acc, [key]: { value: value1, diff_status: 'deleted' } };
      case (`${value1}${value2}`):
        return { ...acc, [key]: { value: value1, value2, diff_status: 'changed' } };
      default:
        return (console.error('Unexpected values'));
    }
  }, { });

  return diff;
};

export default getDiff;
