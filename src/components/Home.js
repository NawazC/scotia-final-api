import React from 'react';
import LeftImage from './../hero-right.jpg'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>

                <div className='col-md-6'>
                    <img className="img-fluid" src={LeftImage}/>
                </div>

                <div className='hero-left col-md-6'>
                    <h2>Welcome to <span className='hero-logo'>Scotia Bank</span></h2>
                    <p>Feel free to adjust the wording or styling based on your specific needs or branding guidelines. This banner text is designed to be clear and enticing, highlighting the benefit of opening a bank account with the promise of a $200 CAD bonus upon joining.</p>
                    <button className="hero-button cbtn btn-primary">Open Account With Us</button>
                </div>
                
            </div>

            <BodyArea/>


            
           
        </div>
      
    </div>
  );
};


const BodyArea = () => {
    return (
       
            <div className='row'>

            

                <div className='body-content col-md-4'>

                    <h3>Checquing Account</h3>
                    <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

                </div>

            <div className='body-content col-md-4'>

            <h3>Saving Account</h3>
            <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

            </div>

            <div className='body-content col-md-4'>

            <h3>Current Account</h3>
            <p>With a checking account, you can deposit and withdraw money easily through various channels, including ATMs, online banking, mobile apps, and bank branches. This accessibility ensures that your funds are always within reach whenever you need them</p>

            </div>

          


            </div>

       
    );
}

export default Home;
