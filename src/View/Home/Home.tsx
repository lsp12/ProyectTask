import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../Components/Profile/Profile";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { LoginButton } from "../../Components/LoginButton/LoginButton";
import Layout from "../../Components/Layout/Layout";
import CardTask from "../../Components/CardTask/CardTask";
import { getTask } from "../../Store/ActionTask/Task.reducer";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { IFormTask } from "../../Interface/Interface";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const array =[5,6,4,6,1,3];
  const dispatch = useAppDispatch();
  const allTask = useAppSelector((state) => state.Task.getTask);
  

  useEffect(() => {
    dispatch(getTask());
    console.log(allTask);
  }, []);
  return (
    <div>
      <h1>World public tasks</h1>
      {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <Profile /> */}
      <Layout>
      {allTask?.map((item:IFormTask, index) => (
        <CardTask key={index} items={item}   />
      ))}
      </Layout>
    </div>
  );
};

export default Home;
