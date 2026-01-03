
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Sitemap() {
  return (
    
<>
<div className=' h-20'>
 <Navbar />
 </div>
    <div className="bg-amber-550 p-8 ">
       
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3  ">
            Sitemap 
            <span className="text-3xl">🔗</span>
          </h1>
          <p className="text-lg text-gray-700">
            Navigating throught web is pretty daunting 😵. That is why I did the honors of making a sitemap to make navigation a breeze.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-3">
          <NavItem 
            title="Sitemap" 
            description="this holy 🔥 route."
            href="#sitemap"
          />
          
          <NavItem 
            title="Home" 
            description="good old HomePage."
            href="#home"
          />
          
          <NavItem 
            title="My Stack" 
            description="know what stack I use for my development process."
            href="#stack"
          />
          
          <NavItem 
            title="Auto biography" 
            description="know about my journey."
            href="#bio"
          />
          
          <NavItem 
            title="Books" 
            description="yes I do have a personal index of books xD."
            href="#books"
          />
          
          <NavItem 
            title="Contact" 
            description="a place where you can contact me."
            href="#contact"
          />
          
          <NavItem 
            title="Projects" 
            description="surf the index of my projects."
            href="#projects"
          />
          
          <NavItem 
            title="Posts" 
            description="a place where you can find all my posts. No classification just list xP."
            href="#posts"
          />
          
          {/* Nested Items */}
          <div className="ml-8 space-y-3 mt-4">
            <NavItem 
              title="React Router" 
              description="a framework to make full stack applications, you may address this as routing library for your SPAs?."
              href="#react-router"
              isNested
            />
            
            <NavItem 
              title="ReactJS" 
              description={
                <>
                  It is a framework by <a href="https://facebook.com" className="text-blue-600 hover:underline">facebook</a> that "kinda redefined" and "for sure revolutionalized" the development game in the frontend space.
                </>
              }
              href="#reactjs"
              isNested
            />
            
            <NavItem 
              title="Others" 
              description="Miscillinious content goes here, each post here is a domain in itself, it is either sum of above categories or outside it."
              href="#others"
              isNested
            />
          </div>
        </nav>
      </div>
      </div>

      <Footer/>  
    </>
    
  );
}

// Reusable Navigation Item Component
function NavItem({ title, description, href, isNested }) {
  return (
    <div className={`${isNested ? 'pl-4 border-l-2 border-gray-300' : ''}`}>
      <a 
        href={href}
        className="text-blue-600 hover:underline text-lg font-medium"
      >
        {title}
      </a>
      <span className="text-gray-700">: {description}</span>
    </div>
  );
}