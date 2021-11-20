import Loader from "react-loader-spinner";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(176, 204, 229, 0.3)",
  },
}));

const Spinner = ({ visible }) => {
  const classes = useStyles();
  return visible ? (
    <Backdrop className={classes.backdrop} open>
      <Loader
        type="Circles"
        color="#4A56E2"
        height={50}
        width={50}
      />
    </Backdrop>
  ) : null;
};

export default Spinner;
