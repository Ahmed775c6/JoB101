'use client'
import { useState } from "react"

const Search = ({ setClose }: any) => {

    const  [Talent,setTalent] = useState(0)
    const [InputSearch, setInputSearch] = useState('');



  return (
   <>
   <div className="w-full fixed flex flex-col p-6 top-0 left-0 h-full min-h-screen items-center justify-center bg-black/80" onClick={() => {
    setClose(false)
   }}>

   <input type="text" className="w-full p-2 bg-white text-black " placeholder="Search by Role , Skills or Keywords ..." />
   
   </div>
   
   </>
  )
}

export default Search