import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import "./ProjectCards.css";
const ProjectCards = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345, m: 2, p: 1 }} className={"card-class"}>
        <CardMedia component="img" image={props.Image} alt={props.Imgname} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              fontFamily: "Raleway",
            }}
          >
            {props.Name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontFamily: "Raleway",
            }}
          >
            {props.Para}
          </Typography>
        </CardContent>
        <CardActions>
          <a href={props.GitHubLink} target="_blank" rel="noreferrer">
            <GitHubIcon color="secondary" sx={{ fontSize: 40 }}></GitHubIcon>
          </a>
          <Button size="small">{props.LiveLink}</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCards;
