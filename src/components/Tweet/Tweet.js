import React from "react";
import { Card, CardContent } from "@mui/material";
import moment from "moment";
import DeleteIcon from '@mui/icons-material/Delete';
import './Tweet.scss'


export default function Tweet(props){
    const{tweet:{name, tweet, time}, index, deleteTweet}=props;
    
    return(
        <Card className="tweet">
            <CardContent>
                <div className="tweet__header">
                    <h5>{name}</h5>
                    <DeleteIcon onClick={()=> deleteTweet(index)}/>
                </div>
                <p>{tweet}</p>
                <div className="tweet__date-add-tweet">
                    {moment(time).format("DD/MM/YYYY HH:mm")}
                </div>
            </CardContent>
        </Card>
    )
};