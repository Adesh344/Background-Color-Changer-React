
import {useState} from "react"

function App(){
  
    const [color , setColor] = useState()

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"red"}} onClick={
          () => setColor("red")
        }>Red</button>

        <button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"green"}} onClick={
          () => setColor("green")
        }>Green</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Grey"}} onClick={
          () => setColor("Grey")
        }>Grey</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Blue"}} onClick={
          () => setColor("Blue")
        }>Blue</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"pink"}} onClick={
          () => setColor("Pink")
        }>Pink</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"yellow"}} onClick={
          () => setColor("Yellow")
        }>Yellow</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Black"}} onClick={
          () => setColor("Black")
        }>Black</button>

<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"white"}} onClick={
          () => setColor("white")
        }>white</button>


<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Maroon"}} onClick={
          () => setColor("Maroon")
        }>Maroon</button>


<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Lavenderblush"}} onClick={
          () => setColor("Lavenderblush")
        }>Lavenderblush</button>


<button className=" outline-none px-4 py-1 rounded-full " style={{backgroundColor:"Rebeccapurple"}} onClick={
          () => setColor("Rebeccapurple")
        }>Rebeccapurple</button>
      </div>

      
    </div>
    </div>
  )
}

export default App
