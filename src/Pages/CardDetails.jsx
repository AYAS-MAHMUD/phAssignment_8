import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigation, useParams } from "react-router";
import downlode from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import like from "../assets/icon-review.png";
import Chart from "./Chart";
import { additemtocarttolocalstorage } from "../../public/LocalStorage";
import { toast } from "react-toastify";

const CardDetails = () => {
  const [isSelected, setSelected] = useState(false);

  function handleselected(CardData) {
    toast("Install App",{position : "top-center",autoClose:500})
    additemtocarttolocalstorage(CardData);
    setSelected(true);
  }
  const data = useLoaderData();

  const navigation = useNavigation(); // loader state check করার জন্য

  // যখন data load হচ্ছে তখন "Loading..." দেখাও
  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold text-blue-600">
        aaaa...
      </div>
    );
  }




  const { id } = useParams();
  const singlecard = data.find((i) => i.id === parseInt(id));
  const {
    ratings,
    image,
    size,
    title,
    ratingAvg,
    downloads,
    reviews,
    description,
  } = singlecard;

  return (
    <div className="px-2 sm:px-5 md:px-15 ">
      <div className="pb-5  flex flex-col sm:flex-row pt-15">
        <img
          className="mr-10 h-[350px] w-[350px] object-cover rounded-lg shadow-xl"
          src={image}
          alt=""
        />
        <div>
          <div>
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
              <img src={downlode} alt="" />
              <p>Downloads</p>
              <h1 className="text-[40px] font-bold">{downloads / 1000000}M</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img src={star} alt="" />
              <p>Average Ratings</p>
              <h1 className="text-[40px] font-bold">{ratingAvg}</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <img src={like} alt="" />
              <p>Total Reviews</p>
              <h1 className="text-[40px] font-bold">{reviews / 1000}K</h1>
            </div>
          </div>
          <button
            disabled={isSelected}
            onClick={() => {
              handleselected(singlecard);
            }}
            className="px-10 btn bg-[#00D390] text-white mt-10"
          >
            {" "}
            {isSelected ? "Installed" : `Install Now (${size}MB)`}
          </button>
        </div>
      </div>
      <Chart ratings={ratings} />
      <div>
        <h1 className="text-xl font-semibold">Description</h1>
        <p className="text-lg text-gray-500 pb-10">{description}</p>
      </div>
    </div>
  );
};

export default CardDetails;
