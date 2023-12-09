import banner from '../../assets/Banner.jpg'


const Banner1 = () => {
  return (
    <div className='hero min-h-screen bg-base-200'>
      <img className='w-full' src={banner} alt="" />
<div className='text-center'>
<h1 className='text-white font-bold text-6xl'>Search/find your First Job <br /> Explore More!</h1>
      <br />
      <p className='font-bold text-xl text-purple-600'>Obtaining a remote job involves several steps. Start by <br /> assessing your skills and ensuring they align with remote work requirements, such as self-motivation and strong communication. <br /> Update your resume and create a compelling LinkedIn profile that highlights your remote-ready skills and past experience. </p>
      <br />
      <div className='flex gap-5 justify-center items-center'>
      <input className='w-1/2 rounded-md' type="search" name="Search Here" id="search" />
      <button className='btn btn-primary btn-sm'>Search</button>
      </div>
</div>
    </div>
  );
};

export default Banner1;