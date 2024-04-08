import React from 'react'
import {Outlet} from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider'
export default function GestLayout() {
  const {token}=useStateContext
  
  if(token){
    return <Navigate to="/"/>
  }
  return (
    <div>
      bye
        {/* where the child elemets will be rendered that is the use of outlet  */}
        <Outlet/>
    </div>
  )
}
