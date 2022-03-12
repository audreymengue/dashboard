import './widgetSmall.css'
import VisibilityIcon from '@mui/icons-material/Visibility'
import randomp1 from '../../images/randomp1.png'
import randomp2 from '../../images/randomp2.jpg'
import randomp3 from '../../images/randomp3.jpg'
import randomp4 from '../../images/randomp4.jpg'

export default function WidgetSmall() {
  return (
    <div className='widgetSmall'>
      <span className="widgetSmallTitle">
        New Joiners
      </span>
      <ul className="widgetSmallList">
        <li className="widgetSmallListItem">
          <img src={randomp1} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Lilian Elorm</span>
            <span className="widgetSmallUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={randomp2} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Vivienne Serwah</span>
            <span className="widgetSmallUserTitle">Data scientist</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={randomp3} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Mariam Addo</span>
            <span className="widgetSmallUserTitle">QA tester</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmallListItem">
          <img src={randomp4} alt="" className="widgetSmallImg" />
          <div className="widgetSmallUser">
            <span className="widgetSmallUsername">Brandon Ata</span>
            <span className="widgetSmallUserTitle">Java Developer</span>
          </div>
          <button className="widgetSmallButton">
            <VisibilityIcon className="widgetSmallIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}
