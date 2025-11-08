import React, { useState } from 'react'
import SideBar from './layouts/SideBar'
import Header from './layouts/Header'
import Dashboard from './components/dashboard/Dashboard';

function App() {

  const [ sidebarCollasped , setSidebarCollasped ]  = useState(false);

  const [ currentPage , setCurrentPage ] = useState('dashboard');




  return (
   <div className="h-screen bg-linear-to-r from-slate-200 to-slate-100">

      <div className="flex h-full overflow-hidden">
        <SideBar   collapsed={sidebarCollasped} onToggle={()=> setSidebarCollasped(!sidebarCollasped)}
        currentPage={currentPage}

        onPageChange={setCurrentPage}

          
          />

        <div className="flex-1 flex flex-col overflow-hidden">


          <Header sidebarCollapsed={sidebarCollasped} onToggle={()=> setSidebarCollasped(!sidebarCollasped)} />
          
          <main className='flex-1 overflow-y-auto bg-transparent'>
            <div className='p-6 space-y-6'>

              {currentPage=='dashboard' && <Dashboard/>}

            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
