import { Link } from "react-router-dom";

const Routes2 = ({ site }) => {
  const {
    name,
    jobTitle,
    jobPostingDate,
    jobCategories,
    applicationDeadline,
    salaryRange,
    jobApplicantsNumber,
    _id,
  } = site;

  return (
    <div>
      <div className="card w-96 h-[600px] bg-base-100 shadow-xl items-center">
        <div className="card-body">
          <p className="card-title text-3xl">Name: {name} </p>
          <br />
          <p className="text-xl">Job Title: {jobTitle}</p>
          <br />
          <p className="text-xl">Job Posting Date: {jobPostingDate} </p>
          <br />
          <p className="text-xl">Application Deadline: {applicationDeadline} </p>
          <br />
          <p className="text-xl">Salary Range: {salaryRange} </p>
          <br />
          <p>Id:{_id} </p>
          <br /> 
          <div className="card-actions justify-center">
            <Link to={`vdetails/${_id}`}><button className="btn btn-primary ">View Details</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Routes2;
