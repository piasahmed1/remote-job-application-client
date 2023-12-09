import { useLoaderData } from "react-router-dom";
import ViewDetailsCard from "./ViewDetailsCard";

const ViewDetails = () => {
  const data = useLoaderData();
  console.log(data)

  const  {
    Job_Applicants_Number,
    Job_Title,
    Job_Description,
    Job_Category,
    Job_Posting_Date,
    Salary_range,
    Application_Deadline,
    picture,
    name,
  } = data;
console.log(Job_Title)


  return (
    <div>
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2>Applicants Number: {Job_Applicants_Number}</h2>
        <p>Job Title: {Job_Title} </p>
        <p>job Description: {Job_Description} </p>
        <p>Job Category: {Job_Category} </p>
        <p>Job Posting Date: {Job_Posting_Date} </p>
        <p>Application Deadline: {Application_Deadline} </p>
        <p>Salary Range: {Salary_range} </p>
        <p>Name {name} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ViewDetails;