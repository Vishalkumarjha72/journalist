import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'

const Testimonials = () => {
  return (
    <div id="testimonials" className="h-screen flex w-full bg-gradient-to-b from-[#FDFCFB] to-[#e2d1c3] justify-center ">
    <div className="w-[80%] items-center flex flex-col">
      <div className="text-5xl mb-1 self-start text-[#f38f44] mt-24">Hear From Our Students</div>
      <div className="w-full h-[1px] bg-[#f38f44] rounded-full pt-2 mb-10"/>

      <div className="flex max-w-6xl mx-auto gap-11 group">
        <div className="bg-white/20 duration-500  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl flex flex-col items-center mix-blend-luminosity">
          <img src={person1} className='rounded-full h-20  mx-auto' alt="fdso" />
          <h4 className='uppercase text-xl font-bold'>Bob Woodward</h4>
          <p className='text-sm leading-7 my-3 font-light opacity-50'>"Enrolling in Mr. Arun's journalism course was the best decision I made for my career. His depth of knowledge and practical insights helped me refine my skills and build a strong foundation in the field. I highly recommend this course to anyone serious about pursuing a career in journalism." </p>
          
          <button className='bg-orange-200 py-2.5 px-8 rounded-full'>Get in touch</button>

        </div>
        <div className="bg-white/20 duration-500  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl flex flex-col items-center mix-blend-luminosity">
          <img src={person2} className='h-20  mx-auto w-20 rounded-full' alt="fdso" />
          <h4 className='uppercase text-xl font-bold'>Anderson Cooper</h4>
          <p className='text-sm leading-7 my-3 font-light opacity-50'>"Mr. Arun's course not only taught me the technical aspects of journalism but also instilled in me a sense of responsibility towards truth and ethics in reporting. His passion for the craft is contagious, and his mentorship has been invaluable to my growth as a journalist."</p>
          
          <button className='bg-orange-200 py-2.5 px-8 rounded-full'>Get in touch</button>
        </div>
        <div className="bg-white/20 duration-500  group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl flex flex-col items-center mix-blend-luminosity">
          <img src={person3} className='rounded-full h-20 w-20  mx-auto' alt="fdso" />
          <h4 className='uppercase text-xl font-bold'></h4>Louis Theroux
          <p className='text-sm leading-7 my-3 font-light opacity-50'>"As a seasoned journalist, Mr. Arun brings a wealth of experience and wisdom to the table. His course goes beyond the textbooks, offering real-world scenarios and practical advice that you won't find elsewhere. Thanks to Mr. Arun, I feel confident stepping into the fast-paced world of journalism."</p>
          
          <button className='bg-orange-200 py-2.5 px-8 rounded-full '>Get in touch</button>

        </div>

      </div>

    </div>
    </div>
  )
}

export default Testimonials