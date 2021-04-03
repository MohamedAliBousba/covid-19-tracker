import axios from "axios"

const url = "https://covid19.mathdro.id/api"

export const fetchData = async (country) => {
    let updatedUrl = url

    if(country){
        updatedUrl = `${url}/countries/${country}`
    }

    if(country === "Global"){
        updatedUrl = url
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(updatedUrl)

        const updatedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate
        }

        return updatedData
    }catch(err){

    }
}

export const fetchDailyData = async () => {
    try {
        const res = await axios.get(`${url}/daily`)

        const updatedData = res.data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))

        return updatedData
    } catch(err) {

    }
}


export const fetchCountries = async () => {
    try{
        const { data: { countries } } = await axios.get(`${url}/countries`)

        return countries.map(country => country.name)
    }catch (e) {

    }
}
