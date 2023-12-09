import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from 'react-router-dom';
import JobCart from '../../Pages/Home/JobCart';
// import JobCart from './jobCart/JobCart';
// import backgroundimage from '../../assets/back.jpg'

const TabBase = () => {

  const jobs = useLoaderData();
  console.log(jobs);
  const filter =jobs.filter(e => e.Job_Category.toLowerCase().includes("Remote".toLowerCase()) )
  const filter2 =jobs.filter(e => e.Job_Category.toLowerCase().includes("Part-Time".toLowerCase()) )
  const filter3 =jobs.filter(e => e.Job_Category.toLowerCase().includes("On Site".toLowerCase()) )
  const filter4 =jobs.filter(e => e.Job_Category.toLowerCase().includes("Hybrid".toLowerCase()) )
  console.log(filter);


  return (
    <div>
     <h2 className='font-bold text-5xl text-center pb-5 pt-16 mb-10 text-purple-600'> Our category </h2>
      <Tabs>
        <TabList>
          <Tab>On Site Job</Tab>
          <Tab>Remote Job</Tab>
          <Tab>Hybrid</Tab>
          <Tab>Part Time</Tab>
        </TabList>

        <TabPanel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto p-5 lg:ml-32">
            {filter?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter2?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter3?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-2 gap-5 mx-auto p-5 lg:ml-32">
            {filter4?.map((cart) => (
              <JobCart cart={cart} key={cart.id}></JobCart>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabBase;