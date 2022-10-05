import _ from 'lodash';

const plain = (diff, path = []) => {
  const sorted = Object.entries(diff).sort((a, b) => a[0] < b[0]);
  const lines = sorted.reduce((acc, [key, value]) => {
    const currentPath = [...path, key];
    const status = (value || { }).diff_status;
    if (status && status !== 'equal') {
      let returnValue = value.value;
      let returnValue2 = value.value2;
      if (_.isPlainObject(returnValue) || _.isString(returnValue)) {
        returnValue = _.isString(returnValue) ? `'${returnValue}'` : '[complex value]';
      }
      if (_.isPlainObject(returnValue2) || _.isString(returnValue2)) {
        returnValue2 = _.isString(returnValue2) ? `'${returnValue2}'` : '[complex value]';
      }
      const possibleStatus = {
        added: `was added with value: ${returnValue}`,
        deleted: 'was removed',
        changed: `was updated. From ${returnValue} to ${returnValue2}`,
      };
      return [...acc, `Property '${currentPath.join('.')}' ${possibleStatus[status]}`];
    } if (status === 'equal') {
      return [...acc];
    }

    return [...acc, plain(value, currentPath)];
  }, []);

  return lines.join('\n');
};

export default plain;
