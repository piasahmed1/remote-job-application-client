import Swal from "sweetalert2";

const MyJobsCard = ({ items }) => {
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
} = items;


const handledelete = (_id) => {
  console.log(_id);

  Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  })
      .then(result => {
          if (result.isConfirmed) {
              fetch(`https://assignment-11-server-dun-two.vercel.app/addproducts/${_id}`, {
                  method: "DELETE"
              })
                  .then(res => res.json())
                  .then(data => {
                      console.log(data);
                      if (data.deletedCount > 0) {
                          Swal.fire(
                              'Deleted!',
                              'Your file has been deleted.',
                              'success'
                          )
                          const remaining = jobs.filter(cof => cof._id !== _id)
                          setmyjobs(remaining);
                      }

                  })
          }
      })


}


  console.log(MyJobsCard);
  return (
    <div>
      <div className="card w-90 h-[600px] bg-white border-2 border-black">
        <div className="card-body">
          <h2 className="font-bold text-xl">Applicants Number: {Job_Applicants_Number}</h2>
          <p className="font-bold">Job Title: {Job_Title} </p>
          <p className="font-bold">job Description: {Job_Description} </p>
          <p className="font-bold">Job Category: {Job_Category} </p>
          <p className="font-bold">Job Posting Date: {Job_Posting_Date} </p>
          <p className="font-bold">Application Deadline: {Application_Deadline} </p>
          <p className="font-bold">Picture: {picture} </p>
          <p className="font-bold">Salary Range: {Salary_range} </p>
          <p className="font-bold">Name {name} </p>
          <div className="card-actions justify-end">
          <button onClick={() => handledelete(_id)} className='btn btn-outline bg-red-700 text-white'>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobsCard;
