//client/components/Searchbar.jsx
import React, {useEffect, useState} from 'react'; 
import axios from 'axios';
import CardContainer from './CardContainer.jsx';

const Searchbar = props => {

  const portlandData = [
    {
        date: '2020-01-01',
        tavg: 45.9,
        tmin: 41.4,
        tmax: 50.2,
        prcp: 7.559,
        snow: 0,
        wdir: 164.4,
        wspd: 10.5,
        wpgt: null,
        pres: 1017.3,
        tsun: null
    },
    {
        date: '2020-02-01',
        tavg: 43.9,
        tmin: 36.1,
        tmax: 51.8,
        prcp: 1.575,
        snow: 0,
        wdir: null,
        wspd: 5.7,
        wpgt: null,
        pres: 1025.6,
        tsun: null
    },
    {
        date: '2020-03-01',
        tavg: 46.4,
        tmin: 38.1,
        tmax: 54.7,
        prcp: 2.441,
        snow: 0,
        wdir: null,
        wspd: 6.7,
        wpgt: null,
        pres: 1018.5,
        tsun: null
    },
    {
        date: '2020-04-01',
        tavg: 54.5,
        tmin: 44.1,
        tmax: 64.9,
        prcp: 0.787,
        snow: 0,
        wdir: 298.5,
        wspd: 5.6,
        wpgt: null,
        pres: 1019.6,
        tsun: null
    },
    {
        date: '2020-05-01',
        tavg: 60.4,
        tmin: 51.1,
        tmax: 69.8,
        prcp: 2.205,
        snow: 0,
        wdir: 264.8,
        wspd: 6.6,
        wpgt: null,
        pres: 1016.5,
        tsun: null
    },
    {
        date: '2020-06-01',
        tavg: 64.2,
        tmin: 55.2,
        tmax: 73.2,
        prcp: 3.504,
        snow: 0,
        wdir: 299.5,
        wspd: 6.3,
        wpgt: null,
        pres: 1017.3,
        tsun: null
    },
    {
        date: '2020-07-01',
        tavg: 70.2,
        tmin: 59,
        tmax: 81.5,
        prcp: 0.039,
        snow: 0,
        wdir: 317.7,
        wspd: 6.3,
        wpgt: null,
        pres: 1016.9,
        tsun: null
    },
    {
        date: '2020-08-01',
        tavg: 71.1,
        tmin: 59.2,
        tmax: 83.1,
        prcp: 0.394,
        snow: 0,
        wdir: 312.3,
        wspd: 6.5,
        wpgt: null,
        pres: 1016.5,
        tsun: null
    },
    {
        date: '2020-09-01',
        tavg: 67.5,
        tmin: 57.6,
        tmax: 77.4,
        prcp: 2.047,
        snow: 0,
        wdir: 315.7,
        wspd: 6,
        wpgt: null,
        pres: 1017.1,
        tsun: null
    },
    {
        date: '2020-10-01',
        tavg: 56.1,
        tmin: 47.3,
        tmax: 64.9,
        prcp: 1.535,
        snow: 0,
        wdir: 298.3,
        wspd: 5.3,
        wpgt: null,
        pres: 1021.4,
        tsun: null
    },
    {
        date: '2020-11-01',
        tavg: 46.4,
        tmin: 40.1,
        tmax: 52.7,
        prcp: 5.276,
        snow: 0,
        wdir: 173.5,
        wspd: 6.7,
        wpgt: null,
        pres: 1018.7,
        tsun: null
    },
    {
        date: '2020-12-01',
        tavg: 43.9,
        tmin: 38.3,
        tmax: 49.5,
        prcp: 5.118,
        snow: 0,
        wdir: 126.7,
        wspd: 8.9,
        wpgt: null,
        pres: 1021.9,
        tsun: null
    }
]

  const handleSubmit = (e) => {
    //prevents the page from refreshing on submit
    e.preventDefault();

    //first determine is the input is a single city (string) or multiple citys (array of strings)
    //if e.target.firstChild.value is an array....do something
    //else if its just a single string, assign it to a const
    
    //store the input value in a const
    const inputCity = e.target.firstChild.value;
    console.log('handleSubmit inputCity: ', inputCity)

    //write HTTP request
    axios.post('/search', {inputCity} )
      .then(response => console.log('search POST response: ', response))
      .catch( err => console.log('search POST ERROR: ', err))
  }
   
  return (
    <div className="searchbar-div">
        <form className="searchbar" onSubmit={handleSubmit}>
             <input className = "search-input" name="search-input" id="search-input" type="text" placeholder="Enter city name here..." required></input>
             <input className = "submit-btn" type="submit" value="Search"></input>
        </form>
        <CardContainer inputCity={'Portland'} data={portlandData}/>
    </div>
  )
}


export default Searchbar;