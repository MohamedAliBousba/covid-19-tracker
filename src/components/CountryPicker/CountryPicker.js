import React, {useEffect, useState} from 'react';
import FormControl from "@material-ui/core/FormControl";

import styles from "./country.module.css"

import {fetchCountries} from "../../api";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const CountryPicker = ({selectCountryHandler}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    const [selection, setSelection] = useState('Global')

    useEffect(() => {
        fetchCountries()
            .then(res => {
                setFetchedCountries(res)
            })
    }, [])

    return (
        <FormControl className={styles.formControl}>
            <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                value={selection}
                onChange={e => {
                    selectCountryHandler(e.target.value)
                    setSelection(e.target.value)
                }}
            >
                <MenuItem value="Global">Global</MenuItem>
                {fetchedCountries.map(country => (
                    <MenuItem key={country} value={country}>{country}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryPicker;
