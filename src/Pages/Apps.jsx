import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import AllCard from "./AllCard";
import notfound from '../assets/App-Error.png'

const Apps = () => {
  const data = useLoaderData();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();

  const searchProduct = term
    ? data.filter((i) => i.title.toLocaleLowerCase().includes(term))
    : data;
  // const wrong = data.filter(i =>i.title.toLocaleLowerCase()!==term)
  return (
    <div>
      <div className="text-center px-2 sm:px-5 md:px-15">
        <h1 className="text-center text-4xl pt-10 text-gray-700 font-bold">
          Our All Applications
        </h1>
        <p className="text-gray-500 mt-3 mb-9 text-center">
          Explore All Apps on the Market development by us. We code for Millions
        </p>
        <div className="flex flex-col sm:flex-row justify-between mb-7">
          <h1 className="text-lg text-gray-600 font-semibold">
            ({data.length}) Apps Found
          </h1>
          <label className="input">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              required
              placeholder="Search"
            />
          </label>
        </div>
      </div>
      {searchProduct.length > 0 ? (
        <div className="pb-10 px-2 sm:px-5 md:px-15 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {searchProduct.map((i) => (
            <AllCard key={i.id} i={i}></AllCard>
          ))}
        </div>
      ) : (
            <div className="flex flex-col justify-between items-center p-5">
                <img src={notfound} alt="" />
                <h1 className="text-4xl mt-5 font-bold text-gray-700">OPPS!! APP NOT FOUND</h1>
                <p className="my-3 text-gray-500">The App you are requesting is not found on our system. Please try another apps</p>
                <Link to='/' className='px-10 btn bg-gradient-to-r from-[#632EE3]  to-[#9F62F2] text-white rounded'>Go Back!</Link>
            </div>
      )}
    </div>
  );
};

export default Apps;
