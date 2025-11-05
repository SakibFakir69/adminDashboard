import React from 'react'
import SideBar from './layouts/SideBar'
import Header from './layouts/Header'

function App() {
  return (
   <div className="h-screen bg-linear-to-r from-slate-200 to-slate-100">

      <div className="flex h-full overflow-hidden">
        <SideBar />
        <div className="flex-1 flex flex-col overflow-hidden">


          <Header />
          {/* Add main content area here later */}
          <div className="flex-1  overflow-y-auto p-4">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
