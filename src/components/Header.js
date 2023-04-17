import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs';
const Header = () => {
  return (
    <>

      {/* Header top */}
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p className='text-white mb-0'>Free Shipping Over $100 & Free Returns</p>
            </div>
            <div className='col-6'>
              <p className='text-end text-white mb-0'>
                Hotline:<a className='text-white' href='tel:+84 123456789'>+84 123456789</a>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Header upper */}
      <header className="header-upper-strip py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className='text-white'>Digital.</Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control py-2"
                  placeholder="Search Products here...."
                  aria-label="Search Products here...."
                  aria-describedby="basic-addon2" />
                <span className="input-group-text p-3" id="basic-addon2"><BsSearch /></span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/compare.svg' alt='compare'></img>
                    <p className='mb-0'>Compare <br /> Products</p>
                  </Link></div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/wishlist.svg' alt='wishlist'></img>
                    <p className='mb-0'>Favourite <br /> wishlist</p>
                  </Link></div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/user.svg' alt='user'></img>
                    <p className='mb-0'>Login <br /> My Account</p>
                  </Link></div>
                <div>
                <Link className='d-flex align-items-center gap-10 text-white'>
                  <img src='images/cart.svg' alt='cart'></img>
                    <div className="d-flex_flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                  </Link></div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Header end */}

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-botton d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-15" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img className='' src="images/menu.svg"></img>
                      <span className='me-5 d-inline-block'>Shop Categories</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header