import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { Box, Grid } from "@mui/material";

const CardTask = () => {
  return (
    <Grid item xs={12} md={4}>
      <Card itemScope itemType="http://schema.org/Typ">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          itemProp="name" title="name"
          subheader="fecha de publicacion"
        />
        <CardMedia
        itemProp="image"
          component="img"
          height="194"
          image="https://areajugones.sport.es/wp-content/uploads/2021/06/imagen-2021-06-27-095909.jpg"
          alt="foto descriptiva"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" itemProp="description" >
            descripcion de la tarea: This impressive paella is a perfect party
            dish and a fun meal to cook together with your guests. Add 1 cup of
            frozen peas along with the mussels, if you like.
          </Typography>
          <Typography variant="body2" color="text.secondary" itemProp="author" >
            Autor:nombre autor
            </Typography>
            <Typography variant="body2" color="text.secondary" itemProp="datePublished" >
            {Date.now()}
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardTask;
