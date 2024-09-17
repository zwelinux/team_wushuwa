// import
import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import Card from './Card'
import ResponsiveAppBar from './Appbar'

// function
const App = () => {
  return(
    <div>
      <ResponsiveAppBar />
      <Header />
      <Body />
       
      <Card title="t1" text="this is text 1" />
      <Card title="t2" text="this is text 2" />
      <Card title="t3" text="this is text 3" />
      <Footer />
    </div>
  )
}

// export default App
export default App