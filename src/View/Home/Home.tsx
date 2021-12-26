import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../Components/Profile/Profile";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { LoginButton } from "../../Components/LoginButton/LoginButton";
import Layout from "../../Components/Layout/Layout";
import CardTask from "../../Components/CardTask/CardTask";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const array =[5,6,4,6,1,3];
  return (
    <div>
      <h1>World public tasks</h1>
      {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <Profile /> */}
      <Layout>
      {array?.map((item, index) => (
        <CardTask key={index} />
      ))}
      </Layout>
    </div>
  );
};

export default Home;
