import { createTheme } from "@material-ui/core";
import '../../stylesheet/fonts.css'

export const theme = createTheme({
  // [theme.breakpoints.up('tabletMin')] -> @media(min-width: 768px)
  breakpoints: {
    values: {
      mobileMin: 320,
      tabletMin: 768,
      desktopMin: 1280,
    }
  },

  palette: {
    primary: {
      main: "#24CCA7",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E0E0E0",
    },
  },

  typography: {
    fontFamily: "Circe",
    fontSize: 18,
    lineHeight: 1.5,
    h1: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 30,
      lineHeight: 1.5,
    }
  },

  shape: {
    borderRadius: 20,
  },

  // Styles by Mui className
  overrides: {
    MuiButton: {
      root: {
        padding: '13px'
      },
      outlinedPrimary: {
        color: "#4A56E2",
        border: "1px solid #4A56E2"
      }
    },

    MuiSvgIcon: {
      colorPrimary: {
        color: "#24CCA7"
      },
    },
  },

  props: {
    MuiButton: {
    }
  }
})