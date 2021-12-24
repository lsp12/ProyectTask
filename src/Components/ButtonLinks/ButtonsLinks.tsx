import React from 'react'
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IColorLink } from '../../Interface/Interface';


const ButtonsLinks = ({color}:IColorLink) => {
    const bak = color ? color : '#fff';
    return (
        <React.Fragment>
            <Button>
              <Link to="/" style={{ textDecoration: "none", color: bak, fontSize:"15px" }}>
                Home
              </Link>
            </Button>
            <Button>
              <Link
                to="Tasks"
                style={{ textDecoration: "none", color:bak, fontSize:"15px" }}
              >
                Create a tasks
              </Link>
            </Button>
        </React.Fragment>
    )
}

export default ButtonsLinks
