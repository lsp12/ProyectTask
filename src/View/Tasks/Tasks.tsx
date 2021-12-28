import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import CardTask from "../../Components/CardTask/CardTask";
import FormTasks from "../../Components/Forms/FormTasks/FormTasks";
import Layout from "../../Components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { publishTaks } from "../../Store/ActionState/State.slice";
import { IFormTask } from "../../Interface/Interface";
import { getEmail } from "../../Store/ActionTask/Task.reducer";
import { useAuth0 } from "@auth0/auth0-react";

const Tasks = () => {
  const dispatch = useAppDispatch();
  const publis = useAppSelector((state) => state.State.publish);
  const email = useAppSelector((state) => state.Task.getEmail);
  const loading = useAppSelector((state) => state.Task.loading);
  const { user } = useAuth0();

  useEffect(() => {
    if (user?.email) {
      dispatch(getEmail(user?.email));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Grid item xs={12} md={4}>
        <FormTasks />
      </Grid>
      <Grid item xs={12} md={8}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              borderBottom={"solid #1976d2 2px"}
              marginTop={"0.8em"}
            >
              <Button
                variant={publis === "Private" ? "contained" : "outlined"}
                fullWidth
                onClick={() => {
                  dispatch(publishTaks("Private"));
                }}
              >
                <Typography variant="body2">Private</Typography>
              </Button>
              <Button
                variant={publis === "Public" ? "contained" : "outlined"}
                fullWidth
                onClick={() => {
                  dispatch(publishTaks("Public"));
                }}
              >
                <Typography variant="body2">Public</Typography>
              </Button>
            </Box>
          </Grid>
          {loading && (
            <Grid item xs={12} md={12}>
              <CircularProgress />
            </Grid>
          )}
          {publis === "Private"
            ? email?.map(
                (item: IFormTask, index) =>
                  item.public === false && <CardTask key={index} items={item} />
              )
            : email?.map(
                (item: IFormTask, index) =>
                  item.public === true && <CardTask key={index} items={item} />
              )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Tasks;
