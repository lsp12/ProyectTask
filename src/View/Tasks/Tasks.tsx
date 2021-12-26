import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CardTask from "../../Components/CardTask/CardTask";
import FormTasks from "../../Components/Forms/FormTasks/FormTasks";
import Layout from "../../Components/Layout/Layout";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { publishTaks } from "../../Store/ActionState/State.slice";

const Tasks = () => {
  const array = [5, 6, 4, 6, 1, 3];
  const dispatch = useAppDispatch();
  const publis = useAppSelector((state) => state.State.publish);
  console.log(publis);
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
              <Button variant={publis==="Private"?"contained": "outlined"   } fullWidth onClick={()=>{
                  dispatch(publishTaks("Private"))
              }}>
                <Typography variant="body2">Private</Typography>
              </Button>
              <Button variant={publis==="Public"?"contained": "outlined"} fullWidth onClick={()=>{
                  dispatch(publishTaks("Public"))
              }}>
                <Typography variant="body2">Public</Typography>
              </Button>
            </Box>
          </Grid>
          {publis==="Private"?array?.map((item, index) => (
              <CardTask key={index} />
            )):null}
          
         
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Tasks;
