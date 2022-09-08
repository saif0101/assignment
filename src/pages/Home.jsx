import React from 'react'
import BodyText from '../components/bodyText/BodyText';
import image from "../images/image.png";
import Group1 from "../images/Group1.png";
import Group from "../images/Group.png";

const Home = () => {
  return (
    <div>
      <div className=' w-28 ml-56 -mb-40 lg:w-36  lg:-mt-10 lg:ml-96 object-center lg:object-right-top'><img src={Group1} alt="" /></div>
      <div className='lg:pl-20 lg:w-5/6 lg:ml-16 lg:mt-12'>
      <div>
        <div className=' my-4 mt-8 text-center justify-center text-4xl font-bold  lg:text-left lg:-mb-52 lg:ml-40 lg:pl-96 lg:text-4xl lg:font-bold'>

          <div className=" ml-4 w-12 lg:-ml-20 lg:pl-8 lg:-mb-4 lg:w-24 "><img src={Group} alt="" /></div>
          <div className='-mt-4'>How We Work To <br />Powerfull <span className='text-blue-700'>Help You</span></div>
        </div>

        <div className=' items-center justify-center mx-6 my-8 sm:flex md:flex'>
          <div className='lg:w-4/6  lg:p-20 lg:mr-10 '><img className=' object-cover' src={image} alt="home" />
          </div>
          <div className='mt-6 lg:mt-48  lg:-ml-8'>
            <BodyText />
          </div>
        </div>
      </div>
    </div>
    </div>


  )
}

export default Home