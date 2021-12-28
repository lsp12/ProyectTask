import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import CardTask from "../../Components/CardTask/CardTask";
import { getTask } from "../../Store/ActionTask/Task.reducer";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { IFormTask } from "../../Interface/Interface";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const dispatch = useAppDispatch();
  const allTask = useAppSelector((state) => state.Task.getTask);
  const loading = useAppSelector((state) => state.Task.loading);

  useEffect(() => {
    dispatch(getTask());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>World public tasks</h1>
      {loading && (
        <CircularProgress />
      )}
      <Layout>
      {allTask?.map((item:IFormTask, index) => (
        <CardTask key={index} items={item}   />
      ))}
      </Layout>
      {/* <Profile /> */}
    </div>
  );
};

export default Home;
