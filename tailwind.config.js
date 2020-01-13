module.exports = {
    theme: {
        extend: {
            customForms: theme => ({
                default: {
                    input: {
                        backgroundColor: theme('colors.gray.700'),
                        borderStyle: 'none',
                        color: theme('colors.gray.200'),
                        fontSize: theme('fontSize.sm'),
                    },
                    select: {
                        backgroundColor: theme('colors.gray.700'),
                        borderStyle: 'none',
                        color: theme('colors.gray.200'),
                        fontSize: theme('fontSize.sm'),
                    },
                    radio: {
                        color: theme('colors.gray.600'),
                    },
                    checkbox: {
                        color: theme('colors.gray.700'),
                    },
                },
            }),
            maxHeight: {
                0: '0',
                lg: '100000px',
            },
        },
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms'),
        require('tailwindcss-transitions')(),
    ],
};
