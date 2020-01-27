import React from "react";
import PropTypes from 'prop-types';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange, blue, blueGrey, grey } from '@material-ui/core/colors';

Theme.PropTypes = {
    children: PropTypes.node
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
        },
    },
    background: {
        main: grey[900],
        sub: grey[800]
    },
    color: {
        white: grey[50]
    }
});

export default function Theme({children}) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}