import journalism from '../assets/journalism.jpg'
const About = () => {
  return (
    <div id="about" className="h-screen flex w-full bg-gradient-to-b from-[#FDFCFB] to-[#e2d1c3] justify-center ">
      <div className="w-[80%] items-center flex flex-col">
        <div className="text-5xl self-start text-[#f38f44] mt-24 mb-1">About</div>
        <div className="w-full h-[1px] bg-[#f38f44] rounded-full pt-2"/>
        
        <div className="flex w-full items-center">
            <div className="w-[50%]">
            <h3 className=" text-[#f38f44] text-4xl pt-8"><p className='text-black font-medium'>Ink and Insights:</p> Navigating Journalism with Mr. Arun </h3>
            </div>
            <div className="w-[50%] pt-8 text-black text-xl">
            Mr. Arun, a stalwart in the realm of journalism, has spent his illustrious career uncovering truths, shaping narratives, and illuminating stories that matter. With his wealth of knowledge and hands-on experience, he has mentored countless journalists who have gone on to make significant contributions in the media industry.
            </div>

        </div>
        <img src={journalism} alt="journalism" className='w-[60%] object-cover h-full mt-8' />
      </div>
      
    </div>
  )
}

export default About