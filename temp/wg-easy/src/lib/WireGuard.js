const { WG_HOST } = require('../config');

// Tạo 1 debugger cho namespace 'WireGuard'
const debug = require('debug')('WireGuard');

export default class WireGuard {
    async __buildConfig() {
        this.__configPromise = Promise.resolve().then(async () => {
            if (!WG_HOST) {
                throw new Error('WG_HOST Environment Variable Not Set!');
            }

            debug('Loading configuration...');
        });
    }
};