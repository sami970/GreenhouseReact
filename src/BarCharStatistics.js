import "./styles.css";
import { useState, useEffect } from 'react';
import {variables} from './Variables.js';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const BarCharStatistics = () => {
  
  const [factMeasurements, setFactMeasurements] = useState([]);
  useEffect(() => {
    fetch(variables.API_URL+'FactMeasurements')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setFactMeasurements(data);
      });
  }, []);

 

  return (
    
    <BarChart
    width={500}
    height={300}
    data={factMeasurements}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="timestamp" />
    <YAxis />
    <Tooltip shared={false} trigger="click" />
    <Legend />
    <Bar dataKey="Temperature" fill="#8884d8" />
    <Bar dataKey="CO2" fill="#82ca9d" />
  </BarChart>

  );
};

export default BarCharStatistics;

