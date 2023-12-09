import { useEffect, useState } from "react";
import HybridJobsDetails from "./HybridJobsDetails";


const Hybrid = () => {
  const [remote, setremote] = useState([]);
  useEffect(()=>{
    fetch('https://assignment-11-server-dun-two.vercel.app/remote')
    .then(res=>res.json())
    .then(data=>setremote(data))
},[])




  return (


    <div className="grid grid-cols-3 gap-4">
      {
        remote.map((remote) => <HybridJobsDetails key={remote._id} jobs={remote}></HybridJobsDetails>)
      }
    </div>
  );
};

export default Hybrid;