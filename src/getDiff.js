import _ from 'lodash';

const getDiff = (file1, file2) => {
	const [keys1, keys2] = [Object.keys(file1), Object.keys(file2)];
	const sortedKeys = _.union(keys1, keys2).sort();

	const diff = { };

	sortedKeys.forEach((key) => {
		const value1 = file1[key];
		const value2 = file2[key];

		if (_.isEqual(value1, value2)) {
			diff[key] = 'equal';
		} else if (value1 === undefined) {
			diff[key] = 'added';
		} else if (value2 === undefined) {
			diff[key] = 'deleted';
		} else {
			diff[key] = 'changed';
		}
	})

	const result = [ ];

	sortedKeys.forEach((key) => {
		switch (diff[key]) {
			case 'equal':
				result.push(`  ${key}: ${file1[key]}`);
				break;
			case 'deleted':
				result.push(`- ${key}: ${file1[key]}`);
				break;
			case 'added':
				result.push(`+ ${key}: ${file2[key]}`);
				break;
			case 'changed':
				result.push(`- ${key}: ${file1[key]}`);
				result.push(`+ ${key}: ${file2[key]}`);
				break;
			default:
				console.log('wtf');
		}
	})

	return (`{\n  ${result.join('\n  ')}\n}`);
};

export default getDiff;
