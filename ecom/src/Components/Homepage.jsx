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

    const Shoesclick = () => {
        localStorage.setItem("type", 'Shoes')
            navigate('/products')
      }
     
    const Cosmeticsclick = () => {
        localStorage.setItem("type", 'Cosmetics')
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
                    <h2>All Brands Mobile Phones</h2>
                    <div className='mainsubdiv'>

                    <div onClick={Electronicsclick}>
                            <img src="https://i.gadgets360cdn.com/large/redmi_note_11t_5g_india_1651740341314.jpg" alt="" />
                            <p>Starting ₹10,000 </p>
                        </div>
                        <div onClick={Electronicsclick}>
                            <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202010/index-01_1200x768.jpeg?size=690:388" alt="" />
                            <p>Starting ₹20,000 | Quality Mobiles</p>
                        </div>
                        <div onClick={Electronicsclick}>
                            <img src="https://www.usatoday.com/gcdn/presto/2020/06/02/USAT/d9542bb2-c59a-414a-af6c-85e9299d423e-best_phone_deals_hero.jpg?width=660&height=372&fit=crop&format=pjpg&auto=webp" alt="" />
                            <p>Starting ₹40,000</p>
                        </div>
                        <div onClick={Electronicsclick}>
                            <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/09/Motorola-Moto-G82-5G-feat.webp?ssl=1" alt="" />
                            <p>Min. 10% off | All brands</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Shoes and Footware</h2>
                    <div className='mainsubdiv'>
                    <div onClick={Shoesclick}>
                            <img src="https://c.ndtvimg.com/2023-10/dqrie8a_amazon-sale_625x300_09_October_23.jpg" alt="" />
                            <p>Starting ₹700 | New Style</p>
                        </div>
                    <div onClick={Shoesclick}>
                            <img src="https://footwearnews.com/wp-content/uploads/2022/07/AmazonearlyaccessFNshoedeals_leadart.jpg?w=911&h=510&crop=1" alt="" />
                            <p>Starting ₹1000 | Quality Products</p>
                        </div>
                    <div onClick={Shoesclick}>
                            <img src="https://c.ndtvimg.com/2022-09/8u0q1p8o_fashion-650_625x300_21_September_22.jpg" alt="" />
                            <p>Starting ₹800 | White Shoes</p>
                        </div>
                    <div onClick={Shoesclick}>
                            <img src="https://c.dlnws.com/image/upload/c_limit,f_auto,q_auto,w_1800/v1695739736/Blog/DN_BF_shoe_deals_lead.jpg" alt="" />
                            <p>Min. 30% off | Shoes Collections</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Collection and Clothing</h2>
                    <div className='mainsubdiv'>
                        <div onClick={Clothingclick}>
                            <img src="https://www.hatkay.com/cdn/shop/articles/How-to-Look-Stylish-in-Traditional-Indian-Clothing-Where-to-Buy-the-Best-Fashionable-Ethnic-Wear-for-Women-Online.jpg?v=1671543652" alt="" />
                            <p>Starting ₹500+ | New Design</p>
                        </div>
                        <div onClick={Clothingclick}>
                            <img src="https://www.hatkay.com/cdn/shop/articles/Ace-Your-Looks-with-a-Timeless-Collection-of-Indian-Clothes.jpg?v=1668850107" alt="" />
                            <p>Starting ₹700+ | New Style</p>
                        </div>
                        <div onClick={Clothingclick}>
                            <img src="https://www.hatkay.com/cdn/shop/articles/How-to-Give-Indian-Clothes-a-Modern-Touch.jpg?v=1670497709" alt="" />
                            <p>Starting ₹850 | More Colors</p>
                        </div>
                        <div onClick={Clothingclick}>
                            <img src="https://baggout.com/wp-content/uploads/2021/02/Indian-clothing-3.jpg" alt="" />
                            <p>Min. 60% off | Festive Collections</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Skin care and Cosmatics</h2>
                    <div className='mainsubdiv'>
                    <div onClick={Cosmeticsclick}>
                            <img src="https://cdn2.system1.com/eyJidWNrZXQiOiJvbS1wdWItc3RvcmFnZSIsImtleSI6ImNoZWNraW4vd3AtY29udGVudC91cGxvYWRzLzIwMTkvMTAvbXVzdC1zZWUtaG9saWRheS1kZWFscy1vbi1tYWtldXAtYW5kLWNvc21ldGljcy1zY2FsZWQuanBnIiwiZWRpdHMiOnsid2VicCI6eyJxdWFsaXR5Ijo4MH19fQ==" alt="" />
                            <p>Starting ₹399 | Skin Products</p>
                        </div>
                        <div onClick={Cosmeticsclick}>
                            <img src="https://www.shutterstock.com/image-photo/decorative-cosmetics-makeup-brushes-on-600nw-1717814998.jpg" alt="" />
                            <p>Starting ₹299 | Natural</p>
                        </div>
                        <div onClick={Cosmeticsclick}>
                            <img src="https://www.itcosmetics.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-itcosmetics-us-Library/default/dw73a20440/images/blog/itc-google-black-friday-image.jpg?sw=480&sh=350&sm=cut&q=70" alt="" />
                            <p>Starting ₹500 | New Products</p>
                        </div>
                        <div onClick={Cosmeticsclick}>
                            <img src="https://i.pinimg.com/originals/b8/2e/c7/b82ec7eff90cdd3b09b1da335f584261.jpg" alt="" />
                            <p>Min. 20% off | Skin Care</p>
                        </div>
                    </div>
                </div>


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
                        <div onClick={Shoesclick}>
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

                <div className='lstdiv' onClick={Electronicsclick}>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/1._CB575335719_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/15._CB575335719_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/4._CB575335719_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/6._CB575335719_.jpg" alt="" />
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/PHASE31/9._CB575335719_.jpg" alt="" />
                </div>
            </div>

            <div className='festivdiv'>
                <h3>Shop deals in top categories</h3>
                <div className='lstdiv'>
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
