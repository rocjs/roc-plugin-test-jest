import {
    isPath,
    notEmpty,
    isBoolean,
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
                    junit: {
                        description: 'report result in the junit format',
                        validator: notEmpty(isBoolean),
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
