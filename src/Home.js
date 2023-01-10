import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
            <img className="home__image" 
            //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            src="https://m.media-amazon.com/images/I/71aQ3u78A3L._SX3000_.jpg"
            alt="">
            </img>

            <div className="home__row">
              <Product 
              id="9988776655"
              title="Keep Shopping for" 
              price={49.99} 
              image="https://m.media-amazon.com/images/I/81JtsX1NmHL._AC_SY270_.jpg"
              rating ={3}
              />
              <Product 
              id="18293728"
              title="Playstation PS5 Console - God of War Ragnarök Bundle"
              price={559.01}
              image="https://m.media-amazon.com/images/I/61SUJDrCTLL._AC_UY218_.jpg"
              rating={5}
              />
              <Product 
              id="128937982"
              title="Liquid I.V Hydration, Energy and Immune Multipliers"
              price={37.99}
              image="https://m.media-amazon.com/images/I/51FBIadULSL._AC_SY230_.jpg"
              rating={4}
              />
            </div>

            <div className="home__row">
              <Product
              id="12325594973"
              title="Amazon Fire TV 55' 4-Series 4K UHD smart TV"
              price={399.99}
              image="https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_UY218_.jpg"
              rating={3}
              />
            </div>


            <div className="home__row">
              <Product 
              id="9874893982173"
              title="Neutrogena Makeup Remover Cleansing Face Wipes, Alcohol-Free, Value Twin Pack"
              price={22.99}
              image="https://m.media-amazon.com/images/I/61BwJRBYkdL._AC_UL320_.jpg"
              rating={4}
              />
              <Product 
              id="28378918723"
              title="Mini Portable Projector, Movie Projector Supported HD 1080p"
              price={69.99}
              image="https://m.media-amazon.com/images/I/61VIp0Lw1uL._AC_UL320_.jpg"
              rating={4}
              />
            </div>

        </div>
    </div>
  )
}

export default Home