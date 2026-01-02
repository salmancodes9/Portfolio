import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import SiteMap from './pages/SiteMap'
import RouteChangeLoader from "./components/RouteChangeLoader";

function App() {
  return (
    <>
    <RouteChangeLoader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tech-stack" element={<TechStack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sitemap" element={<SiteMap/>} />
      </Routes>
      </>
   
  )
}

export default App 

