import React from 'react'
import LeftSideBar from './layout/LeftSideBar'
import RigtSideBar from './layout/RightSideBar'
import Navbar from './layout/Navbar'
import Header from './layout/Header'


const Layout:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div dir='rtl' className='h-full w-full'>
        
            <Navbar/>
            <Header/>
            <div className='w-full h-full grid grid-cols-10'>
            <RigtSideBar/>
            <div className='
            col-span-6
            '>
                {children}
            </div>
                <LeftSideBar/>
            </div>
    </div>
  )
}

export default Layout