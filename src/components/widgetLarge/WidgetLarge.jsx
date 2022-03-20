import './widgetLarge.css'
import randomp1 from '../../images/randomp1.png'
import randomp2 from '../../images/randomp2.jpg'
import randomp3 from '../../images/randomp3.jpg'
import randomp4 from '../../images/randomp4.jpg'

export default function WidgetLarge() {

      const Button = ({type}) => {
        return <button className={'widgetLargeButton ' + type}>{type}</button>
      }

  return (
    <div className='widgetLarge'>
      <h3 className="widgetLargeTitle">Latest transactions</h3>
      <table className="widgetLargeTable">
        <tr className="widgetLargeTr">
          <th className="widgetLargeTh">Customer</th>
          <th className="widgetLargeTh">Date</th>
          <th className="widgetLargeTh">Amount</th>
          <th className="widgetLargeTh">Status</th>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
          <img src={randomp4} alt="user pic" className='widgetLargeImg'/>
          <span className="widgetLargeName">Mariam Elysha</span>
          </td>
          <td className="widgetLargeDate">11.02.2022</td>
          <td className="widgetLargeAmount">$22.000,00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
          <img src={randomp3} alt="user pic" className='widgetLargeImg'/>
          <span className="widgetLargeName">Mariam Elysha</span>
          </td>
          <td className="widgetLargeDate">11.02.2022</td>
          <td className="widgetLargeAmount">$22.000,00</td>
          <td className="widgetLargeStatus"><Button type="Declined"/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
          <img src={randomp2} alt="user pic" className='widgetLargeImg'/>
          <span className="widgetLargeName">Mariam Elysha</span>
          </td>
          <td className="widgetLargeDate">11.02.2022</td>
          <td className="widgetLargeAmount">$22.000,00</td>
          <td className="widgetLargeStatus"><Button type="Pending"/></td>
        </tr>
        <tr className="widgetLargeTr">
          <td className="widgetLargeUser">
          <img src={randomp1}alt="user pic" className='widgetLargeImg'/>
          <span className="widgetLargeName">Mariam Elysha</span>
          </td>
          <td className="widgetLargeDate">11.02.2022</td>
          <td className="widgetLargeAmount">$22.000,00</td>
          <td className="widgetLargeStatus"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}
