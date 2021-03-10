import React from 'react'
import MainBanner from '../MainBanner/MainBanner'
import Shelf from '../Shelf/Shelf'
import Form from '../Form/Form'
import './Main.css'


const Main = () => {
  return (
    <main className="main">
      <MainBanner />
      <Shelf />
      <Shelf />
      <Form />
    </main>
  )
}
export default Main
