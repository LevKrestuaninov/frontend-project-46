import _ from 'lodash';

const convertToString = (value) => {
  if (_.isPlainObject(value) || _.isString(value)) {
    return _.isString(value) ? `'${value}'` : '[complex value]';
  }

  return value;
};

const makePlainDiff = (diff) => {
  const iter = (nest, path = []) => {
    const sorted = _.sortBy(Object.entries(nest));
    const lines = sorted.reduce((acc, [key, value]) => {
      const currentPath = [...path, key];
      const status = (value || { }).diff_status;

      if (status) {
        const returnValue = convertToString(value.value);
        const returnValue2 = convertToString(value.value2);
        const possibleStatus = {
          added: `was added with value: ${returnValue}`,
          deleted: 'was removed',
          changed: `was updated. From ${returnValue} to ${returnValue2}`,
        };

        switch (status) {
          case ('equal'):
            return [...acc];
          case ('added'):
          case ('deleted'):
          case ('changed'):
            return [...acc, `Property '${currentPath.join('.')}' ${possibleStatus[status]}`];
          default:
            console.error('Somethig goes worng');
            return null;
        }
      }

      return [...acc, iter(value, currentPath)];
    }, []);

    return lines.join('\n');
  };

  return iter(diff);
};

export default makePlainDiff;
