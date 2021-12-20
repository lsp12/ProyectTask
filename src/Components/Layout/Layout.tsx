import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton";
import { LoginButton } from "../LoginButton/LoginButton";
import { Link } from "react-router-dom";
import { Popover } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';

const Layout = () => {
  const { isAuthenticated, user } = useAuth0();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Button>
          <Button>
            <Link to="Tasks" style={{ textDecoration: "none", color: "white" }}>
              Create a tasks
            </Link>
          </Button>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            share your tasks!
          </Typography>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}

          <>
            <Button
              aria-describedby={id}
              variant="outlined"
              onClick={handleClick}
            >
              <img src={user?.picture} alt={user?.name} style={{maxWidth:"5em", borderRadius:"50%"}} />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              
                <Typography variant="inherit">{user?.name}</Typography>
              <LogoutButton />
          
              
            </Popover>
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Layout;
