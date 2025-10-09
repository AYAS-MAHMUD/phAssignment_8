import React, { useContext, useEffect, useState } from "react";
import { getcartfromlocalStoragne } from "../../public/LocalStorage";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const Install = () => {
  // getcartfromlocalStoragne.map(i=>console.log(i))
  const [installApp, setinstallApp] = useState([]);
  useEffect(() => {
    const data = getcartfromlocalStoragne();
    setinstallApp(data);
  }, []);
  return (
    <div className="px-2 sm:px-5 md:px-15">
      <div>
        <h1 className="text-center text-4xl pt-10 text-gray-700 font-bold">
          Your Installed Apps
        </h1>
        <p className="text-gray-500 mt-3 mb-9 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex justify-between">
        <h1 className="font-semibold text-xl text-gray-600">({installApp.length}) Apps Found</h1>
        <div className="dropdown dropdown-top dropdown-end">
  <div tabIndex={0} role="button" className="btn m-1">Click ⬆️</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
      </div>

      <div className="">
        {installApp.length > 0 ? (
          installApp.map((app) => (
            <div
              key={app.id}
              className="flex items-center my-5 bg-white  justify-between   rounded-lg p-3 shadow"
            >
              <div className="flex items-center">
                <img
                  src={app.image}
                  alt={app.title}
                  className="h-[60px] w-[60px] object-cover rounded-md mr-3"
                />
                <div>
                  <h2 className="text-xl font-semibold ">{app.title}</h2>
                  <div className="flex gap-3">
                    <p className=" text-green-400 flex items-center gap-1"><FaDownload /> {app.downloads / 1000000}M</p>
                    <p className="text-orange-500 flex items-center gap-1"><FaStar />{app.ratingAvg}</p>
                    <p className="text-gray-500">{app.size}MB</p>
                  </div>
                </div>
              </div>
              <button className="btn bg-green-400 text-white">Uninstall</button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No apps installed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Install;
