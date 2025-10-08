import React from "react";
import { useLoaderData, useParams } from "react-router";
import downlode from '../assets/icon-downloads.png';
import star from '../assets/icon-ratings.png';
import like from '../assets/icon-review.png';
const CardDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singlecard = data.find((i) => i.id === parseInt(id));
  // console.log(singleProduct)
  const { image, size, title, ratingAvg,downloads,reviews } = singlecard;
  return (
    <div>
      <div className="pb-5  flex flex-col sm:flex-row px-2 sm:px-5 md:px-15 pt-15">
        <img  className="mr-10 h-[350px] w-[350px] object-cover rounded" src={image} alt="" />
        <div>
          <div >
            <h1 className="text-[32px] font-bold">{title}</h1>
            <p className="text-gray-400 text-lg mb-3">
              Developed by{" "}
              <a
                className="text-purple-600 font-semibold"
                href="https://github.com/AYAS-MAHMUD"
              >
                Ayas Mahmud
              </a>
            </p>
            <hr />
          </div>

          <div className="grid grid-cols-1 gap-5 md:gap-20 md:grid-cols-3 mt-5">
            <div className=" flex flex-col items-center justify-center">
              <img  src={downlode} alt="" />
              <p>Downloads</p>
              <h1 className="text-[40px] font-bold">{downloads/1000000}M</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img  src={star} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-[40px] font-bold">{ratingAvg}</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img  src={like} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-[40px] font-bold">{reviews/1000}K</h1>
            </div>
          </div>
            <button className="px-10 btn bg-[#00D390] text-white mt-10">Install Now ({size}MB)</button>
        </div>
        
      </div>
      
    </div>
  );
};

export default CardDetails;
