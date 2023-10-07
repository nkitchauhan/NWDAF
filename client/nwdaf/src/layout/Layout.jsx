import React, { Children } from 'react'
import Header from './header/Header'

const Layout = ({Children}) => {
  return (
    <>
    <Header/>
    {Children}
    {/* <ChangePassword/> */}
    </>
  )
}

export default Layout
