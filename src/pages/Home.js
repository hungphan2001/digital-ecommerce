import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className='main-banner position-relative'>
                <img src='images/main-banner-1.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'>
                </img>
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 or $41.62/mo</p>
                  <Link className='button'>BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className='small-banner position-relative'>
                <img src='images/catbanner-01.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'>
                </img>
                <div className="small-banner-content position-absolute">
                  <h4>Best Sake.</h4>
                  <h5>Ipad S13+ Pro.</h5>
                  <p>From $999.00 <br/> or $41.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-02.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'>
                </img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>But Ipad Air.</h5>
                  <p>From $999.00 <br/> or $41.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-03.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'>
                </img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>But Ipad Air.</h5>
                  <p>From $999.00 <br/> or $41.62/mo</p>
                </div>
              </div>
              <div className='small-banner position-relative'>
                <img src='images/catbanner-04.jpg'
                  className='img-fluid rounded-3'
                  alt='main banner'>
                </img>
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>But Ipad Air.</h5>
                  <p>From $999.00 <br/> or $41.62/mo</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
              <div className='d-flex align-items-center gap-15'>
              <img src='images/service.png' alt='services'></img>
              <div>
                <h6>Free Shipping</h6>
                <p className='mb-0'>From all orders over $800</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src='images/service-02.png' alt='services'></img>
              <div>
                <h6>Daily Surprise Offers</h6>
                <p className='mb-0'>Save up to 25% off</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src='images/service-03.png' alt='services'></img>
              <div>
                <h6>Support 24/7</h6>
                <p className='mb-0'>Shop with an expert</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src='images/service-04.png' alt='services'></img>
              <div>
                <h6>Afford Prices</h6>
                <p className='mb-0'>Get Factory direct price</p>
              </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
              <img src='images/service-05.png' alt='services'></img>
              <div>
                <h6>Secure Payments</h6>
                <p className='mb-0'>100% Protected Payments</p>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
               <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="laptop" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Mobile & Tablets</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/phone-01.png" alt="iphone" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Camera & Videos</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Headphones</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart TV</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="tv" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Accessories</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/acc.jpg" alt="camera" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watch</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/watch.png" alt="camera" />
               </div>
               <div className="d-flex gap align-items-center">
                <div>
                  <h6>Portable Speaker</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
               </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home