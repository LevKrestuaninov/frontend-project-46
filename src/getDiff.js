import _ from 'lodash';

const getDiff = (file1, file2) => {
  const keys = _.union(Object.keys(file1), Object.keys(file2));
  const sorted = _.sortBy(keys);
  const diff = sorted.reduce((acc, key) => {
    const [value1, value2] = [file1[key], file2[key]];

    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { ...acc, [key]: getDiff(value1, value2) };
    }

    switch (true) {
      case (!_.has(file1, key)):
        return { ...acc, [key]: { value: value2, diff_status: 'added' } };
      case (!_.has(file2, key)):
        return { ...acc, [key]: { value: value1, diff_status: 'deleted' } };
      case (_.isEqual(value1, value2)):
        return { ...acc, [key]: { value: value1, diff_status: 'equal' } };
      case (!_.isEqual(value1, value2)):
        return { ...acc, [key]: { value: value1, value2, diff_status: 'changed' } };
      default:
        return (console.error('Unexpected values'));
    }
  }, { });

  return diff;
};

export default getDiff;
