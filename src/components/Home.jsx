import hero from '../assets/hero.jpeg'

const Home = () => {
  return (
    <div id="home" className="h-screen items-center justify-center flex w-full bg-gradient-to-b from-[#e2d1c3] to-[#FDFCFB]">
      <div className="absolute  bg-[#f38f44] h-[300px] w-[300px] z-1 translate-x-[20%] translate-y-[30%] blur-[90px] rounded-full opacity-50 " />
      <div className="absolute  bg-[#f38f44] h-[300px] w-[300px] z-1 bottom-[100px] right-[200px] blur-[90px] rounded-full opacity-50 " />
     <div className="w-[90%] flex  ">
      <div className=" w-[70%] flex gap-12 items-center flex-col">
     <p className="text-6xl">Welcome to a Journey Through Journalism with Mr. Arun!</p> 
     
     <p className='text-xl'>Embark on an enlightening journey through the world of journalism guided by the expertise of Mr. Arun, a distinguished retired journalist with decades of experience in the field. Whether you're a budding journalist or an enthusiast seeking to dive into the intricacies of reporting, this course is tailored just for you.</p>
      
     <a href="#course" className="border-solid border-2 px-8 py-1 hover:text-white hover:bg-[#fe8f44]  hover:border-2 border-[#fe8f44] text-[#f38f44] rounded-3xl">Enroll Now</a>
      </div>
      <img src={hero} alt="hero" className='pl-4 rounded-full object-cover'/>
     </div>

      
    </div>
  );
};

export default Home;
