import {
    isPath,
    notEmpty,
    isString,
} from 'roc/validators';

export default {
    settings: {
        test: {
            jest: {
                __meta: {
                    description: 'Jest configuration.',
                },
                config: {
                },
                reporter: {
                    format: {
                        description: 'Report format, there is only support for junit',
                        validator: isString(/junit/),
                    },
                    filepath: {
                        description: 'Path to report file',
                        validator: notEmpty(isPath),
                    },
                },
            },
        },
    },
};
