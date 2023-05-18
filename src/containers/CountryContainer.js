import { useEffect, useState } from "react"

const CountriesContainer = () => {

    const [countries, setCountries] = useState(null);
    const [visitedCountries, setVisitedCountries] = useState([]);

    const fetchCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all")
        const jsonData = await response.json()
    
        setCountries(jsonData);
    }

    useEffect(()=>{
        fetchCountry();
    },[])
   
    const handleVisit = (country) => {
        if (!visitedCountries.includes(country)) {
          setVisitedCountries([...visitedCountries, country]);
        }
      };

    const mapCountries = countries ? countries.map(country => 
    <li>{country.name.common + " " +country.flag + " "}
    <input type="checkbox"/></li>) : 
    <p> Bucket List Incoming </p>
    
    
    const countryVisited = console.log("Visited")
    

    return ( 
        <>
            <h1> Country Bucket List </h1>
            <h4>Visited Countries</h4>
            <ul id="visitedCountries" onClick={countryVisited}> </ul>
            <h4>Countries to visit:</h4>
            <ul id="allCountries">{mapCountries}</ul>
        </>
     );
}
 
export default CountriesContainer;