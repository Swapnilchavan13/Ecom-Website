import React from 'react';
import "../Styles/bottom.css"

export const Bottomnavbar = () => {
    const Backtotop =() =>{
        window.scrollTo(0, 0);
    }
    return (
        <>
        <hr />
        <br />
        <div onClick={Backtotop} className='backto'> Back To Top</div>
        <div id='bottomnav'>

            <div>
                <h3>Get to Know Us</h3>
                <p>About Us</p>
                <p>Careers</p>
                <p>Press Releases</p>
                <p>Amazon Science</p>
            </div>
            <div>
                <h3>Connect with Us</h3>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div>
            <div>
                <h3>Make Money with Us</h3>
                <p>Sell on Amazon
                </p>
                <p>Sell under Amazon Accelerator
                </p>
                <p>Protect and Build Your Brand
                </p>
                <p>Amazon Global Selling
                </p>
                <p>Become an Affiliate
                </p>
                <p>Fulfilment by Amazon
                </p>
                <p>Advertise Your Products
                </p>
                <p>Amazon Pay on Merchants
                </p>
            </div>
            <div>
                <h3>Let Us Help You</h3>
                    <p>COVID-19 and Amazon
                    </p>
                    <p>Your Account
                    </p>
                    <p>Returns Centre
                    </p>
                    <p>100% Purchase Protection
                    </p>
                    <p>Amazon App Download
                    </p>
                    <p>Help
                    </p>
            </div>

        </div>
        </>

    )
}
