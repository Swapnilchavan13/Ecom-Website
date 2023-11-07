import React, { useState, useEffect } from 'react';
import './App.css';
import { Homepage } from './Components/Homepage';
import { Navbar } from './Components/Navbar';
import { Productpage } from './Components/Productpage';

function App() {
  const sliderimg = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/Phase3/J23_P3B_PC_Hero_2x._CB575523010_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/GW/Phase3/LastWeek/Sony_Homepage_DesktopHeroTemplate_3000x1200_22June2023_b._CB574275471_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/GW/Lastdays1/Phase_3_Tallhero_3000x1200._CB574261325_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Jup23/Phase3B/Homepage_DesktopHeroTemplate_3000x1200__Ref_Fallback_2x._CB573741062_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Grocery/ARTs/Jupiter/Phase3/GW/PC_Hero_P3B_Rec_3000x1200._CB573772477_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Jupiter23/Wave3/Heros/V2/PC/Last-min_P3_V2_Homepage_DesktopHeroTemplate_3000x1200_22June2023-1._CB575245160_.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Create an interval to change the image every 3 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderimg.length);
    }, 3000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Productpage />
      {/* <img width="100%" src={sliderimg[currentImageIndex]} alt="" /> */}
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
