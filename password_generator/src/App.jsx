import { useCallback, useEffect, useRef, useState, } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {

  let [length,setlength] = useState(6)
  let [num,setnum]= useState(false)
  let [char,setchar] = useState(false)
  let [pass,setpass] = useState("")
useRef
  const passwordRef = useRef(null)
  const generatepass = useCallback(()=>{
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let password= ""
    if(num)
    {
      letter+="1234567890"
    }
    if(char)
    {
      letter+="`~!@#$%^&*()_+-=[]"
    }
    for(let i = 0;i<length;i++)
    {
      let select = Math.floor(Math.random()*(letter.length)+1)-1
      password+=letter[select]
    }
    setpass(password)
  },[length,num,char])
  
  useEffect(()=>{
    generatepass()
  },[length,num,char])

  const copypass = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(pass)

  },[pass])

  return (
    <div className = "fixed inset-0 w-screen h-screen bg-black overflow-x-hidden">
      <div className="w-full max-w-lg  bg-blue-950 mt-24 mx-auto rounded-xl pt-4 py-10 p-2 ">
        <div className="flex">
          <input type="text" className="border bg-white w-full px-29 py-2 rounded-l-xl " type="text" value={pass} ref={passwordRef} />
          <button className="pr-4 pl-4 bg-blue-700 rounded-r-xl text-white" onClick={copypass}>Copy</button>
        </div>
        <div className="flex p-2 text-orange-400">
        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=> setlength(e.target.value)}/>
        <label htmlFor="length" className="pl-3 pr-3 ">Length :{length} </label>
        <input type="checkbox"  onChange={(e)=>setnum(e.target.checked)}/>
        <label htmlFor="" className="pl-2 pr-4">Numbers</label>
        <input type="checkbox"  onChange={(e)=>setchar(e.target.checked)}/>
        <label htmlFor="" className="pl-2">Characters</label>

          
        </div>
      </div>
    </div>
    
  )
}

export default App
