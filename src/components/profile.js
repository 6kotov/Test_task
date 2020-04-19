import React, { useEffect, useState } from "react";
import "../index.less";
import PropTypes from "prop-types";

function Profile({ profile }) {
  window.onresize = () => {
    const width = window.innerWidth;
    getDescription(profile.description, width);
  };

  const [text, setText] = useState(profile.description);

  function getDescription(text, width) {
    return width > 500 ? setText(text) : setText(text.slice(0, 40) + "...");
  }

  return (
    <div className="profileContainer">
      <div className="profileHead">
        {" "}
        <img className="avatar" src={profile.imgSrc} alt="avatar"></img>
        <div className="profileInfo">
          {" "}
          <div className="profilename">{profile.name}</div>
          <div className="position">{profile.position}</div>
          <div className="profileDescription">{text}</div>
        </div>
      </div>
      <div className="statisticsContainer">
        <div className="plug"></div>
        <div className="statisticsTable">
          <div className="services">Услуг</div>
          <div className="statistics">
            <div className="tr">
              <div className="booking">Ручное бронирование</div>
              <div>{profile.booking}</div>
            </div>
            <div className="tr">
              <div className="tours"> Пакетные туры</div>
              <div>{profile.tours}</div>
            </div>
            <div className="tr">
              <div className="hotels"> Отели</div>
              <div>{profile.hotels}</div>
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
