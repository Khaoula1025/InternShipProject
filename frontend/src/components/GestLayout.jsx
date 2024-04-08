import React from 'react'
import {Outlet,Navigate} from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
export default function GestLayout() {
  const {token}=useStateContext()
  
  if(token){
    return <Navigate to="/"/>
  }
  return (
    <div>
            <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <Outlet/> 
      </div>
  </div>
</section>
        {/* where the child elemets will be rendered that is the use of outlet  */}
    </div>
  )
}
