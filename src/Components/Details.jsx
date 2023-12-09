import { useLoaderData } from "react-router-dom";

const Details = () => {

  const loader = useLoaderData();
    console.log(loader);

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Details;