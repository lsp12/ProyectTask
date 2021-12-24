import React from "react";
import Drawer from "@mui/material/Drawer";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { drawer } from "../../Store/ActionState/State.slice";
import { Typography } from "@mui/material";
import ButtonsLinks from "../ButtonLinks/ButtonsLinks";
import { Box } from "@mui/system";

const DrawerNav = () => {
  const open = useAppSelector((state) => state.State.drawer);
  const dispatch = useAppDispatch();
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      dispatch(drawer(false));
    };
  console.log(open + "open");


  return (
    
      <Drawer anchor={"left"} open={open} onClose={toggleDrawer(false)} sx={{width:"3px"}}>
        <Box color={"white"} bgcolor={"#1976d2"} p={"0.8em"}>
          <Typography variant="h5">
            <b>Menu Tasks</b>
          </Typography>
        </Box>
        <Box bgcolor={"#1366B8"} height={"100%"} >
          <ButtonsLinks color={"#B0C9E2"} />
          
        </Box>
      </Drawer>
    
  );
};

export default DrawerNav;
