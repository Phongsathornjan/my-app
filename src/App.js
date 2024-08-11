import react from 'react'
import './style.css'
import Calendar from './class-components'
import { Header, Content, Footer } from './func-components'


export default function App (){

  return (
    <>
    <Header></Header>
    <Calendar></Calendar>
    <Content></Content>
    <Footer></Footer>
    </>
  )
}



