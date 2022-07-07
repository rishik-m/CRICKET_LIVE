import {
  Button,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Card,
  Typography,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetail } from "../API/Api";

const MyCard = ({ match }) => {
  const [data, setDetail] = useState({});
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    getMatchDetail()
      .then((d) => {
        console.log("Match Detail", d);
        setDetail(d);
        handleOpen();
      })
      .catch((error) => console.log(error));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getCard = () => {
    return (
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item>
              <Typography variant="h5">{match.teams[0]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 110 }}
                src={require("../img/images.jpg")}
                alt=""
              />
            </Grid>
            <Grid item>
              <Typography variant="h5">{match.teams[1]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Button
              onClick={() => {
                handleClick(match.unique_id);
              }}
              item
              variant="contained"
              color="primary"
            >
              Match Details
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              item
              variant="contained"
              color="primary"
            >
              Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };

  const getDialog = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details..."}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{match.status}</Typography>

          <Typography>
            Score:
            <span style={{ fontStyle: "oblique", fontWeight: "bold" }}>
              {data.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="secondary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <Fragment>
      {getCard()}
      {getDialog()}
    </Fragment>
  );
};

export default MyCard;
