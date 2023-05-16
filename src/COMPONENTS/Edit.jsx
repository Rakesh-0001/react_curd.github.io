import React, { useEffect, useState } from 'react'
import x from "./style.module.css"
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    let [name,setName]=useState("")
    let [comp,setComp]=useState("")
    let [sal,setSal]=useState("")

    let {abc} =useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${abc}`).then((e)=>{
            setName(e.data.name)
            setComp(e.data.comp)
            setSal(e.data.sal)
        })
    },[abc])
        
 

    let nameData=(e)=>{
        setName(e.target.value)
    }
    let compData=(e)=>{
        setComp(e.target.value)
    }
    let salData=(e)=>{
        setSal(e.target.value)
    }

    let n=useNavigate()
    let click=(e)=>{
         e.preventDefault()
        let datas={name,comp,sal};
        axios.put(`http://localhost:3000/users/${abc}`,datas)
        n("/users")
    }
  return (
    <div>
         <article className={x.create}>
            <form >
            <h1>Update User</h1>
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

export default Edit