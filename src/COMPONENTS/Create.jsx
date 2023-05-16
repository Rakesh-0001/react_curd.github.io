import React, { useState } from 'react'
import x from "./style.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    let [name,setName]=useState("")
    let [comp,setComp]=useState("")
    let [sal,setSal]=useState("")
    let n=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let compData=(e)=>{
        setComp(e.target.value)
    }
    let salData=(e)=>{
        setSal(e.target.value)
    }
    let click=(e)=>{
         e.preventDefault()
        let datas={name,comp,sal};
        axios.post("http://localhost:3000/users",datas)
        n("/users")
    }

   

  return (
    <div>
        <article className={x.create}>
            <form >
                <h1>Create user</h1>
                <hr />
                <label>Name :</label>
                <input type="text" value={name} onChange={nameData} />
                <label>Company :</label>
                <input type="text"   value={comp} onChange={compData}/>
                <label>Salary :</label>
                <input type="text"  value={sal} onChange={salData}/>
                <button onClick={click}> CREATE</button>
            </form>
        </article>
    </div>
  )
}

export default Create