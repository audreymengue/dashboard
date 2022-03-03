import "./featuredInfo.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$4500</span>
                <span className="featuredMoneyRate">-11,4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <div className="featuredSub">Compared to ast month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3500</span>
                <span className="featuredMoneyRate">-4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
            </div>
            <div className="featuredSub">Compared to ast month</div>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$1000</span>
                <span className="featuredMoneyRate">+11,4 <ArrowUpwardIcon className="featuredIcon"/></span>
            </div>
            <div className="featuredSub">Compared to ast month</div>
        </div>
    </div>
  )
}
