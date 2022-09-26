import getPath from './getFilePath.js';
import getFile from './getFile.js';
import getDiff from './getDiff.js';

const getDifference = (path1, path2) => {
    const [pathTo1, pathTo2] = [getPath(path1), getPath(path2)];
    const [file1, file2] = [getFile(pathTo1), getFile(pathTo2)];

    return getDiff(file1, file2);
};


export default getDifference;