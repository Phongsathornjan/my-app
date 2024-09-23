import React from 'react'
import { userContext } from './context'
import Router3 from './router3'

export default function App (){
  let [user,setUser] = React.useState("")

  return (
    <userContext.Provider value={[user,setUser]}>
      <Router3/>
    </userContext.Provider>
  )
}



