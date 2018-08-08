import React from 'react';
import { TextField, Checkbox, Select, RadioGroup } from '@material-ui/core';

export const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={error ? true : false}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

export const renderCheckbox = ({ input, label, meta: { error } }) => (
  <span>
    <Checkbox
      label={label}
      checked={input.value ? true : false}
      onChange={input.onChange}
    />
  </span>
);

export const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

export const renderSelect = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <Select
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    {...custom}
  />
);

export default {
  renderTextField,
  renderCheckbox,
  renderRadioGroup,
  renderSelect
};
