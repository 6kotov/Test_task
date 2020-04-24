import React from "react";
import "../index.less";
import PropTypes from "prop-types";

function Profile({ profile }) {
  return (
    <div className="profileContainer">
      <div className="profileHead">
        {" "}
        <img className="avatar" src={profile.imgSrc} alt="avatar"></img>
        <div className="profileInfo">
          {" "}
          <div className="profilename">{profile.name}</div>
          <div className="position">{profile.position}</div>
          <div className="profileDescription">{profile.description}</div>
        </div>
      </div>
      <div className="statisticsContainer">
        <div className="plug"></div>
        <div className="statisticsTable">
          <div className="services">Услуг</div>
          <div className="statistics">
            <div className="startLine">
              <div className="tr">
                <div className="booking"></div>
                <div className="textOverflow">
                  Ручное бронирование + доставка
                </div>
                <div>{profile.booking}</div>
              </div>
              <div className="tr">
                <div className="tours"> </div>
                <div className="textOverflow">Пакетные туры</div>
                <div>{profile.tours}</div>
              </div>
              <div className="tr">
                <div className="hotels"> </div>
                <div className="textOverflow"> Отели</div>
                <div>{profile.hotels}</div>
              </div>
            </div>
          </div>
          <div className="total">
            <div>Всего</div>
            <div className="marginRight4">{profile.total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;
