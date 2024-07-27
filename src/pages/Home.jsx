import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
    <div className="home-section">
      <div className="container">
        <div className="inner-hsection">
          <h1 className='htitle'>{t("greeting")}</h1>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;