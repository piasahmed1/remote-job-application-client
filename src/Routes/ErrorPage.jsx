import { Link } from "react-router-dom";
import error from "../assets/errorPage.jpg";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <img className="w-full" src={error} alt="" />
      </div>
<Link to="/">
<button className="text-center rounded-lg font-bold text-6xl bg-red-600">Back to Home</button>
</Link>


    </div>
  );
};

export default ErrorPage;
