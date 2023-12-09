import { useLoaderData } from "react-router-dom";
import MyJobsCard from "./MyJobsCard";
import Footer from "../Footer/Footer";

const MyJobs = () => {
const data = useLoaderData();
console.log(data)


  return (
    
<div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
    {
        data.map((items) => <MyJobsCard key={data._id} items = {items}></MyJobsCard>)
      }
    </div>


    <Footer></Footer>
</div>
    
  );
};

export default MyJobs;