import React, { useEffect, useState } from 'react'
import './App.css'
import { getDatabase, set, ref, get, remove } from "firebase/database";
import app from './firebase';

import img1 from './images/img1.png'
import img2 from './images/img2.webp'
import img3 from './images/img3.png'
import img4 from './images/img4.webp'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.webp'
import img8 from './images/img8.png'
import img9 from './images/img9.png'
import logo from './images/logo.png'
import profile from './images/profile.png'
import cart from './images/cart.png'
import business from './images/business.png'

let db = getDatabase(app);
let arr = []


export default function App() {

  const [arrdb, setarrdb] = useState(arr)
  const [subdbarr, setsubdbarr] = useState([])
  const [show, setshow] = useState(false)
  const [li, setli] = useState([])

  useEffect(() => {

    if (arrdb.length === 0) {
      get(ref(db, `flipkart/menulist`)).then((e) => {
        setarrdb(e.val()[0].r1)
      })
    }
    // console.log(arrdb)
  }, [arrdb])

  return (
    <>
      <div className="container-fluid">
        <div className="row r1">
          <div className="col-lg-12">

            <div className="row r1">
              <div className="col-lg c1">
                <img className="logo" src={logo} alt="" />
                <div className="search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input type="search" placeholder="Search for Products, Brands and More" />
                </div>
              </div>

              <div className="col-lg-4 c2">
                <div className="icon">
                  <img className="profile" src={profile} alt="" />
                  <div className="icon_txt">Login</div>
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>


                <div className="icon">
                  <img className="cart" src={cart} alt="" />
                  <span className="icon_txt">Cart</span>
                </div>

                <div className="icon">
                  <img src={business} alt="" />
                  <span className="icon_txt">Become a Seller</span>
                </div>

                <div className="dot_cc">
                  <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                </div>

              </div>


            </div>

          </div>
        </div>
        <div className="r2">
          <div className="row">
            <div className="col-lg-12 d-flex align-content-center justify-content-between p-5">
              {
                arrdb.map((obj, index) => {
                  return <div key={index} className="box" onMouseEnter={() => {
                    get(ref(db, `flipkart/menulist`)).then((e) => {
                      (index === 2) ? setsubdbarr(e.val()[0].r2) : (index === 3) ? setsubdbarr(e.val()[0].r3) : setsubdbarr([])
                      setshow(index)

                      // console.log(subdbarr)

                    })
                  }}>
                    <img className='img' src={obj.imgUrl} alt={{}} />
                    <div className="txt1">{obj.te}</div>

                    <div onMouseLeave={() => {
                      setsubdbarr([])
                      setshow(false)
                    }} className={`box2 ${show === index ? '' : 'hide'}`}>

                      <div className='cc'>
                        {
                          subdbarr.map((obj2, index2) => {
                            return <div key={index2} onMouseOver={() => {
                              setli(obj2.li)
                            }}  >{obj2.te}</div>
                          })

                        }
                      </div>
                      <div className='cc'>

                        {
                          li.map((str, index3) => {

                            return <div>
                              {str}
                            </div>
                          })
                        }
                      </div>

                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
