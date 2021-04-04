import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  ButtonBase,
  Grid,
  Button,
} from "@material-ui/core";
import Navbar from "../components/navbar";
import axios from "axios";
import Model from "../components/modal";

export default function Tutorial() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [body, setBody] = useState(" ");
  const [code, setCode] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [image, setImage] = useState(" ");

  useEffect(() => {
    async function fetch() {
      let Response = await axios.get("http://localhost:5000/challenges/");
      Response = JSON.parse(JSON.stringify(Response.data));
      setTutorials(Response);
      setLoading(false);
    }
    fetch();
  }, []);
  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  if (isOpen) {
    return (
      <Model
        isOpen={isOpen}
        title={title}
        body={body}
        ide={code}
        image={image}
        handleClose={handleDialogClose}
      />
    );
  }

  if (loading === false) {
    console.log(tutorials);
    return (
      <div
        style={{
          backgroundColor: "#32354a",
          display: "flex",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <Navbar style={{ display: "flex" }} />

        <Grid style={{ paddingTop: "6rem", paddingLeft: "2rem" }} container>
          {tutorials.map((tutorial) => {
            return (
              <Grid item xs={2} style={{ paddingBottom: "2rem" }}>
                <ButtonBase
                  onClick={(event) => {
                    handleDialogOpen();
                    setTitle(tutorial.title);
                    setBody(tutorial.body);
                    setCode(tutorial.code);
                    setImage(tutorial.output);
                  }}
                >
                  <Card
                    style={{
                      width: "15rem",
                      height: "20rem",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CardContent
                      style={{
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h5"
                        style={{
                          fontSize: "1em",
                          display: "flex",
                          justifyContent: "left",
                        }}
                      >
                        {tutorial.title}!
                      </Typography>
                      <Typography
                        variant="h5"
                        style={{
                          fontSize: "1em",
                          marginTop: "3vh",
                        }}
                      ></Typography>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  } else {
    return null;
  }
}