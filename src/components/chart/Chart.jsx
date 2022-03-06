import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
  {
    name: 'Jan',
   "Active User": 4000,
    
  },
  {
    name: 'Feb',
   "Active User": 7000,
    
  },
  {
    name: 'March',
   "Active User": 2000,
  
  },
  {
    name: 'April',
   "Active User": 2780,
    
  },
  {
    name: 'May',
   "Active User": 1890,
    
  },
  {
    name: 'June',
   "Active User": 2390,

  },
  {
    name: 'July',
   "Active User": 3490,
    
  },
  {
    name: 'Aug',
   "Active User": 3490,
    
  },
  {
    name: 'Sept',
   "Active User": 1490,
    
  },
  {
    name: 'Oct',
   "Active User": 490,
    
  },
  {
    name: 'Nov',
   "Active User": 3490,
    
  },
  {
    name: 'Dec',
   "Active User": 6490,
    
  },
];

  return (
    <div className='chart'>
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4/1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke='#5550bd'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Active User" stroke="#8884d8" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
