import React from 'react';
import TextField from '@mui/material/TextField';


export default function UserInput(props) {
  /* const handleSubmit= (e) => {
    e.preventDefault();
    // ???
  } */

  return (
    <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} sx={{ width: 56, height: 56 }} onInputCapture />
  )
}