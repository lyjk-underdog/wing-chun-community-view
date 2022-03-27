import devConfig from './dev.js';
import proConfig from './pro.js';

let configStrategy = {
    'development': devConfig,
    'production': proConfig
}

export default configStrategy[process.env.NODE_ENV];