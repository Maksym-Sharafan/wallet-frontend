import { TextField } from "@material-ui/core";
import { useField } from "formik";

const TextfieldWrapper = ({ name, children, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helperText = meta.error;
  }

  return <TextField {...configTextfield}/>;
};

export default TextfieldWrapper;
