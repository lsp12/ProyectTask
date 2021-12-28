import React from 'react'
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
import { Avatar, Hidden, Popover } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { drawer } from "../../Store/ActionState/State.slice";
import ButtonsLinks from "../ButtonLinks/ButtonsLinks";

const SideNav = () => {
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
    
      const dispatch = useAppDispatch();
      const dawer = useAppSelector((state) => state.State.drawer);

      const { isAuthenticated, user } = useAuth0();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Hidden lgUp>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => {
                  dispatch(drawer(dawer ? dawer !== true : true));
                }}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden lgDown>
              <ButtonsLinks color={"white"} />
            </Hidden>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              share your tasks!
            </Typography>

            <>
              <Button
                aria-describedby={id}
                variant="outlined"
                onClick={handleClick}
              >
                {/* <img src={user?.picture} alt={user?.name} style={{maxWidth:"5em", borderRadius:"50%"}} /> */}
                <Avatar alt="Remy Sharp" src={user?.picture} />
              </Button>
              {isAuthenticated ? (
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
              ) : (
                <LoginButton />
              )}
            </>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default SideNav
