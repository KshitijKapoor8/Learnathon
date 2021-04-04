import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography} from '@material-ui/core'
import Navbar from '../components/navbar'
import axios from 'axios'




export default function Tutorial() {

    const [tutorials, setTutorials] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/challenges/')
        .then(res => {
            setTutorials((tutorials) => [...tutorials, res.data]);
        })
    }, [])

    return(
        <div>
            {tutorials
            .map((tutorial => {
                return(
                    
                    <div style = {{backgroundColor:'#32354a', display:'flex', height:'50vh', flexDirection:'column'}}>
                        <Navbar style = {{display:'flex'}}/>
                        {console.log(tutorial)}

                        <div style = {{display:'flex', height:'9rem'}}>
                            <Card style = {{display:'flex'}}>
                                <CardContent>
                                    <Typography>
                                         {tutorial.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                        
                    </div>
                )
            }))}
        </div>
    )
}
