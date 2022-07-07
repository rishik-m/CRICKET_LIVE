import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Grid, Typography } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import { getMatches } from "./API/Api";

function App() {
  const [data, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((d) => {
        setMatches(d.data);
        console.log(d.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Typography style={{ marginTop: 20 }} variant="h3">
        {" "}
        Cricket Live App{" "}
      </Typography>

      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {data.map((match) => (
            <Fragment key={match.id}>
              {match.matchType === "t20" ? <MyCard match={match} /> : ""}
            </Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
