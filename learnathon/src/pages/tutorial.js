import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, ButtonBase, Grid, Button } from "@material-ui/core";
import Navbar from "../components/navbar";
import axios from "axios";
import Model from '../components/modal'


export default function Tutorial() {
  const [tutorials, setTutorials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetch() {
      let Response = await axios.get("http://localhost:5000/challenges/");
      Response = JSON.parse(JSON.stringify(Response.data));
      setTutorials(Response);
      setLoading(false);
    }
    fetch();
  }, []);
  function handleDialog(){
    setIsOpen(!isOpen)
  }


  if(isOpen)
  {
      return(
          <Model
            isOpen = {isOpen}
          
          />
      )
  }

  if (loading === false) {
    return (
      <div style = {{backgroundColor:'#32354a', display:'flex', height:'100vh', flexDirection:'column'}}>
        <Navbar style={{ display: "flex" }} />

        <Grid style = {{paddingTop:'6rem', paddingLeft:'2rem'}}container >
        {tutorials.map((tutorial) => {
          return (
            
            <Grid item xs = {2} style = {{paddingBottom:'2rem'}}>
                <ButtonBase onClick = {() => {

                }}>
                        <Card style = {{width: "15rem", height: '20rem', display:'flex', flexDirection:'row'}}>
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
