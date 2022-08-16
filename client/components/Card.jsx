//client//components/Card.jsx

import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  linearGradient,
} from "recharts";

//process data data into months, that can be output as strings

const Card = (props) => {
  const [cityData, setCityData] = useState(props.data);
  const [cityName, setCityName] = useState(props.city);

  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    const array = [];
    for (let i = 0; i < month.length; i++) {
      const newMonth = month[i];
      const newObj = {
        date: newMonth,
        tavg: cityData[i].tavg,
        tmax: cityData[i].tmax,
        tmin: cityData[i].tmin,
      };
      array.push(newObj);
    }
    setNewData(array);
  }, []);

  useEffect(() => {
    console.log("Card.jsx useEffect cityData: ", cityData);
    console.log("Card.jsx useEffect cityName: ", cityName);
  }, [cityData, cityName]);

  return (
    <div className="card">
      <div className="card-header">
        <h3>City Name: {cityName.toUpperCase()}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
      </div>
      <AreaChart
        width={800}
        height={300}
        data={newData}
        margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        fill="#27272a"
      >
        <defs>
          <linearGradient id="colorTMax" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#f87171" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f87171" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTMin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorTAvg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis stroke="#27272a" dataKey="date" />
        <YAxis
          stroke="#27272a"
          label={{ value: "Degrees °F", angle: -90 }}
          padding={{ left: 20, right: 20 }}
        />
        <CartesianGrid fill="#e0f2fe" stroke="#27272a" strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="date"
          stroke="#27272a"
          fillOpacity={1}
          fill="#27272a"
        />
        <Area
          type="monotone"
          dataKey="tmax"
          stroke="#f87171"
          fillOpacity={1}
          fill="url(#colorTMax)"
        />
        <Area
          type="monotone"
          dataKey="tavg"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorTAvg)"
        />
        <Area
          type="monotone"
          dataKey="tmin"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorTMin)"
        />
      </AreaChart>
    </div>
  );
};

export default Card;
