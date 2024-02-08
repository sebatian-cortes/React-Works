import React from 'react'
import { Header } from '../../layouts/Header/Header'
import { Logo } from '../../Logo/Logo'
import { Navbar } from '../../Navbar/Navbar'


export const Home = () => {
  return (
    <>
      <Header>
        <Logo />
        <Navbar />
      </Header>
    </>
  )
}
