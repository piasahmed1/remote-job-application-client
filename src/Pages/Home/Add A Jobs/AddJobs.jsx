import { useContext } from "react";
// import toast from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProvider";
import Footer from "../Footer/Footer";


const AddJobs = () => {
  //Job Title Name Job Category - Salary range Job Description, Job Posting Date Application Deadline Job Applicants Number

  const { user } = useContext(AuthContext);

  const handleAddProducts = (event) => {
    event.preventDefault();
    const form = event.target;

    const Job_Title = form.Job_Title.value;
    const name = form.name.value;
    const Job_Category = form.Job_Category.value;
    const Salary_range = form.Salary_range.value;
    const Job_Description = form.Job_Description.value;
    const Job_Posting_Date = form.Job_Posting_Date.value;
    const Application_Deadline = form.Application_Deadline.value;
    const Job_Applicants_Number = form.Job_Applicants_Number.value;
    const picture = form.picture.value;
    const products = {
      Job_Applicants_Number,
      Job_Title,
      Job_Description,
      Job_Category,
      Job_Posting_Date,
      Salary_range,
      Application_Deadline,
      picture,
      name,
    };

    console.log(products);

    fetch("https://assignment-11-server-dun-two.vercel.app/addproducts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(products),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("product Add  successfully");
        }
      });
  };

  return (
<div>
<div>
      <div className="">
        <div className=" py-10 bg-gray-700">
          <h1 className="text-white font-bold  text-5xl mt-10 text-center">
            {" "}
            Add A Job{" "}
          </h1>

          <form onSubmit={handleAddProducts} className="container mx-auto">
            <div className="grid lg:grid-cols-2  rounded-xl grid-cols-1 gap-4 p-8">
              <div className="text-white rounded-xl mt-5">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl font-bold">Job Title</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Job Title"
                      name="Job_Title"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white mt-5">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Job Category</span>
                  </label>
                  <label className="select">
                    <select
                      name="Job_Category"
                      className="select text-black select-bordered w-full"
                    >
                      <option value="On Site">On Site</option>
                      <option value="Remote">Remote</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </label>
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-2xl font-bold">User Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    placeholder="user Name"
                    name="name"
                    className="input text-black input-bordered w-full"
                  />
                </label>
              </div>

              <div className="text-white mt-5">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Picture URL</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Picture URL"
                      name="picture"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white rounded-xl">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Salary range</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Salary range"
                      required
                      name="Salary_range"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Job Description</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Job Description"
                      name="Job_Description"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Job Posting Date</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="date"
                      placeholder="Job Posting Date"
                      name="Job_Posting_Date"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Application Deadline</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="date"
                      placeholder="Application Deadline"
                      name="Application_Deadline"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
              <div className="text-white">
                <div className="form-control">
                  <label className="label">
                    <span className="text-2xl">Job Applicants Number</span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      placeholder="Job Applicants Number"
                      name="Job_Applicants_Number"
                      className="input text-black input-bordered w-full"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <input
                className="btn bg-green-500 w-3/4 border-none text-white hover:bg-blue-600"
                type="submit"
                value="ADD JOBS"
              />
            </div>
          </form>
        </div>
      </div>
    </div>



    <Footer></Footer>
</div>
  );
};

export default AddJobs;
