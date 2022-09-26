import * as path from 'path';
import * as process from 'process';

const getFilePath = (rawPath) => {
	const strPath = path.resolve(rawPath);
	
	if (path.isAbsolute(strPath)) {
		return strPath;
	}
	
	const workingDirectory = process.cwd();
	console.log(path.resolve(workingDirectory, strPath));
	return (path.resolve(workingDirectory, strPath));
};

export default getFilePath;
