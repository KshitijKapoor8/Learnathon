import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import Navbar from '../components/navbar'
import axios from 'axios'

let tutorials = [1,2]

export default function Tutorial() {

    useEffect(() => {
        axios.get('http://localhost:5000/challenges/')
        .then(res => {
            tutorials = res;
        })


    }, [])


    return(
        <div style = {{backgroundColor:'#32354a', display:'flex', height:'100vh', flexDirection:'column'}}>
            


            {tutorials
            .map((tutorial => {
                return(
                        <div style = {{display:'flex', height:'9rem'}}>
                            <Card style = {{display:'flex'}}>
                                <CardContent>
                                    <Typography>
                                        Lesson 1
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                )
            }))}
        </div>

        

    )
       


        

}
