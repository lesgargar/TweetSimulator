import React from "react";
import Tweet from "../Tweet/Tweet";
import { Grid } from "@mui/material";
import "./ListTweets.scss"

export default function ListTweets(props){
    const {allTweets, deleteTweet} = props;
    if(!allTweets || allTweets.length === 0){
        return (
            <div className="list-tweets-empty">
                <h2>
                    There are no Tweets...
                </h2>
            </div>
        )
    }
    return(
       <Grid container spacing={3} className="list-tweets">
        {allTweets.map((tweet, index)=>(
            <Grid key={index} item xs={4}>
                <Tweet 
                tweet={tweet} index={index}
                deleteTweet={deleteTweet}
                />
            </Grid>
        ))}

       </Grid>
    )
}; 