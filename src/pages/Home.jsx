import { MonitorCloud , Anchor , SquarePen , Contact ,BookText} from 'lucide-react';
import Navbar from "../components/Navbar";
import TechStack from './TechStack';
import Projects from './Projects';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { useLoading } from '../context/LoadingContext';
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();
  const { setloading } = useLoading();


  const handleNavigate = (path) => {
  setloading(true);
  setTimeout(() => {
    navigate(path);
    setloading(false);
  }, 1500);
};
  return (
    <>
      <section className="min-h-screen">
        <div>
          <Navbar className="" />
        </div>
        <div className="max-w-7xl mx-auto  px-11 py-15 mt-28 bg-amber-00 ">
          <h1 className=" max-w-7xl mx-auto  px-24  text-5xl font-black  ">
            <strong className='tracking-wide '> 
            Salman Nissar
            </strong>
          </h1>
          <h2 className=" bg-amber-00 px-24 py-10 font-black text-xl">
            Front-End Devloper
          </h2>
          <p className="bg-amber-00 px-24 max-w-3xl text-[#364153] text-base md:text-lg leading-relaxed">
            Hey! I'm Salman and Over time, I have been building a strong
            foundation by working on small to mid-scale projects that help me
            understand how real projects are structured. With a growing focus on
            JavaScript and react, I am developing practical solutions while
            refining my skills in writing clean, efficient, and maintainable
            code.
          </p>
        </div>
      </section>

      <section id="Quick_intro_section" className="">
        <div id="" className=" max-w-7xl mx-auto  px-24 py-1Z ">
          <h1 className="px-12"><strong className="text-2xl">Quick Detour</strong></h1>
          
          <ul className="px-12 leading-relaxed space-y-4 mt-6 text-[#364153]  text-base">
            <li className="flex items-center gap-2">
                <MonitorCloud />
              <span>Peek into the technology stack I use  <button onClick={() => handleNavigate("/tech-stack")} className=' cursor-pointer underline text-[#390ee4]'> tech-stack</button></span>
            </li>
            

            <li className="flex items-center gap-2">
                <Anchor />
              <span>In my part time, I keep making some cool stuff which you can find here <button onClick={() => handleNavigate("/Projects")} className= ' cursor-pointer underline text-[#390ee4]'> projects</button> </span>
            </li>
            <li className="flex items-center gap-2">
                <SquarePen />
              <span>I blog about my personal learnings <button onClick={() => handleNavigate("/Projects")} className=' cursor-pointer underline text-[#390ee4]'> Blogs</button> </span>
            </li>
            <li className="flex items-center gap-2">
                <Contact />
              <span>You can reach out to me via the contact section <button onClick={() => handleNavigate("/Projects")} className=' cursor-pointer underline text-[#390ee4]'> Contact-me</button> </span>
            </li>
            <li className="flex items-center gap-2">
                <BookText/>
              <span>I actively maintain a list of books I read <button onClick={() => handleNavigate("/Projects")} className=' cursor-pointer underline text-[#390ee4]'> Reading-books</button> </span>
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
