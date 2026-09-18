 import React from 'react'
import Card from './components/card'
 
 const App = () => {
   return (
        <div className="parent">
     <Card user='Raj' img='https://images.unsplash.com/photo-1788371642972-cd2eda4805ac?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
     <Card user='Rajesh' img='https://images.unsplash.com/photo-1788270083262-55c5df22ed45?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMjZ8fHxlbnwwfHx8fHw%3D'/>
     <Card user='Raju' img='https://images.unsplash.com/photo-1787662366208-b2c9a5b18462?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTN8fHxlbnwwfHx8fHw%3D'/>
       
     </div>
   )
 }
 
 export default App
 