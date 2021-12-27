import {
  Avatar,
  Box,
  Button,
  FormHelperText,
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
import { IFormTask, ITads } from "../../../Interface/Interface";
import { getTask, PostTask } from "../../../Store/ActionTask/Task.reducer";
import { useAppDispatch } from "../../../Store/hooks";
import { schema } from "../../../yup/Yup";

const FormTasks = () => {
  const [age, setAge] = React.useState("");
  const dispatch = useAppDispatch();

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

  const { getFieldProps, handleSubmit, resetForm, errors, touched } =
    useFormik<IFormTask>({
      initialValues: {
        title: "",
        description: "",
        image: "",
        type: "",
        tads: [],
      },
      validationSchema: schema,
      onSubmit: ({title,description, image, type, tads}) => {
        const author = "anonimo";
        tads=tags as unknown as ITads[];
        dispatch(PostTask({title,description, image, type, tads,author }));
        resetForm();
        setTags([]);

        /* alert(JSON.stringify(values, null, 2)); */
      },
    });

  return (
    <form onSubmit={handleSubmit} autoComplete="true" style={{ paddingTop: "1em" }}>
      <p>Ceate Tasks or Proyect</p>

      <Box>
        <TextField
          id="outlined-required"
          label="Title"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
          {...getFieldProps("title")}
          error={!!errors.title && touched.title}
          helperText={touched.title && errors.title}
        />
      </Box>
      <Box pt="0.5em">
        <TextField
          id="filled-multiline-flexible"
          label="Description"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
          {...getFieldProps("description")}
          error={!!errors.description && touched.description}
          helperText={touched.description && errors.description}
        />
      </Box>
      <Box pt="0.5em">
        <TextField
          id="outlined-required"
          label="Url Image(optional)"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: "25em" }}
          {...getFieldProps("image")}
          error={!!errors.image && touched.image}
          helperText={touched.image && errors.image}
        />
      </Box>
      <Box pt="0.5em">
        <InputLabel id="demo-simple-select-label">
          type of publication
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="type of publication"
          /* onChange={handleChange} */
          fullWidth
          sx={{ maxWidth: "20em" }}
          {...getFieldProps("type")}
          error={!!errors.type && touched.type}
          /* helperText={  touched.type && errors.type} */
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Task</MenuItem>
          <MenuItem value={20}>Proyect</MenuItem>
        </Select>
        <FormHelperText error={!!errors.type && touched.type}>
          {touched.type && errors.type}
        </FormHelperText>
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
            
          error={!!errors.tads && touched.tads}
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
