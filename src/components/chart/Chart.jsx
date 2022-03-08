import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({title, data, dataKey}) {
    

  return (
    <div className='chart'>
        <h3 className="chartTitle">{title}</h3>
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
          <XAxis dataKey="name" stroke='#203239'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#203239" activeDot={{ r: 8 }} />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
