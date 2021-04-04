import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, ButtonBase } from "@material-ui/core";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Tutorial() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      let Response = await axios.get("http://localhost:5000/challenges/");
      Response = JSON.parse(JSON.stringify(Response.data));
      setTutorials((tutorials) => [...tutorials, Response]);
      setLoading(false);
    }
    fetch();
  }, []);
  if (loading === false) {
    return (
      <div>
        <Navbar style={{ display: "flex" }} />
        {tutorials.map((tutorial) => {
          return (
            <div style={{ height: "8.5rem" }}>
              <Card>
                <CardContent
                  style={{
                    height: "100%",
                  }}
                >
                  <img
                    style={{
                      borderRadius: 5,
                      borderWidth: 10,
                      borderColor: "white",
                      height: "1rem",
                      width: "1rem",
                    }}
                  ></img>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "2em",
                      display: "flex",
                      justifyContent: "left",
                    }}
                  ></Typography>
                  <Typography
                    variant="h5"
                    style={{
                      fontSize: "1em",
                      marginTop: "3vh",
                    }}
                  ></Typography>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
