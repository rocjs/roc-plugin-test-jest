import {
    isPath,
    notEmpty,
    isString,
} from 'roc/validators';

export default {
    settings: {
        test: {
            jest: {
                reporter: {
                    description: 'Report format, there is only support for junit',
                    validator: isString(/junit/),
                },
                reportpath: {
                    description: 'Path to report file',
                    validator: notEmpty(isPath),
                },
            },
        },
    },
    config: {
        jest: {
            description: 'Jest configuration.',
        },
    },
};
