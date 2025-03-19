'use strict';

import { existsSync } from 'fs';

export default ({ cwd }) => {
    const filePath = name => path.join(cwd, name);

    if (!existsSync(filePath('.travis.yml'))) {
        return Promise.reject(new TrevorError('.travis.yml doesn\'t exist'));
    }
};