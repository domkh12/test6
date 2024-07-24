import React, { useState } from 'react';
import SidebarComponent from './SidebarComponent';
import Navbardashboard from './Navbardashboard';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [open, setOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.getItem("isDarkMode") === "true");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDarkMode ? 'dark' : ''}`}>
      <SidebarComponent open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 overflow-hidden">
        <Navbardashboard isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} setOpen={setOpen} />
        <main className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-10">          
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
