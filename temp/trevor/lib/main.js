'use strict';

import { existsSync } from 'fs';
const TrevorError = require('./trevor-error');

export default ({ cwd }) => {
    const filePath = name => path.join(cwd, name);

    if (!existsSync(filePath('.travis.yml'))) {
        return Promise.reject(new TrevorError('.travis.yml doesn\'t exist'));
    }

    if (!fs.existsSync(filePath('package.json'))) {
        return Promise.reject(new TrevorError('package.json doesn\'t exist'));
    }
};