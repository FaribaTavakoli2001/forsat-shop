import React from 'react'
import Header from './Header'
import footer from './footer'

function Layout({children}) {
  return (
    <div>
        <Header />
        {children}
        <footer />
    </div>
  )
}

export default Layout