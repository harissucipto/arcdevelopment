import { createMuiTheme } from "@material-ui/core";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
      jack: "#000",
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
});

export default theme;
