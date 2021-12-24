import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";

const FormTasks = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [checked, setChecked] = React.useState(false);

  const handleSwith = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    console.log(event.target);
  };

  return (
    <form style={{ paddingTop: "1em" }}>
      <p>Ceate Tasks or Proyect</p>

      <Box>
        <TextField
          required
          id="outlined-required"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
        />
      </Box>
      <Box pt="0.5em">
        <TextField
          id="filled-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          rows={4}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
        />
      </Box>
      <Box pt="0.5em">
        <TextField
          error
          id="outlined-required"
          label="Image(optional)"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
        />
      </Box>
      <Box pt="0.5em">
        <InputLabel id="demo-simple-select-label">
          type of publication
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="type of publication"
          onChange={handleChange}
          fullWidth
          sx={{ maxWidth: "20em" }}
        >
          <MenuItem value={10}>Task</MenuItem>
          <MenuItem value={20}>Proyect</MenuItem>
        </Select>
      </Box>
      <Box pt="0.5em" display={"flex"}>
        <InputLabel id="demo-simple-select-label">
          activate to share with the world
        </InputLabel>
        <Switch
          sx={{ justifyContent: "flex-end", paddingTop: "0.5em" }}
          checked={checked}
          onChange={handleSwith}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      <Box pt="0.5em">
        <Button variant="contained" type="submit">
          Load
        </Button>
      </Box>
    </form>
  );
};

export default FormTasks;
