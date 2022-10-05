import _ from 'lodash';

const checkValue = (value) => {
  let returnValue = null;
  if (_.isPlainObject(value) || _.isString(value)) {
    returnValue = _.isString(value) ? `'${value}'` : '[complex value]';
  }

  return returnValue;
};

const plain = (diff, path = []) => {
  const sorted = Object.entries(diff).sort((a, b) => a[0] < b[0]);
  const lines = sorted.reduce((acc, [key, value]) => {
    const currentPath = [...path, key];
    const status = (value || { }).diff_status;

    if (status === 'equal') {
      return [...acc];
    }

    if (status) {
      const returnValue = (checkValue(value.value) ?? value.value);
      const returnValue2 = (checkValue(value.value2) ?? value.value2);
      const possibleStatus = {
        added: `was added with value: ${returnValue}`,
        deleted: 'was removed',
        changed: `was updated. From ${returnValue} to ${returnValue2}`,
      };

      return [...acc, `Property '${currentPath.join('.')}' ${possibleStatus[status]}`];
    }

    return [...acc, plain(value, currentPath)];
  }, []);

  return lines.join('\n');
};

export default plain;
