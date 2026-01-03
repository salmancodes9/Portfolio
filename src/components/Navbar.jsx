import ScrollProgress from "../sections/Scrollbar";
import { Moon } from "lucide-react";
import { useLoading } from "../context/LoadingContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { loading } = useLoading(); // Only need loading state for display

  // Simple navigate - let RouteChangeLoader handle the delay
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 z-40 w-full flex justify-center py-4 bg-[#fff4e5]">
      <div className="w-[92%] h-16 flex items-center justify-between px-28">

        {/* LEFT SIDE */}
        <div className="flex items-center pl-20">

          {/* FIXED SLOT */}
          <div className="h-14 w-14 flex items-center justify-center">
            {loading ? (
              <div
                className="h-7 w-7 rounded-full border-2 border-[#c9b69c] border-t-[#7910ea] animate-spin"
                aria-label="Loading"
              />
            ) : (
              <img
                src={
                  new URL(
                    "../assets/images/signatures/S-logo.svg",
                    import.meta.url
                  ).href
                }
                alt="S Logo"
                className="h-14 w-14"
              />
            )}
          </div>

          <div className="w-1 h-6" />
          <ScrollProgress />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap- px-6">
          <div className="w-8 h-8 flex items-center justify-center border-black">
            <Moon />
          </div>

          <button
            onClick={() => handleNavigate("/sitemap")}
            className="px-3 py-1  border-black text-sm underline text-[#2e0af7] cursor-pointer" 
          >
            Site Map
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;