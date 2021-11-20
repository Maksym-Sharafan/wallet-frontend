import styles from './RegistrationForm.module.css';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#24CCA7',
  },
}))(LinearProgress);

const ProgressBar = ({value}) => {
  return(<div>
    <BorderLinearProgress variant="determinate" value={value} />
  </div>
  )}

export default ProgressBar;