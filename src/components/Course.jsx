import bgimage from '../assets/bgimage.jpeg'
import { useState } from 'react';


const Course = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending data to server or displaying it
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div
      id="course"
      className="h-screen  flex w-full bg-gradient-to-b from-[#e2d1c3]  justify-center to-[#FDFCFB]"
    >
      <div className="absolute  bg-[#f38f44] h-[300px] w-[300px] z-1 translate-x-[20%] translate-y-[30%] blur-[90px] rounded-full opacity-50 " />
      <div className="absolute  bg-[#f38f44] h-[300px] w-[300px] z-1 translate-y-[230%] right-[200px] blur-[90px] rounded-full opacity-50 " />

      <div className="w-[80%] items-center flex flex-col">
        <div className="text-5xl self-start text-[#f38f44] mt-24 mb-1">
          Dive into the course
        </div>
        <div className="w-full h-[1px] bg-[#f38f44] rounded-full pt-2 mb-8" />
        <div className="flex w-full">
          <div className="w-[50%] flex flex-col">
          <h3 className="text-3xl mb-6">What You'll Learn</h3>
            <ul className="text-xl ">
              <li className="py-2">
                Unraveling the Basics: Understanding the fundamentals of
                journalism
              </li>
              <li className="py-2">
                Investigative Techniques: Master the art of investigative
                reporting.
              </li>
              <li className="py-2">
                Interviewing Skills: Learn how to conduct compelling interviews.
              </li>
              <li className="py-2">
                Writing for Impact: Craft engaging stories that resonate with
                your audience.
              </li>
              <li className="py-2">
                Ethics in Journalism: Navigate the ethical dilemmas faced by
                journalists.
              </li>
              <li className="py-2">
              Building Your Brand: Discover strategies for personal branding and networking within the journalism industry, empowering you to stand out in a competitive landscape and advance your career effectively.
              </li>
             
            </ul>
          </div>
          <div className="w-[50%] h-full  flex justify-center bg-cover  " >
            <img src={bgimage} alt="image" className=' object-cover h-[80%] absolute  opacity-20 z-[0] ' />
            <div className='w-full flex flex-col items-center'>
              <h1 className='text-2xl font-bold text-center mt-9 text-[#fe8f44]'>Enroll Now!!!</h1>
              <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-24 bg-white/30 justify-center  w-[80%]">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-gray-300  px-11 mt-10 py-2 focus:outline-none rounded-xl"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="border border-gray-300  px-11 mt-10 py-2 focus:outline-none rounded-xl"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#fe8f44] text-white px-10 py-2 rounded-3xl transition duration-300"
                >
                  Submit
                </button>
              </form>
                
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
