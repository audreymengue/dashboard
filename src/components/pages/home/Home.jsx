import Chart from '../../chart/Chart'
import FeaturedInfo from '../../festuredInfo/FeaturedInfo'
import React from './home.css'
import { usersData } from '../../sampleData'
import WidgetSmall from '../../widgetSmall/WidgetSmall'
import WidgetLarge from '../../widgetLarge/WidgetLarge'

function Home() {

  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={usersData} title="User Analytics" dataKey="Active User"/>
        <div className='homeWidgets'>
          <WidgetSmall />
          <WidgetLarge />
        </div>
    </div>
  )
}

export default Home