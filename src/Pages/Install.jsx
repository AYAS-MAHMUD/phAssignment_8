import React, { useContext, useEffect, useState } from "react";
import { getcartfromlocalStoragne,saveCartTolocalStorage } from "../../public/LocalStorage";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
const Install = () => {
  const [sortOrder,setSortOrder] = useState('none')
  const [installApp, setinstallApp] = useState([]);
  useEffect(() => {
    const data = getcartfromlocalStoragne();
    setinstallApp(data);
  }, []);
  
  const sortedItem =()=>{
    if(sortOrder==='size'){
      return [...installApp].sort((a,b)=>a.size - b.size)
    }else if(sortOrder==='none'){
      return [...installApp].sort((a,b)=>a.downloads - b.downloads)
    }else{
      return installApp
    }
  }
  const handleRemove =(id)=>{
    const existing = getcartfromlocalStoragne()
    let updatelist = existing.filter(p => p.id !== id)
    setinstallApp(updatelist)
    saveCartTolocalStorage(updatelist)
    toast("Remove App",{position : "top-center",autoClose:500})
    
  }
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
      <label className="form-control w-full max-w-sm">
        <select className="select select-bordered" value={sortOrder} onClick={(e)=>setSortOrder(e.target.value)}>
          <option value="none">Sort By Download</option>
          <option value="size">Sort By Size</option>
        </select>
      </label>
</div>
      </div>

      <div className="">
        {installApp.length > 0 ? (
          sortedItem().map((app) => (
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
              <button onClick={()=>handleRemove(app.id)} className="btn bg-green-400 text-white">Uninstall</button>
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
