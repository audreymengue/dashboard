import Chart from '../../chart/Chart'
import FeaturedInfo from '../../festuredInfo/FeaturedInfo'
import React from './home.css'

function Home() {
  return (
    <div className='home'>

    <FeaturedInfo/>
    <Chart/>
    </div>
  )
}

export default Home