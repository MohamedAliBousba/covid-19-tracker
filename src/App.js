import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import React, {useEffect, useState} from "react";
import image from './COVID-19.png'

import { fetchData } from './api/index'

const App = () => {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(() => {
        fetchData()
            .then(res => {
                setData(res)
            })
    }, [])


    const selectCountryHandler = async (country) => {
        setCountry(country)
        if(country === "Global"){
            setCountry("")
        }
        const fetchedData = await fetchData(country)
        setData(fetchedData)
    }

  return (
    <div className="container">
        <img src={image} alt="covid-19" className="image"/>
        <Cards data={data} />
        <CountryPicker selectCountryHandler={selectCountryHandler} />
        <Chart data={data} country={country} />
    </div>
  );
}

export default App;
