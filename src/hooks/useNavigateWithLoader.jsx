import { useNavigate } from "react-router-dom";

export function useNavigateWithLoader() {
  const navigate = useNavigate();

  const navigateWithLoader = (path) => {
    navigate(path); 
  };

  return navigateWithLoader;
}