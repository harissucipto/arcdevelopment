import React from "react";
import { ThemeProvider } from "@material-ui/styles";

import theme from "./ui/theme";
import Header from "./ui/Header";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        Hello!
      </div>
    </ThemeProvider>
  );
}

export default App;
