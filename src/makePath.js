import * as path from 'path';
import * as process from 'process';

const makePath = (rawPath) => {
	
	if (path.isAbsolute(rawPath)) {
		return rawPath;
	}

	return (path.resolve(process.cwd(), rawPath));
};

export default makePath;
