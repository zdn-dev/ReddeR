import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const { t } = useTranslation();

  return (
    <>
    <div className="home-section">
      <div className="container-fluid">
        <div className="inner-hsection">
          <h3>Грузы</h3>
          <div className="where">
            <input className='where-input' type="text" placeholder='Откуда'/>
            <i class="bi bi-arrow-left-right icon-wh"></i>
            <input className='where-input' type="text" placeholder='Куда'/>
            <button className="search-btn"><i class="bi bi-search"></i></button>
          </div>
          <div className="coutries">
            
            </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Home;