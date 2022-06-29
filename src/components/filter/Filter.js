import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = (props) => {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
    props.onFilterSelected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="input-city">City</InputLabel>
        <Select
          labelId="input-city"        
          value={city}
          label="City"
          onChange={handleChange}
        >
          <MenuItem value={"Paris"}>Paris</MenuItem>
          <MenuItem value={"Washington"}>Washington</MenuItem>
          <MenuItem value={"London"}>London</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filter;
