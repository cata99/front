import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

function DropDownInput(props) {
  return (
    <Autocomplete
      options={props.options}
      getOptionLabel={(option) => option.value}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Example" variant="outlined" />
      )}></Autocomplete>
  );
}
export default DropDownInput