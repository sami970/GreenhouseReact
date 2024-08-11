import { useState, useEffect } from 'react';
import {variables} from './Variables.js';

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"; 


const LineCharStatistics = () => {
  
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
    <LineChart width={600} height={300} data={factMeasurements}>
      <Line type="monotone" dataKey="Temperature" stroke="#2196F3" strokeWidth={3} />
      <Line
        type="monotone"
        dataKey="Humidity"
        stroke="#F44236"
        strokeWidth={3}
      />
      <Line type="monotone" dataKey="Light" stroke="#FFCA29" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>

    
  );
};

export default LineCharStatistics;
