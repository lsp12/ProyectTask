import React from "react";

import { Grid } from "@mui/material";

interface ILayoutProps {
  children: JSX.Element | JSX.Element[];
}
const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
      >
        {children}
      </Grid>
    </>
  );
};

export default Layout;
