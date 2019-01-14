import { createMuiTheme } from '@material-ui/core/styles/index';

export const config = {
  palette: {
    primary: {
      main: '#00ff00',
    },
  },
  typography: {
    // TODO: material ui is going to restyle Typography to v2
    // details https://material-ui.com/style/typography/#migration-to-typography-v2
    useNextVariants: true,
  },
};

export default createMuiTheme(config);
