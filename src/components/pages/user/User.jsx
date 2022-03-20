import "./user.css"
import randomp4 from '../../../images/randomp4.jpg'

export default function User() {
  return (
    <div className="user">
        <div className="userTitleContainer">
            <h1 className="userTitle">Edit User</h1>
            <button className="userAddButton">Create</button>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src={randomp4} alt="" className="userShowImg"/>
                    <div className="userShowTopTitle">
                    <span className="UserShowUserName">Audrey Hepburn</span>
                    <span className="UserShowUserTitle">Software Engineer</span>
                </div>
                </div>
                
                <div className="userShowBottom"></div>
            </div>
            <div className="userUpdate"></div>
        </div>
    </div>
  )
}
