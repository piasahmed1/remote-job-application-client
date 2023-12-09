import { useLoaderData } from "react-router-dom";

const Vdetails = () => {
  const loader = useLoaderData();
  console.log(loader);

  return (
    <div>
      <h2>hello</h2>
    </div>
  );
};

export default Vdetails;