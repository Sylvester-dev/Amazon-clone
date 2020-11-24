import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />
      <div className="home__row">
        <Product
          id="25252"
          title="Echo Dot (3rd Gen) – New and improved smart speaker with Alexa"
          price={167}
          rating={4}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="252525"
          title="The Lean Startup:Guide to start your new journey"
          price={50}
          rating={5}
          image="https://lstatic.tea-ebook.com/media/catalog/product/cache/13/image/9df78eab33525d08d6e5fb8d27136e95/33/89/23/metadata-image-501236.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="252"
          title="Fastrack Reflex 2.0 Unisex Activity Tracker"
          price={75}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="2"
          title="Godrej 190 L Single Door Refrigerator"
          price={400}
          rating={3}
          image="https://images-eu.ssl-images-amazon.com/images/I/31s0aOXQkhL._AC_SX184_.jpg"
        />
        <Product
          id="25252538"
          title="JSB MZ24 3D Massage Chair Zero Gravity"
          price={100}
          rating={4}
          image="https://m.media-amazon.com/images/I/61fZpMHe5tL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="52"
          title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
          price={353}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/31pEe2taIPL._AC_SY200_.jpg"
        />
        <Product
          id="252525"
          title="PlayStation 4 Slim 1TB Console"
          price={550}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/31qwualUaLL._AC_SY200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="67"
          title="Amazon.com eGift Card"
          price={2000}
          rating={5}
          image="https://m.media-amazon.com/images/I/510rB0mIgSL._AC_UL320_.jpg"
        />
        <Product
          id="98"
          title="PARTU HEPA Air Purifier for Home- Smoke Air Purifier with Nightlight, 100% Ozone Free"
          price={69.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61JOhK2SLaL._AC_UY218_.jpg"
        />
        <Product
          id="455"
          title="Propel Star Wars Quadcopter: Tie Fighter Collectors Edition Box"
          price={35.99}
          rating={2}
          image="https://m.media-amazon.com/images/I/61MIDN91beL._AC_UL320_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="2525253"
          title="Sony A8H 65 Inch TV: BRAVIA OLED 4K Ultra HD Smart TV with HDR and Alexa Compatibility - 2020 Model (XBR65A8H) with Home T..."
          price={1677.43}
          rating={5}
          image="https://m.media-amazon.com/images/I/61pWl8sfJ1L._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
