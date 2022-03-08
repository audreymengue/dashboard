import Chart from '../../chart/Chart'
import FeaturedInfo from '../../festuredInfo/FeaturedInfo'
import React from './home.css'
import { usersData } from '../../sampleData'

function Home() {

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={usersData} title="User Analytics" dataKey="Active User"/>
    </div>
  )
}

export default Home