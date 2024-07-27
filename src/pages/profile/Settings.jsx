import React, { useState } from "react";
import person from "../../../public/person.png";
import "./subAssets/profile.css";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const [fullName, setFullName] = useState("Aziz Trugunov");
  const [username, setUsername] = useState("username");
  const [email, setEmail] = useState("Email@example.com");

  const handleChangeName = (event) => {
    setFullName(event.target.value);
  };
  const handleChangeUsername = (event) => {
    setUsername(event.target.value);
  };
  const handleChangeMail = (event) => {
    setEmail(event.target.value);
  };
  const {t} = useTranslation();

  return (
    <>
      <section>
        <div className="inner-settings">
          <img className="person-img" src={person} alt="image" />
          <form action="#" className="profile-edit">
            <div className="input-wrapper">
              <i class="bi bi-person"></i>
              <input
                type="text"
                placeholder="enter your username"
                onChange={handleChangeName}
                value={fullName}
              />
            </div>
            <div className="input-wrapper">
              <i class="bi bi-person"></i>
              <input
                type="text"
                placeholder="enter your username"
                onChange={handleChangeUsername}
                value={username}
              />
            </div>
            <div className="input-wrapper">
            <i class="bi bi-envelope"></i>
              <input
                type="text"
                placeholder="enter your username"
                onChange={handleChangeMail}
                value={email}
              />
            </div>
            <button className="profile-btn">{t("change")}</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Settings;
