import React from 'react'
import './home.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'


const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video className='video' src="/video/video2.mp4" muted autoPlay loop></video>

      <div className="homeContent contianer">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your Holidays
          </h1>
        </div>
        <div className="cardDiv grid">
          <div className="destinationInput">
            <label className='label' htmlFor="city">Search your detination:</label>
            <div className="input flex">
              <input className='in' type="text"  placeholder='Enter Name Here....'/>
              <GrLocation className="icon"/>
            </div>
          </div>
          <div className="dateInput">
          <label className='label' htmlFor="date">Select your date:</label>
          <div className="input flex">
            <input className='in' type="date"/>
          </div>
        </div>
        <div className="priceInput">
          <div className="label-total flex">
            <label className='label' htmlFor="price">Max Price:</label>
            <h3 className="total">$5000</h3>
            <div className="input flex">
              <input className='in' type="range" max='5000' min="1000" />
            </div>
          </div>
        </div>
        <div className="searchOptions flex">
          <HiFilter className="icon" />
          <span className='sp'>More Filters</span>
        </div>
        <div/>

        </div>

        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>
          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home