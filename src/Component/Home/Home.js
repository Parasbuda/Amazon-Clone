import React from "react"
import "./Home.css"
import Product from "../Product/Product"

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner-img"
      />
      <div className="home__row">
        <Product
          id={12321341}
          title="The Learn Startup: Now Constant Inovation Creates Radically Successfull Businesses Paperback "
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg"
        />
        <Product
          id={49538084}
          title="Kenwood KMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={239.0}
          rating={4}
          image="https://www.cramptonandmoore.co.uk/media/catalog/product/cache/1/image/1000x700/9df78eab33525d08d6e5fb8d27136e95/k/m/kmx754rd_2.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id={4903850}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
          price={199.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/31yB4hoBTcL.jpg"
        />
        <Product
          id={23445930}
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://icdn2.digitaltrends.com/image/digitaltrends/echo-3rd-gen-416x416.jpg"
        />
        <Product
          id={3254354345}
          title="New Apple iPad Pro (12.9-inch, Wi-Fi,128GB)-Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX522_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={90829332}
          title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120 * 1440 "
          price={1094.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg"/>
      </div>
    </div>
  )
}

export default Home
