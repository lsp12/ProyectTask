import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../../Components/Profile/Profile";
import LogoutButton from "../../Components/LogoutButton/LogoutButton";
import { LoginButton } from "../../Components/LoginButton/LoginButton";

const Home = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <h1>Aplication</h1>
      {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />}

      <Profile /> */}
      
    </div>
  );
};

export default Home;
