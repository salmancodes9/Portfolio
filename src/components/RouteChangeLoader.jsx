import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLoading } from "../context/LoadingContext";

const RouteChangeLoader = () => {
    const loacation = useLocation();
    const {setloading} = useLoading();

    useEffect(() => {
    setloading (true);


    const timer = setTimeout(() => {
        setloading(false);
        
    }, 500);
    // console.log(loacation.pathname);


    return() => clearTimeout(timer);
}, [location.pathname]);

return null;
};
export default RouteChangeLoader;