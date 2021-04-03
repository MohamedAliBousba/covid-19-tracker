import React from 'react';
import Grid from "@material-ui/core/Grid";
import {Card, CardContent, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CountUp from "react-countup";
import styles from "./cards.module.css"
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    root: {

    },
}));

const Cards = ({ data }) => {
    const classes = useStyles();

    if(!data || !data.confirmed || !data.deaths || !data.recovered || !data.lastUpdate){
        return <p>Loading...</p>
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item component={Card} style={{ margin: "10px 20px" }} xs={12}  md={3} className={clsx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <CountUp end={data.confirmed.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{ new Date(data.lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} style={{ margin: "10px 20px" }} xs={12}  md={3}  className={clsx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <CountUp end={data.recovered.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{ new Date(data.lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of recovered cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} style={{ margin: "10px 20px" }} xs={12}  md={3}  className={clsx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <CountUp end={data.deaths.value} duration={2.5} separator="," />
                        <Typography color="textSecondary">{ new Date(data.lastUpdate).toDateString() }</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
