import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#24CCA7",
    },
    secondary: {
      main: "#E0E0E0",
    }
  },
  // typography: {
  //   fontFamily: "Circe",
  //   fontSize: 18,
  //   lineHeight: 27,
  // },
  shape: {
    borderRadius: 20,
  },
  // Styles by Mui className
  overrides: {
    MuiButton: {
      root: {
      },
      fullWidth: {
        // maxWidth: "300px"
      },
    },
    MuiSvgIcon: {
      root: {
        // fill: "inherit"
      },
      colorPrimary: {
        // backgroundColor: "#24CCA7",
        color: "#24CCA7"
      },
    },
    colorError: {
      color: "#f00"
    }
  },
  props: {
    MuiButton: {
      variant: "contained",
      color: "primary",
    }
  }
})