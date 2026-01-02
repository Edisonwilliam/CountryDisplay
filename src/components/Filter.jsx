import React from 'react'

const Filter = ({ searchTerm, setSearchTerm, selectedRegion, setSelectedRegion }) => {
  return (
    <section className='px-6 py-12 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6'>
      
        <div className='relative w-full md:w-96'>
          <span className='absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-lg'>
            🔍
          </span>
          <input 
            type="search" 
            name="search" 
            id="search" 
            placeholder="Search for a country..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full pl-16 pr-6 py-4 rounded-lg shadow-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none transition-colors'
          />
        </div>

        <div className='relative w-full md:w-56'>
          <select 
            name="select" 
            id="select"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className='w-full px-6 py-4 rounded-lg shadow-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white appearance-none cursor-pointer outline-none transition-colors rounded-md'
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <span className='absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400'>
            ▼
          </span>
        </div>
      </div>
    </section>
  )
}

export default Filter