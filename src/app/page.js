"use client"
import { useState } from 'react'
import './style.css'
import { GiSplitCross } from "react-icons/gi"; 
import daily from './Components/diailytask.js'
export default function Home() {
  const [task,setTask]=useState("")
  const[desc,setDesk]=useState("")
  const[status,setStatus]=useState(false)
  const[tasklist,setTasklist]=useState([])
  const reloadHaldler=(s)=>{
    s.preventDefault()
    setTasklist([...tasklist,{task,desc,status}])
    setTask("")
    setDesk("")
  }
  const deleteTask=(del)=>{
    let temp=[...tasklist]
    temp.splice(del,1)
    setTasklist(temp)
  }
  const doneTask=(ind)=>{
    let temp1=[...tasklist]
    let tar=temp1[ind]
    if (tar.status){tar.status=false}
    else{tar.status=true}
    setTasklist(temp1)
  }

  let eachtask=<h1 className='text-red-600 font-bold mx-10 text-2xl'>No task for Today</h1>
  if (tasklist.length>0){
    eachtask=tasklist.map((el,i)=>{
      if(el.status){
        return <div className='done flex mb-5 border-2 py-2 justify-spacebetween mx-5 rounded ' ><span className='selct' onClick={()=>{doneTask(i)}}>  </span> <p className='font-bold text-2xl mx-6'></p><div className='flex text-xl justify-between w-2/3'><h3 className='font-semibold'>{el.task}</h3><p>{el.desc}</p> < GiSplitCross className='dell' onClick={()=>{deleteTask(i)}}/></div></div>}

      else{
        return <div className='dk flex mb-5 border-2 py-2 justify-spacebetween mx-5 rounded ' ><span className='selct' onClick={()=>{doneTask(i)}}>  </span> <p className='font-bold text-2xl mx-6'></p><div className='flex text-xl justify-between w-2/3'><h3 className='font-semibold'>{el.task}</h3><p>{el.desc}</p> < GiSplitCross className='dell' onClick={()=>{deleteTask(i)}}/></div></div>}
    })
  }
  return (
    <>
      <h1 className='bg-black text-white p-6 text-4xl text-center'>My Todo List</h1>
      <form action="/" method="post" onSubmit={reloadHaldler} className='flex justify-center py-5 '>
        <input type="text" placeholder='Enter list entries' className=' border-zinc-500 border-r-4 m-4 px-3 py-2 border-2' value={task} onChange={(k)=>{ /*Too way binding-react and user both can see what is in input*/
          setTask(k.target.value)
        }}/>
        <input type="text" placeholder='Enter Discription' className=' border-zinc-500 border-r-4 m-4 px-3 py-2 border-2 ' value={desc} onChange={(k)=>{ /*Too way binding-react and user both can see what is in input*/
          setDesk(k.target.value)
        }}/>
        <button className='bg-black text-white border-white-500 rounded px-4 py-2 font-bold m-5'>Add Task</button>
      </form>
      <div className="taskks  border-r-6 my-10 px-5 py-10 bg-rgba(138,152,171,255) w-1/2  relative m-auto rounded">
        <ol>
          <li>{eachtask}</li>
        </ol>
      </div>
      <div className='h-1/2 w-1/2 mx-auto my-10 bg-slate-600'>Hello</div>
    </>
  )
}
