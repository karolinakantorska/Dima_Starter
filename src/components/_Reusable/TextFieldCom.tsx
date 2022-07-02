import React, { SyntheticEvent } from 'react';
import TextField from '@mui/material/TextField';

interface inputProps {
  name: string,
  type: string,
  onChange: (e: SyntheticEvent<Element, Event>) => void,
  onFocus: (e: SyntheticEvent<Element, Event>) => void
}

export const TextFieldCom = ({ name, type, onChange, onFocus }: inputProps) => {
  return (
    <TextField
      id={name}
      label={name.charAt(0).toUpperCase() + name.slice(1)}
      type={type}
      name={name}
      autoComplete={name}
      variant="standard"
      onChange={onChange}
      onFocus={onFocus}
    />
  )
}