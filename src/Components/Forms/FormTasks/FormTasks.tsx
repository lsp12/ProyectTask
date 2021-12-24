import {
  Avatar,
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { IFormTask } from "../../../Interface/Interface";
import { schema } from "../../../yup/Yup";

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

  const [tags, setTags] = React.useState<string[]>([]);
  const [disable, setDisable] = React.useState(false);

  useEffect(() => {
    console.log(tags);
  }, [tags]);

  const {getFieldProps, handleSubmit, resetForm, errors, touched} = useFormik<IFormTask>({
    initialValues: {
      title: '',
      description: '',
      image: '',
      tads: [],
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });


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
      <Box
        pt="0.5em"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <InputLabel id="demo-simple-select-label">
          activate to share with the world
        </InputLabel>
        <Switch
          sx={{ paddingTop: "0.5em" }}
          checked={checked}
          onChange={handleSwith}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
      {checked && (
        <Box pt={"0.5em"}>
          <InputLabel id="demo-simple-select-label">adds tags</InputLabel>
          <TextField
            helperText="Please add a tag and hit enter"
            id="demo-helper-text-misaligned"
            label="tags"
            onFocus={() => setDisable(true)}
            onBlur={() => setDisable(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setTags([
                  ...tags,
                  (e.target as HTMLInputElement).value.toLowerCase(),
                ]);
                (e.target as HTMLInputElement).value = "";
              }
            }}
            fullWidth
            sx={{ maxWidth: "25em" }}
          />
          <Grid container spacing={1}>
            {tags.map((tag) => (
              <Grid item key={tag}>
                <Box
                  bgcolor={"#104B87"}
                  color={"white"}
                  borderRadius={"10px"}
                  padding={"3px"}
                  display={"flex"}
                  alignItems={"center"}
                >
                  @{tag}
                  <Box
                    pl={"0.5em"}
                    onClick={() => {
                      tags.splice(tags.indexOf(tag), 1);
                      setTags([...tags]);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    X
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <Box pt="0.5em">
        <Button variant="contained" type="submit" disabled={disable}>
          Load
        </Button>
      </Box>
    </form>
  );
};

export default FormTasks;
