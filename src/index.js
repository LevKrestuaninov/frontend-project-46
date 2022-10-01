import getPath from './makePath.js';
import getData from './getData.js';
import getDiff from './getDiff.js';

const getDifference = (path1, path2) => {
    const [pathTo1, pathTo2] = [getPath(path1), getPath(path2)];
    const [file1, file2] = [getData(pathTo1), getData(pathTo2)];

    return getDiff(file1, file2);
};


export default getDifference;