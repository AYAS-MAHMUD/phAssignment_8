
import hero from '../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import FirstData from "./FirstData";
import { Link } from "react-router";



const First = ({data}) => {
    // console.log(data)
    const Data = data.slice(0,8)
    
  return (
    <div className="">
      {/* text  */}
      <div className="text-center px-2 sm:px-5 md:px-15">
        <h1 className="leading-17 pt-10 text-[45px] md:text-[72px]  text-gray-700 font-bold ">
          We Build <br />{" "}
          <span className="bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>
        <p className="my-7  text-[#627382]">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
          <br />
          Our goal is to turn your ideas into digital experiences that truly
          make an impact.
        </p>
      </div>
      <div className="flex justify-center gap-5 mb-7">
        <a
          href="https://play.google.com/store/games?hl=en"
          className="btn border-1 border-gray-300 "
        >
          <FaGooglePlay className="text-xl text-blue-400" /> Google Play
        </a>
        <a
          href="https://www.apple.com/app-store/"
          className="btn border-1 border-gray-300"
        >
          <FaAppStoreIos className="text-2xl text-blue-400" /> App Store
        </a>
      </div>
      <div className="flex justify-center">
        <img className="" src={hero} alt="" />
      </div>
      <div  className="mb-15 p-[80px] bg-gradient-to-r from-[#632EE3]  to-[#9F62F2]" >
        <h1 className="text-white font-semibold text-center text-[30px] md:text-[44px]">Trusted by Millions, Built for You</h1>
        <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3 mt-5">
            <div className=" text-center text-white">
                <p>Total Downloads</p>
                <h1 className="text-[60px] font-bold">29.6M</h1>
                <p>21% More Than Last Month</p>
            </div>
            <div className=" text-center text-white">
                <p>Total Reviews</p>
                <h1 className="text-[60px] font-bold">906k</h1>
                <p>46% More Than Last Month</p>
            </div>
            <div className=" text-center text-white">
                <p>Active Apps</p>
                <h1 className="text-[60px] font-bold">132+</h1>
                <p>31 More Will launch</p>
            </div>

        </div>
      </div>
      <div>
        <h1 className="text-center text-4xl  text-gray-700 font-bold">Trending Apps</h1>
        <p className="text-gray-500 mt-3 mb-9 text-center">Explore All Trending Apps on the Market developed by us</p>
        <div className="px-2 sm:px-5 md:px-15 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {
            Data.map(i=><FirstData i={i}></FirstData>)
            }
        
        </div>
        <div className="flex justify-center mt-10 b-15" >
            <Link  to='/apps' className="px-10 btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white">Show All</Link>
        </div>

      </div>
    </div>

  );
};

export default First;
