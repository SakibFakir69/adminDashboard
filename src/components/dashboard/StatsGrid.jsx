

import { DollarSign, Users, UserCheck, Eye , ArrowRight, ArrowUpRight, ArrowDown} from "lucide-react";
import React from 'react'



const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "8,420",
    change: "+5.2%",
    trend: "up",
    icon: UserCheck,
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Total Users",
    value: "25,310",
    change: "+3.8%",
    trend: "up",
    icon: Users,
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Page Views",
    value: "102,438",
    change: "-2.3%",
    trend: "down",
    icon: Eye,
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
];

function StatsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-col-2 xl:grid-cols-4 gap-4 '>
        
      {stats.map((stats,index)=>{
        return   <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl  rounded-2xl p-6 border border-dduration-300 groupslate-200 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:shadow-slate-200/30 dark:hover:shadow-slate-900/20 transition-alldduration-300 group' key={index}>

        <div className='flex items-start  justify-between '>
            <div className='flex-1'>
                <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2'>
                    {stats.title}
                </p>
                <p className='text-3xl  font-bold text-slate-800 dark:text-white mb-4'>
                    {stats.value}</p>
                <div className='flex  items-center  space-x-2'>

                    <ArrowRight className='h- w-4 '/>

                    {stats.trend==='up'  ?  <ArrowUpRight className='h- w-4 text-emerald-500 '/> : <ArrowDown className="w-4 h-4 text-red-500"/> }


                    <span className={`text-sm font-semibold ${stats.trend==='up' ? "text-emerald-500" : "text-red-500"}`}>{stats.change}</span>
                    <span className='text-sm  text-slate-500 dark:text-slate-400 '>vs Last</span>

                </div>

            </div>
            <div className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110 duration-300`}>

                <stats.icon className={`w-6 h-6 ${stats.textColor} `}/>

            </div>


        </div>
          {/* progress bar */}
        <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
  <div
    className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-500`}
    style={{ width: stats.trend === "up" ? "75%" : "45%" }}
  ></div>
</div>

      

     


        </div>
       
      })}
      
    
      
    </div>
  )
}

export default StatsGrid
