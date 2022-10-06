import { load } from 'js-yaml';

const getYAMLData = (file) => load(file);

export default getYAMLData;
