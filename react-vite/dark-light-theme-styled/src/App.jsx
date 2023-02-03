import { ThemeProvider } from "styled-components";

import { Title } from "./styles";
import { darkTheme, lightTheme } from "./theme/Theme";
import GlobalStyle from "./theme/global";

function App() {
  return (
    <ThemeProvider
      theme={
        window.matchMedia &&
        window.matchMedia("prefers-color-scheme: light").matches
          ? lightTheme
          : darkTheme
      }
    >
      <Title>teste</Title>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
