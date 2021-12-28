import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Box, Grid } from "@mui/material";
import dateFormat from "dateformat";
import { IcardsProps } from "../../Interface/Interface";

const CardTask = ({ items }: IcardsProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Card itemScope itemType="http://schema.org/Typ" sx={{ width: "100%" }}>
        {items.picture ? (
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={items.picture}
              />
            }
            title={items.title}
          />
        ) : (
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {items.title.charAt(0)}
              </Avatar>
            }
            title={items.title}
          />
        )}

        <p itemProp="name" style={{ display: "none" }}>
          {" "}
          {items.title}{" "}
        </p>
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
          <Typography
            variant="body2"
            color="text.secondary"
            itemProp="dateModified"
            textAlign={"left"}
          >
            tags:
          </Typography>
          <Grid container spacing={1}>
            {items.tads &&
              items.tads.map((tag) => (
                <Grid item key={tag.tad}>
                  <Box
                    bgcolor={"#1976d2"}
                    color={"white"}
                    borderRadius={"10px"}
                    padding={"3px"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    @{tag}
                    {/* <Box
                    pl={"0.5em"}
                    onClick={() => {
                      tags.splice(tags.indexOf(tag), 1);
                      setTags([...tags]);
                    }}
                    sx={{ cursor: "pointer" }}
                  >
                    X
                  </Box> */}
                  </Box>
                </Grid>
              ))}
          </Grid>
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
