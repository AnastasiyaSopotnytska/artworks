import { ThemeProvider, createTheme } from '@mui/material';

export default function ThemeProviderWrapper({
  children,
}: React.PropsWithChildren) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000",
        light: "#FFFFFF",
        contrastText: "#00AF27",
      },
      secondary: {
        main: '#969696',
        light: "#E5E5E5",
      },
    },
    typography: {
      fontFamily: '"Inter", sans-serif',
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
