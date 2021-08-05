import React from "react";
import Grid from '@material-ui/core/Grid'

export const Home = () => (
    <>
    <Grid container
        justifyContent="flex-start" direction="column" alignItems="center">
        <h1>Welcome to PinballFinder!</h1>

        <iframe src="https://plays.org/game/space-adventure-pinball/" id="gameembed" class="iframegame" frameborder="0" width="600" height ="850"></iframe>
    </Grid>
    </>
)