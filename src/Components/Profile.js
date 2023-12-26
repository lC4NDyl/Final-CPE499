import React from "react";
import "./Profile.css";
import profile_image from "../Images/Propic.jpg";

const Profile = () => {
  return (
    <div className="main">
      <div className="top"></div>
      <div className="profile-down">
        <img src={profile_image} alt="" />
        <div className="profile-title">Verachon  Ponkarhan</div>
        <div className="profile-text">
          รหัสนักศึกษา: 6303064 อายุ: 23 ปี คณะ: วิศวกรรมศาสตร์ สาขาคอมพิวเตอร์
          <p>Hobby: เล่นเกมOnlyเล่นเกม</p> 
        </div>
        <div className="profile-button">
          <a href="#">CPE499 React</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;