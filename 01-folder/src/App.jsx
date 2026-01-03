import React from 'react'
import Card from './assets/components/Card'
import Nav from './assets/components/Nav'
const App = () => {
  return (
    
      <div className='parent'>
        <Nav/>
      <Card user='Aman Khaire' Faculty="Computer" img= "photo-1766543497004-2fd76e88f605.avif" age={24} city="Mumbai" level="software developer"/>
      <Card user='Sejal Wadhai' Faculty="Science" img="photo-1766250750300-e0e26102c573.avif" age={23 } city="Pune" level="Software developer"/>
      <Card user='Pranil Khaire' Faculty="Law" img="photo-1767111392691-fdbb6a000bfe.avif"age={27} city="Wani"level="Law officer"/>
      <Card user= "kashish Meshram"  Faculty="B.A" img = 'photo-1767328706862-caad99c45ca5.avif' age={19} city="Nagpur"level="Student"/>
    </div>
    
  )
}

export default App