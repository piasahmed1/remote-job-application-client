import { useEffect, useState } from "react";
import RemoteJobDetails from "./RemoteJobDetails";

const RemoteJob = () => {
  const [remote, setremote] = useState([]);
  useEffect(()=>{
    fetch('https://assignment-11-server-dun-two.vercel.app/remote')
    .then(res=>res.json())
    .then(data=>setremote(data))
},[])




  return (


    <div className="grid grid-cols-3 gap-4">
      {
        remote.map((remote) => <RemoteJobDetails key={remote._id} jobs={remote}></RemoteJobDetails>)
      }
    </div>
  );
};

export default RemoteJob;