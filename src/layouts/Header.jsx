import { Bell, ChevronDown, Filter, Menu, Plus, Search, Settings, Sun, Moon } from 'lucide-react';
import React, { useState, useEffect } from 'react';

function Header({ onToggle, sidebarCollapsed }) {
  const [darkMode, setDarkMode] = useState(() => {
    // check localStorage for saved mode
    return localStorage.theme === 'dark';
  });

  // Apply dark/light class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl px-6 py-4'>
      <div className='flex items-center justify-between'>
        {/* Left */}
        <div className='flex items-center space-x-4'>
          <button onClick={onToggle} className='p-2 rounded-lg text-slate-600 dark:text-slate-300'>
            <Menu className='w-5 h-5'/>
          </button>
          <div className='hidden md:block'>
            <h1 className='text-2xl font-black text-slate-800 dark:text-white'>Dashboard</h1>
            <p>Welcome back, Alex! Here's what's happening today</p>
          </div>
        </div>

        {/* Center - Search */}
        <div className='flex-1 max-w-md mx-8'>
          <div className='relative'>
            <Search className='w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400' />
            <input
              className='w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white placeholder-slate-500 focus:outline-none focus:ring rounded-xl transition-all'
              type='text'
              placeholder='Search Anything'
            />
            <button className='absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'>
              <Filter/>
            </button>
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center space-x-3'>
          {/* New Button */}
          <button className='hidden lg:flex items-center space-x-2 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all'>
            <Plus className='w-4 h-4'/>
            <span className='text-sm font-medium'>New</span>
          </button>

          {/* Dark/Light Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className='py-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
          >
            {darkMode ? <Sun className='w-5 h-5' /> : <Moon className='w-5 h-5' />}
          </button>

          {/* Notifications */}
          <button className='relative p-2.5 rounded-xl text-slate-600 dark:text-slate-600 hover:bg-slate-100 dark:bg-slate-800 transition-colors'>
            <Bell className='w-5 h-5' />
            <span className='absolute -top-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center'>3</span>
          </button>

          {/* Settings */}
          <button className='p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'>
            <Settings className='w-5 h-5'/>
          </button>

          {/* Profile */}
          <div className='flex items-center space-x-3 pl-3 border-slate-200'>
            <img src='' alt='user' className='w-8 h-8 rounded-full ring-2 ring-blue-600'/>
            <div className='hidden md:block'>
              <p className='text-sm font-medium text-slate-500 dark:text-slate-400'>Alex Jonson</p>
              <p className='text-xs text-slate-500 dark:text-slate-400'>Administrator</p>
            </div>
            <ChevronDown className='w-4 h-4 text-slate-400'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
