import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IColorLink } from "../../Interface/Interface";
import { useAppDispatch } from "../../Store/hooks";
import { drawer } from "../../Store/ActionState/State.slice";
import { useAuth0 } from "@auth0/auth0-react";

const ButtonsLinks = ({ color }: IColorLink) => {
  const bak = color ? color : "#fff";
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth0();
  return (
    <React.Fragment>
      <Button
        onClick={() => {
          dispatch(drawer(false));
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: bak, fontSize: "15px" }}
        >
          Home
        </Link>
      </Button>
      {isAuthenticated && (
        <Button
          onClick={() => {
            dispatch(drawer(false));
          }}
        >
          <Link
            to="Tasks"
            style={{ textDecoration: "none", color: bak, fontSize: "15px" }}
          >
            Create a tasks
          </Link>
        </Button>
      )}
    </React.Fragment>
  );
};

export default ButtonsLinks;
