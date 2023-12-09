import { Link } from "react-router-dom";

const JobCart = ({ cart }) => {
  const {
    _id,
    Job_Applicants_Number,
    Job_Title,
    Job_Description,
    Job_Category,
    Job_Posting_Date,
    Salary_range,
    Application_Deadline,
    picture,
    description,
    deadline,
    name,
  } = cart;
  return (
    <div className="">
      <div className="card w-94 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...shadow-xl">
        <div className="card-body h-[300px]">
          <p className="text-xl font-bold text-lime-400">
            Job Title : {Job_Title}
          </p>
          <h2 className="text-xl font-bold text-yellow-400">
            {" "}
          <h2>Job Posting Date: {Job_Posting_Date}</h2>
          <h2>Application_Deadline: {Application_Deadline}</h2>
            Salary Range : {Salary_range}{" "}
          </h2>
          <h3 className="text-xl font-bold text-white">
          Job Applicants Number: {Job_Applicants_Number}
          </h3>

          {/* <h2 className="text-xl font-bold"> Deadline: {deadline}</h2> */}
          <div className="card-actions justify-end">
            <Link to={`/details/${_id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCart;
