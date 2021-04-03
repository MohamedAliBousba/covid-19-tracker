import React, {useEffect, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

import styles from "./country.module.css"

import {fetchCountries} from "../../api";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
    select: {
        "& option": {
            background: theme.palette.background.paper
        },
        width: "150px"
    }
}));

const CountryPicker = ({selectCountryHandler}) => {
    const classes = useStyles();

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        fetchCountries()
            .then(res => {
                setFetchedCountries(res)
            })
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <Select native className={classes.select} defaultValue="Global" onChange={e => selectCountryHandler(e.target.value)}>
                <option value="Global">Global</option>
                {fetchedCountries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
