
const palette = {
    light: {
        primary: {
            main: '#2B2B2B',
            light: '#FFFFFF',
            dark: '#2B2B2B',
        },
    },
};

export const getDesignTokens = (mode) => ({
    spacing: 4,
    typography: {
        fontFamily: [
            'Montserrat',
            'sans-serif',
        ].join(','),
        h1:
        {
            fontWeight: 700,
            fontSize: '22px',
        },
        h2:
        {
            fontWeight: 700,
            fontSize: '20px',
        },
        h3:
        {
            fontWeight: 700,
            fontSize: '18px',
        },
        h4:
        {
            fontWeight: 700,
            fontSize: '16px',
        },
        h5:
        {
            fontWeight: 700,
            fontSize: '14px',
        },
        h6:
        {
            fontWeight: 700,
            fontSize: '12px',
        },
        subtitle1:
        {
            fontWeight: 500,
            fontSize: '12px',
        },
        subtitle2:
        {
            fontWeight: 500,
            fontSize: '10px',
        },
        body1:
        {
            fontWeight: 400,
            fontSize: '14px',
        },
        body2:
        {
            fontWeight: 400,
            fontSize: '12px',
        }
    },
    palette: {
        mode,
        ...(mode === 'light' ?
            {
                background:
                {
                    default: '#FFFFFF',
                },
                bgcolor:
                {
                    main: '#FFFFFF',
                    secondary: '#FFFFFF',
                    primary: '#FFFFFF',
                },
                primary:
                {
                    main: palette.light.primary.main,
                    light: palette.light.primary.light,
                    dark: palette.light.primary.dark,
                },
                divider: '#707070',
                text:
                {
                    main: palette.light.primary.dark,
                    primary: '#848484',
                    secondary: '#FB8134',
                },
            } :
            {
                background:
                {
                    default: '#383838',
                },

                bgcolor: {
                    main: '#383838',
                    secondary: '#2B2B2B',
                    primary: '#646464',
                },
                primary:
                {
                    main: palette.light.primary.dark,
                    light: palette.light.primary.light,
                    dark: palette.light.primary.dark,
                },
                divider: '#707070',
                text:
                {
                    main: palette.light.primary.light,
                    secondary: '#FB8134',
                },
            })
    },
});


export const getThemedComponents = (mode) => ({
    components: {
        ...(mode === 'light'
            ? {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 5,
                            color: '#FFFFFF',
                            backgroundColor: '#FB8134',
                            fontFamily:
                                "Montserrat, sans-serif",
                            fontSize: 12,
                            borderWidth: 0,
                            '&:hover': {
                                borderWidth: 2,
                                backgroundColor: '#FB8134',
                                opacity: 0.8,
                            },
                        },
                    },
                },
            }
            : {
                MuiButton: {
                    styleOverrides: {
                        root: {
                            borderRadius: 5,
                            color: '#000000',
                            backgroundColor: '#FB8134',
                            fontFamily:
                                "Montserrat, sans-serif",
                            fontSize: 12,
                            borderWidth: 0,
                            '&:hover': {
                                borderWidth: 2,
                                backgroundColor: '#FB8134',
                                opacity: 0.8,
                            },
                        },
                    },
                },
            }),
    },
});