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
import dateFormat, { masks } from "dateformat";
import { useAppDispatch, useAppSelector } from "../../Store/hooks";
import { getTask } from "../../Store/ActionTask/Task.reducer";
import { IcardsProps, IFormTask } from "../../Interface/Interface";

const CardTask = ({items}:IcardsProps) => {
  const date = new Date();
  console.log(items);

  return (
    <Grid item xs={12} md={4}>
      <Card itemScope itemType="http://schema.org/Typ">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          itemProp="name"
          title={items.title}
          subheader="fecha de publicacion"
        />
        <CardMedia
          itemProp="image"
          component="img"
          height="194"
          image={items.image}
          alt="foto descriptiva"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            itemProp="description"
          >
            {items.description}
          </Typography>
          <Typography variant="body2" color="text.secondary" itemProp="author">
            Autor:{items.author}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            itemProp="datePublished"
          >
            {dateFormat(items.createdAT, "dddd, mmmm dS, yyyy")}
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
