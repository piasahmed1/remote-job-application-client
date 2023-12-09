
const HybridJobsDetails = ({jobs}) => {
  const { name, jobTitle, jobPostingDate, applicationDeadline, salaryRange, jobApplicantsNumber } = jobs
  return (
    <div>
<div className='card text-center border p-4 space-y-4 rounded-2xl'>
                <p>Name:{name}</p>
                <p>{jobTitle}</p>
                <p>Posting data:{jobPostingDate}</p>
                <p>application Deadline:{applicationDeadline}</p>
                <p>salary range:{salaryRange}</p>
                <p>Job application Number:{jobApplicantsNumber}</p>
                <button className='btn btn-ghost bg-red-700 text-white'>View Details</button>
            </div>
    </div>
  );
};

export default HybridJobsDetails;