import React, { useEffect, useState } from 'react'
import '../Styles/homepage.css'
import { Link, useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const navigate = useNavigate();

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

      const Electronicsclick = () => {
        localStorage.setItem("type", 'Electronics')
        navigate('/products')
      }

      const Toysclick = () => {
        localStorage.setItem("type", 'Toys')
        navigate('/products')
      }

      const Clothingclick = () => {
        localStorage.setItem("type", 'Clothing')
        navigate('/products')
      }

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
      <img width="100%" src={sliderimg[currentImageIndex]} alt="" />
        <div id='mainhomediv'>
            <div>
                <h2>Up to 70% off | Deals on Amazon Brands & more</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_1._SY116_CB573889351_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_1_1x._SY116_CB573884255_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Children's books, toys and more | Starting ₹79</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Media/Jupiter/childrens-book-1x._SY116_CB574308419_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Media/Jupiter/kids-toys-1x._SY116_CB574308419_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Media/Jupiter/Kidswear-1x._SY116_CB574308419_.jpg" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>50% - 80% off | Women's fashion</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/Jew-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Clothingclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/Saree-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Women`s Clothing</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Great Indian Festival | Finale days</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/Saree-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Footwear</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_1_1x._SY116_CB573884255_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/B-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Beauty</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Up to 60% off | Top offers on home appliances</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_02_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Refrigerators | Up to 60% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC__01_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Washing machines | Up to 65% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_03_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>AC | Up to 60% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_04_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Microwaves | Up to 60% off</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Deals on smartphones that suits your budget</h2>
                <div className='mainsubdiv'>
                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_01._SY116_CB575166656_.jpg" alt="" />
                        <p>In Budget | Under ₹10,000</p>
                    </div>
                    
                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116._SY116_CB575152829_.jpg" alt="" />
                        <p>Mid range | ₹10,000 - ₹25,000</p>
                    </div>
                    
                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116_01._SY116_CB575152829_.jpg" alt="" />
                        <p>Premium | ₹25,000 - ₹40,000</p>
                    </div>

                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_04._SY116_CB575166656_.jpg" alt="" />
                        <p>Ultra premium | Above ₹40,000</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Up to 80% off | Laptops, smartwatches</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_1._SY116_CB573889351_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_1_1x._SY116_CB573884255_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Great deals on TVs from popular brands</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Sony_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Redmi_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Samsung_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/Jupiter/MSO/Phase3/3b/Acer_2xDesktopQuadcardw_title-Card10.5x._SY116_CB573797216_.jpg" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
        </div>

    <div className='festivdiv'>
        <h3>Festive collection | Minimum 60% off</h3>
        <div onClick={Clothingclick}>
            <img src="https://m.media-amazon.com/images/I/81m+QpZizJL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/51ItPJzFvGL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81-QERu5bUL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81nJC0cDIML._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81YQs3LkiEL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81keLqojmML._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/81pHwxUtQzL._AC_SY200_.jpg" alt="" />
            <img src="https://m.media-amazon.com/images/I/71g61Ovga8L._AC_SY200_.jpg" alt="" />
        </div>
    </div>


    <div id='mainhomediv2'>
            <div>
                <h2>Up to 60% off | Gifting specials</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_._SY116_CB575604128_.jpg" alt="" />
                        <p>Chocolates</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_3_copy._SY116_CB575604128_.jpg" alt="" />
                        <p>Sweets</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2xDesktopQuadcardw_title-Ca._SY116_CB575603759_.jpg" alt="" />
                        <p>Dry Fruits</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Jup23/2x_Desktop_Quad_card_w_title_-_Card_1_copy._SY116_CB575604128_.jpg" alt="" />
                        <p>Explore all top offers</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>50% - 80% off | Fashion</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/M-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Clothing</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/C-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Footwear</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/W-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Watches</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/BTF/PCQC/Rev/Bag-186-116-min._SY116_CB575146091_.png" alt="" />
                        <p>Bags & luggage</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Up to 70% off | Budget friendly speakers</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/61DgzlpsyzL._AC_UL320_.jpg" alt="" />
                        <p>Under 999</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71qNKXZftLS._AC_UL320_.jpg" alt="" />
                        <p>1,000-1,999</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71NG293u2xL._AC_UL320_.jpg" alt="" />
                        <p>2,000-4,999</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71VtDKw6QcL._AC_UL320_.jpg" alt="" />
                        <p>Above 5,000</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Up to 70% off | International brands</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_1._SY116_CB573889351_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_1_1x._SY116_CB573884255_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Up to 60% off | Top offers on home appliances</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_02_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Refrigerators | Up to 60% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC__01_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Washing machines | Up to 65% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_03_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>AC | Up to 60% off</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/Phase-3-PC-QC_04_1x._SY116_CB575256030_.jpg" alt="" />
                        <p>Microwaves | Up to 60% off</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Deals on smartphones that suits your budget</h2>
                <div className='mainsubdiv'>
                    
                <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_01._SY116_CB575166656_.jpg" alt="" />
                        <p>In Budget | Under ₹10,000</p>
                    </div>
                    
                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116._SY116_CB575152829_.jpg" alt="" />
                        <p>Mid range | ₹10,000 - ₹25,000</p>
                        
                    </div>

                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/K8/Desktop_QuadCard_186x116_01._SY116_CB575152829_.jpg" alt="" />
                        <p>Premium | ₹25,000 - ₹40,000</p>
                    </div>

                    <div onClick={Electronicsclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/Meghana/Phase3/PC/Desktop_QuadCard_186x116_04._SY116_CB575166656_.jpg" alt="" />
                        <p>Ultra premium | Above ₹40,000</p>
                    </div>
                </div>
            </div>

            <div>
                <h2>Up to 80% off | Laptops, smartwatches</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_1._SY116_CB573889351_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_186x116_7._SY116_CB573889443_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/Oct/Jupiter23/Kitchen/QC_PC_1_1x._SY116_CB573884255_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Symbol/2023/Jupiter23/Phase3/Desktop_QC/PB/2_1x._SY116_CB575198763_.png" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
            <div>
                <h2>Great deals on TVs from popular brands</h2>
                <div className='mainsubdiv'>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Sony_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹99 | Home decor</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Redmi_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹139 | Kitchen products</p>
                    </div>
                    <div onClick={Toysclick}>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Kriti/Sony/Projectors/store/Samsung_2x_Desktop_Quad_card_w_title_-_Card_10.5x._SY116_CB573739774_.jpg" alt="" />
                        <p>Starting ₹85 | Toys & games</p>
                    </div>
                    <div>
                        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/Jupiter/MSO/Phase3/3b/Acer_2xDesktopQuadcardw_title-Card10.5x._SY116_CB573797216_.jpg" alt="" />
                        <p>Min. 60% off | Festive collections</p>
                    </div>
                </div>
            </div>
        </div>
    
        <div className='festivdiv'>
        <h3>Explore top offers in smartphones</h3>
        
        <div onClick={Electronicsclick}>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/1._CB575335719_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/15._CB575335719_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/4._CB575335719_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/6._CB575335719_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/9._CB575335719_.jpg" alt="" />
        </div>
    </div>

    <div className='festivdiv'>
        <h3>Shop deals in top categories</h3>
        <div>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/lshruthi/Jupiter/CentralPage/P2/200/D96279181_INWLD_Jupiter_CentralPage-Inputs_DesktopShoveler_200x200._CB574628988_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/phase3/footercard/DesktopShoveler_200x200._CB576470749_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/OHL/23/Central/BAU/Shoveler/P3/DesktopShoveler_400x400_eng_1x._CB574622737_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG_22/Varun/Jupiter23/Ref/Red_Hot/DesktopShoveler_400x400-2_English-._CB575339500_.jpg" alt="" />
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/Event/Gateway/Jup/Phase3/Eng_200x200._CB574633783_.jpg" alt="" />
        </div>
    </div>
</>
)
}
