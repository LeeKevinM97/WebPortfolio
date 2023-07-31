import React from 'react'
import Border from '../components/Border.jsx'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function Header() {

  // Use State for navbar open and closed
  const [isNavOpen, setIsNavOpen] = useState(false);
  // Switch Dark vs. Light
  const [darkTheme, setTheme] = useState(true);

  // --first: #0D2438;
  // --second: #6F6EFF;
  // --third: #1E3851;
  // --fourth: #FFFFFF;

  function themeChange() {
    if (darkTheme) {
      setTheme(false);
      document.documentElement.style.setProperty('--first', '#FFFFFF');
      document.documentElement.style.setProperty('--second', '#6F6EFF');
      document.documentElement.style.setProperty('--third', '#F7F8FC');
      document.documentElement.style.setProperty('--fourth', '#212E4D');
    } else {
      setTheme(true);
      document.documentElement.style.setProperty('--first', '#0D2438');
      document.documentElement.style.setProperty('--second', '#6F6EFF');
      document.documentElement.style.setProperty('--third', '#1E3851');
      document.documentElement.style.setProperty('--fourth', '#FFFFFF');
    }
  }

  return (
    <>
        <nav className="bg-first">
          <div className="w-1/4 mx-auto py-8">
            <div className="flex justify-center">

              {/* This part is for the regular navbar */}
              <div className="md:flex justify-between hidden">
                <NavLink className="navlink-header" to="/">
                  <p className="scp my-auto nav-text px-5 text-xl font-semibold">Home</p>
                </NavLink>
                <NavLink className="navlink-header" to="about">
                  <p className="scp my-auto nav-text px-5 text-xl font-semibold">About</p>
                </NavLink>
                <NavLink className="navlink-header" to="projects">
                  <p className="scp my-auto nav-text px-5 text-xl font-semibold">Projects</p>
                </NavLink>
                <NavLink className="navlink-header" to="contact">
                  <p className="scp my-auto nav-text px-5 text-xl font-semibold">Contact</p>
                </NavLink>
              </div>

              {/* This part is for the collapsing hamburger menu */}
              <div className="flex md:hidden">
                <div
                  className="space-y-2 my-auto mr-14"
                  onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                >
                  {/* Hamburger Menu Symbol */}
                  <span className="block h-0.5 w-8 animate-pulse bg-fourth"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-fourth"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-fourth"></span>
                </div>

                <div className={`bg-first ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
                  {/* This below is the X button to close menu */}
                  <div
                    className="absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                  >
                    <svg
                      className="h-8 w-8 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>

                  {/* List of NavLinks */}
                  <ul className="flex flex-col items-center justify-between min-h-[250px]">
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <NavLink className="navlink-header" to="/">
                        <p className={`mx-1 2xl:text-3xl text-second`} onClick={() => setIsNavOpen((prev) => !prev)}>Home</p>
                      </NavLink>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <NavLink className="navlink-header" to="about">
                        <p className={`mx-1 2xl:text-3xl text-second`} onClick={() => setIsNavOpen((prev) => !prev)}>About</p>
                      </NavLink>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <NavLink className="navlink-header" to="projects">
                        <p className={`mx-1 2xl:text-3xl text-second`} onClick={() => setIsNavOpen((prev) => !prev)}>Projects</p>
                      </NavLink>
                    </li>
                    <li className="border-b border-gray-400 my-8 uppercase">
                      <NavLink className="navlink-header" to="contact">
                        <p className={`mx-1 2xl:text-3xl text-second`} onClick={() => setIsNavOpen((prev) => !prev)}>Contact</p>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Button to Toggle Dark vs. Light */}
        <div
          onClick={() => themeChange()}
          aria-label="Theme Switcher"
          className="bg-second p-4 absolute rounded-xl cursor-pointer top-5 right-5 hover:p-5"
        >
          {darkTheme === false ? (
            <FiMoon className="text-xl text-fourth" />
          ) : (
            <FiSun className="text-xl text-fourth" />
          )}

        </div>
        <Border/>
    </>
  )
}

export default Header;