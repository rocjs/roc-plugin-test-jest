import {
    isPath,
    notEmpty,
    isBoolean,
} from 'roc/validators';

export default {
    settings: {
        test: {
            jest: {
                junit: {
                    enabled: {
                        description: 'Enable Junit Report format',
                        validator: notEmpty(isBoolean),
                    },

                    reportpath: {
                        description: 'Path to report file',
                        validator: notEmpty(isPath),
                    },
                },
            },
        },
    },
    jest: {
        description: 'Jest configuration.',
    },
};
