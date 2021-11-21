import { createTheme } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles'
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

export const useStyles = makeStyles(theme => {
  return {
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconWallet: {
    width: 30,
    height: 30,
    marginRight: 15,

    [theme.breakpoints.up('tabletMin')]: {
      width: 40,
      height: 40,
      marginRight: 20,
    },
  },
  logoTitle: {
    fontFamily: "Poppins",
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: 30,
    lineHeight: 1.5,
  },
  form: {
    maxWidth: 320,
    // "@media(min-width: 768px)": {
    [theme.breakpoints.up('tabletMin')]: {
      maxWidth: 540,
      heigth: 616,
      marginLeft: "auto",
      marginRight: "auto",
      paddingTop: 40,
      paddingBottom: 60,
      paddingLeft: 65,
      paddingRight: 65,
      backgroundColor: "#fff",
      borderRadius: 20,
    },
  },

  btnContainer: {
    textAlign: "center",
  },

  btnPrimary: {
    width: 280,
    height: 50,

    // "@media(min-width: 768px)": 
    [theme.breakpoints.up('tabletMin')]: {
      width: 300,
    },
  },
  btnSecondary: {
    width: 280,
    height: 50,

    "&:hover": {
      color: "#4A56E2",
      border: "1px solid #4A56E2",
      backgroundColor: "rgba(74, 86, 226, .04)",
    },

    // "@media(min-width: 768px)"
    [theme.breakpoints.up('tabletMin')]: {
      width: 300,
    },
  },

  input: {
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid #24CCA7",
    },
    "& .MuiInput-underline.Mui-error:after": {
      borderBottomColor: "red",
    },
  },

  icon: {
    width: 24,
    height: 24,
  },
}});