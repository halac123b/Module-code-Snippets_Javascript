'use strict';

// Custom Error for Trevor
class TrevorError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TrevorError';
    }
}

export default TrevorError;