import React from "react";
import ScrollProgress from "../sections/Scrollbar";
import { useLoading } from "../context/LoadingContext";

const Navbar = () => {
  const {loading} = useLoading();
  
  return (
    <div  id="left-side"className="fixed top-0 left-0 right-8 z-40   bg-[#fff4e5] ">
      <div className=" max-w-7xl mx-auto px-34 py-2 flex items-center ">
        <div className="h-14 w-14 flex items-center justify-center "> 
        {/* Logo */}
        {loading ?(
                  <div
                  className="h-10 w-10 rounded-full border-3 border-[#fff4e5] border-t-[#7910ea] animate-spin "
                  aria-label="Loading"
                  />
                    
        ):(
        <img
          src={
            new URL("../assets/images/signatures/S-logo.svg", import.meta.url)
              .href
          }
          alt="S Logo"
          className="h-14 w-14 mb-1 transation transform "
          />
          )}
        </div>

        {/* Scroll Progress - stacked with logo */}
        <div className="items-center gap-4 ">
          <ScrollProgress />
        </div>
      </div>
      <div id="right_side">

      </div>
    </div>
  );
};

export default Navbar;
