const Navbar = () => {
  const navlink = [
    {
      id: 1,
      text: "Home",
      link: "#home",
    },
    {
      id: 2,
      text: "About",
      link: "#about",
    },
    {
      id: 3,
      text: "Course",
      link: "#course",
    },
    {
      id: 4,
      text: "Testimonials",
      link: "#testimonials",
    },
  ];

  return (
    <div className="w-full z-9 fixed bg-white/10 backdrop-filter backdrop:blur-lg shadow-lg border-white/40 border">
      <div className="flex justify-between items-center bg-white py-6 px-10 ">
        <div className="font-logo text-4xl text-[#f38f44] ">Arun</div>

        <div className="md:flex hidden gap-8 items-center ">
          {navlink.map((user) => (
            <a key={user.id} href={user.link} className="relative text-xl text-[#f7a570] hover:text-[#f38f44]">
              {user.text}
              <span className="absolute bg-[#f38f44] h-0.5 w-full left-0 bottom-0 rounded-full transition-transform origin-left transform opacity-0 group-hover:opacity-100"></span>
            </a>
          ))}
          <a href="#course" className="border-solid border-2 px-5 py-1 hover:text-white hover:bg-[#fe8f44]  hover:border-2 border-[#fe8f44] text-[#f38f44] rounded-3xl">Enroll Now</a>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
