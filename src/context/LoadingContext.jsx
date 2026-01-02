import { createContext, useState, useContext } from "react";

const laodingContext = createContext(null);

export function LoadingProvider({ children }) {
    const [loading ,setloading] = useState(false);



    return(
        
        <laodingContext.Provider value={{loading ,setloading}}>
            {children}
        </laodingContext.Provider>  
    );
};
export function useLoading() {
  const context = useContext(laodingContext);

  if (!context) {
    throw new Error("useLoading must be used inside LoadingProvider");
  }

  return context;
}