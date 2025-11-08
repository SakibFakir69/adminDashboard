


import React from 'react'

function RevenueChart() {
  return (
    <div className='bg-white/80  dark:bg-slate-900/80  backdrop-blur-xl rounded-bl-xl
    
    border border-slate-200/50  dark:bg-slate-700/50 p-6 rounded-b-2xl'>

        <div className='flex items-center  justify-between mb-6 '>

            <div className=''>
                <h3 className='text-xl font-bold text-slate-800  dark:text-white'>Revenue chart</h3>
                <p className='text-sm  text-slate-500'>

                    Monthly revnue and expense 

                </p>
            </div>
            <div className='flex  items-center space-x-4'>

                <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-linear-to-r from-blue-500 to-purple-600 rounded-full'>

                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-400'>
                        <span>Revenue</span>
                    </div>

                </div>
                 <div className='flex items-center space-x-2'>
                    <div className='w-3 h-3 bg-linear-to-r from-slate-500 to-slate-600 rounded-full'>

                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-400'>
                        <span>Expense</span>
                    </div>

                </div>

            </div>

        </div>
        
        <div className=' h-80 '>

        </div>
      
    </div>
  )
}

export default RevenueChart
