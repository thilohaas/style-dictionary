import node_fs from 'node:fs';
import StyleDictionary, { setFs as _setFs } from './index.js';

_setFs(node_fs);

export { fs } from './index.js';
export default StyleDictionary;
