import * as fs from 'fs';

const getFile = (path) => JSON.parse(fs.readFileSync(path, 'utf-8'));

export default getFile;
